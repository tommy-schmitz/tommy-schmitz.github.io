// Load main library
var Game = window.Game || {};

Game.UI = (function() {
	// UI Singleton object
	function UI() {
		this.state = NoSelection;
		this.currentTeam = 0;
		this.scrollX = 0;
		this.scrollY = 0;
		this.flyingNumbers = [];
	};
	UI.prototype.reset = function reset() {
		this.state = NoSelection;
		this.currentTeam = 0;
	};
	UI.prototype.pause = function() {
		this.state = null;
	};
	UI.prototype.victory = function() {
		this.state = Victory;
	};
	UI.prototype.defeat = function() {
		this.state = Defeat;
	};
	UI.prototype.getTileAtMouse = function() {
		return Game.currentWorld.translatePositionToTile(
			Game.Input.mouse.x + Game.camera.x,
			Game.Input.mouse.y + Game.camera.y);
	};
	UI.prototype.mouseMove = function(x, y) {
	
	};
	UI.prototype.mouseDown = function(x, y) {
		if (this.state) { this.state.mouseDown(x,y); }
	};
	UI.prototype.worldDraw = function(ctx) {
		var tile = this.getTileAtMouse();
		
		if (this.state) { this.state.worldDraw(ctx); }
		
		for (var i = 0; i < this.flyingNumbers.length; ++i) {
			this.flyingNumbers[i].draw(ctx);
		}
		
		// Draw mouse cursor
		if (tile) {
			Game.drawImage(ctx,"select.png",
				tile.getX() * Game.TILE_WIDTH,
				tile.getY() * Game.TILE_HEIGHT);
		}
	};
	UI.prototype.screenDraw = function(ctx) {
		if (this.state) { this.state.screenDraw(ctx); }
	};
	UI.prototype.cancel = function() {
		if (this.state) { this.state.cancel(); }
	};
	UI.prototype.update = function(elapsed) {
		if (this.state) { this.state.update(elapsed); }
		
		for (var i = 0; i < this.flyingNumbers.length; ++i) {
			this.flyingNumbers[i].update(elapsed);
			if (this.flyingNumbers[i].markedForDeletion) {
				this.flyingNumbers.splice(i,1);
			}
		}
	};
	UI.prototype.itsYourTurn = function() {
		if (this.state) { this.state.itsYourTurn(); }
	};

	UI.prototype.addFlyingNumber = function (value,x,y) {
		var number = new FlyingNumber(value,x*Game.TILE_WIDTH,y*Game.TILE_HEIGHT);
		this.flyingNumbers.push(number);
	};
	
	// Draw debug information
	var debugDraw = function(ctx, msg) {
		if(false) {
			ctx.fillStyle = '#f80';
			ctx.font = '10pt sans-serif';
			ctx.textAlign = 'right';
			ctx.fillText(msg, Game.WIDTH-10, 100);
		}
	};
	
	// Draw victory / defeat banner
	var BANNER_WIDTH = 260,
		BANNER_HEIGHT = 80;
	function drawBanner(ctx,text) {
		// Draw box
		ctx.beginPath();
		ctx.fillStyle = '#00f';
		ctx.rect(Game.WIDTH * 0.5 - BANNER_WIDTH * 0.5,
				Game.HEIGHT * 0.5 - BANNER_HEIGHT * 0.5,
				BANNER_WIDTH,
				BANNER_HEIGHT);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = '#fff';
		ctx.rect(Game.WIDTH * 0.5 - BANNER_WIDTH * 0.5 + 4,
				Game.HEIGHT * 0.5 - BANNER_HEIGHT * 0.5 + 4,
				BANNER_WIDTH - 8,
				BANNER_HEIGHT - 8);
		ctx.fill();
			
		ctx.fillStyle = '#000';
		ctx.font = 'bold 16pt sans-serif';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(text, Game.WIDTH * 0.5, Game.HEIGHT * 0.5);
	};
	
	// Flying numbers for damage
	function FlyingNumber(value,x,y) {
		this.value = value;
		this.time = 0;
		this.x = x;
		this.y = y;
	};
	FlyingNumber.prototype.update = function(elapsed) {
		this.time += elapsed;
		if (this.time > 1500) { this.markedForDeletion = true; }
	};
	FlyingNumber.prototype.draw = function(ctx) {
		ctx.fillStyle = '#f00';
		ctx.font = 'bold 6px sans-serif';
		ctx.textAlign = 'right';
		ctx.fillText(Math.floor(this.value), this.x+Game.TILE_WIDTH, this.y - this.time / 100);
	};
	
	// UI State base object
	function UIState() {};
	UIState.prototype.mouseDown = function (x, y) {};
	UIState.prototype.mouseMove = function (x, y) {};
	UIState.prototype.worldDraw = function (ctx) {};
	UIState.prototype.screenDraw = function (ctx) {};
	UIState.prototype.cancel = function() {};
	UIState.prototype.update = function(elapsed) {};

	// No selection UI state
	var NoSelection = new UIState();
	
	NoSelection.mouseDown = function(x, y) {
		// Select a tile if it has a unit
		var tile = Game.currentWorld.translatePositionToTile(x, y);
		if (tile !== null) {
			if (tile.hasUnit() && 
				tile.getUnit()._team === Game.UI.currentTeam &&
				tile.getUnit().isActive()) {
				// Set current state to "Moving"
				Game.UI.state = Moving.selectTile(tile); 
				Game.playSound('select.wav');
			}
		}
	};
	NoSelection.worldDraw = function(ctx) {};
	NoSelection.screenDraw = function(ctx) {
		debugDraw(ctx, 'NoSelection');
	};
	
	// Moving unit UI state
	var Moving = new UIState();
	Moving.selectTile = function (tile) {
		// Select the unit on this tile and initialize the movement grid
		this.tileSelected = tile;
		this.highlightTiles = Game.currentWorld.getMovementTileset(tile, tile.getUnit().getMovementPoints());
		return this;
	}
	Moving.getTileSelectedInHighlight = function (tile) {
		// Check return the the given tile is inside the highlight
		for (var i = 0, length = this.highlightTiles.length; i < length; i++) {
			if (this.highlightTiles[i].getX() === tile.getX() && this.highlightTiles[i].getY() === tile.getY()) {
				return this.highlightTiles[i];
			}
		}
		return null;
	};
	Moving.mouseMove = function (x, y) {
		// (NOT DONE) Get the best path to the mouse position, I assume?
		var tile = Game.currentWorld.translatePositionToTile(x, y);
		if (tile !== null) {
			var node = this.getTileSelectedInHighlight(tile);
			
		}
	};
	Moving.mouseDown = function(x, y) {
		var path;

		// Issue move order and switch state to "attacking"
		var tile = Game.currentWorld.translatePositionToTile(x, y);
		if (tile !== null && this.getTileSelectedInHighlight(tile) !== null) {
			if(!tile.hasUnit()  ||  tile === this.tileSelected) {
				path = Game.getPath(tile, this.highlightTiles);
				Game.currentWorld.move(this.tileSelected, tile, path);
				Game.UI.state = Attacking.selectTile(tile);
				Game.playSound('select.wav');
			}
		}
	};
	Moving.cancel = function() {
		Game.UI.state = NoSelection;
	};
	Moving.worldDraw = function(ctx) {
		var path;

		// Draw the highlight area
		drawHighlight(ctx, this.highlightTiles);

		// Draw the arrow
		var previousTile = null;
		var nextTile = null;
		var tile = Game.UI.getTileAtMouse();
		if(null !== tile  &&  null !== this.getTileSelectedInHighlight(tile)) {
			path = Game.getPath(tile, this.highlightTiles);
			for(i = 0;  i < path.length;  ++i)
				Game.drawArrow(ctx, path[i-1], path[i], path[i+1]);
		}
	};
	Moving.screenDraw = function(ctx) {
		debugDraw(ctx, 'Moving');
	};

	// Attacking unit UI state
	var Attacking = new UIState();
	Attacking.selectTile = function (tile) {
		this.tileSelected = tile;
		Game.assert(tile.getUnit());
		this.attackRange = tile.getUnit().getAttackRange();
		return this;
	};
	Attacking.mouseDown = function(x, y) {
		var turnEnded;  // boolean

		// Issue command
		var tile = Game.currentWorld.translatePositionToTile(x, y);
		if (tile === null)
			return;
		if(tile.hasUnit() &&
				tile.getUnit()._team !== Game.UI.currentTeam &&
				-1 !== this.attackRange.indexOf(tile))
			turnEnded = Game.currentWorld.attack(this.tileSelected, tile);
		else if(tile === this.tileSelected)
			turnEnded = Game.currentWorld.wait(this.tileSelected);
		else
			return;

		// Control only reaches this point if the player confirmed a command.
		Game.playSound('select.wav');

		if(turnEnded)
			Game.UI.state = NotMyTurn();
		else
			Game.UI.state = NoSelection;
	};
	Attacking.worldDraw = function(ctx) {
		// Draw highlight-area for attack range.
		var i, tile;
		for(i = 0;  i < this.attackRange.length;  ++i) {
			tile = this.attackRange[i];
			ctx.beginPath();
			ctx.fillStyle = "rgba(199,28,28,0.5)"; // red color
			ctx.rect(tile.getX() * Game.TILE_WIDTH,
				tile.getY() * Game.TILE_HEIGHT,
				Game.TILE_WIDTH - 1, Game.TILE_HEIGHT - 1);
			ctx.fill();
		}
	};
	Attacking.screenDraw = function(ctx) {
		debugDraw(ctx, 'Attacking');
	};
	
	// Draw highlight area for issuing orders
	var drawHighlight = function (ctx, highlightTiles) {
		for (var i = 0, length = highlightTiles.length; i < length; i++) {
			var tile = highlightTiles[i];
			ctx.beginPath();
			ctx.fillStyle = "rgba(28,62,199,0.5)"; // blue color
			ctx.rect(tile.getX() * Game.TILE_WIDTH,
				tile.getY() * Game.TILE_HEIGHT,
				Game.TILE_WIDTH - 1, Game.TILE_HEIGHT - 1);
			ctx.fill();
		}
	};

	// UI state for when it's not the player's turn
	var NotMyTurn = function() {
		var result = new UIState();
		result.time = 0;
		result.worldDraw = function(ctx) {
			if (Game.ai.currentUnit) {
				Game.drawImage(ctx,'ai.png',
					Game.ai.currentUnit.getTile().getX() * Game.TILE_WIDTH,
					Game.ai.currentUnit.getTile().getY() * Game.TILE_HEIGHT - 12);
			}
		};
		result.screenDraw = function(ctx) {debugDraw(ctx, 'NotMyTurn');};
		result.update = function(elapsed) {
			Game.ai.update(elapsed);
		};
		result.itsYourTurn = function() {
			Game.ai.currentUnit = null;
			Game.assert(Game.currentWorld.currentTeam === Game.UI.currentTeam);
			Game.UI.state = NoSelection;
		};
		
		Game.ai.startTurn();
		
		return result;
	};
	
	// Victory UI state
	var Victory = new UIState();
	Victory.screenDraw = function(ctx) {
		drawBanner(ctx, 'You are victorious!');
	};
	
	// Defeat UI state
	var Defeat = new UIState();
	Defeat.screenDraw = function(ctx) {
		drawBanner(ctx, 'You were defeated.');
	};

	return new UI();
}());
