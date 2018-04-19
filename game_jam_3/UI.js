// Load main library
var Game = window.Game || {};

Game.assert(Game.GameState);

Game.ui = (function() {

// Draw debug information
var debugDraw = function(ctx, msg) {
	if(Game.DEBUG) {
		ctx.fillStyle = '#f80';
		ctx.font = '10pt sans-serif';
		ctx.textAlign = 'right';
		ctx.fillText(msg, Game.WIDTH-10, 100);
	}
};

// UI State base object
var UIState = function() {};
UIState.prototype.keyUp = function (keyCode) {};
UIState.prototype.keyDown = function (keyCode) {};
UIState.prototype.keyUp = function (keyCode) {};
UIState.prototype.mouseDown = function (x, y, which) {};
UIState.prototype.mouseUp = function (x, y, which) {};
UIState.prototype.mouseMove = function (x, y) {};
UIState.prototype.worldDraw = function (ctx) {};
UIState.prototype.screenDraw = function (ctx) {};
UIState.prototype.cancel = function() {};
UIState.prototype.update = function(elapsed) {};

var zoom = function(logAmount) {
	var MIN_ZOOM = 0.0005;
	var MAX_ZOOM = 1;
	Game.camera.zoom *= Math.pow(Game.camera.zoomFactor, logAmount);
	Game.camera.snap = 5;
	Game.camera.zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, Game.camera.zoom));

};

var BUTTON_ROUTE = 81;
var COLOR_TIMER_MAX = 5000;
var WARNING_PERIOD = 1000.0 / 3.0;

