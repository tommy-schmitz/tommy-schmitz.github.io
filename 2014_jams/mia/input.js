// Load main library
var Game = window.Game || {};

Game.Input = (function() {
	// Input object
	var Input = {};
	
	// Keymap
	var keymap = {
			65: 'a',
			68: 'd',
			83: 's',
			87: 'w'
		};
		
	// Input initialization
	Input.init = function init() {
		// Prevent double-initialization
		if (this.keys) { return; }
		
		var canvas = document.getElementById("myCanvas");
		
		// Last key pressed
		this.lastKey = null;
		// Key input buffer
		this.keys = {};
		// Mouse input buffer
		this.mouse = {};
		
		// Key down event
		document.addEventListener("keydown",function(e) {
			Input.lastKey = e.keyCode;
			Input.keys[keymap[e.keyCode]] = true;
		},false);
		// Key up event
		document.addEventListener("keyup",function(e) {
			Input.keys[keymap[e.keyCode]] = false;
		},false);
		
		// Mouse movement
		document.addEventListener("mousemove",function(e) {
			Input.mouse.x = e.pageX - canvas.offsetLeft;
			Input.mouse.y = e.pageY - canvas.offsetTop;
		},false);
		// Mouse down event
		canvas.addEventListener("mousedown",function(e) {
			Input.mouse.button = true;
			if(Game.currentMode === 1)
				Game.player.onClick();
			e.preventDefault();
		},false);
		// Mouse up event
		canvas.addEventListener("mouseup",function(e) {
			Input.mouse.button = false;
			e.preventDefault();
		},false);
	};
	
	return Input;
}());
