// Load main library
var Game = window.Game || {};

(function() {

var ctx, lastFrameTime, fps;


// global constants
Game.WIDTH  = 1024;
Game.HEIGHT = 576;
Game.DEBUG = false;
Game.DEBUG_MOUSE = false;

// global flag
Game.debugMode = false;

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
	Game.loadMusic();
	this.loadImages(function() {
		Game.loadSounds(start);
	});
};

var start = function() {
	Game.Input.init();
	Game.ui.init();
	Game.ready = true;

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
	Game.camera.update(elapsed);
	
	Game.ui.update(elapsed);
};

var draw = function() {
	// Clear the background
	ctx.beginPath();
	ctx.fillStyle = 'black';
	ctx.rect(0,0,Game.WIDTH,Game.HEIGHT);
	ctx.fill();

	// Draw placeholder text.
	if(Game.DEBUG) {
		ctx.fillStyle = "#444";
		ctx.font = "bold 16pt sans-serif";
		ctx.textAlign = "center";
		ctx.fillText("Fully loaded. Don't wait anymore.",
		             Game.WIDTH/2, Game.HEIGHT/2);
	}

	// Zoom out
	if(Game.debugMode) {
	  ctx.save();
	  ctx.scale(1/3, 1/3);
	  ctx.translate(Game.WIDTH, Game.HEIGHT);
	}
	
	
	// Draw the world.
	Game.ui.worldDraw(ctx);
	// Draw the UI
	Game.ui.screenDraw(ctx);
	
	if(Game.debugMode)
	  ctx.restore();

	// Debug info.
	if(Game.DEBUG) {
		ctx.fillStyle = 'white';
		ctx.font = '10pt sans-serif';
		ctx.textAlign = 'left';
		ctx.fillText(Game.Input.lastKey+'', 20, 400);
		ctx.fillText(Game.camera.x+','+Game.camera.y, 20, 420);
	}
};


}());
