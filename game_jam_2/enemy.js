// Load main library
var Game = window.Game || {};

Game.Enemy = (function() {
    
	function Enemy(x,y) {
		this.x = x;
		this.y = y;
        this.attackTimeout = 0;
		this.hp = 30;
		this.reset();
        this.imageLeft = 'zombie_left.png';
        this.imageRight = 'zombie_right.png';
        this.dir = {x:0,y:0}
        this.FRAME_DURATION = 240;
		this.scariness = 1;
        this.FRAME_COUNT = 5;

		this.time = Math.random() * this.FRAME_DURATION * this.FRAME_COUNT;

        this.despawn = false;
	};

	Enemy.prototype.isDead = function (){
		if (this.hp <= 0) {
			return true;
		}
		return false;
	};

	Enemy.prototype.subtractHp = function(value) {
		this.hp = this.hp - value;
	};

	Enemy.prototype.getX = function () {
		return this.x;
	};

	Enemy.prototype.getY = function () {
		return this.y;
	};
	
	Enemy.prototype.reset = function reset() {

	};

	Enemy.prototype._findNearbyTower = function() {
		var i, j;
		var myX = Math.floor(this.x);
		var myY = Math.floor(this.y);
		var x, y;
		var tile;
		for(i = -1;  i <= 1;  ++i) {
			for(j = -1;  j <= 1;  ++j) {
				x = myX + j;
				y = myY + i;
				tile = Game.currentState.gameBoard.getTile(x, y);
				if(tile.tag === 'tower')
					return {x: x, y: y, tower: tile.dataObject};
			}
		}
		return null;
	};

    var COOLDOWN = 1000; //milliseconds
	Enemy.prototype.update = function update(elapsed) {
		var tower;
		var SPEED = 0.0015 * elapsed,
        player = Game.currentState.player,
        dx = player.x - this.x,
        dy = player.y - this.y;
        this.dir = {x:0,y:0};
			
		if (dx > 0.5) ++this.dir.x;
		else if (dx < -0.5) --this.dir.x;
		if (dy > 0.5) ++ this.dir.y;
		else if (dy < -0.5) -- this.dir.y;
		if(this.dir.x != 0  &&  this.dir.y != 0)
			SPEED *= 0.707;
		
		this.x += this.dir.x * SPEED;
		this.y += this.dir.y * SPEED;
        
        //Attack
        this.attackTimeout -= elapsed;
        var RANGE = 1;
        var DAMAGE = 3;
        if(this.attackTimeout <= 0) {
			if(dx*dx+dy*dy < RANGE*RANGE) {  //Player in range?
				// Attack player
	            Game.currentState.player.takeDamage(DAMAGE);
	            this.attackTimeout = COOLDOWN;
			} else {
				// Attack a tower
				nearbyTower = this._findNearbyTower();
				if(nearbyTower) {
					this.attackTimeout = COOLDOWN;
					nearbyTower.tower.hp -= DAMAGE;
					if(nearbyTower.tower.hp <= 0)
						Game.currentState.gameBoard.setTile(Game.TILE_EMPTY, nearbyTower.x, nearbyTower.y);
				}
			}
        }

		this.time += elapsed;
		if(this.time >= this.FRAME_DURATION * this.FRAME_COUNT)
			this.time -= this.FRAME_DURATION * this.FRAME_COUNT;
	};
	
	var OFFSETX = -30,
		OFFSETY = -67;
	Enemy.prototype.draw = function draw(ctx) {
		var img, frame;
		var W = 55, H = 80;
		var isoX = Game.game2screenX(this.x,this.y) + OFFSETX,
			isoY = Game.game2screenY(this.x,this.y) + OFFSETY;
        var player = Game.currentState.player;
        var dx = Game.game2screenX(player.x,player.y) - Game.game2screenX(this.x,this.y);
        if (dx < 0)
			img = this.imageLeft;
		else
			img = this.imageRight;

		frame = Math.floor(this.time / this.FRAME_DURATION);

		Game.drawImage(ctx, img,
		               frame*W, 0, W, H,
		               Math.round(isoX), Math.round(isoY), W, H);
	};
	
	Enemy.prototype.isOnScreen = function() {
		var x = Game.game2screenX(this.x, this.y);
		var y = Game.game2screenY(this.x, this.y);
		var y1 = y + OFFSETY + 40;
		var y2 = y - 40;
		return (x >= 0  &&  x < Game.WIDTH  &&  y2 >= 0  &&  y1 < Game.HEIGHT);
	};

	Enemy.prototype.drawUI = function drawUI(ctx) {
	
	};

	Enemy.prototype.onClick = function() {
	
	};

	return Enemy;
}());
