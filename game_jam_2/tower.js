// Load main library
var Game = window.Game || {};

(function() {

// constructor
var Bullet = function(x0, y0, x1, y1) {
	this.x0 = x0;
	this.y0 = y0;
	this.x1 = x1;
	this.y1 = y1;
    this.startTime = 250;
	this.time = this.startTime;
};
Bullet.prototype.update = function(elapsed) {
	this.time -= elapsed;
	if(this.time <= 0)
		return true;
	return false;
};
Bullet.prototype.draw = function(ctx) {
	var x0 = Game.game2screenX(this.x0, this.y0);
	var y0 = Game.game2screenY(this.x0, this.y0);
	var x1 = Game.game2screenX(this.x1, this.y1);
	var y1 = Game.game2screenY(this.x1, this.y1);
	ctx.beginPath();
	ctx.moveTo(x0, y0);
	ctx.lineTo(x1, y1);
	ctx.lineWidth = 4;
    var a = (this.time/this.startTime);
	ctx.strokeStyle = 'rgba(255,255,255,'+a+')';
	ctx.stroke();
};

var BOMB_ARC_HEIGHT = 100;
var BOMB_FLIGHT_TIME = 800;
var BOMB_EXPLOSION_RADIUS = 2;
var Bomb = function(x0, y0, x1, y1) {
	this.x = x0;
	this.y = y0;
	this.z = 0;
	this.targetX = x1;
	this.targetY = y1;
	this.time = BOMB_FLIGHT_TIME;
};
Bomb.prototype.update = function(elapsed) {
	this.time -= elapsed;
	
	var t = this.time / BOMB_FLIGHT_TIME;
	this.z = 4*t*(1-t);
	
	if(this.time <= 0) {
		Game.currentState.addBullet(new Explosion(this.targetX,this.targetY));
		return true;
	}
	return false;
};
Bomb.prototype.draw = function(ctx) {
	var t = this.time / BOMB_FLIGHT_TIME;
	var cX = t * this.x + (1 - t) * this.targetX;
	var cY = t * this.y + (1 - t) * this.targetY;
	var sX = Game.game2screenX(cX, cY);
	var sY = Game.game2screenY(cX, cY);
	
	ctx.globalAlpha = 0.5;
	Game.drawEllipse(ctx,sX-6,sY-3,12,6,"#000");
	ctx.globalAlpha = 1;
	
	ctx.beginPath();
	ctx.fillStyle = "#424";
	ctx.arc(sX,sY - this.z * BOMB_ARC_HEIGHT,6,0,2*Math.PI,false);
	ctx.fill();
};

var EXPLOSION_IMAGE_SIZE = 168;
var EXPLOSION_OFFSET_X = EXPLOSION_IMAGE_SIZE * 0.5;
var EXPLOSION_OFFSET_y = 120;
var EXPLOSION_FRAMES = 12;
var EXPLOSION_TIME = 600;
var Explosion = function(x0, y0) {
	this.x = x0;
	this.y = y0;
    this.startTime = EXPLOSION_TIME;
	this.time = this.startTime;
	
	Game.playSound('explosion.wav');
			
	// Explosion attack
	var DAMAGE = 20;
	var enemies = Game.currentState.getEnemies();
	for (var i = 0, length = enemies.length; i < length; i++) {
		var enemy = enemies[i];
		var dx = enemy.getX() - this.x;
		var dy = enemy.getY() - this.y;
		var distance = Math.sqrt((dx*dx)+(dy*dy));
		if (distance < BOMB_EXPLOSION_RADIUS) {
			enemy.subtractHp(DAMAGE);
		}
	}
};
Explosion.prototype.update = function(elapsed) {
	this.time -= elapsed;
	
	if(this.time <= 0)
		return true;
	return false;
};
Explosion.prototype.draw = function(ctx) {
	var t = Math.floor(EXPLOSION_FRAMES * (1 - this.time / EXPLOSION_TIME));
	var sX = Game.game2screenX(this.x, this.y);
	var sY = Game.game2screenY(this.x, this.y);
	
	Game.drawImage(ctx, 'explosion.png', 
		t * EXPLOSION_IMAGE_SIZE,	// Slice x
		0,							// Slice y
		EXPLOSION_IMAGE_SIZE,		// Slice width
		EXPLOSION_IMAGE_SIZE,		// Slice height
		Math.round(sX - EXPLOSION_OFFSET_X), 	// Draw x
		Math.round(sY - EXPLOSION_OFFSET_y),	// Draw y
		EXPLOSION_IMAGE_SIZE,		// Draw width
		EXPLOSION_IMAGE_SIZE);		// Draw height
};

Game.Tower = (function() {

	Game.TOWER_STATION = 'station';
	Game.TOWER_WALL = 'wall';
	Game.TOWER_BASIC = 'basic';
	Game.TOWER_BOMB = 'bomb';
	
	var TOWER_HEIGHT = 64;
	var TOWER_WIDTH = 64;

	var COOLDOWN = 2000;
	var NORANGE = -1;
	var SHORTRANGE = 1;
	var LONGRANGE = 5;
	var DAMAGE = 10;
	function Tower(type, x, y) {
		switch (type) {
			case Game.TOWER_STATION:	Tower_makeStation(this); break;
			case Game.TOWER_WALL:		Tower_makeWall(this); break;
			case Game.TOWER_BASIC:		Tower_makeBasic(this); break;
			case Game.TOWER_BOMB:		Tower_makeBomb(this); break;
			default: Game.assert(false);	break;
		}
		this.type = type;
		this.sprite = this.type+".png";
		this.tag = 'tower';
		if (this.cooldown == null) { this.cooldown = COOLDOWN; }
		this.attackTimeout = 0;
		this.x = x;
		this.y = y;
		this.tile;
		this.maxHP = 60;
		this.hp = this.maxHP;
	}
	Tower.prototype.isDead = function (){
		if (this.hp <= 0) {
			return true;
		}
		return false;
	};
	Tower.prototype.setTile = function (tile) {
		this.tile = tile;
	};
	Tower.prototype.getType = function() {
		return this.type;
	};
	Tower.prototype.draw = function(ctx, x, y, options) {
		if (this.getRange() >= 0){
			var rangeWidth = (this.getRange() - 2) * Game.TILE_WIDTH * 2;
			var rangeHeight = (this.getRange() - 1.5)  * 2 * Game.TILE_HEIGHT;
			//Game.drawEllipse(ctx, Math.floor(x - rangeWidth/2), (y - rangeHeight/2), rangeWidth, rangeHeight, "rgba(111, 240, 245, 0.4)");
		}
		
		if (options && options.canDelete) {
			Game.drawImage(ctx, "delete_"+this.getImage(), Math.floor(x - this.offsetX), (y - this.offsetY));
		} else {
			Game.drawImage(ctx, this.getImage(), Math.floor(x - this.offsetX), (y - this.offsetY));
		}

		//hp bar
		var B = 25;
		ctx.beginPath();
		ctx.fillStyle = 'black';
		ctx.rect(x-B,y+12,2*B,5);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = 'green';
		ctx.rect(x-B,y+12,2*B*this.hp/this.maxHP,5);
		ctx.fill();
	};
	Tower.prototype.getImage = function() {
		return this.sprite;
	};
	Tower.prototype.getRange = function() {
		switch (this.getType()) {
			case Game.TOWER_STATION:
				return NORANGE;
			case Game.TOWER_WALL:
				return NORANGE;
			case Game.TOWER_BASIC:
				return LONGRANGE;
			case Game.TOWER_BOMB:
				return LONGRANGE;
			default: 
				Game.assert(false);break;
		}
	};
	Tower.prototype.attack = function (){
		var enemies = Game.currentState.getEnemies();
		var closestTarget;
		var closestDistance = 999;
		for (var i = 0, length = enemies.length; i < length; i++) {
			var enemy = enemies[i];
			var dx = enemy.getX() - this.x;
			var dy = enemy.getY() - this.y;
			var distance = Math.sqrt((dx*dx)+(dy*dy));
			if (distance < closestDistance) {
				closestDistance = distance;
				closestTarget = enemy;
			}
		}
		if (closestDistance < this.getRange()) {
			this.attackTimeout = this.cooldown;
			this.fire(closestTarget);
		}
	};
	Tower.prototype.fire = function(target) {
		Game.playSound('tower_shoot.wav');
		target.subtractHp(DAMAGE);
        var BULLET_OFFSET_X = 0;
        var BULLET_OFFSET_Y = -64;
        var screenX = Game.game2screenX(this.x+0.5,this.y+0.5);
        var screenY = Game.game2screenY(this.x+0.5,this.y+0.5);
        var gameX = Game.screen2gameX(screenX+BULLET_OFFSET_X,screenY+BULLET_OFFSET_Y);
        var gameY = Game.screen2gameY(screenX+BULLET_OFFSET_X,screenY+BULLET_OFFSET_Y);
		Game.currentState.addBullet(new Bullet(gameX,gameY,target.getX(),target.getY()));
	};
	Tower.prototype.update = function(elapsedTime) {
		this.attackTimeout -= elapsedTime;
		if (this.attackTimeout <= 0) {
			this.attack();
		}
	};

	var Tower_makeStation = function(tower) {
		tower.offsetX=34; 
		tower.offsetY=48; 
	};
	var Tower_makeWall = function(tower) {
		tower.offsetX=32; 
		tower.offsetY=72;
	};
	var Tower_makeBasic = function(tower) {
		tower.offsetX=39; 
		tower.offsetY=92; 
	};
	var Tower_makeBomb = function(tower) {
		tower.cooldown = 3000;
		tower.offsetX=39; 
		tower.offsetY=92; 
		tower.fire = function(target) {
			Game.playSound('bomb_launch.wav');
			Game.currentState.addBullet(new Bomb(this.x+0.5,this.y+0.5,target.getX(),target.getY()));
		};
	};
	
	Game.drawEllipse = function drawEllipse(ctx, x, y, w, h, color) {
		var kappa = .5522848,
			ox = (w / 2) * kappa, // control point offset horizontal
			oy = (h / 2) * kappa, // control point offset vertical
			xe = x + w,           // x-end
			ye = y + h,           // y-end
			xm = x + w / 2,       // x-middle
			ym = y + h / 2;       // y-middle

		ctx.beginPath();

		ctx.moveTo(x, ym);
		ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
		ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
		ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
		ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
		//ctx.closePath(); // not used correctly, see comments (use to close off open path)
		ctx.fillStyle = color;
		ctx.fill();
		ctx.closePath();
	}
	return Tower;
}());

}());
