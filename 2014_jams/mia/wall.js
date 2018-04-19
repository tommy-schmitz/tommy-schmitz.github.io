// Load main library
var Game = window.Game || {};

Game.walls = [];
Game.wallGrid = (function() {
	var result = [],
		i, j;
		
	result.sectorWidth = 24;
	result.sectorHeight = 14;
	result.width = result.sectorWidth * 4 + 1;
	result.height = result.sectorHeight * 4 + 1;
		
	for(i = 0;  i < result.height;  ++i) {
		result.push([]);
		for(j = 0;  j < result.width;  ++j)
			result[i].push(null);
	}
	
	return result;
}());

Game.Wall = function Wall(j, i, type) {
	this.x = j*32;
	this.y = i*32;
	this.type = type;
	if(Game.wallGrid[i][j] !== null)
		throw 0;
	Game.walls.push(this);
	Game.wallGrid[i][j] = this;
};

Game.removeWall = function(j, i) {
	Game.walls.splice(Game.walls.indexOf(Game.wallGrid[i][j]), 1);
	Game.wallGrid[i][j] = null;
};

Game.addWall = function addWall(j, i) {
	new Game.Wall(j, i, 'wall');
};

Game.addLockedDoor = function(j, i) {
	new Game.Wall(j, i, 'locked_door');
};

Game.addOneWayDoorR = function(j, i) {
	new Game.Wall(j, i, 'one_way_r');
};

Game.addOneWayDoorL = function(j, i) {
	new Game.Wall(j, i, 'one_way_l');
};

Game.Wall.prototype.draw = function draw(ctx) {
	if ((this.x >= Game.camera.x - 32) &&
		(this.x <= Game.camera.x + 800) &&
		(this.y >= Game.camera.y - 32) &&
		(this.y <= Game.camera.y + 480)) {
		if(this.type === 'wall')
			Game.drawImageInWorld(ctx, 'wall_1.png', this.x, this.y);
		else if(this.type === 'locked_door')
			Game.drawImageInWorld(ctx, 'testlockeddoor.png', this.x, this.y);
		else if(this.type === 'one_way_r')
			Game.drawImage(ctx, 'one_way_r.png', this.x, this.y);
		else if(this.type === 'one_way_l')
			Game.drawImage(ctx, 'one_way_l.png', this.x, this.y);
		else
			throw 0;
	}
};
