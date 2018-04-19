// Load main library
var Game = window.Game || {};

Game.ai = (function() {


var randomElement = function(array) {
	return array[Math.floor(Math.random() * array.length)];
};
var manhattan = function(unit, x, y) {
	var tile = unit.getTile();
	return Math.abs(x-tile.x) + Math.abs(y-tile.y);
};


var AI = function() {
	this.actionDelay = 750;
	this.time = 0;
	this.team = 1;
};

AI.prototype._invalidTarget = function(tile) {
	return   !tile.hasUnit()  ||  tile.getUnit()._team === this.team;
};
AI.prototype._distanceField = function() {
	var i, j, k, unit;
	var result = [[]];
	for(i = 0;  i < Game.currentWorld.grid.length;  ++i) {
		result.push([]);
		for(j = 0;  j < Game.currentWorld.grid[i].length;  ++j)
			result[i].push(0);
	}
	for(k = 0;  k < Game.currentWorld.activeUnits.length;  ++k) {
		unit = Game.currentWorld.activeUnits[k];
		if(unit.getTeam() === this.team)
			continue;
		for(i = 0;  i < Game.currentWorld.grid.length;  ++i)
			for(j = 0;  j < Game.currentWorld.grid[i].length;  ++j)
				result[i][j] += manhattan(unit, j, i);
	}
	return result;
};
AI.prototype.think = function() {
	var i, j, tile, attackRange, value;
	var result;
	var unit = this.currentUnit;

	var moveRange = unit.getMoveRange();
	var field = this._distanceField();
	var choices = [];
	for(i = 0;  i < moveRange.length;  ++i) {
		tile = moveRange[i];
		value = -field[tile.y][tile.x];
		choices.push({dest: tile, target: null, value: value});
		attackRange = unit.getAttackRange(tile);
		for(j = 0;  j < attackRange.length;  ++j) {
			if(this._invalidTarget(attackRange[j]))
				continue;
			value = unit.considerAttacking(tile, attackRange[j]);
			choices.push({dest: tile, target: attackRange[j], value: value});
		}
	}
	result = choices[0];
	for(i = 1;  i < choices.length;  ++i)
		if(choices[i].value > result.value)
			result = choices[i];
	result.path = Game.getPath(result.dest, moveRange);

	return result;
}
AI.prototype.update = function(elapsed) {
	this.time -= elapsed;
	if (this.time <= 0) {
		if (this.nextAction) {
			this.nextAction();
		}
	}
};
AI.prototype.startTurn = function() {
	var i, result, newTile;
	Game.assert(Game.currentWorld.currentTeam === this.team);

	// Wait a little and then start picking a unit
	this.delayNextAction(this.pickUnit, this.actionDelay);
};
// Pick a unit to execute actions with
AI.prototype.pickUnit = function() {
	var tile;
	var unit = this.currentUnit = Game.currentWorld.findMovableUnit();
	tile = this.currentUnit.getTile();
	// Focus on the unit
	Game.camera.goTo(
		tile.x * Game.TILE_WIDTH * Game.SCALE_FACTOR,
		tile.y * Game.TILE_HEIGHT * Game.SCALE_FACTOR);

	this.delayNextAction(this.moveUnit,this.actionDelay);
};
// Move the unit
AI.prototype.moveUnit = function() {
	// Move the unit
	var tile = this.currentUnit.getTile();
	var intent = this.think();
	Game.currentWorld.move(tile, intent.dest, intent.path);
	var timeout = (intent.path.length-1) * Game.MS_PER_TILE;
	this.delayNextAction(attackUnit(intent.target), timeout);
};
// Attack with the unit
var attackUnit = function(targetTile) { return function() {
	var result;

	// Attack something if possible
	var unit = this.currentUnit;
	var tile = unit.getTile();
	if(targetTile === null)
		result = Game.currentWorld.wait(tile);
	else
		result = Game.currentWorld.attack(tile, targetTile);

	if(result)
		Game.UI.itsYourTurn();
	else
		this.delayNextAction(this.pickUnit, this.actionDelay);
};};

AI.prototype.delayNextAction = function (_action,_delay) {
	if (_delay === undefined) { _delay = this.actionDelay; }
	this.time = _delay;
	this.nextAction = _action;
};

return new AI();


}());
