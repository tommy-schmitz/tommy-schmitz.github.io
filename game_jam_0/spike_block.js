// Load main library
var Game = window.Game || {};

Game.actors = Game.actors || [];

Game.addSpikeBlock = function addSpikeBlock(x,y) {
	Game.actors.push(new SpikeBlock(x,y));
};

function SpikeBlock(x,y) {
	this.gridX = x;
	this.gridY = y;
	this.x = x * 32;
	this.y = y * 32;
	this.width = 32;
	this.height = 32;
	
	this.homeX = this.x;
	this.homeY = this.y;
	this.homeSectorX = Math.floor((x - 1) / Game.wallGrid.sectorWidth);
	this.homeSectorY = Math.floor((y - 1) / Game.wallGrid.sectorHeight);
	this.leftBoundary = this.homeSectorX * Game.wallGrid.sectorWidth + 1;
	this.topBoundary = this.homeSectorY * Game.wallGrid.sectorHeight + 1;
	this.rightBoundary = (this.homeSectorX+1) * Game.wallGrid.sectorWidth - 1;
	this.bottomBoundary = (this.homeSectorY+1) * Game.wallGrid.sectorHeight - 1;
	
	this.time = 0;
	this.attackPower = 1;
	this.currentDir = -1;
	this.currentSpeed = 0;
	this.ATTACK_SPEED = 0.15;
	this.RETRACT_SPEED = 0.05;
};

SpikeBlock.prototype.checkBounce = function checkBounce() {
	var i,a;

	if (Game.wallGrid[this.gridY][this.gridX]) {
		Game.playSound("block.wav");
		this.currentDir = (this.currentDir + 2) % 4;
		this.currentSpeed = this.RETRACT_SPEED;
		return;
	}
	for (i = 0; i < Game.actors.length; ++i) {
		a = Game.actors[i];
		if (a instanceof SpikeBlock && a !== this) {
			if ((this.x < a.x + a.width) &&
				(this.y < a.y + a.height) &&
				(this.x > a.x - a.width) &&
				(this.y > a.y - a.height)) {
				Game.playSound("block.wav");
				this.currentDir = (this.currentDir + 2) % 4;
				this.currentSpeed = this.RETRACT_SPEED;
				if (a.currentSpeed === a.ATTACK_SPEED) {
					a.currentDir = (a.currentDir + 2) % 4;
					a.currentSpeed = a.RETRACT_SPEED;
				}
				return;
			}
		}
	}
};

SpikeBlock.prototype.checkHome = function checkHome() {
	if ((this.x <= this.homeX  &&  this.currentDir == 3) ||
		(this.x >= this.homeX  &&  this.currentDir == 1) ||
		(this.y <= this.homeY  &&  this.currentDir == 0) ||
		(this.y >= this.homeY  &&  this.currentDir == 2)) {
		this.x = this.homeX;
		this.y = this.homeY;
		this.gridX = Math.round(this.x / 32);
		this.gridY = Math.round(this.y / 32);
		this.currentDir = -1;
	}
};

SpikeBlock.prototype.destroy = function destroy() {
	//this.isDestroyed = true;
};

SpikeBlock.prototype.update = function update(elapsed) {
	if (this.homeSectorX !== Game.player.sectorX ||
		this.homeSectorY !== Game.player.sectorY) { return; }
		
	if (this.currentDir === -1) {
		if ((Game.player.y >= this.y - this.height) &&
			(Game.player.y <= this.y + this.height)) {
			if ((Game.player.x > this.x) &&
				(!Game.wallGrid[this.gridY][this.gridX+1]))
			{ 
				this.currentDir = 1; 
				this.currentSpeed = this.ATTACK_SPEED;
			}
			else if ((Game.player.x < this.x) &&
				(!Game.wallGrid[this.gridY][this.gridX-1]))
			{ 
				this.currentDir = 3; 
				this.currentSpeed = this.ATTACK_SPEED;
			}
		} else if ((Game.player.x >= this.x - this.width) &&
					(Game.player.x <= this.x + this.width)) {
			if ((Game.player.y > this.y) &&
				(!Game.wallGrid[this.gridY + 1][this.gridX]))
			{ 
				this.currentDir = 2; 
				this.currentSpeed = this.ATTACK_SPEED;
			}
			else if ((Game.player.y < this.y) &&
				(!Game.wallGrid[this.gridY - 1][this.gridX]))
			{ 
				this.currentDir = 0; 
				this.currentSpeed = this.ATTACK_SPEED;
			}
		}
	} else {
		switch(this.currentDir) {
			case 0:
				this.y -= this.currentSpeed * elapsed;
				this.gridY = Math.floor(this.y / 32);
			break;
			case 1:
				this.x += this.currentSpeed * elapsed;
				this.gridX = Math.ceil(this.x / 32);
			break;
			case 2:
				this.y += this.currentSpeed * elapsed;
				this.gridY = Math.ceil(this.y / 32);
			break;
			case 3:
				this.x -= this.currentSpeed * elapsed;
				this.gridX = Math.floor(this.x / 32);
			break;
		}
		if (this.currentSpeed === this.ATTACK_SPEED) {
			this.checkBounce();
		} else {
			this.checkHome();
		}
	}
 
	this.time += elapsed;
};

SpikeBlock.prototype.draw = function draw(ctx) {
	Game.drawImage(ctx, "spike_block.png", 
		Math.round(this.x),	// Draw x
		Math.round(this.y)	// Draw y
	);
};
