// Load main library
var Game = window.Game || {};

(function() {

Game.GRASS = 0;
Game.FOREST = 1;
Game.MOUNTAIN = 2;
Game.WATER = 3;

Game.TEAM1 = 0;
Game.TEAM2 = 1;
var baseWorld =	"....................;"+
				"....................;"+
				"....................;"+
				"....................;"+
				"....................;"+
				"....................;"+
				"....................;"+
				"....................;"+
				"....................;"+
				"....................;"+
				"....................;"+
				"....................;";
var loadTutorialWorld = function () {
	var tutorialWorld =	"wwww.............mmm;"+
						"www.........f..mm.mm;"+
						".ww........f.f.....m;"+
						"m...........ff......;"+
						"mm.mm..ww.........ww;";
	Game.loadWorld(tutorialWorld);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 5, 3);
	
	Game.currentWorld.addUnit(new Game.Manikin(Game.TEAM2), 12, 3);
	
	Game.mainUI = Game.UI;
	Game.UI = Game.Tutorial;
	Game.setMusic(Game.MUSIC2);
};
var loadTerrainIntro = function() {
	var map =	"mmm..fff...mm...;"+
				"m...f.f.f..m....;"+
				".....f.....w....;"+
				"...wwww..wwww...;"+
				"wwww..wwww......;"+
				"w..........f.f..;"+
				".f......f.ff...m;"+
				"..f......f..m.mm;";
	Game.loadWorld(map);

	// Switch back to the main ui
	Game.UI = Game.mainUI;

	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 1, 2);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 2, 3);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 2, 1);

	Game.currentWorld.addUnit(new Game.Manikin(Game.TEAM2), 5, 1);
	Game.currentWorld.addUnit(new Game.Manikin(Game.TEAM2), 8, 1);
	Game.currentWorld.addUnit(new Game.Manikin(Game.TEAM2), 11, 1);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 8, 6);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 11, 6);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 13, 5);
	
	Game.camera.goTo(0,0);
};
var loadBasicWorld = function () {
	var basicWorld =	"wwwwwwww..........mm;"+
						"wwwwww.............m;"+
						"www...........mm.mmm;"+
						".......m....mmm....m;"+
						"........mm.mm.......;"+
						"ff.......mmmm.......;"+
						"......ff.ffmmm......;"+
						".ffff...f.fmmmm.....;"+
						"....ff....mmmmmm....;"+
						".f.f.....mmmmmmm....;"+
						"..ff...mmmmmmmmmmm..;"+
						"....mmmmmmmmmmmmmmmm;";
	
	// Switch back to the main ui
	Game.UI = Game.mainUI;
	
	Game.loadWorld(basicWorld);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 3, 9);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 1, 9);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 2, 7);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 5, 8);
	
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 16, 5);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 17, 7);
	
	Game.camera.goTo(0,1000);
};
var loadMinotaurIntro = function() {
	var map =	".....mmmm.....f.;"+
				"......mm.......f;"+
				"m....ww.........;"+
				"mmm.wwwww.......;"+
				"mm...ww.www..wff;"+
				".....w....wwww.f;"+
				"....ww....fwfff.;"+
				"...www.....wf..f;";
	Game.loadWorld(map);

	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 1, 5);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 2, 6);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 3, 5);

	Game.currentWorld.addUnit(new Game.Manikin(Game.TEAM2), 2, 2);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 8, 6);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 12, 2);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 14, 3);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 13, 7);
	Game.camera.goTo(0,0);
};
var loadMinotaurMountainIntro = function() {
	var map =	"...mmmmm.m......;"+
				"...mwmm.mmmm....;"+
				"...wwmm.m.m.....;"+
				"...wwmmmm.m.....;"+
				"....wwwwwwwww...;"+
				"...wwff.f.f.....;"+
				"...wwfffff.f....;"+
				"...ffff..f......;"+
				"...fffffff.f....;";
	Game.loadWorld(map);

	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 0, 3);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 0, 5);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 2, 3);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 2, 5);

	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 14, 1);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 14, 2);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 14, 6);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 14, 7);
	Game.camera.goTo(0,0);
};
var loadDragonIntro = function () {
	var map =	".fff....www..ff.;"+
				"fff...f..ww.....;"+
				".f..f.....ww.fff;"+
				"...f.....www.ff.;"+
				".........w....ff;"+
				"...mm....w...f.f;"+
				"..m.mmm.ww..m...;"+
				"...mm..mww.mfmm.;"+
				"mmmm....ww....mm;";
	Game.loadWorld(map);


	Game.currentWorld.addUnit(new Game.Dragon(Game.TEAM1), 8, 4);

	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 0, 6);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 1, 6);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 2, 7);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 14, 0);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 14, 1);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 15, 2);
	Game.camera.goTo(0,0);
};
var loadFirstWorld = function () {
	var firstWorld =	".................mmm;"+
						"f...ff..f...ff.mm.mm;"+
						".f..f.f..ff.f.f..f.m;"+
						"m....f....f......f..;"+
						"mm.mm..ww...f.......;"+
						"mmm..fwwww........f.;"+
						"fm..ffwwwwww.......f;"+
						".......wwwwwww...f..;"+
						".......ww...www.....;"+
						"........ww.....f..f.;"+
						"...f..wwwwww..fff..f;"+
						"..f..wwwwwwwww...f..;";
		
	Game.loadWorld(firstWorld);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 6, 3);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 4, 1);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 4, 5);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 1, 6);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 2, 3);
	
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 19, 8);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 17, 10);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 16, 5);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 17, 7);
	
	Game.camera.goTo(0,0);
	Game.setMusic(Game.MUSIC1);
};
var loadSecondWorld = function () {
	var secondWorld =	"m..m....www..ff...ff;"+
					"mm..............fm.f;"+
					"....wwww.f......m.ff;"+
					"....wwwwffmffm......;"+
					"..ff.mfwmmmfmffff...;"+
					"..ff..fwwmmffm.ff...;"+
					"......mfmmmmfmff....;"+
					"ff...m..fmm.mm.m.ff.;"+
					"fff...ff..fff.......;"+
					"f.ff..mm......f.ffmm;"+
					"fff.......www....mmm;"+
					"f..fff...wwwww..mfmm;";
	Game.loadWorld(secondWorld);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 1, 10);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 3, 11);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 1, 9);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 2, 4);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 1, 6);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 0, 11);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 0, 1);
	
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 10, 5);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 9, 4);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 8, 6);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 9, 8);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 10, 7);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 10, 8);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 11, 8);
	Game.currentWorld.addUnit(new Game.Dragon(Game.TEAM2), 9, 7);
};

