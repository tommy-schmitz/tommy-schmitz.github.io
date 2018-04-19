// Load main library
var Game = window.Game || {};

// Dependency
Game.assert(Game.Resource);

(function() {

var Popup = function(x0, y0, c, txt) {
	this.x = x0 + 0.25 + (Math.random()*0.5);
	this.y = y0 + Math.random();
    this.startTime = 1000;
	this.time = this.startTime;
    this.color = c
    this.text = txt;
};
Popup.prototype.update = function(elapsed) {
	this.time -= elapsed;
	if(this.time <= 0)
		return true;
	return false;
};
Popup.prototype.draw = function(ctx) {
	var x0 = Game.game2screenX(this.x, this.y);
	var y0 = Game.game2screenY(this.x, this.y) + (this.time/this.startTime*30) - 48;
    var a = this.time/this.startTime;
	ctx.fillStyle = 'rgba('+this.color+','+a+')';
	ctx.font = 'bold 14pt sans-serif';
	ctx.textAlign = 'center';
	ctx.fillText(this.text, x0, y0);
};

var TILE_WIDTH = 84,
	TILE_HEIGHT = 47;
Game.TILE_WIDTH = TILE_WIDTH;
Game.TILE_HEIGHT = TILE_HEIGHT;

function Tile(tag, dataObject) {
	this.tag = Tile.EMPTY;
	this.dataObject;
	if (typeof tag !== "undefined"){
		this.tag = tag;
	}
	if (typeof dataObject !== "undefined") {
		this.dataObject = dataObject;
	}
	if (tag === Tile.TOWER && this.dataObject) {
		this.dataObject.setTile(this);
	}
}
Tile.prototype.draw = function(ctx, viewX, viewY, tileX, tileY, mouseOver) {
	var x = Math.floor(viewX);
	//var y = Math.floor(viewY - TILE_HEIGHT * 0.5);
	var y = Math.floor(viewY);
    //Game.drawImage(ctx, "tile.png", x, y - TILE_HEIGHT * 0.5);
	var tag = this.tag;
	var dataObject = this.dataObject;
	var hoverInRange = false;
	var canDelete = false;
	return function () {
		if (mouseOver) {
            if (Game.currentState.player.inRange(tileX,tileY)) {
                Game.drawImage(ctx, "tile_hover.png", Math.floor(viewX), Math.floor(viewY - TILE_HEIGHT * 0.5));
				hoverInRange = true;
				if (Game.currentState.inventory.currentItem === 'erase') { canDelete = true; }
				if (tag === Tile.EMPTY) {
					Game.currentState.drawPlacementHologram(ctx, Math.floor(x + TILE_WIDTH * 0.5), y);
				}
            }
            else {
                Game.drawImage(ctx, "tile_hover_far.png", Math.floor(viewX), Math.floor(viewY - TILE_HEIGHT * 0.5));
            }
		}
		if (dataObject && dataObject.draw) {
			dataObject.draw(ctx, Math.floor(x + TILE_WIDTH * 0.5), y, {hoverInRange:hoverInRange, canDelete:canDelete});
		}
	};
};
Tile.EMPTY = 'empty';
Tile.TOWER = 'tower';
Tile.RESOURCE = 'resource';
Tile.DECORATION = 'decoration';




(function() {

var EMPTY = new Tile(),
    TALL_GRASS = new Tile(Tile.EMPTY, Game.Decoration.TALL_GRASS),
    TALL_GRASS_2 = new Tile(Tile.EMPTY, Game.Decoration.TALL_GRASS_2),
    TALL_GRASS_3 = new Tile(Tile.EMPTY, Game.Decoration.TALL_GRASS_3),
	WOOD  = new Tile(Tile.RESOURCE, Game.Resource.WOOD),
	IRON  = new Tile(Tile.RESOURCE, Game.Resource.IRON),
	STONE  = new Tile(Tile.RESOURCE, Game.Resource.STONE),
	FUELS  = new Tile(Tile.RESOURCE, Game.Resource.FUELS),
	LIGHTSTONE  = new Tile(Tile.RESOURCE, Game.Resource.LIGHTSTONE);

Game.TILE_EMPTY = EMPTY;

// Game board object
function GameBoard() {
	this.centerY = 0;
	this.tiles = [];
};
GameBoard.prototype.generateTile = function generateTile(x,y) {
	// TODO: improve procedural generation
	var chance = Math.random() * 100;
	
	if (chance < 79) return EMPTY;
    else if (chance < 85) return TALL_GRASS;
    else if (chance < 90) return TALL_GRASS_2;
    else if (chance < 95) return TALL_GRASS_3;
	else if (chance < 97) return WOOD;
	else if (chance < 98) return IRON;
	else if (chance < 99) return STONE;
	else return FUELS;
    
};
GameBoard.prototype.getTile = function getTile(x,y) {
	var tileRow, tileColumn;
	
	while (y >= this.tiles.length - this.centerY) {
		// Add rows to the end of the array
		this.tiles.push([]);
		this.tiles[this.tiles.length-1].centerX = 0;
	}
	while (y < -this.centerY) {
		// Add rows to the beginning of the array
		this.tiles.unshift([]);
		this.tiles[0].centerX = 0;
		++this.centerY;
	}

	tileRow = y + this.centerY;
	while (x >= this.tiles[tileRow].length - this.tiles[tileRow].centerX) {
		// Add tiles to the end of the array
		this.tiles[tileRow].push(this.generateTile(
			this.tiles[tileRow].length-this.tiles[tileRow].centerX,
			y
		));
	}
	while (x < -this.tiles[tileRow].centerX) {
		// Add tiles to the beginning of the array
		this.tiles[tileRow].unshift(this.generateTile(
			this.tiles[tileRow].length-this.tiles[tileRow].centerX,
			y
		));
		++this.tiles[tileRow].centerX;
	}
	
	tileColumn = x + this.tiles[tileRow].centerX;
	return this.tiles[tileRow][tileColumn];
};
GameBoard.prototype.setTile = function setTile(tile,x,y) {
	var currentTile	= this.getTile(x,y),
		tileRow		= y + this.centerY, 
		tileColumn	= x + this.tiles[tileRow].centerX;
	
	// VERY BAD CHANGE ASAP
	this.tiles[tileRow][tileColumn] = tile;
};

GameBoard.prototype.draw = function(ctx,drawList) {
	var H_TILES = Math.ceil(Game.WIDTH / TILE_WIDTH) + 3,
		V_TILES = Math.ceil(Game.HEIGHT / TILE_HEIGHT) + 4,
		
		startX = Math.floor(Game.screen2gameX(0,0)) - 1,
		startY = Math.floor(Game.screen2gameY(0,0)) - 1,
		startX = Math.floor(Game.screen2gameX(0,0)) - 0,
		startY = Math.floor(Game.screen2gameY(0,0)) - 2,
		
		mouseX = Math.floor(Game.screen2gameX(Game.Input.mouse.x,Game.Input.mouse.y)),
		mouseY = Math.floor(Game.screen2gameY(Game.Input.mouse.x,Game.Input.mouse.y)),
		
		currentTile, tileX, tileY, viewX, viewY,
		i,j,drawI=0,
		tileObjectDraws = [];
		
	
	for (j = 0; j < V_TILES; ++j) {
		for (i = 0; i < H_TILES; ++i) {
			tileX = startX - j + Math.floor(i);
			tileY = startY + j + Math.ceil(i);
            
            while(drawI<drawList.length && Game.game2screenY(drawList[drawI].x,drawList[drawI].y) < 
            Game.game2screenY(tileX,tileY)) {
                drawList[drawI].draw(ctx);
                drawI++;
            }
			currentTile = this.getTile(tileX, tileY);
			viewX = Game.game2screenX(tileX,tileY);
			viewY = Game.game2screenY(tileX,tileY);
            
			if (mouseX === tileX && mouseY === tileY) {
				currentTile.draw(ctx, viewX, viewY, tileX, tileY, true)();
			}
			else {
				currentTile.draw(ctx, viewX, viewY, tileX, tileY, false)();
			}
		}
		for (i = 0.5; i < H_TILES; ++i) {
			tileX = startX - j + Math.floor(i);
			tileY = startY + j + Math.ceil(i);
            
            while(drawI<drawList.length && Game.game2screenY(drawList[drawI].x,drawList[drawI].y) < 
            Game.game2screenY(tileX,tileY)) {
                drawList[drawI].draw(ctx);
                drawI++;
            }
			currentTile = this.getTile(tileX, tileY);
			viewX = Game.game2screenX(tileX,tileY);
			viewY = Game.game2screenY(tileX,tileY);
            
			if (mouseX === tileX && mouseY === tileY) {
				currentTile.draw(ctx, viewX, viewY, tileX, tileY, true)();
			}
			else {
				currentTile.draw(ctx, viewX, viewY, tileX, tileY, false)();
			}
		}
	}
	// need this extra draw step to draw what is in each tile
	// so that it appears above the tile lines
	// this will probably need to be optimized a better way in the future
	for (var x = 0, xLength = tileObjectDraws.length; x < xLength; x++) {
		tileObjectDraws[x]();
	}
};

// constructor
var GameState = function() {
	this.player = new Game.Player();
	this.inventory = new Game.Inventory(this);
	this.gameBoard = new GameBoard();
    this.enemyList = [];
    this.drawList = [];
    this.towers = [];
	this.bullets = [];
    this.debug = 0;
//	this.musicTension = null;
	this.zombieMoanLevel = 0;

    this.TIME_PER_DAY = 180000; //milliseconds
    this.time = this.TIME_PER_DAY/8;
    
    this.SPAWN_RATE = 0.012; //zombies per SECOND
    this.SPAWN_RATE_ACCEL = 0.0003; //increase in spawn rate per SECOND
    this.SPAWN_RATE_MAX = 3.0;
    this.SPAWN_NIGHT = 12.0;
    this.SPAWN_COUNTER = 0;
    
    this.RUNNER_RATE = 0.005;
    this.RUNNER_RATE_ACCEL = 0.00005;
    this.RUNNER_RATE_MAX = 3.0;
    this.RUNNER_NIGHT = 12.0;
    this.RUNNER_COUNTER = 0;
    this.RUNNER_START_TIME = this.TIME_PER_DAY*2.5;
    
    this.max_zombies = 5;
    this.USING_MAX_ZOMBIES = false;
    this.MAX_ZOMBIE_ACCEL = 6; // max zombies will increase by this amount PER NIGHT
    this.killCount = 0;

	this.ZOMBIE_MOAN_THRESHOLD = 50000;
    
    this.RESOURCE_DEPLETE_CHANCE = 0.2;
    
    var STARTING_ZOMBIES = 0;
    var SPAWN_RANDOM = 15;
    for (i=0; i<STARTING_ZOMBIES; i++) {
        var xPos,yPos;
        do {
            xPos = SPAWN_RANDOM-(Math.random()*SPAWN_RANDOM*2);
            yPos = SPAWN_RANDOM-(Math.random()*SPAWN_RANDOM*2);
        } while (Math.sqrt(Math.pow(xPos-this.player.x,2)+Math.pow(yPos-this.player.y,2)) < 15);
        this.enemyList.push(new Game.Runner(xPos,yPos));
    }
    this.initDrawList();
};

GameState.prototype.addBullet = function(bullet) {
	this.bullets.push(bullet);
};

GameState.prototype.endInDefeat = function() {
	this.isDefeat = true;
};

GameState.prototype.initDrawList = function() {
    this.drawList.push(this.player);
    for (var i=0; i<this.enemyList.length; i++) {
        var j = 0;
        while (j < this.drawList.length && 
        Game.game2screenY(this.drawList[j].x,this.drawList[j].y) < 
        Game.game2screenY(this.enemyList[i].x,this.enemyList[i].y)) {
            j++;
        }
        this.drawList.splice(Math.max(j,0),0,this.enemyList[i]);
    }
};

GameState.prototype.getEnemies = function () {
	return this.enemyList;
};

GameState.prototype._sqDistanceToPlayer = function(enemy) {
	var dx = this.player.x - enemy.x;
	var dy = this.player.y - enemy.y;
	return dx*dx + dy*dy;
};

GameState.prototype._computeScariness = function() {
	var i, result, enemy;
	var SCREEN_RADIUS = Game.WIDTH/TILE_WIDTH;
	var SCARY_RADIUS = SCREEN_RADIUS * 0.707;
	result = 0;
	for(i = 0;  i < this.enemyList.length;  ++i) {
		enemy = this.enemyList[i];
		result += Math.max(0,SCARY_RADIUS-Math.sqrt(this._sqDistanceToPlayer(enemy)))
		          / SCARY_RADIUS * enemy.scariness / (1 + 10*this.SPAWN_RATE);
		result += 1.333 / (2 + 4 * this.SPAWN_NIGHT * this.SPAWN_RATE);
	}
	return result;
};

GameState.prototype.update = function(elapsed) {
	var kills;
	var gs = this;
	var visibleEnemies;
	var i, j;
    this.time += elapsed;
    var REPEL_DISTANCE = 0.6;
    var REPEL_FACTOR = 0.1;
    var removeZombies = [];
    var despawnZombies = [];
		
	this.player.update(elapsed);

	var timeVal = this.timeOfDay();

	// Update enemies
    this.updateEnemySpawning(elapsed, timeVal);
	kills = 0;
    for (i=0; i<this.enemyList.length; i++) {
    	// queue up dead zombies to be removed
    	if (this.enemyList[i].isDead()) {
			++kills;
    		removeZombies.push(i);
    	}
        else if (this.enemyList[i].despawn) {
			removeZombies.push(i);
        }
    	else {
	        this.enemyList[i].update(elapsed);
	        for (j=0; j<this.enemyList.length; j++) {
	            if (j != i) {
	                var dx = this.enemyList[j].x - this.enemyList[i].x;
	                var dy = this.enemyList[j].y - this.enemyList[i].y;
	                if (Math.sqrt((dx*dx)+(dy*dy)) < REPEL_DISTANCE) {
	                    this.enemyList[i].x -= (dx*REPEL_FACTOR);
	                    this.enemyList[i].y -= (dy*REPEL_FACTOR);
	                    this.enemyList[j].x += (dx*REPEL_FACTOR);
	                    this.enemyList[j].y += (dy*REPEL_FACTOR);
	                    j=0;
	                }
	            }
	        }
	        // Check for enemy colliding with walls
			Game.collide(this.gameBoard, this.enemyList[i]);
	    }
    }
	if(kills > 0) {
		this.killCount += kills;
		Game.playSound('zombie_die.wav');
	}

    // remove dead zombies
    for (j = removeZombies.length-1; j >= 0; j--) {
        this.drawList.splice(this.drawList.indexOf(this.enemyList[removeZombies[j]]),1);
    	this.enemyList.splice(removeZombies[j], 1);
    }

	// Check for player colliding with walls
	Game.collide(this.gameBoard, this.player);
    // update towers
    var removeTowers = [];
    for (var z = 0; z < this.towers.length; z++) {
    	if (this.towers[z].isDead()) {
    		removeTowers.push(z);
    		continue;
    	}
    	this.towers[z].update(elapsed);
    }
    for (var l = removeTowers.length-1; l >= 0; l--) {
    	this.towers.splice(removeTowers[l], 1);
    }

	for(i = this.bullets.length-1;  i >= 0;  --i)
		if(this.bullets[i].update(elapsed))
			this.bullets.splice(i, 1);

	// Count visible enemies
	visibleEnemies = 0;
    for(i = 0;  i < this.enemyList.length;  i++)
		if(this.enemyList[i].isOnScreen())
			++visibleEnemies;

	// Figure out whether the music should change
	(function() {
		var scariness = gs._computeScariness();
		if(Game.currentMusic === null  &&  visibleEnemies > 0)
			Game.startMusic();
		if(gs.time < 8 * gs.TIME_PER_DAY) {
			if(scariness >= 5)
				Game.increaseMusic();
			else if(scariness <= 2)
				Game.decreaseMusic();
		} else {
			if(timeVal < 0.25)
				Game.decreaseMusic();
			else
				Game.increaseMusic();
		}
	}());

	// Play "moan" sound
	this.zombieMoanLevel += visibleEnemies * elapsed;
	if (Math.random() * this.zombieMoanLevel > this.ZOMBIE_MOAN_THRESHOLD) {
		var moan = Math.random();
		Game.playSound(
			moan < 0.33 ? "zombie1.wav" :
			moan < 0.67 ? "zombie2.wav" :
			"zombie3.wav");
			
		this.zombieMoanLevel = 0;
	}
};

GameState.prototype.timeOfDay = function() {
    // Calculate "Time of Day".  0=full day, 1=full night
    var timeVal = Math.floor(this.time)%Math.floor(this.TIME_PER_DAY);
    timeVal = (timeVal / this.TIME_PER_DAY) * Math.PI * 2.0;
    timeVal = (Math.sin(timeVal)*(-1.0))+0.25;
    if (timeVal > 1.0) timeVal = 1.0;
    if (timeVal < 0.0) timeVal = 0.0;
	return timeVal;
};

GameState.prototype.calculateEnemySpawnRate = function(timeVal) {
	if(timeVal === undefined)
		timeVal = this.timeOfDay();
    return this.SPAWN_RATE * (1.0 + (timeVal*(this.SPAWN_NIGHT-1.0)));
};

GameState.prototype.updateEnemySpawning = function(elapsed, timeVal) {
    // Calculate modified spawn rate based on time of day.
    var enemy_rate_mod = this.calculateEnemySpawnRate(timeVal);
    var runner_rate_mod = this.RUNNER_RATE * (1.0 + (timeVal*(this.RUNNER_NIGHT-1.0)));

    // Make a new zombie if spawn counter is "charged" enough.
    while (this.SPAWN_COUNTER >= (1.0/enemy_rate_mod)*1000.0) {
        this.spawnEnemy('enemy');
        this.SPAWN_COUNTER -= ((1.0/enemy_rate_mod)*1000.0);
    }
    while (this.RUNNER_COUNTER >= (1.0/runner_rate_mod)*1000.0) {
        this.spawnEnemy('runner');
        this.RUNNER_COUNTER -= ((1.0/runner_rate_mod)*1000.0);
    }
    // Update everything.
    if(this.time > 5.25*this.TIME_PER_DAY) {
        this.SPAWN_RATE *= Math.pow(1.3, elapsed/this.TIME_PER_DAY);
        this.SPAWN_COUNTER += elapsed;
        if (this.RUNNER_START_TIME < 0 && timeVal > 0) {
            this.RUNNER_RATE = this.SPAWN_RATE / 12 - 0.006;
            this.RUNNER_COUNTER += elapsed;
        }
    } else {
        this.SPAWN_RATE += (this.SPAWN_RATE_ACCEL / 1000.0)*elapsed;
        this.SPAWN_COUNTER += elapsed;
        if (this.RUNNER_START_TIME < 0 && timeVal > 0) {
            this.RUNNER_RATE += (this.RUNNER_RATE_ACCEL / 1000.0)*elapsed;
            this.RUNNER_COUNTER += elapsed;
        }
    }
    this.RUNNER_START_TIME -= elapsed;
    this.max_zombies += (this.MAX_ZOMBIE_ACCEL/this.TIME_PER_DAY) * elapsed;
    this.removeDistantZombies();
}

var INNER_BORDER = Game.WIDTH*0.4;
var OUTER_BORDER = Game.WIDTH*0.2 + INNER_BORDER;
GameState.prototype.spawnEnemy = function(type) {
    if (!this.USING_MAX_ZOMBIES || this.enemyList.length <= Math.floor(this.max_zombies)) {
        var xPos;
        var yPos;
        do {
            xPos = Math.random()*(Game.WIDTH+(2*OUTER_BORDER))-OUTER_BORDER;
            yPos = Math.random()*(Game.HEIGHT+(2*OUTER_BORDER))-OUTER_BORDER;
        } while(xPos > -INNER_BORDER && xPos < Game.WIDTH+INNER_BORDER && yPos > -INNER_BORDER && yPos < Game.HEIGHT+INNER_BORDER);
        var newEnemy;
        if (type == 'runner') { newEnemy = new Game.Runner(Game.screen2gameX(xPos,yPos),Game.screen2gameY(xPos,yPos)); }
        else { newEnemy = new Game.Enemy(Game.screen2gameX(xPos,yPos),Game.screen2gameY(xPos,yPos)); }
        this.enemyList.push(newEnemy);
        this.insertToDrawList(newEnemy);
    }
};

GameState.prototype.spawnRunner = function() {
        var xPos;
        var yPos;
        do {
            xPos = Math.random()*(Game.WIDTH+(2*OUTER_BORDER))-OUTER_BORDER;
            yPos = Math.random()*(Game.HEIGHT+(2*OUTER_BORDER))-OUTER_BORDER;
        } while(xPos > -INNER_BORDER && xPos < Game.WIDTH+INNER_BORDER && yPos > -INNER_BORDER && yPos < Game.HEIGHT+INNER_BORDER);
        var newEnemy = new Game.Enemy(Game.screen2gameX(xPos,yPos),Game.screen2gameY(xPos,yPos));
        this.enemyList.push(newEnemy);
        this.insertToDrawList(newEnemy);
};

GameState.prototype.spawnRunner = function() {

};

GameState.prototype.removeDistantZombies = function() {
    var xPos, yPos, i;
    for (i=0; i<this.enemyList.length; i++) {
        xPos = Game.game2screenX(this.enemyList[i].x,this.enemyList[i].y);
        yPos = Game.game2screenY(this.enemyList[i].x,this.enemyList[i].y);
        if (xPos < -OUTER_BORDER || xPos > Game.WIDTH+OUTER_BORDER || yPos < -OUTER_BORDER || yPos > Game.HEIGHT+OUTER_BORDER) {
            this.enemyList[i].despawn = true;
        }
    }
};

GameState.prototype.insertToDrawList = function(actor) {
    var j = 0;
    while (j < this.drawList.length && 
    Game.game2screenY(this.drawList[j].x,this.drawList[j].y) < 
    Game.game2screenY(actor.x,actor.y)) {
        j++;
    }
    this.drawList.splice(Math.max(j,0),0,actor);
}

GameState.prototype.sortDrawList = function() {
    var prevDraw = this.drawList.indexOf(this.player)-1;
	Game.assert(prevDraw != -2);
    while(prevDraw >= 0 && 
    Game.game2screenY(this.player.x,this.player.y) < 
    Game.game2screenY(this.drawList[prevDraw].x,this.drawList[prevDraw].y)) {
        var tempDraw = this.drawList[prevDraw];
        this.drawList[prevDraw] = this.player;
        this.drawList[prevDraw+1] = tempDraw;
        prevDraw--;
    }
    var nextDraw = prevDraw+2;
    while(nextDraw < this.drawList.length && 
    Game.game2screenY(this.player.x,this.player.y) > 
    Game.game2screenY(this.drawList[nextDraw].x,this.drawList[nextDraw].y)) {
        var tempDraw = this.drawList[nextDraw];
        this.drawList[nextDraw] = this.player;
        this.drawList[nextDraw-1] = tempDraw;
        nextDraw++;
    }
    for (var i=0; i<this.enemyList.length; i++) {
        var prevDraw = this.drawList.indexOf(this.enemyList[i])-1;
		Game.assert(prevDraw != -2);
        while(prevDraw >= 0 && 
        Game.game2screenY(this.enemyList[i].x,this.enemyList[i].y) < 
        Game.game2screenY(this.drawList[prevDraw].x,this.drawList[prevDraw].y)) {
            var tempDraw = this.drawList[prevDraw];
            this.drawList[prevDraw] = this.enemyList[i];
            this.drawList[prevDraw+1] = tempDraw;
            prevDraw--;
        }
        var nextDraw = prevDraw+2;
        while(nextDraw < this.drawList.length && 
        Game.game2screenY(this.enemyList[i].x,this.enemyList[i].y) > 
        Game.game2screenY(this.drawList[nextDraw].x,this.drawList[nextDraw].y)) {
            var tempDraw = this.drawList[nextDraw];
            this.drawList[nextDraw] = this.enemyList[i];
            this.drawList[nextDraw-1] = tempDraw;
            nextDraw++;
        }
    }
}

GameState.prototype.draw = function(ctx) {
	var i;

	if (Game.DEBUG) {
		ctx.fillText('This is the game!', Game.WIDTH/2, Game.HEIGHT/4);
	}
    this.drawBackground(ctx);
    this.sortDrawList();
	this.gameBoard.draw(ctx,this.drawList);
	//this.player.draw(ctx);
    //for (i=0; i<this.enemyList.length; i++) {
    //    this.enemyList[i].draw(ctx);
    //}

	for(i = 0;  i < this.bullets.length;  ++i)
		this.bullets[i].draw(ctx);

	this.drawLighting(ctx);
    var deathA = this.player.deathDelay/this.player.DEATH_DELAY_MAX;
    ctx.fillStyle = 'rgba(0,0,0,'+deathA+')';
    ctx.beginPath();
    ctx.rect(0,0,Game.WIDTH,Game.HEIGHT);
    ctx.fill();

};

GameState.prototype.drawBackground = function(ctx) {
   /* var bMax = 255.0;
    var bVal = Math.floor(this.time)%Math.floor(this.TIME_PER_DAY);
    bVal = (bVal / this.TIME_PER_DAY) * Math.PI * 2.0;
    bVal = Math.sin(bVal);
    bVal = (bVal * bMax) + (bMax / 2.0);
    if (bVal > bMax) bVal = bMax;
    if (bVal < 0) bVal = 0;
    bVal = ("00"+Math.floor(bVal).toString(16)).substr(-2);
    var gMax = 180.0;
    var gMin = 32.0;
    var gOver = 80.0;
    var gVal = Math.floor(this.time)%Math.floor(this.TIME_PER_DAY);
    gVal = (gVal / this.TIME_PER_DAY) * Math.PI * 2.0;
    gVal = (Math.sin(gVal)+1.0)/2.0;
    gVal = (gVal * (gMax-gMin+(gOver*2))) + gMin - gOver;
    if (gVal > gMax) gVal = gMax;
    if (gVal < gMin) gVal = gMin;
    this.debug = gVal;
    gVal = ("00"+Math.floor(gVal).toString(16)).substr(-2);
	ctx.beginPath();
	ctx.fillStyle = "#0000"+bVal;*/
	ctx.fillStyle = "#00aa00";
	ctx.rect(0,0,Game.WIDTH,Game.HEIGHT);
	ctx.fill();
};

GameState.prototype.drawLighting = function(ctx) {
	var aMax = 1;
    var aMin = 0.3;
    var aOver = 0.65;
    var aVal = Math.floor(this.time)%Math.floor(this.TIME_PER_DAY);
    aVal = (aVal / this.TIME_PER_DAY) * Math.PI * 2.0;
    aVal = (Math.sin(aVal)+1.0)/2.0;
    aVal = (aVal * (aMax-aMin+(aOver*2))) + aMin - aOver;
    if (aVal > aMax) aVal = aMax;
    if (aVal < aMin) aVal = aMin;
	ctx.globalAlpha = 1 - aVal;
	ctx.beginPath();
	ctx.fillStyle = "#000000"
	ctx.rect(0,0,Game.WIDTH,Game.HEIGHT);
	ctx.fill();
	ctx.globalAlpha = 1;
};

GameState.prototype.drawPlacementHologram = function(ctx, x, y) {
		var filename, offsetX, offsetY;
	
		if (this.inventory.items[this.inventory.currentItem] <= 0) return;
	
		switch (this.inventory.currentItem) {
			case Game.TOWER_STATION:	filename = "station.png"; offsetX=34; offsetY=48; break;
			case Game.TOWER_WALL:		filename = "wall.png"; offsetX=32; offsetY=72; break;
			case Game.TOWER_BASIC:		filename = "basic.png"; offsetX=39; offsetY=92; break;
			case Game.TOWER_BOMB:		filename = "bomb.png"; offsetX=39; offsetY=92; break;
		}
		if (filename) {
			Game.drawImage(ctx, "place_"+filename, Math.floor(x - offsetX), (y - offsetY));
		}
	};

GameState.prototype.gather = function(x, y) {
    if (this.player.inRange(x,y)) {
        var tile = this.gameBoard.getTile(x, y);
        Game.assert(tile.tag === Tile.RESOURCE);
        this.inventory.addResource(tile.dataObject);
		Game.playSound('craft.wav');
        if (tile.dataObject === Game.Resource.WOOD) {
//            this.addBullet(new Popup(x,y,'133,84,15', this.inventory.resources[0]));
            this.addBullet(new Popup(x,y,'133,84,15', '+1'));
        }
        else if (tile.dataObject === Game.Resource.FUELS) {
//            this.addBullet(new Popup(x,y,'186,17,17', this.inventory.resources[3]));
            this.addBullet(new Popup(x,y,'186,17,17', '+1'));
        }
        else if (tile.dataObject === Game.Resource.STONE) {
//            this.addBullet(new Popup(x,y,'54,54,54', this.inventory.resources[1]));
            this.addBullet(new Popup(x,y,'54,54,120', '+1'));
        }
        else if (tile.dataObject === Game.Resource.IRON) {
//            this.addBullet(new Popup(x,y,'211,211,211', this.inventory.resources[2]));
            this.addBullet(new Popup(x,y,'211,211,211', '+1'));
        }
        else {
            this.addBullet(new Popup(x,y,'255,255,255'), '+1');
        }
        if (Math.random() < this.RESOURCE_DEPLETE_CHANCE) {
            this.gameBoard.setTile(EMPTY, x, y);
        }
    }
};

GameState.prototype.plant = function(type, x, y) {
    if (this.player.inRange(x,y)) {
        var tile = this.gameBoard.getTile(x, y);  // Needed only for the assertion
        Game.assert(tile.tag === Tile.EMPTY);
        if(this.inventory.removeItem(type)) {
            var tower = new Game.Tower(type, x, y);
            this.gameBoard.setTile(new Tile(Tile.TOWER, tower),x,y);
            this.towers.push(tower);
			Game.playSound('place_building.wav');
        }
    }
};

GameState.prototype.removeTower = function(x, y) {
    if (this.player.inRange(x,y)) {
        var tile = this.gameBoard.getTile(x, y);  // Needed only for the assertion
        Game.assert(tile.tag === Tile.TOWER);
		this.gameBoard.setTile(EMPTY,x,y);
		this.towers.splice(this.towers.indexOf(tile.dataObject),1);
    }
};

Game.GameState = GameState;


}());
}());
