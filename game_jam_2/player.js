// Load main library
var Game = window.Game || {};

Game.Player = (function() {
	
	var STEP_TIME = 300;
	
	function Player() {
		this.x = 0.5;
		this.y = 0.5;
        this.hp = 100;
        this.DEATH_DELAY_MAX = 5000;
		this.deathDelay = 0;
        this.spriteLeft = 'player_left.png';
        this.spriteRight = 'player_right.png';
        this.spriteCurrent = this.spriteRight;
        this.RANGE = 3;
		this.stepCounter = 0;
		this.stepBoolean = false;
		
		this.reset();
	};
	
	Player.prototype.reset = function reset() {
		// TODO: Reset the player's stats
	};
    
    Player.prototype.inRange = function inRange(tx,ty) {
        var dx = Math.floor(this.x) - tx;
        var dy = Math.floor(this.y) - ty;
        if (dx > this.RANGE || dx < -this.RANGE || dy > this.RANGE || dy < -this.RANGE) { return false; }
        return true;
    };

	Player.prototype.update = function update(elapsed) {
		if (this.hp > 0) {
			var SPEED = 0.003 * elapsed,
			
				keys = Game.Input.keys,
				dir = {x:0,y:0};
		
			// Move player.
			if(keys['a']) { dir.x -= 0.5; dir.y -= 0.5; this.spriteCurrent = this.spriteLeft;}
			if(keys['d']) { dir.x += 0.5; dir.y += 0.5; this.spriteCurrent = this.spriteRight;}
			if(keys['w']) { dir.x += 0.5; dir.y -= 0.5; }
			if(keys['s']) { dir.x -= 0.5; dir.y += 0.5; }
			if(dir.x != 0  &&  dir.y != 0)
				SPEED *= 1.414;
			this.x += dir.x * SPEED;
			this.y += dir.y * SPEED;
			
			if (dir.x != 0 || dir.y != 0) {
				this.stepCounter += elapsed;
				if (this.stepCounter >= STEP_TIME) {
					this.stepCounter -= STEP_TIME;
					this.stepBoolean = !this.stepBoolean;
					Game.playSound(Math.random() < 0.5 ? 'footstep1.wav' : 'footstep2.wav');
				}
			}
			
			Game.camera.centerOn(this.x,this.y);
		} else {
			// Wait a couple seconds for animations, etc
			this.deathDelay += elapsed;
			if (this.deathDelay > this.DEATH_DELAY_MAX) {
				Game.currentState.endInDefeat();
			}
		}
	};
	
	var OFFSETX = -30,
		OFFSETY = -67;
	Player.prototype.draw = function draw(ctx) {
		var W = 55, H = 80;
		var frame = Math.floor(this.stepCounter / 50);
		if(this.stepBoolean)
			frame = 5 - frame;

		if (this.hp > 0) {
			var isoX = Game.game2screenX(this.x,this.y) + OFFSETX,
				isoY = Game.game2screenY(this.x,this.y) + OFFSETY;
				
			Game.drawImage(ctx, this.spriteCurrent,
			               frame*W, 0, W, H,
			               Math.round(isoX), Math.round(isoY), W, H);
		} else {
			// TODO: Draw death animation
		}
	};
	
	Player.prototype.drawUI = function drawUI(ctx) {
	
	};

	Player.prototype.onClick = function() {
	
	};
    
    Player.prototype.takeDamage = function(dmg) {
		if (this.hp > 0) {
			this.hp -= dmg;
			if (this.hp <= 0) {
				this.hp = 0;
				Game.playSound('player_die.wav');
			}
		}
    };

	return Player;
}());
