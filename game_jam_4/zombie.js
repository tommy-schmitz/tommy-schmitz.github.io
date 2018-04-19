window.Game = window.Game || {};

var Game = window.Game;

(function() {

function Zombie(x,y) {
	Game.Enemy.call(this,x,y);
	this.vx = -0.003;
	this.animElapsed = 0;
	this.animFrame = 0;
	this.animRunningRight = [
		'bonehead-metal-R1.png', 115,
		'bonehead-metal-R2.png', 115];
	this.animRunningLeft = [
		'bonehead-metal-L1.png', 115,
		'bonehead-metal-L2.png', 115];
	this.animCurrent = this.animRunningLeft;
	this.w = Game.PLAYER_WIDTH;
	this.h = Game.PLAYER_HEIGHT;
	this.dmg = 9;
};
Zombie.prototype = new Game.Enemy();
Game.Zombie = Zombie;

Zombie.prototype.tickAnimation = function(elapsed) {
	this.animElapsed += elapsed;
	if (this.animCurrent.length > 1 && this.animElapsed > this.animCurrent[this.animFrame+1]) {
		this.animFrame += 2;
		if (this.animFrame >= this.animCurrent.length) {
			this.animFrame = 0;
		}
		this.animElapsed = 0;
	}
};

Zombie.prototype.tryHit = function(player) {
	if(Game.isOverlap(this.rect(), player.rect()))
		return this.dmg;
	return 0;
};

Zombie.prototype.update = function(elapsed, gs) {
	var grid = gs.world.grid;
	Game.Enemy.prototype.update.call(this,elapsed);
	var hitWall = Game.collide(grid, this)[1];
	if (hitWall*this.vx > 0) {
		this.vx *= -1;
		if (this.vx > 0) {
			this.animCurrent = this.animRunningRight;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
		else if (this.vx < 0) {
			this.animCurrent = this.animRunningLeft;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
	}
	this.tickAnimation(elapsed);
};

Zombie.prototype.draw = function(ctx) {
	var screenX = Math.floor(this.x * 16) - 16;
	var screenY = Math.floor(this.y * 16) - 28;
	Game.drawImage(ctx, this.animCurrent[this.animFrame], screenX, screenY);
	if(Game.DEBUG_HITBOXES)
		Game.debugRect(ctx, this.rect());
};


}());
