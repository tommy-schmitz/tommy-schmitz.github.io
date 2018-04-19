var Game = window.Game || {};


Game.assert(Game.isOverlap);
Game.assert(Game.PLAYER_WIDTH);
Game.assert(Game.PLAYER_HEIGHT);
Game.assert(Game.collide);
Game.assert(Game.loadWorld);
Game.assert(Game.ShieldJoe);
Game.assert(Game.Zombie);
Game.assert(Game.INITIAL_JUMP_VELOCITY);
Game.assert(Game.GRAVITY);
Game.assert(Game.track);


(function() {


var PLAYER_MAX_SPEED = Game.PLAYER_MAX_SPEED;
var PIXEL = 1/16;
var GRAVITY = Game.GRAVITY;
var INITIAL_JUMP_VELOCITY = Game.INITIAL_JUMP_VELOCITY;

console.log('gravity = ' + GRAVITY);
console.log('ijv     = ' + INITIAL_JUMP_VELOCITY);

var BULLET_WIDTH = 8 * PIXEL;
var BULLET_HEIGHT = 6 * PIXEL;
var Bullet = function(x, y, dir) {
	this.x = x + 10 * PIXEL * dir - BULLET_WIDTH/2;
	this.y = y - 15 * PIXEL;
	this.dir = dir;
	this.speed = 15/1000;
};
Bullet.prototype.rect = function() {
	return  {  x0: this.x  ,  x1: this.x+BULLET_WIDTH   ,
	           y0: this.y  ,  y1: this.y+BULLET_HEIGHT  };
};
Bullet.prototype.update = function(elapsed) {
	this.x += this.dir * this.speed * elapsed;
};
Bullet.prototype.draw = function(ctx) {
	var screenX = Math.floor(this.x * 16);
	var screenY = Math.floor(this.y * 16);
	var spriteDir = (this.dir === -1  ?  'L'  :  'R');
	Game.drawImage(ctx, 'bullet-' + spriteDir + '.png', screenX, screenY);
};

var Player = function() {
	this.x = 1;
	this.y = 2;
	this.vy = 0;
    this.vx = 0;
	this.w = 2;
	this.h = 2;
	this.hpMax = 28;
	this.hp = this.hpMax;
	this.animElapsed = 0;
	this.animFrame = 0;
	this.animStandingRight = ['player-standing-R1.png'];
	this.animStandingLeft = ['player-standing-L1.png'];
	this.animRunningRight = [
		'player-running-R1.png', 115,
		'player-running-R2.png', 115,
		'player-running-R3.png', 115,
		'player-running-R2.png', 115];
	this.animRunningLeft = [
		'player-running-L1.png', 115,
		'player-running-L2.png', 115,
		'player-running-L3.png', 115,
		'player-running-L2.png', 115];
	this.animCurrent = this.animStandingRight;
	this.damageCooldown = 0;
	this.invincibility = 0;
	this.damageReset = 600;
	this.deathCounter = 5000;
	this.dir = 1;
};

Player.prototype.rect = function() {
	return { x0: this.x-Game.PLAYER_WIDTH/2 , x1: this.x+Game.PLAYER_WIDTH/2 ,
	         y0: this.y-Game.PLAYER_HEIGHT  , y1: this.y                     };
};

Player.prototype.tickAnimation = function(elapsed) {
	this.animElapsed += elapsed;
	this.cannonCooldown = Math.max(0, this.cannonCooldown - elapsed);
	if (this.animCurrent.length > 1 && this.animElapsed > this.animCurrent[this.animFrame+1]) {
		this.animFrame += 2;
		if (this.animFrame >= this.animCurrent.length) {
			this.animFrame = 0;
		}
		this.animElapsed = 0;
	}
};

Player.prototype.updateHorizontalMovement = function(elapsed, input) {
	var ACCEL = PLAYER_MAX_SPEED / 100;
	if(this.previouslyAirborne)
		ACCEL = PLAYER_MAX_SPEED * 3;
    
    if (!input.left() && !input.right() || input.left() && input.right()) {
		if(this.vx > elapsed*ACCEL)
			this.vx -= elapsed*ACCEL;
		else if(this.vx < -elapsed*ACCEL)
			this.vx += elapsed*ACCEL;
		else
	        this.vx = 0;
		if(this.previouslyAirborne)
			this.vx = this.dir * PLAYER_MAX_SPEED * 0.999
		if (this.animCurrent !== this.animStandingRight && this.animCurrent === this.animRunningRight) {
			this.animCurrent = this.animStandingRight;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
		if (this.animCurrent !== this.animStandingLeft && this.animCurrent === this.animRunningLeft) {
			this.animCurrent = this.animStandingLeft;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
    }
	else if(input.left()) {
		if(this.vx > 0)
			this.vx = 0;
        this.vx -= elapsed * ACCEL;
		this.dir = -1;
		if (this.animCurrent !== this.animRunningLeft) {
			this.animCurrent = this.animRunningLeft;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
    }
    else if (input.right()) {
		if(this.vx < 0)
			this.vx = 0;
        this.vx += elapsed * ACCEL;
		this.dir = 1;
		if (this.animCurrent !== this.animRunningRight) {
			this.animCurrent = this.animRunningRight;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
    }
    if (this.vx > PLAYER_MAX_SPEED){
        this.vx = PLAYER_MAX_SPEED;
    }
    else if (this.vx < -PLAYER_MAX_SPEED) {
        this.vx = -PLAYER_MAX_SPEED;
    }

	if(this.damageCooldown > 0)
		this.x += elapsed * -0.002 * this.dir;
	else if(!this.scooting())
		this.x += elapsed * this.vx;
};

Player.prototype.scooting = function() {
	var b = this.vx === 0
	    ||  this.vx === PLAYER_MAX_SPEED  ||  this.vx === -PLAYER_MAX_SPEED;
	return !b;
}

Player.prototype.updateVerticalMovement = function(elapsed, input) {
    this.vy += elapsed * GRAVITY;
    if(!input.jump()  &&  this.vy < 0)
		this.vy = 0;
    this.y += elapsed * this.vy;
	
	if ((this.y + 0.1) * Game.TILE_WIDTH > Game.ui.state.gs.world.bounds.bottom) {
		this.dead = elapsed;
		this.y -= elapsed * this.vy;
	}
}

Player.prototype.getHit = function(dmg) {
	if (!this.dead && dmg > 0) {
		this.hp -= dmg;
		if (this.hp > 0) {
			this.vy = Math.max(0, this.vy);
			this.damageCooldown = this.damageReset;
			this.invincibility = 1500;
		} else {
			this.dead = 1;
		}
	}
};

var noInput = {
	left:  function() {return false;},
	right: function() {return false;},
	up:    function() {return false;},
	down:  function() {return false;},
	jump:  function() {return false;},
	shoot: function() {return false;}
};

Player.prototype.update = function(elapsed, input, gs) {
	var grid = gs.world.grid;

	if(this.damageCooldown > 0)
		input = noInput;

	if (this.dead > 0) {
		this.dead += elapsed;
		if (this.dead > this.deathCounter) {
			Game.ui.state.gs = new GameState(gs.checkpoint);
		}
	} else {
		this.updateHorizontalMovement(elapsed, input);
		this.updateVerticalMovement(elapsed, input);
		this.previouslyAirborne = !(Game.collide(grid, this)[0]);
		this.tickAnimation(elapsed);
	}
};
Player.prototype.draw = function(ctx) {
	var screenX = Math.floor(this.x * 16 + 0.00001) - 24;
	var screenY = Math.floor(this.y * 16 + 0.00001) - 26;
	
	if (this.dead > 0) {
		for (i = 0; i < 8; ++i) {
			if (i >= 1 && i <= 3) { dx = this.dead * 0.1; }
			else if (i >= 5 && i <= 7) { dx = this.dead * -0.1; }
			else { dx = 0; }
			if (i < 2 || i >= 7) { dy = this.dead * -0.1; }
			else if (i >= 3 && i <= 5) { dy = this.dead * 0.1; }
			else { dy = 0; }
			if (dx && dy) {
				dx *= 0.707;
				dy *= 0.707;
			}
			
			ctx.beginPath();
			ctx.fillStyle = "#fff";
			ctx.arc(screenX + 24 + dx,screenY + 26 + dy,Math.floor(this.dead / 100) % 2 === 0 ? 8 : 16,0,2*Math.PI,false);
			ctx.fill();
		}
	} 
	else if (this.invincibility <= 0 ||
		(this.invincibility >= 500 && (Math.floor(this.invincibility / 100) % 3) !== 0) ||
		(this.invincibility < 500 && (Math.floor(this.invincibility / 50) % 2) === 0)) {
		var dir = (this.dir === -1  ?  'L'  :  'R');
		var sprite;
		if(this.damageCooldown > 0)
			sprite = 'player-pain-'+dir+'.png';
		else {
			if(this.previouslyAirborne)
				sprite = 'player-airborne-'+dir+'.png';
			else if(this.scooting())
				sprite = 'player-scoot-'+dir+'.png';
			else
				sprite = this.animCurrent[this.animFrame];

			if(this.cannonCooldown > 0) {
				var n = 'player-'.length;
				sprite = 'player-cannon-' + sprite.substring(n);
			}
		}
		Game.drawImage(ctx, sprite, screenX, screenY);
	}
	if(Game.DEBUG_HITBOXES)
		Game.debugRect(ctx, this.rect());
};
Player.prototype.keyDown = function(key, gs) {
	if(this.damageCooldown > 0)
		return;

	if (!this.dead) {
		if(key === 'right')
			this.rightKeyDown();
		if(key === 'left')
			this.leftKeyDown();
		if(key === 'fire')
			this.fireKeyDown(gs);
		if(key === 'jump')
			this.jumpKeyDown();
	}
};
Player.prototype.leftKeyDown = function() {
	this.x -= PIXEL;
};
Player.prototype.rightKeyDown = function() {
	this.x += PIXEL;
};
Player.prototype.fireKeyDown = function(gs) {
	this.cannonCooldown = 300;
	if(gs.bullets.length < 3)
		gs.bullets.push(new Bullet(this.x, this.y, this.dir));
};
Player.prototype.jumpKeyDown = function() {
	if(!this.previouslyAirborne)
		this.vy = INITIAL_JUMP_VELOCITY;
};
Player.prototype.jumpKeyUp = function() {
	Game.assert(false);
};
Player.prototype.knockBack = function() {
	// stub
};

var GameState = Game.GameState = function(initializer) {
	this.player = new Player();
	this.enemyList = [];
	this.bullets = [];
	this.enemyBullets = [];

	if(initializer === undefined) {
//		initializer = Game.track[Game.track.length-1];
		initializer = Game.track[0];
	}

    this.initializer = initializer;
	Game.camera.x = 0;
	Game.camera.y = 0;
	
	initializer(this);
	Game.assert(this.checkpoint);
	Game.assert(this.world);
};
GameState.prototype.advanceWorlds = function () {
    this.trackIndex++;
    if (this.trackIndex < Game.track.length) {
        this.world = Game.track[this.trackIndex](this);
    }
};

GameState.prototype.checkHits = function(elapsed) {
	if(this.player.damageCooldown > 0)
		this.player.damageCooldown -= elapsed;
	if(this.player.damageCooldown <= 0)
		this.player.damageCooldown = 0;

	if (this.player.invincibility > 0) this.player.invincibility -= elapsed;
	for (var i=0; i<this.enemyList.length; i++) {
		if (this.player.invincibility <= 0) {
			this.player.getHit(this.enemyList[i].tryHit(this.player));
		}
	}
};

GameState.prototype.update = function(elapsed, input) {
	this.player.update(elapsed, input, this);
	this.checkHits(elapsed);
	for(var i=0; i<this.enemyList.length; i++) {
		this.enemyList[i].update(elapsed, this);
	}
	for(var i=0; i<this.bullets.length; i++)
		this.bullets[i].update(elapsed);
	for(var i=0; i<this.enemyBullets.length; i++)
		this.enemyBullets[i].update(elapsed);

	// Remove off-screen bullets
	for(var i = this.bullets.length-1;  i >= 0;  --i) {
		var b = this.bullets[i];
		if (b.x * Game.TILE_WIDTH * Game.SCALE_FACTOR < Game.camera.x ||
			b.x * Game.TILE_WIDTH * Game.SCALE_FACTOR > Game.camera.x + Game.WIDTH)
			this.bullets.splice(i,1);
	}
	for(var i = this.enemyBullets.length-1;  i >= 0;  --i) {
		var b = this.enemyBullets[i];
		if (b.x * Game.TILE_WIDTH * Game.SCALE_FACTOR < Game.camera.x ||
			b.x * Game.TILE_WIDTH * Game.SCALE_FACTOR > Game.camera.x + Game.WIDTH)
			this.enemyBullets.splice(i,1);
	}

	// Check collision between bullets and enemies
	for(var i = this.bullets.length-1;  i >= 0;  --i) {
		var b = this.bullets[i];

		for(var j = this.enemyList.length-1;  j >= 0;  --j) {
			var e = this.enemyList[j];

			var collision = Game.isOverlap(b.rect(), e.rect());
			if(collision) {
				var death = e.getHit(b, this);
				if(death)
					this.enemyList.splice(j, 1);
				this.bullets.splice(i, 1);
				break;  // MARK (referenced below)
			}
		}
		// do not add any code at this position -- see MARK above
	}

	// check collisions between enemy bullets and player
	if(this.player.invincibility <= 0) {
		for(var i = this.enemyBullets.length-1;  i >= 0;  --i) {
			var b = this.enemyBullets[i];
			var collision = Game.isOverlap(this.player.rect(), b.rect());
			if(collision) {
				this.player.getHit(2);
				this.enemyBullets.splice(i, 1);
				break;
			}
		}
	}

	Game.camera.goTo(this.player.x, this.player.y);
};
GameState.prototype.draw = function(ctx) {
	this.world.draw(ctx);
	for(var i=0; i<this.enemyList.length; i++) {
		this.enemyList[i].draw(ctx);
	}
	for(var i=0; i<this.bullets.length; i++)
		this.bullets[i].draw(ctx);
	for(var i=0; i<this.enemyBullets.length; i++)
		this.enemyBullets[i].draw(ctx);
	this.player.draw(ctx);
};

GameState.prototype.travelTo = function(target) {
	Game.ui.state.gs = new GameState(target);
	Game.ui.state.gs.player.hp = this.player.hp;
};

}());