var loadThirdWorld = function () {
	var thirdWorld =	"......ff...f...f....;"+
					"..m......m.....m....;"+
					"..m...m..mm.....m...;"+
					"......mmfmfmm..ff...;"+
					"m.....mmmfmmfm......;"+
					"m..f...mwwm....m...m;"+
					".......m....fff..f.m;"+
					"ff...mfmfm..fwf.....;"+
					".f...mmmfmm.fw.mm..m;"+
					".....mmfmfm..w......;"+
					"ff....mmm.m.w...ff..;"+
					"fff....mm..ww.......;";
	Game.loadWorld(thirdWorld);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 17, 9);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 14, 9);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 19, 3);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM1), 19, 5);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 16, 5);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 15, 6);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM1), 16, 4);
	
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 7, 3);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 11, 3);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 7, 7);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 10, 4);
	Game.currentWorld.addUnit(new Game.Minotaur(Game.TEAM2), 10, 5);
	Game.currentWorld.addUnit(new Game.KillerRabbit(Game.TEAM2), 10, 7);
	Game.currentWorld.addUnit(new Game.Dragon(Game.TEAM2), 8, 8);
	Game.currentWorld.addUnit(new Game.Dragon(Game.TEAM2), 8, 5);
};
var loadVictoryWorld = function() {
	var map =   ".w..................;"+
				"ww..m.m.mmm.m.m.....;"+
				"....mmm.m.m.m.m.....;"+
				".....m..m.m.m.m.....;"+
				".....m..mmm.mmm.....;"+
				"....................;"+
				"....m.m.m.m.m..m....;"+
				"....m.m.m.m.mm.m....;"+
				"....m.m.m.m.m.mm....;"+
				".....m.m..m.m..m..ww;"+
				"..................w.;";

	Game.loadWorld(map);

	Game.currentWorld.addUnit(new Game.Manikin(Game.TEAM1), 0, 0);

	Game.currentWorld.addUnit(new Game.Manikin(Game.TEAM2), 19, 10);
};

Game.track = [loadTutorialWorld, loadTerrainIntro, loadBasicWorld, loadMinotaurIntro, loadMinotaurMountainIntro, loadDragonIntro, loadFirstWorld, loadSecondWorld, loadThirdWorld, loadVictoryWorld];
Game.trackIndex = 0;

