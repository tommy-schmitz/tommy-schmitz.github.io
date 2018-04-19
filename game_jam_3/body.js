window.Game = window.Game || {};

//imports
var Game = window.Game;

Game.assert(Game.Vec);

(function() {


var Body = function(pos, vel, r, mass, stationary) {
	if(stationary) {
		Object.defineProperty(this, 'pos', {
			get: function()       {return pos;},
			set: function(unused) {}
		});
		Object.defineProperty(this, 'vel', {
			get: function()       {return Game.Vec.ZERO;},
			set: function(unused) {}
		});
	} else {
		this.pos = pos;
		this.vel = vel;
	}
	this.r = r;
	this.mass = mass;
	this.stationary = stationary;
	this.tractor = false;
	this.dead = false;
	this.isDrone = false;
};
Game.Body = Body;

Body.prototype.getHeight = function(approachVector) {
	return this.r;
};

Body.prototype.getNormal = function(approachVector) {
	return approachVector;
};

Body.prototype.isMassive = function() {
	// BEFORE CHANGING THIS OR OVERRIDING THIS: Search for "Inlined isMassive"
	return this.mass >= 1;
}
Body.prototype.isColonizable = function() {return this.isMassive();};
Body.prototype.isColony = function() {return false;};
Body.prototype.susceptibleToTools = function() {return !this.isColonizable();};

Body.prototype.draw = function(ctx) {

	ctx.beginPath();
	
	if (Game.camera.zoom * this.r < 1.5) {
	
		var pixelSize = Math.ceil(4/Game.camera.zoom);
		
		ctx.fillStyle = '#fff';
		ctx.fillRect(this.pos.x - pixelSize * 0.5, this.pos.y - pixelSize * 0.5, pixelSize, pixelSize);
	
	} else {
	
		ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2*Math.PI, true);
		ctx.strokeStyle = '#fff';
		ctx.lineWidth	= 2 / Game.camera.zoom;
		ctx.stroke();
		
	} 
	
};


}());
