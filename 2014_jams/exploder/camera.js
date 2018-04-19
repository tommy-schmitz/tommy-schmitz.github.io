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
	this.zoom = 0.25;
	this.zoomFactor = 1.2;
	this.snap = 0;
};
Camera.prototype.update = function(elapsed) {
	this.x = this.destx;
	this.y = this.desty;

/*
	if (this.snap > 0) {
		this.x = this.destx;
		this.y = this.desty;
		this.snap--;
	}

	var speed = 0.01 * elapsed;
	this.x += (this.destx - this.x) * speed;
	this.x = epsilon(this.x);
	this.y += (this.desty - this.y) * speed;
	this.y = epsilon(this.y);
*/

};
Camera.prototype.scroll = function (x,y) {
	this.destx += x;
	this.desty += y;
	
	this._boundSelf();
};
Camera.prototype.goTo = function (x,y) {
	this.destx = x - Game.WIDTH / (2*this.zoom);
	this.desty = y - Game.HEIGHT / (2*this.zoom);
	
	this._boundSelf();
};
Camera.prototype._boundSelf = function() {

	// TODO: Add code to prevent camera from going off screen.

};

return new Camera();


}());
