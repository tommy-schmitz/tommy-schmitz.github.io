// Load main library
var Game = window.Game || {};

(function() {

var ctx, lastFrameTime, fps;


// global constants
Game.INACTIVE_WIDTH = 480;
Game.INACTIVE_HEIGHT = 480;
Game.INACTIVE_SCALE_FACTOR = 2;
Game.TILE_SIZE = 16;
Game.SCREEN_TILES_H = 15;
Game.SCREEN_TILES_V = 15;
Game.WIDTH  = Game.INACTIVE_WIDTH;
Game.HEIGHT = Game.INACTIVE_HEIGHT;
Game.LETTERBOX_WIDTH  = Game.INACTIVE_WIDTH;
Game.LETTERBOX_HEIGHT = Game.INACTIVE_HEIGHT;
Game.DEBUG = false;
Game.DEBUG_HITBOXES = false;

Game.assert = function(boolean) {
	if(!boolean) {
		debugger;
		throw 'assertion failure';
	}
};

// Polyfill for animation frames
window.requestAnimationFrame = window.requestAnimationFrame ||
	function(_callback) {
		return window.setTimeout(function() {
			_callback(Date.now());
		},1);
	};
window.cancelAnimationFrame = window.cancelAnimationFrame ||
	function(_frame) {
		return window.clearTimeout(_frame);
	};

// Game pausing
(function handlePageVisibility() {
	var hidden, visibilityChange; 
	if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
	  hidden = "hidden";
	  visibilityChange = "visibilitychange";
	} else if (typeof document.mozHidden !== "undefined") {
	  hidden = "mozHidden";
	  visibilityChange = "mozvisibilitychange";
	} else if (typeof document.msHidden !== "undefined") {
	  hidden = "msHidden";
	  visibilityChange = "msvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
	  hidden = "webkitHidden";
	  visibilityChange = "webkitvisibilitychange";
	}
	function handleVisibilityChange() {
		if (document[hidden]) {
			Game.pause();
		} 
	}
	document.addEventListener(visibilityChange, handleVisibilityChange, false);
	window.addEventListener("blur",function() { Game.pause(); }, false);
}());

(function handleFullscreen() {
	var fullscreenElement, fullscreenChange;
	
	if (typeof document.fullscreenElement !== "undefined") {
		fullscreenElement	= "fullscreenElement";
		fullscreenChange	= "fullscreenchange";
		Game.requestFullscreen	= function (element) { element.requestFullscreen(); }
		Game.exitFullscreen		= function () { document.exitFullscreen(); }
	}
	else if (typeof document.msFullscreenElement !== "undefined") {
		fullscreenElement	= "msFullscreenElement";
		fullscreenChange	= "msfullscreenchange";
		Game.requestFullscreen	= function (element) { element.msRequestFullscreen(); }
		Game.exitFullscreen		= function () { document.msExitFullscreen(); }
	}
	else if (typeof document.mozFullScreenElement !== "undefined") {
		fullscreenElement	= "mozFullScreenElement";
		fullscreenChange	= "mozfullscreenchange";
		Game.requestFullscreen	= function (element) { element.mozRequestFullScreen(); }
		Game.exitFullscreen		= function () { document.mozCancelFullScreen(); }
	}
	else if (typeof document.webkitFullscreenElement !== "undefined") {
		fullscreenElement	= "webkitFullscreenElement";
		fullscreenChange	= "webkitfullscreenchange";
		Game.requestFullscreen	= function (element) { element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT); }
		Game.exitFullscreen		= function () { document.webkitExitFullscreen(); }
	} else {
		Game.requestFullscreen = function(x) {};
		Game.exitFullscreen = function(x) {};
	}

	document.addEventListener(fullscreenChange,function () {
		if (document[fullscreenElement]) {
			Game.fitToWindow();
		} else {
			Game.pause();
		}
	},false);
	
	Game.isFullscreen = function() {
		return !!document[fullscreenElement];
	};
}());

window.onload = function() {
	var c = document.getElementById("myCanvas");

	c.setAttribute('width',Game.WIDTH);
	c.setAttribute('height',Game.HEIGHT);
	
	ctx = c.getContext("2d");
	
	ctx.mozImageSmoothingEnabled = false;
	ctx.webkitImageSmoothingEnabled = false;
	ctx.msImageSmoothingEnabled = false;
	ctx.imageSmoothingEnabled = false;

	ctx.fillStyle = "#444";
	ctx.font = "bold 16pt sans-serif";
	ctx.textAlign = "center";
	ctx.fillText("Loading, please wait...",Game.WIDTH/2,Game.HEIGHT/2);

	// Initialize game
	Game.load();
	
	c.addEventListener("mouseup",function() { Game.resume(); },false);
	c.addEventListener("touchend",function() { 
		Game.VirtualGamePad.activate();
		Game.requestFullscreen(document.getElementById("letterbox"));
		Game.resume(); 
	},false);
};

