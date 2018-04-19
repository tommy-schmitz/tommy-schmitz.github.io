// Load main library
var Game = window.Game || {};

Game.Input = (function() {
	// Input object
	var Input = {};
	
	// Keymap
	var keymap = {
			27: 'escape',
			65: 'a',
			68: 'd',
			69: 'e',
			83: 's',
			87: 'w',
			88: 'x',
			90: 'z',
			49: '1',
			50: '2',
			51: '3',
			52: '4',
			53: '5',
			54: '6',
			192: '`'
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
			Game.ui.keyDown(keymap[e.keyCode]);
			if(e.keyCode === 17 && Game.DEBUG)
				Game.debugMode = !Game.debugMode;
		},false);
		// Key up event
		document.addEventListener("keyup",function(e) {
			Input.keys[keymap[e.keyCode]] = false;
		},false);
		
		// Mouse movement
		canvas.addEventListener("mousemove",function(e) {
			Input.mouse.x = e.pageX - canvas.offsetLeft;
			Input.mouse.y = e.pageY - canvas.offsetTop;
			Game.ui.mouseMove(e.offsetX + Game.camera.x, e.offsetY + Game.camera.y);
		},false);
		// Mouse down event
		canvas.addEventListener("mousedown",function(e) {
			var offsetX = e.pageX - canvas.offsetLeft;
			var offsetY = e.pageY - canvas.offsetTop;
			if (e.which === 1) {
				Input.mouse.button = true;
				Game.ui.mouseDown(offsetX, offsetY);
			} else if(e.which === 3) {
				Game.ui.cancel();
			}
			e.preventDefault();
		},false);
		// Mouse up event
		canvas.addEventListener("mouseup",function(e) {
			Input.mouse.button = false;
			e.preventDefault();
		},false);
		// Context menu event (just to disable the context menu)
		canvas.addEventListener("contextmenu",function(e) {
			e.preventDefault();
		},false);
	};
	
	return Input;
}());
