// Load main library
var Game = window.Game || {};

Game.Tutorial = (function() {
	// UI Singleton object
	function Tutorial() {
		this.currentObjective = ClickText1;
		this.currentTeam = 0;
		this.scrollX = 0;
		this.scrollY = 0;
		this.flyingNumbers = [];
	};
	Tutorial.prototype.reset = function() {
		this.currentObjective = ClickText1;
		this.currentTeam = 0;
	};
	Tutorial.prototype.pause = function() {
		this.currentObjective = null;
	};
	Tutorial.prototype.victory = function() {
		this.currentObjective = Victory;
	};
	Tutorial.prototype.defeat = function() {
		this.currentObjective = Defeat;
	};
	Tutorial.prototype.getTileAtMouse = function() {
		return Game.currentWorld.translatePositionToTile(
			Game.Input.mouse.x + Game.camera.x,
			Game.Input.mouse.y + Game.camera.y);
	};
	Tutorial.prototype.mouseMove = function(x, y) {
	
	};
	Tutorial.prototype.mouseDown = function(x, y) {
		if (this.currentObjective) { this.currentObjective.mouseDown(x,y); }
	};
	Tutorial.prototype.worldDraw = function(ctx) {
		var tile = this.getTileAtMouse();
		
		if (this.currentObjective) { 
			this.currentObjective.worldDraw(ctx); 
			
			// Draw mouse cursor
			if (!this.currentObjective.hideCursor && tile) {
				Game.drawImage(ctx,"select.png",
					tile.getX() * Game.TILE_WIDTH,
					tile.getY() * Game.TILE_HEIGHT);
			}
		}
		
		for (var i = 0; i < this.flyingNumbers.length; ++i) {
			this.flyingNumbers[i].draw(ctx);
		}
		
	};
	Tutorial.prototype.screenDraw = function(ctx) {
		if (this.currentObjective) { this.currentObjective.screenDraw(ctx); }
	};
	Tutorial.prototype.cancel = function() {
		if (this.currentObjective) { this.currentObjective.cancel(); }
	};
	Tutorial.prototype.update = function(elapsed) {
		if (this.currentObjective) { this.currentObjective.update(elapsed); }
		
		for (var i = 0; i < this.flyingNumbers.length; ++i) {
			this.flyingNumbers[i].update(elapsed);
			if (this.flyingNumbers[i].markedForDeletion) {
				this.flyingNumbers.splice(i,1);
			}
		}
	};
	Tutorial.prototype.itsYourTurn = function() {
		if (this.currentObjective) { this.currentObjective.itsYourTurn(); }
	};
	
	Tutorial.prototype.addFlyingNumber = function (value,x,y) {
		var number = new FlyingNumber(value,x*Game.TILE_WIDTH,y*Game.TILE_HEIGHT);
		this.flyingNumbers.push(number);
	};

	// Draw debug information
	var debugDraw = function(ctx, msg) {
		ctx.fillStyle = '#f80';
		ctx.font = '10pt sans-serif';
		ctx.textAlign = 'right';
		ctx.fillText(msg, Game.WIDTH-10, 100);
	};
	
	// Draw the tutorial text in a dialog box
	var TUTORIAL_TEXT_HEIGHT = 120;
	var TUTORIAL_TEXT_LINE_HEIGHT = 28;
	function tutorialText(ctx,text) {
		var buffer = "",
			nextWord = "",
			loops = 0,
			caret = Game.HEIGHT - TUTORIAL_TEXT_HEIGHT + 10;
		
		
		// Draw box
		ctx.beginPath();
		ctx.fillStyle = '#00f';
		ctx.rect(0,Game.HEIGHT - TUTORIAL_TEXT_HEIGHT,Game.WIDTH,TUTORIAL_TEXT_HEIGHT);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = '#fff';
		ctx.rect(4,Game.HEIGHT - TUTORIAL_TEXT_HEIGHT + 4,Game.WIDTH - 8,TUTORIAL_TEXT_HEIGHT - 8);
		ctx.fill();
			
		ctx.fillStyle = '#000';
		ctx.font = 'bold 16pt sans-serif';
		ctx.textAlign = 'left';
		ctx.textBaseline = 'top';
		
		while (text.length > 0) {
			if (text.indexOf(" ") !== -1) {
				nextWord = text.slice(0,text.indexOf(" ")+1);
				text = text.slice(text.indexOf(" ")+1);
			} else {
				nextWord = text;
				text = "";
			}
			if (ctx.measureText(buffer + nextWord).width > Game.WIDTH - 28) {
				ctx.fillText(buffer, 10, caret);
				caret += TUTORIAL_TEXT_LINE_HEIGHT;
				buffer = "";
				text = nextWord.concat(text);
			} else {
				buffer = buffer.concat(nextWord);
			}
			//++loops;
			//if (loops > 50) { break; }
		}
		ctx.fillText(buffer, 10, caret);
	};
	
	// Banner boxes for victory and defeat
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
	}

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
		ctx.fillText(Math.ceil(this.value), this.x+Game.TILE_WIDTH, this.y - this.time / 100);
	};
	
	// UI State base object
	function TutorialState() {};
	TutorialState.prototype.mouseDown = function (x, y) {};
	TutorialState.prototype.mouseMove = function (x, y) {};
	TutorialState.prototype.worldDraw = function (ctx) {};
	TutorialState.prototype.screenDraw = function (ctx) {};
	TutorialState.prototype.cancel = function() {};
	TutorialState.prototype.update = function(elapsed) {};
	
	function ClickText(text,next) {
		var state = new TutorialState();
		state.hideCursor = true;
		state.text = text;
		state.nextObjective = next;
		
		state.mouseDown = function(ctx) {
			Game.Tutorial.currentObjective = this.nextObjective;
			Game.playSound('select.wav');
		};
		state.screenDraw = function(ctx) {
			tutorialText(ctx,this.text);
		};
		
		return state;
	};
	
	var ClickText1 = ClickText("Welcome to MonTact! Click to continue.");
	var ClickText2 = ClickText("You control an army of monsters and your goal "+
								"is to defeat the enemy monsters. Click to continue.");
	var ClickText3 = ClickText("Your bunny is indicated by the red banner. "+
								"The enemy mannequin has a blue banner. Click to continue.");
	
	ClickText1.nextObjective = ClickText2;
	ClickText2.nextObjective = ClickText3;

	// Unit selection tutorial
	var SelectionTutorial = (function() {
		var state = new TutorialState();
		
		state.mouseDown = function(x, y) {
			// Select a tile if it has a unit
			var tile = Game.currentWorld.translatePositionToTile(x, y);
			if (tile !== null) {
				if (tile.hasUnit() && 
					tile.getUnit()._team === Game.Tutorial.currentTeam &&
					tile.getUnit().isActive()) {
					// Set current state to "Moving"
					Game.Tutorial.currentObjective = MovingTutorial.selectTile(tile);
					Game.playSound('select.wav');
				}
			}
		};
		state.worldDraw = function(ctx) {};
		state.screenDraw = function(ctx) {
			tutorialText(ctx,"Select your bunny by clicking on it.");
		};
		
		return state;
	}());
	ClickText3.nextObjective = SelectionTutorial;
	
	// Moving unit tutorial
	var MovingTutorial = (function() {
		var state = new TutorialState();
		state.selectTile = function (tile) {
			// Select the unit on this tile and initialize the movement grid
			this.tileSelected = tile;
			this.highlightTiles = Game.currentWorld.getMovementTileset(tile, tile.getUnit().getMovementPoints());
			return this;
		}
		state.getTileSelectedInHighlight = function (tile) {
			// Check return the the given tile is inside the highlight
			for (var i = 0, length = this.highlightTiles.length; i < length; i++) {
				if (this.highlightTiles[i].getX() === tile.getX() && this.highlightTiles[i].getY() === tile.getY()) {
					return this.highlightTiles[i];
				}
			}
			return null;
		};
		state.mouseMove = function (x, y) {
			// (NOT DONE) Get the best path to the mouse position, I assume?
			var tile = Game.currentWorld.translatePositionToTile(x, y);
			if (tile !== null) {
				var node = this.getTileSelectedInHighlight(tile);
				
			}
		};
		state.mouseDown = function(x, y) {
			var path;

			// Issue move order and switch state to "attacking"
			var tile = Game.currentWorld.translatePositionToTile(x, y);
			if (tile !== null && this.getTileSelectedInHighlight(tile) !== null) {
				if(!tile.hasUnit()  ||  tile === this.tileSelected) {
					path = Game.getPath(tile, this.highlightTiles);
					Game.currentWorld.move(this.tileSelected, tile, path);
					Game.UI.currentObjective = AttackingTutorial.selectTile(tile);
					Game.playSound('select.wav');
				}
			}
		};
		state.cancel = function() {
			Game.UI.state = NoSelection;
		};
		state.worldDraw = function(ctx) {
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
		state.screenDraw = function(ctx) {
			tutorialText(ctx,"You have now selected your bunny. The highlighted blue squares "+
						"indicate where your bunny can move. Click on one of those "+
						"squares and your bunny will move there.");
		};
		return state;
	}());
	
	// Attacking unit tutorial
	var AttackingTutorial = (function() {
		var state = new TutorialState();
		state.selectTile = function (tile) {
			this.tileSelected = tile;
			Game.assert(tile.getUnit());
			this.attackRange = tile.getUnit().getAttackRange();
			return this;
		};
		state.mouseDown = function(x, y) {
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
				Game.Tutorial.currentObjective = NotMyTurn.startAI();
			else
				Game.Tutorial.currentObjective = NoSelection;
		};
		state.worldDraw = function(ctx) {
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
		state.screenDraw = function(ctx) {
			tutorialText(ctx,"Now that your bunny has moved, you may tell it to attack "+
								"something. Click one of the red squares and the bunny "+
								"will attack. However, your bunny is not close enough "+
								"to attack the mannequin. Click your bunny to tell it to "+
								"wait.");
		};
		return state;
	}());
	
	// Final tutorial text
	var finalText = "Move your bunny up to the mannequin and attack it. You will advance "+
					"to the next level after you have defeated the mannequin. You can "+
					"scroll the map using W,S,A, and D.";
	
	// No selection UI state
	var NoSelection = new TutorialState();
	
	NoSelection.mouseDown = function(x, y) {
		// Select a tile if it has a unit
		var tile = Game.currentWorld.translatePositionToTile(x, y);
		if (tile !== null) {
			if (tile.hasUnit() && 
				tile.getUnit()._team === Game.UI.currentTeam &&
				tile.getUnit().isActive()) {
				// Set current state to "Moving"
				Game.Tutorial.currentObjective = Moving.selectTile(tile); 
				Game.playSound('select.wav');
			}
		}
	};
	NoSelection.worldDraw = function(ctx) {};
	NoSelection.screenDraw = function(ctx) {
		tutorialText(ctx,finalText);
	};
	
	// Moving unit UI state
	var Moving = new TutorialState();
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
				Game.Tutorial.currentObjective = Attacking.selectTile(tile);
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
		tutorialText(ctx,finalText);
	};

	// Attacking unit UI state
	var Attacking = new TutorialState();
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
			Game.Tutorial.currentObjective = NotMyTurn.startAI();
		else
			Game.Tutorial.currentObjective = NoSelection;
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
		tutorialText(ctx,finalText);
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
	var NotMyTurn = (function() {
		var result = new TutorialState();
		result.hideCursor = true;
		result.time = 0;
		result.text = "Enemies will move after you have given orders to all of your units.";
		result.worldDraw = function(ctx) {
			if (Game.ai.currentUnit) {
				Game.drawImage(ctx,'ai.png',
					Game.ai.currentUnit.getTile().getX() * Game.TILE_WIDTH,
					Game.ai.currentUnit.getTile().getY() * Game.TILE_HEIGHT - 12);
			}
		};
		result.screenDraw = function(ctx) {
			tutorialText(ctx,this.text);
		};
		result.update = function(elapsed) {
			Game.ai.update(elapsed);
		};
		result.itsYourTurn = function() {
			this.text = finalText;
			Game.ai.currentUnit = null;
			Game.assert(Game.currentWorld.currentTeam === Game.UI.currentTeam);
			Game.Tutorial.currentObjective = NoSelection;
		};
		result.startAI = function() {
			Game.ai.startTurn();
		
			return this;
		};
		
		return result;
	}());
	
	
	// Victory UI state
	var Victory = new TutorialState();
	Victory.screenDraw = function(ctx) {
		drawBanner(ctx, 'You are victorious!');
	};
	
	// Defeat UI state
	var Defeat = new TutorialState();
	Defeat.screenDraw = function(ctx) {
		drawBanner(ctx, 'You were defeated.');
	};

	return new Tutorial();
}());