Game.load = function load() {
	Game.ready = false;
	Game.loadMusic();
	this.loadImages(function() {
		Game.loadSounds(waitForStart);
	});
};

var waitForStart = function () {
	Game.Input.init();
    //Game.track[Game.trackIndex]();
	Game.ready = true;
	Game.isOnStartScreen = true;
	
	Game.drawStartScreen(ctx);
};

Game.pause = function pause() {
	if (this.nextFrame) {
		this.isPaused = true;
		window.cancelAnimationFrame(this.nextFrame);
		
		// cancel full screen
		var letterbox = document.getElementById("letterbox"),
			canvas = document.getElementById("myCanvas");
					
		Game.exitFullscreen();
		
		letterbox.setAttribute("class","");
		Game.fitToWindow();
		
		if (Game.VirtualGamePad.isActive) {
			Game.VirtualGamePad.deactivate();
		}
		
		draw();
					 
		this.stopMusic();
		
		this.nextFrame = null;
	}
};

Game.resume = function resume() {
	if (!this.nextFrame && this.ready) {
		this.isPaused = false;
		this.isOnStartScreen = false;
		this.resumeMusic();
			
		// Init full screen
		var letterbox = document.getElementById("letterbox"),
			canvas = document.getElementById("myCanvas"),
			w,h, factor;
			
		letterbox.setAttribute("class","active");
		Game.fitToWindow();
		
		// Resume loop
		lastFrameTime = null;
		gameLoop(lastFrameTime);
	}
};

var gameLoop = (function() {var accum = 0; return function(_timestamp) {
	var elapsed;
	if (lastFrameTime) {
		elapsed = _timestamp - lastFrameTime;
		fps = 1000/elapsed;
		accum += elapsed;
		var FRAME_TIME = 10;
		accum = Math.min(accum, 500);
		while(accum >= FRAME_TIME) {
			accum -= FRAME_TIME;
			onUpdate(FRAME_TIME);
		}
		draw();
	}
	lastFrameTime = _timestamp;

	Game.nextFrame = window.requestAnimationFrame(gameLoop);
};}());

var onUpdate = function(elapsed) {
	Game.camera.update(elapsed);
	Game.ui.update(elapsed);
};

var draw = function() {
	var screenLeft	= Math.floor((Game.LETTERBOX_WIDTH - Game.WIDTH) * 0.5),
		screenTop	= Math.floor((Game.LETTERBOX_HEIGHT - Game.HEIGHT) * 0.5);

	// Clear the background
	ctx.beginPath();
	ctx.fillStyle = 'black';
	ctx.rect(0,0,Game.LETTERBOX_WIDTH,Game.LETTERBOX_HEIGHT);
	ctx.fill();

	// Draw placeholder text.
	if(Game.DEBUG) {
		ctx.fillStyle = "#444";
		ctx.font = "bold 16pt sans-serif";
		ctx.textAlign = "center";
		ctx.fillText("Fully loaded. Don't wait anymore.",
		             Game.WIDTH/2, Game.HEIGHT/2);
	}

	// Draw the world.
	ctx.save();
	ctx.translate(screenLeft-Math.floor(Game.camera.x), screenTop-Math.floor(Game.camera.y));
	ctx.scale(Game.SCALE_FACTOR,Game.SCALE_FACTOR);
	try {
		Game.ui.worldDraw(ctx);
		Game.ui.screenDraw(ctx);
	} finally {
		ctx.restore();
	}

	// Draw the UI
	
	// Draw the Letterbox
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, screenLeft, Game.LETTERBOX_HEIGHT);
	ctx.fillRect(0, 0, Game.LETTERBOX_WIDTH, screenTop);
	ctx.fillRect(screenLeft + Game.WIDTH, 0, screenLeft+1, Game.LETTERBOX_HEIGHT);
	ctx.fillRect(0, screenTop + Game.HEIGHT, Game.LETTERBOX_WIDTH, screenTop+1);
	ctx.strokeStyle = "#bbb";
	ctx.strokeRect(screenLeft, screenTop, Game.WIDTH, Game.HEIGHT);
	
	// Debug info.
	if(Game.DEBUG) {
		ctx.fillStyle = 'white';
		ctx.font = '10pt sans-serif';
		ctx.textAlign = 'left';
		ctx.fillText(Game.Input.lastKey+'', 20, 20);
		ctx.fillText(Game.camera.destx+','+Game.camera.desty, 20, 40);
		ctx.fillText(Game.ui.state.gs.player.x+','+Game.ui.state.gs.player.y, 20, 60);
		ctx.fillText(Game.ui.state.gs.world.bounds.bottom, 20, 80);
		ctx.fillText(Game.ui.state.gs.world.targets[0], 20, 100);
	}
	
	if (Game.VirtualGamePad.isActive) {
		Game.VirtualGamePad.draw(ctx);
	}
	
	if (Game.isPaused) {
		Game.drawPauseScreen(ctx);
	}
};

