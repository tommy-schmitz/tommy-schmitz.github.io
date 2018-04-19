window.Game = window.Game || {};

var Game = window.Game;

Game.assert(Game.Vec);

(function() {

function ParticleSystem() {
	this.instances = [];
};
Game.ParticleSystem = ParticleSystem;

ParticleSystem.prototype.add = function (instance) {
	this.instances.push(instance);
};
ParticleSystem.prototype.update = function (elapsed) {
	var i;
	for(i = this.instances.length-1;  i >= 0;  --i)
		if(this.instances[i].update(elapsed))
			this.instances.splice(i, 1);
};
ParticleSystem.prototype.draw = function (ctx) {
	var i;
	for(i = 0;  i < this.instances.length;  ++i)
		this.instances[i].draw(ctx);
};

}());
