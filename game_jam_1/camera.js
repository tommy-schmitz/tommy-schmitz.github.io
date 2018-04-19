// Load main library
var Game = window.Game || {};

Game.camera = (function() {

// Correct for floating point errors in values that are very close to integers
var EPSILON = 0.0001;
function epsilon(_number) {
	if (_number - Math.floor(_number) < EPSILON) { return Math.floor(_number); }
	else if (Math.ceil(_number) - _number < EPSILON) { return Math.ceil(_number); }
	return _number;
};

var Camera = function() {
	this.x = 0;
	this.y = 0;
	this.destx = 0;
	this.desty = 0;
};

Camera.prototype.update = function(elapsed) {
	var speed = 0.006 * elapsed;
	this.x += (this.destx - this.x) * speed;
	this.x = epsilon(this.x);
	this.y += (this.desty - this.y) * speed;
	this.y = epsilon(this.y);
};

Camera.prototype.scroll = function (x,y) {
	this.destx += x;
	this.desty += y;
	
	this._boundSelf();
};
Camera.prototype.goTo = function (x,y) {
	this.destx = x + (Game.TILE_WIDTH * Game.SCALE_FACTOR - Game.WIDTH) / 2;
	this.desty = y + (Game.TILE_HEIGHT * Game.SCALE_FACTOR - Game.HEIGHT) / 2;
	
	this._boundSelf();
};
Camera.prototype._boundSelf = function() {
	var worldBounds = Game.currentWorld.getBounds();
	
	if (this.destx > worldBounds.right - Game.WIDTH) { this.destx = worldBounds.right - Game.WIDTH; }
	if (this.destx < 0) { this.destx = 0; }
	if (this.desty > worldBounds.bottom - Game.HEIGHT) { this.desty = worldBounds.bottom - Game.HEIGHT; }
	if (this.desty < 0) { this.desty = 0; }
};

return new Camera();


}());
