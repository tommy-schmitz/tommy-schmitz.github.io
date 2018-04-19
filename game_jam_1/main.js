// Load main library
var Game = window.Game || {};

(function() {

var ctx, lastFrameTime, fps;


// global constants
Game.WIDTH  = 800;
Game.HEIGHT = 480;

Game.SCALE_FACTOR = 3;
//Game.SCALE_FACTOR = Math.floor(10);

Game.CAMERA_SCROLL_SPEED = 16;


Game.assert = function(boolean) {
	if(!boolean)
		throw 'assertion failure';
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
		console.log("VC");
	
		if (document[hidden]) {
			Game.pause();
		} else {
			Game.resume();
		}
	}
	
	document.addEventListener(visibilityChange, handleVisibilityChange, false);
	window.addEventListener("blur",function() { Game.pause(); }, false);
	window.addEventListener("focus",function() { Game.resume(); }, false);
  
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
};

Game.load = function load() {
	Game.ready = false;
	this.loadImages(function() {
		Game.loadSounds(start);
	});
};

Game.reloadWorld = function () {
	Game.track[Game.trackIndex]();
};
Game.advanceWorlds = function () {
	Game.trackIndex++;
	if (Game.trackIndex < Game.track.length) {
		Game.track[Game.trackIndex]();
	}
};

var start = function() {
	Game.Input.init();
	Game.track[Game.trackIndex]();
	Game.ready = true;

	//sound test
	//Game.playSound('hit.wav');

	gameLoop();
};

Game.pause = function pause() {
	if (this.nextFrame) {
		window.cancelAnimationFrame(this.nextFrame);
		
		ctx.beginPath();
		ctx.fillStyle = "rgba(0,0,0,0.5)";
		ctx.rect(0,0,Game.WIDTH,Game.HEIGHT);
		ctx.fill();
		
		this.stopMusic();
		
		this.nextFrame = null;
	}
};

Game.resume = function resume() {
	if (!this.nextFrame && this.ready) {
		this.resumeMusic();
	
		lastFrameTime = null;
		gameLoop(lastFrameTime);
	}
};

var gameLoop = function(_timestamp) {
	var elapsed;
	if (lastFrameTime) {
		elapsed = _timestamp - lastFrameTime;
		fps = 1000/elapsed;
		onUpdate(Math.min(elapsed,100));
		draw();
	}
	lastFrameTime = _timestamp;

	Game.nextFrame = window.requestAnimationFrame(gameLoop);
};

var onUpdate = function(elapsed) {
	var cameraScrollX = 0, cameraScrollY = 0;
	
	// Update the world
	Game.currentWorld.update(elapsed);

	// Scroll the camera
	if (Game.Input.keys.a) { cameraScrollX -= Game.CAMERA_SCROLL_SPEED; }
	if (Game.Input.keys.d) { cameraScrollX += Game.CAMERA_SCROLL_SPEED; }
	if (Game.Input.keys.w) { cameraScrollY -= Game.CAMERA_SCROLL_SPEED; }
	if (Game.Input.keys.s) { cameraScrollY += Game.CAMERA_SCROLL_SPEED; }
	Game.camera.scroll(cameraScrollX,cameraScrollY);
	
	Game.camera.update(elapsed);

	Game.UI.update(elapsed);
};

draw = function() {
	// Clear the background
	ctx.beginPath();
	ctx.fillStyle = 'black';
	ctx.rect(0,0,Game.WIDTH,Game.HEIGHT);
	ctx.fill();

	// Draw placeholder text.
	/*ctx.fillStyle = "#444";
	ctx.font = "bold 16pt sans-serif";
	ctx.textAlign = "center";
	ctx.fillText("Fully loaded. Don't wait anymore.",
	             Game.WIDTH/2, Game.HEIGHT/2);*/

	// Draw the world.
	ctx.save();
	ctx.translate(-Math.floor(Game.camera.x), -Math.floor(Game.camera.y));
	ctx.scale(Game.SCALE_FACTOR,Game.SCALE_FACTOR);
	try {
		Game.currentWorld.draw(ctx);
		Game.UI.worldDraw(ctx);
	} finally {
		ctx.restore();
	}

	// Draw the UI
	Game.UI.screenDraw(ctx);

	// Debug info.
	if(false) {
		ctx.fillStyle = 'black';
		ctx.font = '10pt sans-serif';
		ctx.textAlign = 'left';
		ctx.fillText(Game.Input.lastKey+'', 20, 20);
		ctx.fillText(Game.camera.destx+','+Game.camera.desty, 20, 40);
	}
};


}());