Game.TILE_WIDTH = 16;
Game.TILE_HEIGHT = 16;
				
Game.loadWorld = function initWorld(template) {
	var world = new World(),
		worldX = 0, worldY = 0, i;
	
	world.bounds.right = 0;
	
	if (template === undefined) { template = baseWorld; }
	
	for (i = 0; i < template.length; ++i) {
		switch(template[i]) {
			case '.': world.grid[worldY][worldX] = new Tile(Game.GRASS,worldX,worldY); break;
			case 'f': world.grid[worldY][worldX] = new Tile(Game.FOREST,worldX,worldY); break;
			case 'm': world.grid[worldY][worldX] = new Tile(Game.MOUNTAIN,worldX,worldY); break;
			case 'w': world.grid[worldY][worldX] = new Tile(Game.WATER,worldX,worldY); break;
			case ';':
				worldX = 0;
				worldY += 1;
				world.grid.push([]);
			continue;
		}
		++worldX;
		if (worldX > world.bounds.right) { world.bounds.right = worldX; }
	}
	if (world.grid[world.grid.length-1].length === 0) {
		world.grid.pop(); // need to do this so that we dont end up with a trailing empty array in world grid
	}
	
	world.bounds.left = 0;
	world.bounds.top = 0;
	world.bounds.right *= Game.TILE_WIDTH * Game.SCALE_FACTOR;
	world.bounds.bottom = world.grid.length * Game.TILE_HEIGHT * Game.SCALE_FACTOR;
	
	world.endOfLevel = false;
	world.time = 0;
	world.defeatCondition = false;
	world.victoryCondition = false;
	
	Game.currentWorld = world;
	console.log("loaded world");
	//Game.totalDeaths = 0;
};

function World() {

	this.grid = [[]];
	this.activeUnits = [];
	this.unitsMarkedForRemoval = [];
	this.layers = 2;
	this.currentTeam = 0;
	this.bounds = {};
	this.team1Units = 0;
	this.team2Units = 0;

	this.translatePositionToTile = function (x, y) {
		var xTile = Math.floor(x/(Game.TILE_WIDTH*Game.SCALE_FACTOR));
		var yTile = Math.floor(y/(Game.TILE_HEIGHT*Game.SCALE_FACTOR));
		if (this.grid[yTile] && this.grid[yTile][xTile]) {
			return this.grid[yTile][xTile];
		}
		return null;
	};

	var Node = function(tile) {
		var _tile = tile;
		_tile._visited = false;
		_tile._distance = 9999999999999;
		_tile.previousTile;
		_tile.beenInQueue = false;

		_tile.setBeenInQueue = function (value) {
			_tile.beenInQueue = value;
		};

		_tile.hasBeenInQueue = function () {
			return _tile.beenInQueue;
		};

		_tile.getDistance = function () {
			return _tile._distance;
		};

		_tile.setDistance = function (distance, previousTile) {
			_tile._distance = distance;
			_tile._previousTile = previousTile;
		};

		_tile.getPreviousTile = function () {
			return _tile._previousTile;
		};

		_tile.setVisited = function () {
			_tile._visited = true;
		};

		_tile.getVisited = function () {
			return _tile._visited;
		};

		return _tile;
	};

	this.getMovementTileset = function (tile, distance) {
		// Graph search variables
		var graph = [],
			unit = tile.getUnit(),
			queue = [],
			first, current, 
			tmpNode, tmpDistance,
			i, iLength, x, xLength;
	
		// Load the world into the search graph
		for (i = 0, iLength = this.grid.length; i < iLength; i++) {
			graph.push([]);
			for (x = 0, xLength = this.grid[i].length; x < xLength; x++) {
				graph[i].push(Node (this.grid[i][x]));
			}
		}
		
		// Check a node to see if it needs to be added to the list of nodes to search
		function checkNode(nodeX,nodeY) {
			tmpNode = graph[nodeY][nodeX];
			if (tmpNode.hasUnit() && tmpNode.getUnit()._team !== unit._team) {
				tmpDistance = current.getDistance() + 999;
			} else {
				tmpDistance = current.getDistance() + unit.getMovementCost(tmpNode);
			}
			if (tmpNode.getDistance() > tmpDistance){
				tmpNode.setDistance(tmpDistance, current);
			}

			if (!tmpNode.getVisited()) {
				tmpNode.setVisited(true);
				queue.push(tmpNode);
			}
		};

		// Set the starting tile
		first = graph[tile.getY()][tile.getX()];
		first.setDistance(0, null);
		queue.push(first);
		first.setVisited(true);
		// Search until no reachable nodes remain
		while (queue.length > 0) {
			current = queue.shift();
			// Search adjacent nodes
			if (current.getY() + 1 < graph.length) { checkNode(current.getX(),current.getY() + 1); }
			if (current.getY() - 1 >= 0) { checkNode(current.getX(),current.getY()- 1); }
			if (current.getX() + 1 < graph[current.getY()].length) { checkNode(current.getX() + 1,current.getY()); }
			if (current.getX() - 1 >=0) { checkNode(current.getX() - 1,current.getY()); }
			current.setVisited(true);
		}
		// Select only the tiles that are walkable
		var tiles = [tile];
		for (var z = 0, zLength = graph.length; z < zLength; z++) {
			for (var y = 0, yLength = graph[z].length; y < yLength; y++) {
				if (!graph[z][y].hasUnit() && graph[z][y].getDistance() <= distance) {
					tiles.push(graph[z][y]);
				}
			}
		}
		return tiles;
	};

}

