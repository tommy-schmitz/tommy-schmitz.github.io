window.Game = window.Game || {};

var Game = window.Game;
Game.assert(Game.PLAYER_WIDTH);
Game.assert(Game.PLAYER_HEIGHT);

(function() {


var VULNERABLE_PERIOD = 200;

var ShieldJoe = function(x, y) {
	Game.Enemy.call(this,x,y);
	this.w = Game.PLAYER_WIDTH;
	this.h = Game.PLAYER_HEIGHT;

	this.cooldown = 0;
	this.windup = 0;
	this.dir = -1;
	this.dmg = 5;
};
ShieldJoe.prototype = new Game.Enemy();
Game.ShieldJoe = ShieldJoe;

ShieldJoe.prototype.getHit = function(bullet, gs) {
	if(this.cooldown > VULNERABLE_PERIOD) {
		bullet.dir *= -1;
		gs.enemyBullets.push(bullet);
		return false;
	} else {
		return true;
	}
};

ShieldJoe.prototype.tryHit = function(player) {
	if(Game.isOverlap(this.rect(), player.rect())) {
		// Melee Hit
		return this.dmg;
	}
	return 0;
};

ShieldJoe.prototype.update = function(elapsed, gs) {
	this.dir = (gs.player.x > this.x  ?  1  :  -1);
	if(this.cooldown === 0  &&  this.windup === 0) {
		var r = {
			x0: this.x-10,
			x1: this.x+10,
			y0: this.y-this.h,
			y1: this.y
		};
		for(var i = 0;  i < gs.bullets.length;  ++i) {
			var b = gs.bullets[i];
			if(Game.isOverlap(r, b.rect()))
				this.windup = 100;
		}
	} else if(this.cooldown > 0) {
		this.cooldown = Math.max(0, this.cooldown - elapsed);
	} else if(this.windup > 0) {
		this.windup = Math.max(0, this.windup - elapsed);
		if(this.windup <= 0)
			this.cooldown = 1000 + VULNERABLE_PERIOD;
	}
};

ShieldJoe.prototype.draw = function(ctx) {
	if(this.cooldown<VULNERABLE_PERIOD || Math.floor(this.cooldown/25)%2==0) {
		var screenX = Math.floor(this.x * 16) - 24;
		var screenY = Math.floor(this.y * 16) - 26;
		var sprite = 'shieldjoe';
		if(this.cooldown > 0)
			sprite += '-shield';
		else
			sprite += '-stand';
		if(this.dir > 0)
			sprite += '-R';
		else
			sprite += '-L';
		sprite += '.png';
		Game.drawImage(ctx, sprite, screenX, screenY);
	}

	if(Game.DEBUG_HITBOXES)
		Game.debugRect(ctx, this.rect());
};


}());
