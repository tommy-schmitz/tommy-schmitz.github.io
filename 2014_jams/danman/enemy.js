window.Game = window.Game || {};

var Game = window.Game;

(function() {

var Enemy = function(x,y) {
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.hp = 1;
//	this.w = 2;   // defaults don't make any sense for these
//	this.h = 2;
	this.dmg = 1;
	this.canFall = true;
};
Game.Enemy = Enemy;

// Returns whether this enemy should die!
Enemy.prototype.getHit = function(bullet) {
	return true;
};

Enemy.prototype.rect = function() {
	return { x0: this.x-this.w/2 , x1: this.x+this.w/2 ,
	         y0: this.y-this.h   , y1: this.y                     };
};

Enemy.prototype.tryHit = function(player) {
	return 0;
};

Enemy.prototype.update = function(elapsed, gs) {
	if (this.canFall) {
		this.vy += elapsed * Game.GRAVITY;
	}
	this.x += elapsed * this.vx;
	this.y += elapsed * this.vy;
	
};

Enemy.prototype.draw = function(ctx) {
	Game.drawImage(ctx, 'default.png', this.x, this.y);
};

}());
