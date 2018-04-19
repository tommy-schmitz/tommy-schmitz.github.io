// Load main library
var Game = window.Game || {};

Game.actors = Game.actors || [];

Game.addSpikes = function addSpikes(x,y) {
	Game.actors.unshift(new Spikes(x,y));
};

function Spikes(x,y) {
	this.gridX = x;
	this.gridY = y;
	this.x = x * 32;
	this.y = y * 32;
	this.width = 32;
	this.height = 32;
	
	this.homeSectorX = Math.floor((x - 1) / Game.wallGrid.sectorWidth);
	this.homeSectorY = Math.floor((y - 1) / Game.wallGrid.sectorHeight);
	
	this.time = 0;
	this.attackPower = 0;
};

Spikes.prototype.destroy = function destroy() {
	// Cannot be destroyed
};

Spikes.prototype.update = function update(elapsed) {
	if (this.homeSectorX !== Game.player.sectorX ||
		this.homeSectorY !== Game.player.sectorY) { return; }

	this.time += elapsed;
	if (this.time < 4000) {
		this.attackPower = 0;
	} else if (this.time < 8000) {
		this.attackPower = 1;
	} else {
		this.attackPower = 0;
		this.time -= 8000;
	}
};

Spikes.prototype.draw = function draw(ctx) {
	var frame;
	if (this.time < 3900) {
		frame = 0;
	} else if (this.time < 4000) {
		frame = 1;
	} else if (this.time < 7900) {
		frame = 2;
	} else {
		frame = 3;
	}
	
	Game.drawImage(ctx, "spike.png", 
		frame * 32,				// Slice x
		0,					// Slice y
		32,					// Slice width
		32,					// Slice height
		Math.round(this.x),	// Draw x
		Math.round(this.y),	// Draw y
		32,					// Draw width
		32					// Draw height
	);
};
