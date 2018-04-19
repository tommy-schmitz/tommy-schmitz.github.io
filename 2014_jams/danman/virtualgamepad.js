// Load main library
var Game = window.Game || {};

Game.VirtualGamePad = (function() {
	// keypad object
	var VirtualGamePad = {};
			
	// Input initialization
	VirtualGamePad.init = function init() {
		// Prevent double-initialization
		if (this.keys) { return; }
		
		this.canvas = document.getElementById("myCanvas");
		
		this.active = false;
		this.currentTouches = [];
		this.state = {
			left:	false,
			up:		false,
			right:	false,
			down:	false,
			jump:	false,
			fire:	false
		};
		
		this.bootstrapEvent = this.bootstrap.bind(this)
		this.canvas.addEventListener("touchend",this.bootstrapEvent,false);
	};
	
	VirtualGamePad.bootstrap = function bootstrap() {
		if (this.bootstrapEvent) {
			this.canvas.removeEventListener("touchend",this.bootstrapEvent,false);
			this.bootstrapEvent = null;
		}
	
		// touch start event
		this.canvas.addEventListener("touchstart",onTouchStart.bind(this),false);
		// touch move event
		this.canvas.addEventListener("touchmove",onTouchMove.bind(this),false);
		// touch end event
		this.canvas.addEventListener("touchend",onTouchEnd.bind(this),false);
		// touch leave event (same as touch end)
		this.canvas.addEventListener("touchleave",onTouchEnd.bind(this),false);
		// touch cancel event (same as touch end)
		this.canvas.addEventListener("touchcancel",onTouchEnd.bind(this),false);
		
		this.activate();
	};
	
	VirtualGamePad.activate = function activate() {
		if (!this.currentTouches) { this.init(); }
		this.isActive = true;
	};
	VirtualGamePad.deactivate = function deactivate() {
		this.isActive = false;
	};
	
	function onTouchStart(ev) {
		var touches = ev.changedTouches;
		
		ev.preventDefault();		
				
		for (var i = 0; i < touches.length; ++i) {
			this.addTouch(touches[i]);
		}
		
		VirtualGamePad.update();
	};
	function onTouchMove(ev) {
		var touches = ev.changedTouches;
		
		ev.preventDefault();
		
		for (var i = 0; i < touches.length; ++i) {
			this.updateTouch(touches[i]);
		}
		
		VirtualGamePad.update();
	};
	function onTouchEnd(ev) {
		var touches = ev.changedTouches;
		
		ev.preventDefault();
		
		for (var i = 0; i < touches.length; ++i) {
			this.removeTouch(touches[i]);
		}
		
		VirtualGamePad.update();
	};
	
	VirtualGamePad.addTouch = function (touch) {
		var record = {
			identifier:		touch.identifier,
			pageX:			touch.pageX - this.canvas.offsetLeft,
			pageY:			touch.pageY - this.canvas.offsetTop
		};
		
		this.currentTouches.push(record);
		return record;
	};
	VirtualGamePad.updateTouch = function (touch) {
		var oldTouch;
		
		for (var i = 0; i < this.currentTouches.length; ++i) {
			if (this.currentTouches[i].identifier === touch.identifier) {
				oldTouch = this.currentTouches[i];
				oldTouch.pageX = touch.pageX - this.canvas.offsetLeft;
				oldTouch.pageY = touch.pageY - this.canvas.offsetTop;
				return oldTouch;
			}
		}
		return addTouch(touch);
	};
	VirtualGamePad.removeTouch = function (touch) {
		for (var i = 0; i < this.currentTouches.length; ++i) {
			if (this.currentTouches[i].identifier === touch.identifier) {
				this.currentTouches.splice(i,1);
				return;
			}
		}
	};
	
	// Constants
	var GAME_PAD_RADIUS			= 100;
	var GAME_PAD_OFFSET_LEFT	= 120;
	var GAME_PAD_OFFSET_BOTTOM	= 120;
	var GAME_PAD_BUTTON_RADIUS	= 35;
	var GAME_PAD_BUTTON_OFFSET	= 55;
	var GAME_PAD_ICON_SIZE		= 16;
	var GAME_PAD_BUTTON_DIAGONAL_OFFSET	= 27.5 * Math.sqrt(2);
	var GAME_PAD_BACK_FILL		= "rgba(64,64,64,0.3)";
	var GAME_PAD_BUTTON_FILL	= "rgba(192,192,192,1)";
	var GAME_PAD_BUTTON_STROKE	= "rgba(192,192,192,0.7)";
	var GAME_PAD_ICON_FILL		= "#666";
	var GAME_PAD_ICON_STROKE	= "#444";
	
	function touchOnButton(touch,buttonX,buttonY) {
		var dx = buttonX - touch.pageX,
			dy = buttonY - touch.pageY;
			
		if (Math.sqrt(dx*dx + dy*dy) < GAME_PAD_BUTTON_RADIUS) {
			return true;
		}
		return false;
	}
	
	VirtualGamePad.update = function () {
		
		var dPadX		= this.getDpadX(),
			buttonsX	= this.getButtonsX(),
			gamePadY	= this.getY(),
			t;

		var previousLeft  = this.state.left;
		var previousUp    = this.state.up;
		var previousRight = this.state.right;
		var previousDown  = this.state.down;
		var previousJump  = this.state.jump;
		var previousFire  = this.state.fire;
		
		this.state.left		= false;
		this.state.up		= false;
		this.state.right	= false;
		this.state.down		= false;
		this.state.jump		= false;
		this.state.fire		= false;
		
		for (var i = 0; i < this.currentTouches.length; ++i) {
			t = this.currentTouches[i];
			
			if (touchOnButton(t,dPadX - GAME_PAD_BUTTON_OFFSET, gamePadY - GAME_PAD_BUTTON_OFFSET)) {
				this.state.left = true;
				this.state.up = true;
			}
			else if (touchOnButton(t,dPadX + GAME_PAD_BUTTON_OFFSET, gamePadY - GAME_PAD_BUTTON_OFFSET)) {
				this.state.right = true;
				this.state.up = true;
			}
			else if (touchOnButton(t,dPadX + GAME_PAD_BUTTON_OFFSET, gamePadY + GAME_PAD_BUTTON_OFFSET)) {
				this.state.right = true;
				this.state.down = true;
			}
			else if (touchOnButton(t,dPadX - GAME_PAD_BUTTON_OFFSET, gamePadY + GAME_PAD_BUTTON_OFFSET)) {
				this.state.left = true;
				this.state.down = true;
			}
			else if (touchOnButton(t,dPadX - GAME_PAD_BUTTON_OFFSET, gamePadY)) {
				this.state.left = true;
			}
			else if (touchOnButton(t,dPadX, gamePadY - GAME_PAD_BUTTON_OFFSET)) {
				this.state.up = true;
			}
			else if (touchOnButton(t,dPadX + GAME_PAD_BUTTON_OFFSET, gamePadY)) {
				this.state.right = true;
			}
			else if (touchOnButton(t,dPadX, gamePadY + GAME_PAD_BUTTON_OFFSET)) {
				this.state.down = true;
			}
			
			if (touchOnButton(t,buttonsX, gamePadY)) {
				this.state.jump = true;
				this.state.fire = true;
			}
			else if (touchOnButton(t,buttonsX - GAME_PAD_BUTTON_DIAGONAL_OFFSET, gamePadY + GAME_PAD_BUTTON_DIAGONAL_OFFSET)) {
				this.state.fire = true;
			}
			else if (touchOnButton(t,buttonsX + GAME_PAD_BUTTON_DIAGONAL_OFFSET, gamePadY - GAME_PAD_BUTTON_DIAGONAL_OFFSET)) {
				this.state.jump = true;
			}
		}

		if(this.state.left  && !previousLeft)
			Game.ui.keyDown('left');
		if(this.state.up    && !previousUp)
			Game.ui.keyDown('up');
		if(this.state.right && !previousRight)
			Game.ui.keyDown('right');
		if(this.state.down  && !previousDown)
			Game.ui.keyDown('down');
		if(this.state.jump  && !previousJump)
			Game.ui.keyDown('jump');
		if(this.state.fire  && !previousFire)
			Game.ui.keyDown('fire');
	};
	
	VirtualGamePad.draw = function (ctx) {
		var dPadX		= this.getDpadX(),
			buttonsX	= this.getButtonsX(),
			gamePadY	= this.getY();
	
		// Draw the gamepad back
		ctx.fillStyle = GAME_PAD_BACK_FILL;
	
		// D-pad
		ctx.beginPath();
		ctx.arc(dPadX,gamePadY, GAME_PAD_RADIUS, 0, 2*Math.PI, false);
		ctx.fill();
		// Action buttons
		ctx.beginPath();
		ctx.arc(buttonsX,gamePadY, GAME_PAD_RADIUS, 0, 2*Math.PI, false);
		ctx.fill();
		
		// Draw the gamepad buttons
		ctx.fillStyle = GAME_PAD_BUTTON_FILL;
		ctx.strokeStyle = GAME_PAD_BUTTON_STROKE;
		ctx.lineWidth	= 2;
		
		// UP
		ctx.beginPath();
		ctx.arc(dPadX,gamePadY - GAME_PAD_BUTTON_OFFSET, GAME_PAD_BUTTON_RADIUS, 0, 2*Math.PI, false);
		if (this.state.up) { ctx.fill(); }
		ctx.stroke();
		// RIGHT
		ctx.beginPath();
		ctx.arc(dPadX + GAME_PAD_BUTTON_OFFSET,gamePadY, GAME_PAD_BUTTON_RADIUS, 0, 2*Math.PI, false);
		if (this.state.right) { ctx.fill(); }
		ctx.stroke();
		// DOWN
		ctx.beginPath();
		ctx.arc(dPadX,gamePadY + GAME_PAD_BUTTON_OFFSET, GAME_PAD_BUTTON_RADIUS, 0, 2*Math.PI, false);
		if (this.state.down) { ctx.fill(); }
		ctx.stroke();
		// LEFT
		ctx.beginPath();
		ctx.arc(dPadX - GAME_PAD_BUTTON_OFFSET,gamePadY, GAME_PAD_BUTTON_RADIUS, 0, 2*Math.PI, false);
		if (this.state.left) { ctx.fill(); }
		ctx.stroke();
		// FIRE
		ctx.beginPath();
		ctx.arc(buttonsX - GAME_PAD_BUTTON_DIAGONAL_OFFSET,gamePadY + GAME_PAD_BUTTON_DIAGONAL_OFFSET, GAME_PAD_BUTTON_RADIUS, 0, 2*Math.PI, false);
		if (this.state.fire) { ctx.fill(); }
		ctx.stroke();
		// JUMP
		ctx.beginPath();
		ctx.arc(buttonsX + GAME_PAD_BUTTON_DIAGONAL_OFFSET,gamePadY - GAME_PAD_BUTTON_DIAGONAL_OFFSET, GAME_PAD_BUTTON_RADIUS, 0, 2*Math.PI, false);
		if (this.state.jump) { ctx.fill(); }
		ctx.stroke();
		
		ctx.fillStyle = GAME_PAD_ICON_FILL;
		ctx.strokeStyle = GAME_PAD_ICON_STROKE;
		ctx.font = "bold 32pt sans-serif";
		ctx.textAlign = "center";
		
		// Draw the gamepad icons
		// UP
		ctx.beginPath();
		ctx.moveTo(dPadX,gamePadY - GAME_PAD_BUTTON_OFFSET - GAME_PAD_ICON_SIZE);
		ctx.lineTo(dPadX + GAME_PAD_ICON_SIZE,gamePadY - GAME_PAD_BUTTON_OFFSET);
		ctx.lineTo(dPadX + GAME_PAD_ICON_SIZE,gamePadY - GAME_PAD_BUTTON_OFFSET + GAME_PAD_ICON_SIZE * 0.5);
		ctx.lineTo(dPadX - GAME_PAD_ICON_SIZE,gamePadY - GAME_PAD_BUTTON_OFFSET + GAME_PAD_ICON_SIZE * 0.5);
		ctx.lineTo(dPadX - GAME_PAD_ICON_SIZE,gamePadY - GAME_PAD_BUTTON_OFFSET);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		// RIGHT
		ctx.beginPath();
		ctx.moveTo(dPadX + GAME_PAD_BUTTON_OFFSET + GAME_PAD_ICON_SIZE,gamePadY);
		ctx.lineTo(dPadX + GAME_PAD_BUTTON_OFFSET,gamePadY + GAME_PAD_ICON_SIZE);
		ctx.lineTo(dPadX + GAME_PAD_BUTTON_OFFSET - GAME_PAD_ICON_SIZE * 0.5,gamePadY + GAME_PAD_ICON_SIZE);
		ctx.lineTo(dPadX + GAME_PAD_BUTTON_OFFSET - GAME_PAD_ICON_SIZE * 0.5,gamePadY - GAME_PAD_ICON_SIZE);
		ctx.lineTo(dPadX + GAME_PAD_BUTTON_OFFSET,gamePadY - GAME_PAD_ICON_SIZE);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		// DOWN
		ctx.beginPath();
		ctx.moveTo(dPadX,gamePadY+ GAME_PAD_BUTTON_OFFSET + GAME_PAD_ICON_SIZE);
		ctx.lineTo(dPadX + GAME_PAD_ICON_SIZE,gamePadY + GAME_PAD_BUTTON_OFFSET);
		ctx.lineTo(dPadX + GAME_PAD_ICON_SIZE,gamePadY + GAME_PAD_BUTTON_OFFSET - GAME_PAD_ICON_SIZE * 0.5);
		ctx.lineTo(dPadX - GAME_PAD_ICON_SIZE,gamePadY + GAME_PAD_BUTTON_OFFSET - GAME_PAD_ICON_SIZE * 0.5);
		ctx.lineTo(dPadX - GAME_PAD_ICON_SIZE,gamePadY + GAME_PAD_BUTTON_OFFSET);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		// LEFT
		ctx.beginPath();
		ctx.moveTo(dPadX - GAME_PAD_BUTTON_OFFSET - GAME_PAD_ICON_SIZE,gamePadY);
		ctx.lineTo(dPadX - GAME_PAD_BUTTON_OFFSET,gamePadY + GAME_PAD_ICON_SIZE);
		ctx.lineTo(dPadX - GAME_PAD_BUTTON_OFFSET + GAME_PAD_ICON_SIZE * 0.5,gamePadY + GAME_PAD_ICON_SIZE);
		ctx.lineTo(dPadX - GAME_PAD_BUTTON_OFFSET + GAME_PAD_ICON_SIZE * 0.5,gamePadY - GAME_PAD_ICON_SIZE);
		ctx.lineTo(dPadX - GAME_PAD_BUTTON_OFFSET,gamePadY - GAME_PAD_ICON_SIZE);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		// FIRE
		ctx.fillText("B",buttonsX - GAME_PAD_BUTTON_DIAGONAL_OFFSET + 2, gamePadY + GAME_PAD_BUTTON_DIAGONAL_OFFSET + 14);
		ctx.strokeText("B",buttonsX - GAME_PAD_BUTTON_DIAGONAL_OFFSET + 2, gamePadY + GAME_PAD_BUTTON_DIAGONAL_OFFSET + 14);
		// JUMP
		ctx.fillText("A",buttonsX + GAME_PAD_BUTTON_DIAGONAL_OFFSET, gamePadY - GAME_PAD_BUTTON_DIAGONAL_OFFSET + 12);
		ctx.strokeText("A",buttonsX + GAME_PAD_BUTTON_DIAGONAL_OFFSET, gamePadY - GAME_PAD_BUTTON_DIAGONAL_OFFSET + 12);
	
		/*for (var i = 0; i < this.currentTouches.length; ++i) {
			t = this.currentTouches[i];
			
			ctx.beginPath();
			ctx.arc(t.pageX - this.canvas.offsetLeft,t.pageY - this.canvas.offsetTop, 20, 0, 2*Math.PI, false);
			ctx.fill();
		}*/
	};
	
	VirtualGamePad.getDpadX = function () {
		return Math.max((Game.LETTERBOX_WIDTH - Game.WIDTH)/2 - GAME_PAD_OFFSET_LEFT * 2,0) + GAME_PAD_OFFSET_LEFT;
	};
	VirtualGamePad.getButtonsX = function () {
		return Math.min((Game.LETTERBOX_WIDTH + Game.WIDTH)/2 + GAME_PAD_OFFSET_LEFT * 2,Game.LETTERBOX_WIDTH) - GAME_PAD_OFFSET_LEFT;
	};
	VirtualGamePad.getY = function () {
		return Math.min((Game.LETTERBOX_HEIGHT + Game.HEIGHT)/2 + GAME_PAD_OFFSET_BOTTOM * 2,Game.LETTERBOX_HEIGHT) - GAME_PAD_OFFSET_BOTTOM;
	};
	
	return VirtualGamePad;
}());
