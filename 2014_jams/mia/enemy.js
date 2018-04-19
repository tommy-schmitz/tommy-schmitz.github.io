// Load main library
var Game = window.Game || {};

Game.actors = Game.actors || [];

Game.addEnemyBug = function addEnemyBug(x,y) {
	Game.actors.push(new EnemyBug(x,y));
};

function EnemyBug(x,y) {
	this.gridX = x;
	this.gridY = y;
	this.x = x * 32;
	this.y = y * 32;
	this.width = 32;
	this.height = 32;
	
	this.homeSectorX = Math.floor((x - 1) / Game.wallGrid.sectorWidth);
	this.homeSectorY = Math.floor((y - 1) / Game.wallGrid.sectorHeight);
	this.leftBoundary = this.homeSectorX * Game.wallGrid.sectorWidth + 1;
	this.topBoundary = this.homeSectorY * Game.wallGrid.sectorHeight + 1;
	this.rightBoundary = (this.homeSectorX+1) * Game.wallGrid.sectorWidth - 1;
	this.bottomBoundary = (this.homeSectorY+1) * Game.wallGrid.sectorHeight - 1;
	this.directionChoices = [];
	
	this.walkSpeed = 0.05;
	this.time = 0;
	this.attackPower = 1;
	
	this.changeDirection();
};

EnemyBug.prototype.changeDirection = function changeDirection() {
	this.currentDir = Math.floor(Math.random() * 4);
	
	switch (this.currentDir) {
		case 0:
			if ((this.gridY <= this.topBoundary) || 
				(Game.wallGrid[this.gridY - 1][this.gridX])) 
			{ 
				this.currentDir = -1; 
			}
		break;
		case 1:
			if ((this.gridX >= this.rightBoundary) || 
				(Game.wallGrid[this.gridY][this.gridX + 1])) 
			{ 
				this.currentDir = -1; 
			}
		break;
		case 2:
			if ((this.gridY >= this.bottomBoundary) ||
				(Game.wallGrid[this.gridY + 1][this.gridX])) 
			{ 
				this.currentDir = -1; 
			}
		break;
		case 3:
			if ((this.gridX <= this.leftBoundary) || 
				(Game.wallGrid[this.gridY][this.gridX - 1])) 
			{ 
				this.currentDir = -1; 
			}
		break;
	}
	
	this.directionChoices.push(this.currentDir);
	if (this.directionChoices.length > 20) { this.directionChoices.shift(); }
};

EnemyBug.prototype.destroy = function destroy() {
	this.isDestroyed = true;
	Game.playSound("enemy_die.wav");
};

EnemyBug.prototype.update = function update(elapsed) {
	if (this.homeSectorX !== Game.player.sectorX ||
		this.homeSectorY !== Game.player.sectorY) { return; }

	switch (this.currentDir) {
		case 0: 
			if (this.y - this.walkSpeed * elapsed < (this.gridY - 1) * 32) {
				// Snap to grid
				this.y = (this.gridY - 1) * 32;
				this.gridY -= 1;
				// Decide whether to change direction
				if ((this.gridY <= this.topBoundary) || 
					Game.wallGrid[this.gridY - 1][this.gridX] || 
					(Math.random() < 0.1)) {
					this.changeDirection();
				}
			} else {
				// Continue walking
				this.y -= this.walkSpeed * elapsed; 
			}
		break;
		case 1:	
			if (this.x + this.walkSpeed * elapsed > (this.gridX + 1) * 32) {
				// Snap to grid
				this.x = (this.gridX + 1) * 32;
				this.gridX += 1;
				// Decide whether to change direction
				if ((this.gridX >= this.rightBoundary) || 
					Game.wallGrid[this.gridY][this.gridX + 1] || 
					(Math.random() < 0.1)) {
					this.changeDirection();
				}
			} else {
				// Continue walking
				this.x += this.walkSpeed * elapsed; 
			}
		break;
		case 2:
			if (this.y + this.walkSpeed * elapsed > (this.gridY + 1) * 32) {
				// Snap to grid
				this.y = (this.gridY + 1) * 32;
				this.gridY += 1;
				// Decide whether to change direction
				if ((this.gridY >= this.bottomBoundary) || 
					Game.wallGrid[this.gridY + 1][this.gridX] || 
					(Math.random() < 0.1)) {
					this.changeDirection();
				}
			} else {
				// Continue walking
				this.y += this.walkSpeed * elapsed; 
			}
		break;
		case 3:	
			if (this.x - this.walkSpeed * elapsed < (this.gridX - 1) * 32) {
				// Snap to grid
				this.x = (this.gridX - 1) * 32;
				this.gridX -= 1;
				// Decide whether to change direction
				if ((this.gridX <= this.leftBoundary) || 
					Game.wallGrid[this.gridY][this.gridX - 1] || 
					(Math.random() < 0.1)) {
					this.changeDirection();
				}
			} else {
				// Continue walking
				this.x -= this.walkSpeed * elapsed; 
			}
		break;
		case -1:
			this.changeDirection();
		break;
	}

	this.time += elapsed / 200;
};

EnemyBug.prototype.draw = function draw(ctx) {
	var frame = Math.floor(this.time) % 4;
	var filename;
	if(frame == 0  ||  frame == 2)
		filename = 'enemy.png';
	else if(frame == 1)
		filename = 'enemy_1.png';
	else if(frame == 3)
		filename = 'enemy_2.png';
	else
		throw 0;
	Game.drawImageInWorld(ctx, filename, Math.round(this.x), Math.round(this.y));
};
