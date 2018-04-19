window.Game = window.Game || {};

(function() {


//imports
var Game = window.Game;
var Math = window.Math;

Game.Vec = function(x, y) {
	this.x = x;
	this.y = y;
};
var Vec = Game.Vec;
Vec.ZERO = new Vec(0,0);

Vec.prototype.sqMag = function() {
	return this.x*this.x + this.y*this.y;
};
Vec.prototype.magnitude = function() {
	return Math.sqrt(this.sqMag());
};
Vec.prototype.normalized = function() {
	var mag = this.magnitude();
	return this.times(1/mag);
};
Vec.prototype.plus = function(v) {
	return new Vec(this.x+v.x, this.y+v.y);
};
Vec.prototype.minus = function(v) {
	return new Vec(this.x-v.x, this.y-v.y);
};
Vec.prototype.times = function(scalar) {
	return new Vec(this.x*scalar, this.y*scalar);
};
Vec.prototype.dot = function(v) {
	return this.x*v.x + this.y*v.y;
};
Vec.prototype.project = function(v) {
	var mag = v.magnitude();
	return v.times(this.dot(v) / mag / mag);
};
Vec.prototype.negated = function() {
	return new Vec(-this.x, -this.y);
};
Vec.prototype.perp = function() {  // Rotates 90 degrees clockwise
	return new Vec(-this.y, this.x);
};


}());
