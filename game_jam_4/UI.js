// Load main library
var Game = window.Game || {};

Game.assert(Game.GameState);

Game.ui = (function() {


// UI Singleton object
var UI = function() {
	// TODO: Set the starting UI state appropriately.
	this.state = hello;
};
UI.prototype.mouseMove = function(x, y) {
	this.state.mouseMove(x, y);
};
UI.prototype.mouseDown = function(x, y) {
	if (this.state) { this.state.mouseDown(x,y); }
};
UI.prototype.keyDown = function(key) {
	Game.assert(this.state);
	this.state.keyDown(key);
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
UIState.prototype.mouseDown = function (x, y) {};
UIState.prototype.mouseMove = function (x, y) {};
UIState.prototype.keyDown = function(key) {};
UIState.prototype.worldDraw = function (ctx) {};
UIState.prototype.screenDraw = function (ctx) {};
UIState.prototype.cancel = function() {};
UIState.prototype.update = function(elapsed) {};

var hello = new UIState();
hello.gs = new Game.GameState();
hello.keyDown = function(key) {
	this.gs.player.keyDown(key, this.gs);
};
hello.update = function(elapsed) {
	this.gs.update(elapsed, Game.Input);
};
hello.worldDraw = function(ctx) {
	this.gs.draw(ctx);
};
hello.screenDraw = function(ctx) {
	debugDraw(ctx, 'hello world');
	Game.drawHPBar(ctx, this.gs.player.hp, this.gs.player.hpMax, 4);
};

// TODO: Add more UIState objects


return new UI();


}());
