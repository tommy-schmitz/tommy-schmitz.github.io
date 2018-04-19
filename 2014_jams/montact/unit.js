// Load main library
var Game = window.Game || {};

(function() {


// Helper function to concisely create objects of the form {x: _, y: _}
var p = function(x, y) {
	return {x: x, y: y};
};

// Helper function to convert an "attack pattern" to an "attack range".
// An "attack pattern" is a list of {x:int, y:int} indicating offsets from
//     the attacker;
// an "attack range" is a list of tile objects in the world.
var evalPattern = function(pattern, centerTile) {
	var i, result, x, y, tx, ty;
	result = [];
	x = centerTile.x;
	y = centerTile.y;
	for(i = 0;  i < pattern.length;  ++i) {
		tx = x + pattern[i].x;
		ty = y + pattern[i].y;
		if(Game.validCoord(tx, ty))
			result.push(Game.currentWorld.grid[ty][tx]);
	}
	return result;
};

Game.MS_PER_TILE = 200;
var MS_PER_TILE = Game.MS_PER_TILE;

var unitId = 0;

Game.Unit = function (team) {
	// way to check equality for unit
	this._id = unitId;
	unitId++;
	this._team = team;
	this._frame = 0;
	this._maxHealth = 100;
	this._health = this._maxHealth;
	this._attackPower = 40;
	this._terrainBonus = 40; // needs more thinking cause there are lots of different bonuses
	this._defense = 40;
	this._movementPoints = 40;
	this._attackPattern = 40;
	this._tile = null;
	this._active = true;
	this._time = 0;

	this._image = 'hello.png';
	this._imageWidth = Game.TILE_WIDTH;
	this._imageHeight = Game.TILE_HEIGHT;
	
	this._state = "idle";
};
Game.Unit.prototype.getTeam = function () {
	return this._team;
};
Game.Unit.prototype.getId = function () {
	return this._id;
};
Game.Unit.prototype.getTile = function() {
	return this._tile;
};
Game.Unit.prototype.setTile = function(tile) {
	this._tile = tile;
};
Game.Unit.prototype.getImage = function () {
	return this._image;
};
Game.Unit.prototype.setImage = function(image) {
	this._image = image;
};
Game.Unit.prototype.isActive = function() {
	return this._active;
};
Game.Unit.prototype.setActive = function(boolean) {
	this._active = boolean;
};
Game.Unit.prototype.getMovementPoints = function () {
	return this._movementPoints;
};
Game.Unit.prototype.getMovementCost = function(tile) {
	return tile.getBaseMovementCost();
};
Game.Unit.prototype.update = function (elapsed) {
	this._time += elapsed;
};
Game.Unit.prototype.draw = function(ctx, j, i) {
	var x = j * Game.TILE_WIDTH;
	var y = i * Game.TILE_HEIGHT;
	var resting = !this._active && (this._state === "idle");
	if(this._state.tag === 'walking') {
		var tile0 = this._state.path[0];
		var tile1 = this._state.path[1];
		coefficient = this._time / MS_PER_TILE;
		if(!tile0 || !tile1)
			debugger;
		x = Game.TILE_WIDTH  * (tile0.x*(1-coefficient) + coefficient*tile1.x);
		y = Game.TILE_HEIGHT * (tile0.y*(1-coefficient) + coefficient*tile1.y);
	}
	
	Game.drawImage(ctx, this.getImage(), 
		this._frame * this._imageWidth,
		resting ? this._imageHeight : 0,
		this._imageWidth,
		this._imageHeight,
		x + Game.TILE_WIDTH * 0.5 - this._imageWidth * 0.5,
		y + Game.TILE_HEIGHT * 0.5 - this._imageHeight * 0.5,
		this._imageWidth,
		this._imageHeight);

	// Draw hp
	if (this._health !== this. _maxHealth) {
		Game.drawNumber(ctx, this._health, x+Game.TILE_WIDTH, y+Game.TILE_HEIGHT);
	}
	/*ctx.fillStyle = '#f00';
	ctx.font = 'bold 4pt sans-serif';
	ctx.textAlign = 'right';
	ctx.fillText(this._health+'', x+Game.TILE_WIDTH, y+Game.TILE_HEIGHT);*/
	
	// Draw team signifier
	Game.drawImage(ctx, 'teams.png',
		this._team * Game.TILE_WIDTH,
		0,
		Game.TILE_WIDTH,
		Game.TILE_HEIGHT,
		x,
		y,
		Game.TILE_WIDTH,
		Game.TILE_HEIGHT);
};
Game.Unit.prototype.getHealth = function () {
	return this._health;
};
Game.Unit.prototype.getAttackPower = function(tile) {
	return this._attackPower;
};
Game.Unit.prototype.setHealth = function (health) {
	this._health = health;
};
Game.Unit.prototype.attack = function(defender) {
	this.resolveAttack(defender);
	if (defender.getHurt) { defender.getHurt(); }
};
// Returns information about what would happen if this unit were to move to
// 'destinationTile' and then attack the unit at 'targetTile'.
// So far, the only relevant information is the amount of damage dealt, so
// the return value is a number saying how much would be dealt.
Game.Unit.prototype.considerAttacking = function(destinationTile, targetTile) {
	var damage = this.getAttackPower(destinationTile)
	           * targetTile.getUnit().getDefenseRating();
	return Math.max(0, damage);
};
Game.Unit.prototype.resolveAttack = function(defender) {
	var projectedAttack, projectedHP;

	projectedAttack = this.considerAttacking(this.getTile(),
	                                         defender.getTile());

	projectedHP = defender.getHealth() - projectedAttack;
	if (projectedHP < 0) { projectedHP = 0; }

	Game.UI.addFlyingNumber(projectedHP - defender.getHealth(),defender.getTile().x,defender.getTile().y);
	
	defender.setHealth(projectedHP);
	this.wait();
};
Game.Unit.prototype.wait = function() {
	this._active = false;
};
Game.Unit.prototype.getDefenseRating = function() {
	return this._tile.getBaseDefenseRating()/.4;
};
Game.Unit.prototype.getMoveRange = function() {
	return Game.currentWorld.getMovementTileset(this._tile,
	                                            this.getMovementPoints());
};
Game.Unit.prototype.kill = function () {
	this.getTile().setUnit(null);
	this.setTile(null);
	Game.currentWorld.removeUnit(this);
};
Game.Unit.prototype.animatePath = function(path) {
	if(path.length < 2)
		return;
	this._idle();
	this._state = {tag: 'walking', path: path};
	this._time = 0;
};
var updateWalking = function(unit) {
	if(unit._time >= MS_PER_TILE) {
		if(unit._state.path.length > 2) {
			unit._state.path.shift();
			unit._time -= MS_PER_TILE;
		} else {
			unit._idle();
		}
	}
}

Game.Minotaur = function (team) {
	var minotaur = new Game.Unit(team);
	minotaur._image ="minotaur.png";
	minotaur._movementPoints = 3;
	minotaur.getMovementCost = function(tile) {
		if (tile.type === Game.MOUNTAIN) { return 1; }
		else { return tile.getBaseMovementCost(); }
	};
	minotaur.getAttackPower = function(tile) {
		if(tile === undefined)
			tile = this._tile;
		if (tile.type === Game.MOUNTAIN) {
			// Minotaurs are really strong on mountains
			return this._attackPower * 1.2;
		} else {
			return this._attackPower * 0.8;
		}
	};
	minotaur.getDefenseRating = function() {
		if (this._tile.type === Game.MOUNTAIN) {
			// Like, REALLY strong
			return 0.7/.4;
		} else {
			return 1/.4;
		}
	};
	minotaur.getAttackRange = function(tile) {
		if(tile === undefined)
			tile = this._tile;

		// Adjacent squares only.
		return evalPattern([
			p(-1, 0),
			p(1, 0),
			p(0, -1),
			p(0, 1),
			p(-2, 0),
			p(2, 0),
			p(0, -2),
			p(0, 2)
		], tile);
	};
	minotaur.attack = function(defender) {
		this._time = 0;
		this._frame = 0;
		this._state = {tag: 'attack', soundPlayed: false};
		
		this.setImage("minotaur_attack.png");
		this._imageWidth = Game.TILE_WIDTH * 3;
		this._imageHeight = Game.TILE_HEIGHT * 3;
		
		this._currentTarget = defender;
		Game.Unit.prototype.attack.call(this,defender);
	};
	minotaur.getHurt = function() {
		this._time = 0;
		this._frame = 0;
		this._state = "hurt";
		
		this.setImage("minotaur_hurt.png");
		this._imageWidth = Game.TILE_WIDTH;
		this._imageHeight = Game.TILE_HEIGHT;
	};
	minotaur._idle = function() {
		this._frame = 0;
		this._state = "idle";
		
		this.setImage("minotaur.png");
		this._imageWidth = Game.TILE_WIDTH;
		this._imageHeight = Game.TILE_HEIGHT;
		this._currentTarget = null;
	};
	minotaur.update = function(elapsed) {
		this._time += elapsed;
		if (this._state.tag === "attack") {
			if (this._time > 400  &&  !this._state.soundPlayed) {
				this._state.soundPlayed = true;
				Game.playSound('hit.wav');
			}
			if (this._time < 1000) {
				this._frame = Math.floor(this._time * 10 / 1000);
			} else {
				this._idle();
			}
		} else if (this._state === "hurt") {
			if (this._time < 500) {
				this._frame = Math.floor(this._time / 50) % 2;
			} else {
				this._idle();
			}
		} else if (this._state.tag === 'walking') {
			updateWalking(this);
		}
		if (this.getHealth() <= 0) {
			this.kill();
		}
	};
	
	return minotaur;
};


Game.KillerRabbit = function (team) {
	var killerRabbit = new Game.Unit(team);
	killerRabbit._image =  "killer_rabbit.png";
	killerRabbit._movementPoints = 4;
	killerRabbit.getMovementCost = function(tile) {
		if (tile.type === Game.FOREST) { return 1; }
		else { return tile.getBaseMovementCost(); }
	};
	killerRabbit.getAttackPower = function(tile) {
		if(tile === undefined)
			tile = this._tile;
		if (tile.type === Game.FOREST) {
			return this._attackPower * 1.2;
		} else {
			return this._attackPower * 0.8;
		}
	};
	killerRabbit.getDefenseRating = function() {
		var baseDefense = this._tile.getBaseDefenseRating();
		if (this._tile.type === Game.FOREST) {
			return 0.7/.4;
		} else {
			return 1/.4;
		}
	};
	killerRabbit.getAttackRange = function(tile) {
		if(tile === undefined)
			tile = this._tile;

		// Adjacent squares only.
		return evalPattern([
			p(-1, 0),
			p(1, 0),
			p(0, -1),
			p(0, 1)
		], tile);
	};
	killerRabbit.attack = function(defender) {
		this._time = 0;
		this._frame = 0;
		this._state = {tag: 'attack', soundPlayed: false};
		
		this._image = "killer_rabbit_attack.png";
		this._imageWidth = Game.TILE_WIDTH * 3;
		this._imageHeight = Game.TILE_HEIGHT * 3;
		
		this._currentTarget = defender;
		Game.Unit.prototype.attack.call(this,defender);
	};
	killerRabbit._idle = function() {
		this._frame = 0;
		this._state = "idle";
		
		this._image = "killer_rabbit.png";
		this._imageWidth = Game.TILE_WIDTH;
		this._imageHeight = Game.TILE_HEIGHT;
		this._currentTarget = null;
	};
	killerRabbit.getHurt = function() {
		this._time = 0;
		this._frame = 0;
		this._state = "hurt";
		
		this.setImage("killer_rabbit_hurt.png");
		this._imageWidth = Game.TILE_WIDTH;
		this._imageHeight = Game.TILE_HEIGHT;
	};
	killerRabbit.update = function(elapsed) {
		this._time += elapsed;
		if (this._state.tag === "attack") {
			if (this._time > 400  &&  !this._state.soundPlayed) {
				this._state.soundPlayed = true;
				Game.playSound('hit.wav');
			}
			if (this._time < 1000) {
				this._frame = Math.floor(this._time * 10 / 1000);
			} else {
				this._idle();
			}
		} else if (this._state === "hurt") {
			if (this._time < 500) {
				this._frame = Math.floor(this._time / 50) % 2;
			} else {
				this._idle();
			}
		} else if (this._state.tag === 'walking') {
			updateWalking(this);
		}
		if (this.getHealth() <= 0) {
			this.kill();
		}
	};

	return killerRabbit;
};

Game.Manikin = function (team) {
	var manikin = new Game.Unit(team);
	manikin._image =  "manikin.png";
	manikin._movementPoints = 0;
	manikin._attackPower = 0;
	manikin.getAttackRange = function() {
		// Nothing
		return evalPattern([], this._tile);
	};
	manikin._idle = function() {
		this._frame = 0;
		this._state = "idle";
		
		this._image = "manikin.png";
		this._imageWidth = Game.TILE_WIDTH;
		this._imageHeight = Game.TILE_HEIGHT;
		this._currentTarget = null;
	};
	manikin.getHurt = function() {
		this._time = 0;
		this._frame = 0;
		this._state = "hurt";
		
		this.setImage("manikin_hurt.png");
		this._imageWidth = Game.TILE_WIDTH;
		this._imageHeight = Game.TILE_HEIGHT;
	};
	manikin.update = function(elapsed) {
		this._time += elapsed;
		if (this._state === "hurt") {
			if (this._time < 500) {
				this._frame = Math.floor(this._time / 50) % 2;
			} else {
				this._idle();
			}
		} else if (this._state.tag === 'walking') {
			updateWalking(this);
		}
		if (this.getHealth() <= 0) {
			this.kill();
		}
	};

	return manikin;
};


Game.Dragon = function (team) {
	var dragon = new Game.Unit(team);
	dragon._image =  "dragon.png";
	dragon._maxHealth = 100;
	dragon._health = dragon._maxHealth;
	dragon._movementPoints = 2;
	dragon._attackPower = 60;
	dragon._defense = 80;
	dragon.getMovementCost = function(tile) {
//		if (tile.type === Game.MOUNTAIN) { return 1; }
//		else { return tile.getBaseMovementCost(); }
		return 1;
	};
	dragon.getAttackPower = function(tile) {
		if(tile === undefined)
			tile = this._tile;
		if (tile.type === Game.MOUNTAIN) {
			return this._attackPower * 1.2;
		}
		return this._attackPower;
	};
	dragon.getDefenseRating = function() {
		if (this._tile.type !== Game.MOUNTAIN) {
			return 1/1.4;
		}
		return 0.7/1.4;
	};
	dragon.getAttackRange = function(tile) {
		if(tile === undefined)
			tile = this._tile;
		return evalPattern([
			p(0, 3),
			p(1, 2),
			p(2, 1),
			p(3, 0),
			p(2, -1),
			p(1, -2),
			p(0, -3),
			p(-1, -2),
			p(-2, -1),
			p(-3, 0),
			p(-2, 1),
			p(-1, 2),
		], tile);
	};
	dragon.attack = function(defender) {
		this._time = 0;
		this._frame = 0;
		this._state = {tag: 'attack', soundPlayed: false};
		
		this._image = "dragon_attack.png";
		this._imageWidth = Game.TILE_WIDTH * 3;
		this._imageHeight = Game.TILE_HEIGHT * 3;
		
		this._currentTarget = defender;
		Game.Unit.prototype.attack.call(this,defender);
	};
	dragon._idle = function() {
		this._frame = 0;
		this._state = "idle";
		
		this._image = "dragon.png";
		this._imageWidth = Game.TILE_WIDTH;
		this._imageHeight = Game.TILE_HEIGHT;
		this._currentTarget = null;
	};
	dragon.getHurt = function() {
		this._time = 0;
		this._frame = 0;
		this._state = "hurt";
		
		this.setImage("dragon_hurt.png");
		this._imageWidth = Game.TILE_WIDTH;
		this._imageHeight = Game.TILE_HEIGHT;
	};
	dragon.update = function(elapsed) {
		this._time += elapsed;
		if (this._state.tag === "attack") {
			if (this._time > 400  &&  !this._state.soundPlayed) {
				this._state.soundPlayed = true;
				Game.playSound('hit.wav');
			}
			if (this._time < 1000) {
				this._frame = Math.floor(this._time * 10 / 1000);
			} else {
				this._idle();
			}
		} else if (this._state === "hurt") {
			if (this._time < 500) {
				this._frame = Math.floor(this._time / 50) % 2;
			} else {
				this._idle();
			}
		} else if (this._state.tag === 'walking') {
			updateWalking(this);
		}
		if (this.getHealth() <= 0) {
			this.kill();
		}
	};

	return dragon;
};


}());