var hello = new UIState();
hello.gs = new Game.GameState({
	onHPChange: function() {
		hello.hpColorTimer = COLOR_TIMER_MAX;
	}
});
hello.routeSource = null;
hello.hpColorTimer = 0;
hello.warningTime = 0.0;
hello.keyUp = function(keyCode) {
	this.gs.keyUp(keyCode);
	if(keyCode === BUTTON_ROUTE) {
		var body = this.gs.bodyAtMouse();
		if(this.routeSource && body)
			this.gs.addRoute(this.routeSource, body);
		this.routeSource = null;
	}
};
hello.keyDown = function(keyCode) {
	this.gs.keyDown(keyCode);
	if(keyCode === BUTTON_ROUTE) {
		this.routeSource = this.gs.bodyAtMouse();
	}
}
hello.mouseDown = function(x, y, which) {
	this.gs.mouseDown(x, y, which);
};
hello.mouseUp = function(x, y, which) {
	this.gs.mouseUp(x, y, which);
};
hello.update = function(elapsed) {
	this.hpColorTimer = Math.max(0.0, this.hpColorTimer-elapsed);
	this.warningTime += elapsed;
	if(this.warningTime >= WARNING_PERIOD)
		this.warningTime -= WARNING_PERIOD;

	// Zoom
	if(Game.Input.keys['s'])
		zoom(-0.03 * elapsed);
	else if(Game.Input.keys['w'])
		zoom(0.03 * elapsed);

	this.gs.update(elapsed);
	Game.camera.update(elapsed);
};
hello.worldDraw = function(ctx) {
	this.gs.draw(ctx);
};
hello.screenDraw = function(ctx) {
	var BAR_HEIGHT = 20;

	// Display current number of colonies when "grave" is pressed.
	// Commented out because now the number is displayed on HUD at all times.
/*
	if(Game.Input.keys['grave']) {
		ctx.fillStyle = '#444';
		ctx.rect(Game.WIDTH/2-200,Game.HEIGHT/2-50,400,100);
		ctx.fill();
		ctx.fillStyle = '#000';
		ctx.font = '40pt sans-serif';
		ctx.textAlign = 'center';
		ctx.fillText(this.gs.colonies.length + ' colonies', Game.WIDTH/2, Game.HEIGHT/2+20);
	}
*/

	// HP bar
	ctx.fillStyle = '#ddd';
	ctx.beginPath();
	ctx.rect(0, 0, Game.MAX_HP, BAR_HEIGHT);
	ctx.fill();
	var color = Math.floor(200.0 * this.hpColorTimer / COLOR_TIMER_MAX);
	ctx.fillStyle = 'rgb('+color+','+(200-color)+',0)';
	ctx.beginPath();
	ctx.rect(0, 0, this.gs.hp, BAR_HEIGHT);
	ctx.fill();
	ctx.fillStyle = '#000';
	ctx.font = '10pt sans-serif';
	ctx.textAlign = 'left';
	ctx.fillText('HEALTH', 5, 15);

	// Colony counter
	if(this.gs.colonies.length > 0) {
		ctx.fillStyle = '#fff';
		ctx.font = 'bold 10pt sans-serif';
		ctx.textAlign = 'left';
		var text = (this.gs.colonies.length === 1 ?  ' COLONY' :  ' COLONIES');
		ctx.fillText(this.gs.colonies.length + text, Game.MAX_HP + 5, 15);
	}

	// Fuel tank bar
	ctx.fillStyle = '#ccc';
	ctx.beginPath();
	ctx.rect(0, BAR_HEIGHT, Game.MAX_FUEL, BAR_HEIGHT);
	ctx.fill();
	ctx.fillStyle = '#f80';
	ctx.beginPath();
	ctx.rect(0, BAR_HEIGHT, this.gs.fuel, BAR_HEIGHT);
	ctx.fill();
	ctx.fillStyle = '#000';
	ctx.font = '10pt sans-serif';
	ctx.textAlign = 'left';
	ctx.fillText('FUEL', 5, BAR_HEIGHT+15);

	if(this.warningTime < WARNING_PERIOD/2) {
		var text;
		ctx.font = 'bold 10pt sans-serif';
		ctx.fillStyle = 'red';
		ctx.textAlign = 'left';
		if(this.gs.fuel <= 0.0)
			ctx.fillText('FUEL EMPTY', 5, BAR_HEIGHT*2+15);
		else if(this.gs.fuel < Game.MAX_FUEL*0.25)
			ctx.fillText('FUEL LOW', 5, BAR_HEIGHT*2+15);
	}

	// Ore
	ctx.fillStyle = 'fuchsia';
	ctx.textAlign = 'right';
	ctx.font = '16pt sans-serif';
	if(this.gs.oreCount > 0) {
		var text = this.gs.oreCount == 1 ?  ' ORE'  :  ' ORES';
		text = this.gs.oreCount + text;
		ctx.fillText(text, Game.WIDTH - 100, 30);
	}
	
	// TOOL ICON
	var TOOL_EDGE = 64;
	var TOOL_BORDER = 12;
	var TOOL_X = Game.WIDTH - TOOL_EDGE - TOOL_BORDER;
	var TOOL_Y = TOOL_BORDER;
	var LASER_DIAG = 20;
	var LASER_CROSS = 8;
	var TRACTOR_START = Math.PI*(11/8);
	var TRACTOR_END = Math.PI*(13/8);
	var TRACTOR_L1 = TOOL_EDGE/4;
	var TRACTOR_L2 = TOOL_EDGE/2;
	var TRACTOR_L3 = 3*TOOL_EDGE/4;
	if (this.gs.playerTool === 0) {
		ctx.strokeStyle = 'red';
		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.rect(TOOL_X, TOOL_Y, TOOL_EDGE, TOOL_EDGE);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.moveTo(TOOL_X + LASER_DIAG, TOOL_Y + LASER_DIAG);
		ctx.lineTo(TOOL_X + TOOL_EDGE - LASER_DIAG, TOOL_Y + TOOL_EDGE - LASER_DIAG);
		ctx.stroke();
		ctx.moveTo(TOOL_X + TOOL_EDGE - LASER_DIAG, TOOL_Y + LASER_DIAG);
		ctx.lineTo(TOOL_X + LASER_DIAG, TOOL_Y + TOOL_EDGE - LASER_DIAG);
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = 6;
		ctx.moveTo(TOOL_X + (TOOL_EDGE/2), TOOL_Y + LASER_CROSS);
		ctx.lineTo(TOOL_X + (TOOL_EDGE/2), TOOL_Y + TOOL_EDGE - LASER_CROSS);
		ctx.stroke();
		ctx.moveTo(TOOL_X + LASER_CROSS, TOOL_Y + (TOOL_EDGE/2));
		ctx.lineTo(TOOL_X + TOOL_EDGE - LASER_CROSS, TOOL_Y + (TOOL_EDGE/2));
		ctx.stroke();	
	}
	else if (this.gs.playerTool === 1) {
		ctx.strokeStyle = '#88F';
		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.rect(TOOL_X, TOOL_Y, TOOL_EDGE, TOOL_EDGE);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = 6;
		ctx.arc(TOOL_X+(TOOL_EDGE/2),TOOL_Y+TOOL_EDGE,TRACTOR_L1,TRACTOR_START,TRACTOR_END);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(TOOL_X+(TOOL_EDGE/2),TOOL_Y+TOOL_EDGE,TRACTOR_L2,TRACTOR_START,TRACTOR_END);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(TOOL_X+(TOOL_EDGE/2),TOOL_Y+TOOL_EDGE,TRACTOR_L3,TRACTOR_START,TRACTOR_END);
		ctx.stroke();
	}
};

// TODO: Add more UIState objects

// UI Singleton object
var UI = function() {
	// TODO: Set the starting UI state appropriately.
	this.state = hello;
};
UI.prototype.keyUp = function(keyCode) {
	Game.assert(this.state);
	this.state.keyUp(keyCode);
};
UI.prototype.keyDown = function(keyCode) {
	if (this.state) {
		this.state.keyDown(keyCode);
	}
};
UI.prototype.mouseMove = function(x, y) {
	this.state.mouseMove(x, y);
};
UI.prototype.mouseDown = function(x, y, which) {
	if (this.state) { this.state.mouseDown(x,y, which); }
};
UI.prototype.mouseUp = function(x, y, which) {
	if (this.state) { this.state.mouseUp(x,y, which); }
};
UI.prototype.mouseWheel = function(delta) {
	// Here's an alternative implementation; it's unclear if it's better
/*
	zoom(-delta/3);
*/

	if (delta < 0)
		zoom(1);
	else if (delta > 0)
		zoom(-1);
};
UI.prototype.worldDraw = function(ctx) {
	if (this.state) { this.state.worldDraw(ctx); }
};
UI.prototype.screenDraw = function(ctx) {
	if (this.state) { this.state.screenDraw(ctx); }
};
UI.prototype.cancel = function() {
	if (this.state) { this.state.cancel(); }
};
UI.prototype.update = function(elapsed) {
	if (this.state) { this.state.update(elapsed); }
};
return new UI();


}());
