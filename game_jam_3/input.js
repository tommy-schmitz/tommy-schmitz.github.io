// Load main library
var Game = window.Game || {};

Game.Input = (function() {
	// Input object
	var Input = {};
	
	// Keymap
	var keymap = {
			16: 'SHIFT',
			65: 'a',
			68: 'd',
			83: 's',
			87: 'w',
			192: 'grave'
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
			if(!Input.keys[keymap[e.keyCode]]) {
				Input.lastKey = e.keyCode;
				Input.keys[keymap[e.keyCode]] = true;
				Game.ui.keyDown(e.keyCode);
			}
		},false);
		// Key up event
		document.addEventListener("keyup",function(e) {
			Input.keys[keymap[e.keyCode]] = false;
			Game.ui.keyUp(e.keyCode);
		},false);

		var rawMouse = {x:0,y:0};
		Object.defineProperty(this.mouse, 'x', {
			get: function() {return rawMouse.x/Game.camera.zoom;},
			set: function() {Game.assert(false);}
		});
		Object.defineProperty(this.mouse, 'y', {
			get: function() {return rawMouse.y/Game.camera.zoom;},
			set: function() {Game.assert(false);}
		});
		
		// Mouse movement
		canvas.addEventListener("mousemove",function(e) {
			rawMouse.x = (e.pageX - canvas.offsetLeft);
			rawMouse.y = (e.pageY - canvas.offsetTop);
			Game.ui.mouseMove(e.offsetX + Game.camera.x, e.offsetY + Game.camera.y);
		},false);
		// Mouse down event
		canvas.addEventListener("mousedown",function(e) {
			var offsetX = (e.pageX - canvas.offsetLeft)/Game.camera.zoom;
			var offsetY = (e.pageY - canvas.offsetTop)/Game.camera.zoom;
			if (e.which === 1) { Input.mouse.buttonLeft = true; }
			if (e.which === 2) { Input.mouse.buttonMiddle = true; }
			if (e.which === 3) { Input.mouse.buttonRight = true; }
			Game.ui.mouseDown(offsetX + Game.camera.x, offsetY + Game.camera.y, e.which);
			e.preventDefault();
		},false);
		// Mouse up event
		canvas.addEventListener("mouseup",function(e) {
			var offsetX = e.pageX - canvas.offsetLeft;
			var offsetY = e.pageY - canvas.offsetTop;
			if (e.which === 1) { Input.mouse.buttonLeft = false; }
			if (e.which === 2) { Input.mouse.buttonMiddle = false; }
			if (e.which === 3) { Input.mouse.buttonRight = false; }
			Game.ui.mouseUp(offsetX + Game.camera.x, offsetY + Game.camera.y, e.which);
			e.preventDefault();
		},false);
		// Context menu event (just to disable the context menu)
		canvas.addEventListener("contextmenu",function(e) {
			e.preventDefault();
		},false);
		// Mouse wheel event
		if ("onwheel" in document.createElement("div")) {
			canvas.addEventListener("wheel",mouseWheelEvent,false);
		} else if (document.onmousewheel !== undefined) {
			canvas.addEventListener("mousewheel",mouseWheelEvent,false);
		} else {
			canvas.addEventListener("DOMMouseScroll",mouseWheelEvent,false);
		}
	};
	
	function mouseWheelEvent(_event) {
		var delta = _event.deltaY != null ? _event.deltaY :				// Modern events
					_event.wheelDelta != null ? -_event.wheelDelta :	// Webkit / IE
					_event.detail;										// Legacy Firefox
		
		Game.ui.mouseWheel(delta);
		_event.preventDefault();
	};
	
	return Input;
}());