World.prototype.getBounds = function getBounds() {
	return this.bounds;
};

World.prototype.draw = function draw(ctx) {
	var i, j, currentTile, currentLayer = 0;
	for (currentLayer = 0; currentLayer < this.layers; ++currentLayer) {
		for (j = 0; j < this.grid.length; ++j) {
			for (i = 0; i < this.grid[j].length; ++i) {
				this.grid[j][i].drawLayer(ctx,currentLayer);
			}
		}
	}
};

// Moves a unit. This is supposed to only be called on units that haven't moved
// yet, and the target square is supposed to be within walking distance, and
// then the caller is supposed to call either wait() or attack() immediately
// after calling move().
World.prototype.move = function(tileFrom, tileTo, path) {
	var unit = tileFrom.getUnit();
	Game.assert(unit._team === this.currentTeam);
	Game.assert(path);
	tileFrom.setUnit(null);
	tileTo.setUnit(unit);
	unit.animatePath(path);
	if (tileFrom !== tileTo) {
		Game.playSound('steps.wav');
	}
};

// Possibly turn-ending commands. Returns true if the turn ended.
World.prototype.wait = function(tile) {
	var unit = tile.getUnit();
	unit.wait();
	return this._possiblyEndTurn();
};
World.prototype.attack = function(tileFrom, tileTo) {
	var attacker = tileFrom.getUnit();
	var defender = tileTo.getUnit();

	//TODO: check attack range to ensure attack is legal

	attacker.attack(defender);
	return this._possiblyEndTurn();
};

// storing all units in some place so that they can be accessed for updates
World.prototype.addUnit = function (unit, x, y) {
	this.grid[y][x].setUnit(unit);
	this.activeUnits.push(unit);
	if (unit.getTeam() === 0) {
		this.team1Units++;
	}
	else if (unit.getTeam() === 1) {
		this.team2Units++;
	}
};

World.prototype.removeUnit = function (unit) {
	this.unitsMarkedForRemoval.push(unit);
};
// updating the time in each unit
World.prototype.update = function (elapsed) {
	for (var i = 0, length = this.activeUnits.length; i < length; i++) {
		this.activeUnits[i].update(elapsed);
	}
	// remove units marked for removal
	for (var j = 0, jLength = this.unitsMarkedForRemoval.length; j < jLength; j++) {
		var index;
		for (var x = 0, xLength = this.activeUnits.length; x < xLength; x++) {
			if (this.activeUnits[x].getId() === this.unitsMarkedForRemoval[j].getId()) {
				index = x;
			}
		}
		if (typeof index !== undefined) {
			this.activeUnits.splice(index, 1);
			if (this.unitsMarkedForRemoval[j].getTeam() === Game.TEAM1) {
				this.team1Units--;
			}
			else if (this.unitsMarkedForRemoval[j].getTeam() === Game.TEAM2) {
				this.team2Units--;
			}
		}
	}
	this.unitsMarkedForRemoval = [];
		
	if (this.endOfLevel) {
		this.time += elapsed;
		if (this.time > 3000) {
			if (this.defeatCondition) {
				Game.UI.reset();
				Game.reloadWorld();
			}
			if (this.victoryCondition) {
				Game.UI.reset();
				Game.advanceWorlds();
			}
		}
	} else {
		// check units of teams

		if (this.team1Units <= 0) {
			Game.UI.defeat();
			this.time = 0;
			this.endOfLevel = true;
			this.defeatCondition = true;
		}
		else if (this.team2Units <= 0) {
			Game.UI.victory();
			this.time = 0;
			this.endOfLevel = true;
			this.victoryCondition = true;
		}
	}
	/*if (this.activeUnits.length === 0 || this.team1Units <= 0 || this.team2Units <= 0) {
		// then we have a win condition
		Game.advanceWorlds();
	}*/
};