Game.drawStartScreen = function (ctx) {
	// Clear the background
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.rect(0,0,Game.WIDTH,Game.HEIGHT);
	ctx.fill();
	
	// Title text
	ctx.fillStyle = "#000";
	ctx.font = "bold 28pt sans-serif";
	ctx.textAlign = "center";
	ctx.fillText("DAN MAN",
				 Game.WIDTH/2, Game.HEIGHT/2-100);
	ctx.font = "bold 16pt sans-serif";
	ctx.fillText("Click to start game",
				 Game.WIDTH/2, Game.HEIGHT/2+110);
				 
	// Draw 'play' symbol
	ctx.fillStyle = "#444";
	ctx.beginPath();
	
	ctx.moveTo(Game.WIDTH/2-56, Game.HEIGHT/2-64);
	ctx.lineTo(Game.WIDTH/2+64, Game.HEIGHT/2);
	ctx.lineTo(Game.WIDTH/2-56, Game.HEIGHT/2+64);
	
	ctx.closePath();
	ctx.fill();
};

Game.drawPauseScreen = function (ctx) {
	ctx.fillStyle = "rgba(0,0,0,0.7)";
	ctx.fillRect(0,0,Game.WIDTH,Game.HEIGHT);
	
	// Draw 'play' symbol
	ctx.fillStyle = "#bbb";
	ctx.beginPath();
	
	ctx.moveTo(Game.WIDTH/2-56, Game.HEIGHT/2-64);
	ctx.lineTo(Game.WIDTH/2+64, Game.HEIGHT/2);
	ctx.lineTo(Game.WIDTH/2-56, Game.HEIGHT/2+64);
	
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#fff";
	ctx.font = "bold 28pt sans-serif";
	ctx.textAlign = "center";
	ctx.fillText("Game paused",
				 Game.WIDTH/2, Game.HEIGHT/2-100);
	ctx.font = "bold 16pt sans-serif";
	ctx.fillText("Click to resume",
				 Game.WIDTH/2, Game.HEIGHT/2+110);
};

Game.fitToWindow = function () {
	var letterbox = document.getElementById("letterbox"),
		canvas = document.getElementById("myCanvas"),
		w, h;
		
	
	if (letterbox.getAttribute("class") === "active") {
		w = Math.floor(letterbox.offsetWidth / Game.TILE_SIZE / Game.SCREEN_TILES_H);
		h = Math.floor(letterbox.offsetHeight / Game.TILE_SIZE / Game.SCREEN_TILES_V);
		
		document.getElementsByTagName("body")[0].setAttribute("class","freeze");
		
		Game.SCALE_FACTOR = Math.min(w,h);
		Game.WIDTH  = Game.SCALE_FACTOR * Game.TILE_SIZE * Game.SCREEN_TILES_H;
		Game.HEIGHT = Game.SCALE_FACTOR * Game.TILE_SIZE * Game.SCREEN_TILES_V;
		Game.LETTERBOX_WIDTH  = letterbox.offsetWidth;
		Game.LETTERBOX_HEIGHT = letterbox.offsetHeight;
		canvas.style.border = "none";
	} else {
		document.getElementsByTagName("body")[0].setAttribute("class","");
		
		Game.LETTERBOX_WIDTH	= Game.WIDTH  = Game.INACTIVE_WIDTH;
		Game.LETTERBOX_HEIGHT	= Game.HEIGHT = Game.INACTIVE_HEIGHT;
		Game.SCALE_FACTOR = Game.INACTIVE_SCALE_FACTOR;
		canvas.style.border = "";
	}
	
	canvas.setAttribute('width',Game.LETTERBOX_WIDTH);
	canvas.setAttribute('height',Game.LETTERBOX_HEIGHT);
		
	ctx.mozImageSmoothingEnabled = false;
	ctx.webkitImageSmoothingEnabled = false;
	ctx.msImageSmoothingEnabled = false;
	ctx.imageSmoothingEnabled = false;
}

window.onresize = function () {
	if (!Game.isOnStartScreen) {
		Game.fitToWindow();
		draw();
	}
}

}());
