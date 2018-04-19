window.Game = window.Game || {};

var Game = window.Game;

(function() {

function Bang(x,y) {
	Game.Enemy.call(this,x,y);
	this.animElapsed = 0;
	this.animFrame = 0;
	this.animRunningRight = [
		'default.png'];
	this.animRunningLeft = [
		'default.png'];
	this.animCurrent = this.animRunningLeft;
	this.SHOOT_FREQ = 2500;
	this.shootTimer = 0;
	this.shooting = false;
	this.dmg = 5;
	this.dmgShot = 3;
	this.w = Game.PLAYER_WIDTH;
	this.h = Game.PLAYER_HEIGHT;
	this.dir = -1;
};
Bang.prototype = new Game.Enemy();
Game.Bang = Bang;

Bang.prototype.tickAnimation = function(elapsed) {
	this.animElapsed += elapsed;
	if (this.animCurrent.length > 1 && this.animElapsed > this.animCurrent[this.animFrame+1]) {
		this.animFrame += 2;
		if (this.animFrame >= this.animCurrent.length) {
			this.animFrame = 0;
		}
		this.animElapsed = 0;
	}
};

Bang.prototype.tryHit = function(player) {
	if (this.shooting) {
		var bangRect = {
			x0: this.x - this.w/2 - 6,
			x1: this.x + this.w/2 + 6,
			y0: this.y - this.h,
			y1: this.y
		};
		if(Game.isOverlap(bangRect, player.rect()))  {
			// Bullet Hit
			return this.dmgShot;
		}
	}
	if(Game.isOverlap(this.rect(), player.rect())) {
		// Melee Hit
		return this.dmg;
	}
	return 0;
};

Bang.prototype.update = function(elapsed, gs) {
	this.dir = (gs.player.x > this.x  ?  1  :  -1);
	var grid = gs.world.grid;
	Game.Enemy.prototype.update.call(this,elapsed);
	var hitWall = Game.collide(grid, this)[1];
	this.shootTimer += elapsed;
	if(this.shootTimer > this.SHOOT_FREQ) {
		this.shooting = true;
		this.shootTimer -= this.SHOOT_FREQ;
	} else {
		this.shooting = false;
	}
	this.tickAnimation(elapsed);
};

Bang.prototype.draw = function(ctx) {
	var screenX = Math.floor(this.x * 16) - 24;
	var screenY = Math.floor(this.y * 16) - 26;
	var sprite = 'bangjoe';
	if(this.shootTimer < 1000  ||  this.shootTimer + 400 >= this.SHOOT_FREQ)
		sprite += '-bang';
	else
		sprite += '-stand';
	if(this.dir > 0)
		sprite += '-R';
	else
		sprite += '-L';
	sprite += '.png';
	Game.drawImage(ctx, sprite, screenX, screenY);

	if(this.shootTimer < 1000)
		Game.drawImage(ctx, 'bang.png', screenX + 8, screenY - 8);

	if(Game.DEBUG_HITBOXES)
		Game.debugRect(ctx, this.rect());
};


}());
