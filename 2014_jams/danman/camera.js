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

	// TODO: Add code to move the camera on each frame.

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
	this.destx = x * Game.SCALE_FACTOR * Game.TILE_WIDTH - Game.WIDTH / 2;
	this.desty = y * Game.SCALE_FACTOR * Game.TILE_WIDTH - Game.HEIGHT / 2;
	
	this._boundSelf();
};
Camera.prototype._boundSelf = function() {
	var worldBounds = Game.ui.state.gs.world.bounds;

	if (this.x < worldBounds.left * Game.SCALE_FACTOR) { 
		this.x = worldBounds.left * Game.SCALE_FACTOR; 
	}
	if (this.x + Game.WIDTH > worldBounds.right * Game.SCALE_FACTOR) { 
		this.x = worldBounds.right * Game.SCALE_FACTOR - Game.WIDTH; 
	}
	if (this.y < worldBounds.top * Game.SCALE_FACTOR) { 
		this.y = worldBounds.top * Game.SCALE_FACTOR; 
	}
	if (this.y + Game.HEIGHT > worldBounds.bottom * Game.SCALE_FACTOR) { 
		this.y = worldBounds.bottom * Game.SCALE_FACTOR - Game.HEIGHT; 
	}

	// TODO: Add code to prevent camera from going off screen.

};

return new Camera();


}());
