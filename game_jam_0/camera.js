// Load main library
var Game = window.Game || {};

Game.camera = (function() {
	function Camera() {
		this.x = 0;
		this.y = 0;
		this.destx = 0;
		this.desty = 0;
	};

	Camera.prototype.update = function(elapsed) {
		var WIDTH = 800,
			HEIGHT = 480,
			change = false;
		if(Game.player.x > this.destx + WIDTH - 32) {
			this.destx += WIDTH-32;
			change = true;
		}
		if(Game.player.y > this.desty + HEIGHT - 32) {
			this.desty += HEIGHT-32;
			change = true;
		}
		if(Game.player.x < this.destx) {
			this.destx += -WIDTH+32;
			change = true;
		}
		if(Game.player.y < this.desty) {
			this.desty += -HEIGHT+32;
			change = true;
		}

		if(change)
			Game.player.setSpawnPoint();

		var self = this;
		var move = function(x, y) {
			self.x += x;
			self.y += y;
		};

		var speed = 0.006 * elapsed;
		move((this.destx - this.x) * speed,  (this.desty - this.y) * speed);
	};

	return new Camera();
}());
