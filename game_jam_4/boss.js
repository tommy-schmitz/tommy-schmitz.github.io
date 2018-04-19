window.Game = window.Game || {};

var Game = window.Game;
Game.assert(Game.INITIAL_JUMP_VELOCITY);
Game.assert(Game.PLAYER_MAX_SPEED);
Game.assert(Game.drawHPBar);

(function() {

var RUN_TIME = 2400;
var SHOOT_TIME = 3000;
var SLIDE_TIME = 1500;

var Boss = function(x,y) {
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.hp = 28;
	this.w = Game.PLAYER_WIDTH;
	this.h = Game.PLAYER_HEIGHT;
	this.dmg = 5;
	this.dmgBullet = 3;
	this.canFall = true;
	this.timer = 0;
	this.shootTimer = 0;
	this.shootTrigger = 500;
	this.jumpVel = Game.INITIAL_JUMP_VELOCITY;
	this.runspeed = Game.PLAYER_MAX_SPEED;
	this.slidespeed = Game.PLAYER_MAX_SPEED * 1.6;
	this.bullets = [];
	this.animElapsed = 0;
	this.animFrame = 0;
	this.animRunningRight = [
		'danman-running-R1.png', 115,
		'danman-running-R2.png', 115,
		'danman-running-R3.png', 115,
		'danman-running-R2.png', 115];
	this.animRunningLeft = [
		'danman-running-L1.png', 115,
		'danman-running-L2.png', 115,
		'danman-running-L3.png', 115,
		'danman-running-L2.png', 115];
	this.animShootingRight = [
		'danman-attack1-R1.png', 250,
		'danman-attack1-R2.png', 250];
	this.animShootingLeft = [
		'danman-attack1-L1.png', 250,
		'danman-attack1-L2.png', 250];
	this.animSlidingRight = ['danman-sliding-R1.png'];
	this.animSlidingLeft = ['danman-sliding-L1.png'];
	this.animCurrent = this.animRunningRight;
	this.invincibility = 0;
	this.previouslyAirborne = true;
//	this.ground = this.y;
};
Game.Boss = Boss;

Boss.prototype.getHit = function(bullet, gs) {
	if(this.invincibility > 0)
		return false;

	--this.hp;
	if(this.hp <= 0)
		return true;

	this.invincibility = 1000;
	return false;
};

var Note = function(x, y, dir) {
	this.x = x;
	this.y = y;
	this.vx = 0.01*dir;
	this.vy = Math.max(Math.floor(Math.random()*4-1),0) * -0.002;
	this.w = 0.75;
	this.h = 1;
};
Note.prototype.update = function(elapsed) {
	this.x += elapsed * this.vx;
	this.y += elapsed * this.vy;
};
Note.prototype.draw = function(ctx) {
	var screenX = Math.floor(this.x * 16) - this.w * 16 / 2;
	var screenY = Math.floor(this.y * 16) - this.h * 16;
	Game.drawImage(ctx, 'note1.png', screenX, screenY);
	if(Game.DEBUG_HITBOXES)
		Game.debugRect(ctx, this.rect());
};

Note.prototype.rect = function() {
	return { x0: this.x-this.w/2 , x1: this.x+this.w/2 ,
	         y0: this.y-this.h   , y1: this.y                     };
};

Boss.prototype.rect = function() {
	return { x0: this.x-this.w/2 , x1: this.x+this.w/2 ,
	         y0: this.y-this.h   , y1: this.y                     };
};

Boss.prototype.tryHit = function(player) {
	if(Game.isOverlap(this.rect(), player.rect())) {
		// Melee Hit
		return this.dmg;
	}
	for(var i=0; i<this.bullets.length; i++) {
		if(Game.isOverlap(this.bullets[i].rect(), player.rect())) {
			this.bullets.splice(i,1);
			return this.dmgBullet;
		}
	}
};

Boss.prototype.tickAnimation = function(elapsed) {
	this.animElapsed += elapsed;
	if (this.animCurrent.length > 1 && this.animElapsed > this.animCurrent[this.animFrame+1]) {
		this.animFrame += 2;
		if (this.animFrame >= this.animCurrent.length) {
			this.animFrame = 0;
		}
		this.animElapsed = 0;
	}
};

Boss.prototype.cancelJump = function() {
	if(this.vy < 0)
		this.vy = 0;
};
Boss.prototype.jump = function() {
	if(!this.previouslyAirborne) {
		this.vy = this.jumpVel;
//		this.ground = this.y;
	}
};

Boss.prototype.dodgeBullets = function(gs) {
	var FRAME_TIME = 10;

	// Dodge bullets!
	var cancelJump = true;
	var myRect = this.rect();
	for(var i = 0;  i < gs.bullets.length;  ++i) {
		var b = gs.bullets[i];

		// Consider jumping
		if(!this.previouslyAirborne && this.invincibility <= 200) {
			var r0 = b.rect();
			if(r0.y1 >= myRect.y0) {
				Game.translate(r0, FRAME_TIME * (-this.vx + b.speed*b.dir), 0);
				var r1 = myRect;
				var t = (r1.x0-r0.x1)/(-this.vx + b.speed*b.dir);
				if(t > 0  &&  t <= Game.JUMP_DURATION/2) {
					var prediction = 0.5 * Game.GRAVITY * (0.25*Game.JUMP_DURATION * Game.JUMP_DURATION - (0.5*Game.JUMP_DURATION - t) * (0.5*Game.JUMP_DURATION - t));
					var prediction2 = 0.5 * Game.GRAVITY * (Game.JUMP_DURATION * t - t * t);
					Game.assert(Math.abs(prediction - prediction2) < 0.001);
					Game.translate(r0, this.x - b.x, prediction);
					if(Game.isOverlap(r0, r1)) {
						this.jump();
						return;
					}
				}
				r0 = b.rect();
				Game.translate(r0, FRAME_TIME * (-this.vx + b.speed*b.dir), 0);
				var r1 = myRect;
				var t = (r1.x1-r0.x0)/(-this.vx + b.speed*b.dir);
				if(t > 0  &&  t <= Game.JUMP_DURATION/2) {
					var prediction = 0.5 * Game.GRAVITY * (0.25*Game.JUMP_DURATION * Game.JUMP_DURATION - (0.5*Game.JUMP_DURATION - t) * (0.5*Game.JUMP_DURATION - t));
					var prediction2 = 0.5 * Game.GRAVITY * (Game.JUMP_DURATION * t - t * t);
					Game.assert(Math.abs(prediction - prediction2) < 0.001);
					Game.translate(r0, this.x - b.x, prediction);
					if(Game.isOverlap(r0, r1)) {
						this.jump();
						return;
					}
				}
			}
		}

		// Consider canceling the jump
		if(this.vy < 0) {
			var r0 = b.rect();
			var r1 = myRect;
			var t = (r1.x0-r0.x1)/(-this.vx + b.speed*b.dir);
			var prediction = 0.5 * Game.GRAVITY * t * t;
//			prediction = Math.min(prediction, this.ground-this.y);
			Game.translate(r0, this.x - b.x, -prediction);
			if(t > 0  &&  Game.isOverlap(r0, r1))
				cancelJump = false;
			r0 = b.rect();
			t = (this.x-r0.x0)/(-this.vx + b.speed*b.dir);
			prediction = 0.5 * Game.GRAVITY * t * t;
//			prediction = Math.min(prediction, this.ground-this.y);
			Game.translate(r0, this.x - b.x, -prediction);
			if(t > 0  &&  Game.isOverlap(r0, r1))
				cancelJump = false;
			r0 = b.rect();
			t = (r1.x1-r0.x0)/(-this.vx + b.speed*b.dir);
			prediction = 0.5 * Game.GRAVITY * t * t;
//			prediction = Math.min(prediction, this.ground-this.y);
			Game.translate(r0, this.x - b.x, -prediction);
			if(t > 0  &&  Game.isOverlap(r0, r1))
				cancelJump = false;
		}
	}
	if(cancelJump)
		this.cancelJump();
}

Boss.prototype.update = function(elapsed, gs) {
	this.invincibility = Math.max(0, this.invincibility - elapsed);

	this.vy += elapsed * Game.GRAVITY;

	this.timer = (this.timer+elapsed) % (4*RUN_TIME+6*SHOOT_TIME+2*SLIDE_TIME);
	this.shootTimer = Math.min(this.shootTimer+elapsed,  this.shootTrigger);
	
	if (this.timer < RUN_TIME) {
		this.vx = -this.runspeed;

		this.dodgeBullets(gs);

		if (this.animCurrent !== this.animRunningLeft) {
			this.animCurrent = this.animRunningLeft;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
	}
	else if (this.timer < RUN_TIME+SHOOT_TIME) {
		this.vx = 0;
		if (this.animCurrent !== this.animShootingRight) {
			this.animCurrent = this.animShootingRight;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
		if (this.shootTimer >= this.shootTrigger) {
			this.shootTimer -= this.shootTrigger;
			this.bullets.push(new Note(this.x,this.y,1));
		}
	}
	else if (this.timer < 2*RUN_TIME+SHOOT_TIME) {
		this.vx = this.runspeed;

		this.dodgeBullets(gs);

		if (this.animCurrent !== this.animRunningRight) {
			this.animCurrent = this.animRunningRight;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
	}
	else if (this.timer < 2*RUN_TIME+2*SHOOT_TIME) {
		this.vx = 0;
		this.canKick = true;
		if (this.animCurrent !== this.animShootingLeft) {
			this.animCurrent = this.animShootingLeft;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
		if (this.shootTimer >= this.shootTrigger) {
			this.shootTimer -= this.shootTrigger;
			this.bullets.push(new Note(this.x,this.y,-1));
		}
	}
	else if (this.timer < 2*RUN_TIME+2*SHOOT_TIME+SLIDE_TIME) {
		this.vx = -this.slidespeed;
		
		if (this.canKick && this.timer > 2*RUN_TIME+2*SHOOT_TIME+0.5*SLIDE_TIME) {
			this.canKick = false;
			this.jump();
		}
		
		if (this.animCurrent !== this.animSlidingLeft) {
			this.animCurrent = this.animSlidingLeft;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
	}
	else if (this.timer < 2*RUN_TIME+3*SHOOT_TIME+SLIDE_TIME) {
		this.vx = 0;
		if (this.animCurrent !== this.animShootingRight) {
			this.animCurrent = this.animShootingRight;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
		if (this.shootTimer >= this.shootTrigger) {
			this.shootTimer -= this.shootTrigger;
			this.bullets.push(new Note(this.x,this.y,1));
		}
	}
	else if (this.timer < 3*RUN_TIME+3*SHOOT_TIME+SLIDE_TIME) {
		this.vx = this.runspeed;

		this.dodgeBullets(gs);

		if (this.animCurrent !== this.animRunningRight) {
			this.animCurrent = this.animRunningRight;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
	}
	else if (this.timer < 3*RUN_TIME+4*SHOOT_TIME+SLIDE_TIME) {
		this.vx = 0;
		if (this.animCurrent !== this.animShootingLeft) {
			this.animCurrent = this.animShootingLeft;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
		if (this.shootTimer >= this.shootTrigger) {
			this.shootTimer -= this.shootTrigger;
			this.bullets.push(new Note(this.x,this.y,-1));
		}
	}
	else if (this.timer < 4*RUN_TIME+4*SHOOT_TIME+SLIDE_TIME) {
		this.vx = -this.runspeed;

		this.dodgeBullets(gs);

		if (this.animCurrent !== this.animRunningLeft) {
			this.animCurrent = this.animRunningLeft;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
	}
	else if (this.timer < 4*RUN_TIME+5*SHOOT_TIME+SLIDE_TIME) {
		this.vx = 0;
		this.canKick = true;
		if (this.animCurrent !== this.animShootingRight) {
			this.animCurrent = this.animShootingRight;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
		if (this.shootTimer >= this.shootTrigger) {
			this.shootTimer -= this.shootTrigger;
			this.bullets.push(new Note(this.x,this.y,1));
		}
	}
	else if (this.timer < 4*RUN_TIME+5*SHOOT_TIME+2*SLIDE_TIME) {
		this.vx = this.slidespeed;
		
		if (this.canKick && this.timer > 4*RUN_TIME+5*SHOOT_TIME+1.5*SLIDE_TIME) {
			this.canKick = false;
			this.jump();
		}
		if (this.animCurrent !== this.animSlidingRight) {
			this.animCurrent = this.animSlidingRight;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
	}
	else {
		this.vx = 0;
		if (this.animCurrent !== this.animShootingLeft) {
			this.animCurrent = this.animShootingLeft;
			this.animElapsed = 0;
			this.animFrame = 0;
		}
		if (this.shootTimer >= this.shootTrigger) {
			this.shootTimer -= this.shootTrigger;
			this.bullets.push(new Note(this.x,this.y,-1));
		}
	}
	
	this.x += elapsed * this.vx;
	this.y += elapsed * this.vy;
	this.tickAnimation(elapsed);

	this.previouslyAirborne = !Game.collide(gs.world.grid, this)[0];
	
	for (var i=0; i<this.bullets.length; i++) {
		this.bullets[i].update(elapsed);
	}
	
};

Boss.prototype.draw = function(ctx) {
	if(Math.floor(this.invincibility / 50) % 2 === 0) {
		var screenX = Math.floor(this.x * 16) - 16;
		var screenY = Math.floor(this.y * 16) - 30;
		Game.drawImage(ctx, this.animCurrent[this.animFrame], screenX, screenY);
	}
	if(Game.DEBUG_HITBOXES) {
		Game.debugRect(ctx, this.rect());
	}
	for (var i=0; i<this.bullets.length; i++) {
		this.bullets[i].draw(ctx);
	}

	Game.drawHPBar(ctx, this.hp, 28, 20);
};

}());