// Returns a unit that can currently be moved by the current team. Returns null
// if none exists, but that can't happen as long as the world is in a
// consistent state.
World.prototype._findMovableUnit = function() {
	var i, unit;
	for(i = 0;  i < this.activeUnits.length;  ++i) {
		unit = this.activeUnits[i];
		if(unit.isActive()  &&  unit._team === this.currentTeam)
			return unit;
	}
	return null;
};
// Returns a unit that can currently be moved. Useful for the AI to use.
World.prototype.findMovableUnit = function() {
	var result = this._findMovableUnit();
	Game.assert(result !== null);
	return result;
};
// Check whether the current team has any "unmoved" units remaining; if not,
// then change the current team. Returns true iff the turn was changed.
World.prototype._possiblyEndTurn = function() {
	if(this._findMovableUnit() !== null)
		return false;

	++this.currentTeam;
	this.currentTeam %= 2;  // total number of teams
	this._refreshEveryone();
	return true;
};
World.prototype._refreshEveryone = function() {
	for(var i = 0;  i < this.activeUnits.length;  ++i)
		this.activeUnits[i].setActive(true);
};

Game.validCoord = function(x, y) {
	return   x >= 0  &&  y >= 0  &&  y < Game.currentWorld.grid.length
	     &&  x < Game.currentWorld.grid[y].length;
};

function Tile(type,x,y) {
	this.type = type;
	this.unit = null;
	this.x = x;
	this.y = y;
/*
	tile.drawBackground = function (ctx) {
		Game.drawImage(ctx, 'tiles.png', 
			tile.type * Game.TILE_WIDTH,	// Slice x
			0,								// Slice y
			Game.TILE_WIDTH,			// Slice width
			Game.TILE_HEIGHT,			// Slice height
			tile.getX() * Game.TILE_WIDTH, 	// Draw x
			tile.getY() * Game.TILE_HEIGHT,	// Draw y
			Game.TILE_WIDTH,		// Draw width
			Game.TILE_HEIGHT);		// Draw height
	};
*/
};
Tile.prototype.getX = function() {
	return this.x;
};
Tile.prototype.getY = function() {
	return this.y;
};
Tile.prototype.hasUnit = function() {
	return this.unit != null;
};
Tile.prototype.setUnit = function (unit) {
	this.unit = unit;
	if (unit != null) { unit.setTile(this); }
};
Tile.prototype.getUnit = function () {
	return this.unit;
};
Tile.prototype.getBaseMovementCost = function () {
	switch(this.type) {
		case Game.GRASS:	return 1;
		case Game.FOREST: 	return 2;
		case Game.MOUNTAIN: return 3;
		case Game.WATER: 	return 999;
	}
};
Tile.prototype.getBaseDefenseRating = function () {
	switch(this.type) {
		case Game.GRASS:	return 1;
		case Game.FOREST: return 0.9;
		case Game.MOUNTAIN: return 0.8;
		case Game.WATER: return 1.1;
	}
};
Tile.prototype.drawLayer = function (ctx,layer) {
	if (layer === 0) {
		// Layer 0 is background layer
		Game.drawImage(ctx, 'tiles.png', 
			this.type * Game.TILE_WIDTH,	// Slice x
			0,								// Slice y
			Game.TILE_WIDTH,			// Slice width
			Game.TILE_HEIGHT,			// Slice height
			this.getX() * Game.TILE_WIDTH, 	// Draw x
			this.getY() * Game.TILE_HEIGHT,	// Draw y
			Game.TILE_WIDTH,		// Draw width
			Game.TILE_HEIGHT);		// Draw height
	}
	else if (layer === 1) {
		// Layer 1 is the unit layer
		// Draw unit on this tile
		if (this.hasUnit())
			this.getUnit().draw(ctx, this.getX(), this.getY());
	}
};

}());
