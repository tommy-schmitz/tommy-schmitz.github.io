// Load main library
var Game = window.Game || {};

Game.actors = Game.actors || [];

(function() {

	var normalize = function(v) {
		var len = Math.sqrt(v.x*v.x + v.y*v.y);
		if(len == 0.0) {
			v.x = -1;
			v.y = 0;
		} else {
			v.x /= len;
			v.y /= len;
		}
	};

	var GRID_SIZE = 32;
	var SPEED = 0.2;
	var LENGTH = 100;

	var Laser = function(x, y) {
		var j = Math.floor(x/GRID_SIZE);
		var i = Math.floor(y/GRID_SIZE);

		this.gridX = j;
		this.gridY = i;
		this.x = x;
		this.y = y;
		this.width = 0;
		this.height = 0;
	
		this.homeSectorX = Math.floor((j - 1) / Game.wallGrid.sectorWidth);
		this.homeSectorY = Math.floor((i - 1) / Game.wallGrid.sectorHeight);
		this.leftBoundary = this.homeSectorX * Game.wallGrid.sectorWidth - 4;
		this.topBoundary = this.homeSectorY * Game.wallGrid.sectorHeight - 4;
		this.rightBoundary = (this.homeSectorX+1) * Game.wallGrid.sectorWidth + 5;
		this.bottomBoundary = (this.homeSectorY+1) * Game.wallGrid.sectorHeight + 5;

		this.length = 0;
		this.willBeDestroyed = false;
		this.time = 0;
		this.attackPower = 1;

		var playerCenter = {
				x: Game.player.x+GRID_SIZE/2,
				y: Game.player.y+GRID_SIZE/2
			};
		this.dir = {x: playerCenter.x - x, y: playerCenter.y - y}
		normalize(this.dir);
	};

	Laser.prototype.destroy = function destroy() {
		this.willBeDestroyed = true;
	};

	Laser.prototype.update = function update(elapsed) {
		// Destroy laser if off-screen
		if (     this.homeSectorX !== Game.player.sectorX
		      || this.homeSectorY !== Game.player.sectorY) {
			this.isDestroyed = true;
			return;
		}

		this.time += elapsed;

		if(this.willBeDestroyed) {
			this.length -= elapsed * SPEED;
			if(this.length <= 0)
				this.isDestroyed = true;
			return;
		}

		// Destroy when hitting wall
		var j = Math.floor(this.x / GRID_SIZE);
		var i = Math.floor(this.y / GRID_SIZE);
		if(Game.wallGrid[i][j] !== null) {
			this.destroy();
			return;
		}

		this.x += elapsed * this.dir.x * SPEED;
		this.y += elapsed * this.dir.y * SPEED;
		this.length += elapsed * SPEED;
		this.length = Math.min(this.length, LENGTH);
	};

	Laser.prototype.draw = function draw(ctx) {
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x - this.dir.x*this.length, this.y - this.dir.y*this.length);
		ctx.lineCap = 'round';
		ctx.lineWidth = 3;
		ctx.strokeStyle = '#F00';
		ctx.stroke();
		ctx.strokeStyle = '#FCC';
		ctx.lineWidth = 1;
		ctx.stroke();
	};

	Game.addLaser = function(x, y) {
		Game.playSound("laser.wav");
		Game.actors.push(new Laser(x, y));
	};

}());
