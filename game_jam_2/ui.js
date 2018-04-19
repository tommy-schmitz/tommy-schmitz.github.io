// Load main library
var Game = window.Game || {};

// Dependencies
Game.assert(Game.GameState);


Game.ui = (function() {


// UI Singleton object
var UI = function() {
};
UI.prototype.keyDown = function(key) {
	Game.assert(this.state);
	this.state.keyDown(key);
}
UI.prototype.mouseMove = function(x, y) { if (this.state) { this.state.mouseMove(x, y); } };
UI.prototype.mouseDown = function(x, y) { if (this.state) { this.state.mouseDown(x,y); } };
UI.prototype.worldDraw = function(ctx) { if (this.state) { this.state.worldDraw(ctx); } };
UI.prototype.screenDraw = function(ctx) { if (this.state) { this.state.screenDraw(ctx); } };
UI.prototype.cancel = function() { if (this.state) { this.state.cancel(); } };
UI.prototype.update = function(elapsed) {
	if (this.state) { this.state.update(elapsed); }
	Game.updateMusic(elapsed);
};
UI.prototype.init = function() { this.state = Title(0); };

// Draw debug information
var debugDraw = function(ctx, msg) {
	if(Game.DEBUG) {
		ctx.fillStyle = '#f80';
		ctx.font = '10pt sans-serif';
		ctx.textAlign = 'right';
		ctx.fillText(msg, Game.WIDTH-10, 100);
	}
};

// UI State base object
var UIState = function() {};
UIState.prototype.mouseDown = function (x, y) {};
UIState.prototype.mouseMove = function (x, y) {};
UIState.prototype.worldDraw = function (ctx) {};
UIState.prototype.screenDraw = function (ctx) {};
UIState.prototype.cancel = function() {};
UIState.prototype.update = function(elapsed) {};
UIState.prototype.keyDown = function(key) {};

// Coordinate transform functions
var TILE_X_LENGTH = 42,
	TILE_Y_LENGTH = 23;
Game.TILE_Y_LENGTH = TILE_Y_LENGTH;
Game.TILE_X_LENGTH = TILE_X_LENGTH;
Game.game2screenX = function(x,y) {
	return x * TILE_X_LENGTH + y * TILE_X_LENGTH - Game.camera.x + Game.WIDTH * 0.5;
};
Game.game2screenY = function(x,y) {
	return x * -TILE_Y_LENGTH + y * TILE_Y_LENGTH - Game.camera.y + Game.HEIGHT * 0.5;
};
Game.screen2gameX = function(x,y) {
	var x1 = x - Game.WIDTH * 0.5 + Game.camera.x,
		y1 = y - Game.HEIGHT * 0.5 + Game.camera.y;
		
	return 0.5 * (x1/TILE_X_LENGTH - y1/TILE_Y_LENGTH);
};
Game.screen2gameY = function(x,y) {
	var x1 = x - Game.WIDTH * 0.5 + Game.camera.x,
		y1 = y - Game.HEIGHT * 0.5 + Game.camera.y;
		
	return 0.5 * (y1/TILE_Y_LENGTH + x1/TILE_X_LENGTH);
};


// Health bar draw function
var HPBAR_LABEL_W = 40;
var HPBAR_X = 10;
var HPBAR_Y = 10;
var HPBAR_W = 100;
var HPBAR_H = 20;
var hpDraw = function(ctx, hp) {
    //Draw border
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = GUI_BORDER_COLOR;
    ctx.rect(HPBAR_X+HPBAR_LABEL_W-1,HPBAR_Y-1,HPBAR_W+2,HPBAR_H+2);
    ctx.stroke();
    
    if (hp >= 0) {
        ctx.beginPath();
        var prefix = "#";
		
        var rVal = Math.floor(((100.0-hp)/50.0)*256.0);
        if (rVal > 256) {rVal = "FF"}
        else {rVal = ("00"+rVal.toString(16)).substr(-2);}

        var gVal = Math.floor((hp/50.0)*256.0);
        if (gVal > 256) {gVal = "FF"}
        else {gVal = ("00"+gVal.toString(16)).substr(-2);}
        
        var bVal = "00";
        var res = "#00FF00";
        if (hp < 100) {res = prefix.concat(rVal,gVal,bVal);}
        if (hp === 50) {res = "#FFFF00";}
        ctx.fillStyle = res;
        ctx.lineWidth = "0";
        ctx.rect(HPBAR_X + HPBAR_LABEL_W, HPBAR_Y, hp, HPBAR_H);
        ctx.fill();
    }

	// Draw label
	ctx.fillStyle = GUI_TEXT_COLOR;
	ctx.font = 'bold 16pt sans-serif';
	ctx.textAlign = 'left';
	ctx.fillText("HP", HPBAR_X, HPBAR_Y + HPBAR_H);
};

// HUD draw function
var RESOURCE_ICON_SIZE = 16;
var RESOURCE_X = 170;
var RESOURCE_Y = 12;
var RESOURCE_COUNT_W = 40;
var RESOURCE_GAP = 80;
var ITEM_X = 1;
var ITEM_Y = 42;
var ITEM_W = 40;
var ITEM_H = 40;
var HUD_W = 496;
var HUD_H = 40;
var GUI_BACKGROUND_COLOR = "#553322";
var GUI_HIGHLIGHT_COLOR = "#bb8866";
var GUI_DARK_COLOR = "#332b22";
var GUI_BORDER_COLOR = "#775533";
var GUI_TEXT_COLOR = "#ffffff";
var GUI_ERROR_TEXT_COLOR = "#ff0000";
var hudDraw = function(ctx, inventory) {
	var i;

    //Draw border
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = GUI_BORDER_COLOR;
    ctx.fillStyle = GUI_BACKGROUND_COLOR;
    ctx.rect(-1,-1,HUD_W+1,HUD_H+1);
	ctx.fill();
    ctx.stroke();
	
	// Draw resources
	for(i = 0;  i < inventory.resources.length;  ++i) {
		// Draw border
		ctx.beginPath();
		ctx.lineWidth = "2";
		ctx.rect(RESOURCE_X+i * RESOURCE_GAP-1,RESOURCE_Y-1,RESOURCE_ICON_SIZE+2,RESOURCE_ICON_SIZE+2);
		ctx.stroke();
	
		// Draw icon
		Game.drawImage(ctx, 'resource_icons.png',
			i * RESOURCE_ICON_SIZE,	// Slice x
			0,						// Slice y
			RESOURCE_ICON_SIZE,		// Slice width
			RESOURCE_ICON_SIZE,		// Slice height
			RESOURCE_X+i * RESOURCE_GAP, 	// Draw x
			RESOURCE_Y,	// Draw y
			RESOURCE_ICON_SIZE,		// Draw width
			RESOURCE_ICON_SIZE);		// Draw height
			
		// Draw border
		ctx.beginPath();
		ctx.lineWidth = "2";
		ctx.rect(RESOURCE_X+RESOURCE_ICON_SIZE+5+i * RESOURCE_GAP,
			RESOURCE_Y-1,
			RESOURCE_COUNT_W+2,
			RESOURCE_ICON_SIZE+2);
		ctx.stroke();
		
		// Draw count
		ctx.fillStyle = GUI_TEXT_COLOR;
		ctx.font = '10pt sans-serif';
		ctx.textAlign = 'left';
		ctx.fillText(inventory.resources[i], 
			RESOURCE_X+RESOURCE_ICON_SIZE+8+i * RESOURCE_GAP,
			RESOURCE_Y+RESOURCE_ICON_SIZE-2);
	}
	
	// Draw tower inventory
	i = 0;
	for(var itemType in inventory.items) { if (inventory.items.hasOwnProperty(itemType)) {
		// Draw border
		if (inventory.items[itemType] > 0) {
			ctx.strokeStyle = GUI_BORDER_COLOR;
			if (inventory.currentItem === itemType) {
				ctx.fillStyle = GUI_HIGHLIGHT_COLOR;
			} else {
				ctx.fillStyle = GUI_BACKGROUND_COLOR;
			}
		} else {
			ctx.strokeStyle = GUI_DARK_COLOR;
			ctx.fillStyle = GUI_DARK_COLOR;
		}
		
		ctx.beginPath();
		ctx.lineWidth = "2";	
		ctx.rect(ITEM_X+(ITEM_W+2)*i,ITEM_Y,ITEM_W,ITEM_H);
		ctx.fill();
		ctx.stroke();
	
		// Draw icon
		Game.drawImage(ctx,"icon_"+itemType+".png",ITEM_X+(ITEM_W+2)*i + 4,ITEM_Y + 4);
					
		// Draw hotkey
		ctx.fillStyle = GUI_TEXT_COLOR;
		ctx.font = 'bold 10pt sans-serif';
		ctx.textAlign = 'left';
		ctx.fillText(i+1, ITEM_X+(ITEM_W+2)*i+3,ITEM_Y+13);
			
		// Draw count
		ctx.font = '10pt sans-serif';
		ctx.textAlign = 'right';
		ctx.fillText(inventory.items[itemType], 
			ITEM_X+(ITEM_W+2)*i+ITEM_W-3,ITEM_Y+35);
			
		++i;
	}}
    
    // Draw stats
    var STATS_W = 120;
    var STATS_H = 46;
    var STATS_B = 12
    var STATS_X = Game.WIDTH - STATS_W - (4*STATS_B);
    var STATS_Y = 32;
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.beginPath();
    ctx.rect(STATS_X-STATS_B, STATS_Y-(STATS_B*1.8), STATS_W+(4*STATS_B), STATS_H+STATS_B+STATS_B);
    ctx.fill();
	ctx.fillStyle = '#cc0000';
	ctx.font = 'bold 14pt sans-serif';
	ctx.textAlign = 'left';
	ctx.fillText("GAME STATS", STATS_X, STATS_Y);
	ctx.font = '12pt sans-serif';
    var day = Math.floor(Game.currentState.time/Game.currentState.TIME_PER_DAY)+1;
    ctx.fillText("Day: "+day, STATS_X, STATS_Y+20);
    ctx.fillText("Kills: "+Game.currentState.killCount, STATS_X, STATS_Y+38);
};

// Crafting GUI draw function
var CRAFTING_Y = 80;
var CRAFTING_W = 400;
var CRAFTING_H = 300;
var RECIPE_X = 10;
var RECIPE_Y = 10;
var RECIPE_W = 40;
var RECIPE_H = 40;
var craftingDraw = function(ctx, inventory) {
	var GUI_LEFT = Math.floor((Game.WIDTH-CRAFTING_W)*0.5);
	var GUI_TOP = CRAFTING_Y;
	
	var mouse = Game.Input.mouse;

    //Draw border
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = GUI_BORDER_COLOR;
    ctx.fillStyle = GUI_BACKGROUND_COLOR;
    ctx.rect(GUI_LEFT,GUI_TOP,CRAFTING_W,CRAFTING_H);
	ctx.fill();
    ctx.stroke();
	
	var currentRecipe = null;
	var currentRecipeName = "";
	var recipes = inventory.getRecipes();
	var i = 0;
	
	for (var r in recipes) { if (recipes.hasOwnProperty(r)) {
		var RECIPE_LEFT		= GUI_LEFT + RECIPE_X;
		var RECIPE_RIGHT	= RECIPE_LEFT + RECIPE_W;
		var RECIPE_TOP		= GUI_TOP + RECIPE_Y + i * (RECIPE_H + RECIPE_Y);
		var RECIPE_BOTTOM	= RECIPE_TOP + RECIPE_H;
	
		//Draw border
		ctx.beginPath();
		ctx.rect(RECIPE_LEFT,RECIPE_TOP,RECIPE_W,RECIPE_H);
		
		if (mouse.x > RECIPE_LEFT && 
			mouse.x < RECIPE_RIGHT && 
			mouse.y > RECIPE_TOP && 
			mouse.y < RECIPE_BOTTOM) {
			ctx.fillStyle = GUI_HIGHLIGHT_COLOR;
			ctx.fill();
			currentRecipe = recipes[r];
			currentRecipeName = r;
		} 
		
		if (inventory._checkRecipe(recipes[r]) == null) {
			ctx.strokeStyle = GUI_BORDER_COLOR;
		} else {
			ctx.fillStyle = GUI_DARK_COLOR;
			ctx.strokeStyle = GUI_DARK_COLOR;
			ctx.fill();
		}
		
		ctx.stroke();
		
		// Draw recipe icon
		Game.drawImage(ctx,"icon_"+r+".png",RECIPE_LEFT + 4,RECIPE_TOP + 4);
		
		// Draw recipe amount
		ctx.fillStyle = GUI_TEXT_COLOR;
		ctx.font = '10pt sans-serif';
		ctx.textAlign = 'left';
		ctx.fillText(recipes[r].amount, 
			RECIPE_LEFT + 3,
			RECIPE_BOTTOM - 3);
		
		++i
	}}
	
	// Detail window
	var DETAIL_LEFT = GUI_LEFT + RECIPE_X * 2 + RECIPE_W;
	var DETAIL_TOP = GUI_TOP + RECIPE_Y
	
	//Draw border
	ctx.strokeStyle = GUI_BORDER_COLOR;
	ctx.beginPath();
	ctx.rect(DETAIL_LEFT,
		DETAIL_TOP, 
		CRAFTING_W - RECIPE_W - RECIPE_X * 3, 
		CRAFTING_H - RECIPE_Y * 2);
	ctx.stroke();
	
	if (currentRecipe !== null) {
		// Draw recipe name
		ctx.fillStyle = GUI_TEXT_COLOR;
		ctx.font = 'bold 16pt sans-serif';
		ctx.textAlign = 'left';
		ctx.fillText(currentRecipe.name, DETAIL_LEFT + 4, DETAIL_TOP + 20);
		
		// Draw recipe cost
		ctx.font = '10pt sans-serif';
		ctx.fillText("Cost:", DETAIL_LEFT + 4, DETAIL_TOP + 40);
		
		var price_list_length = 0;
		var PRICE_X = DETAIL_LEFT + 4;
		var PRICE_Y = DETAIL_TOP + 50;
		var PRICE_TAG = 10;
		var PRICE_H = RESOURCE_ICON_SIZE + 2;
		for (i = 0; i < currentRecipe.price.length; ++i) {
			if (currentRecipe.price[i] > 0) {
				// Draw icon
				Game.drawImage(ctx, 'resource_icons.png',
					i * RESOURCE_ICON_SIZE,		// Slice x
					0,							// Slice y
					RESOURCE_ICON_SIZE,			// Slice width
					RESOURCE_ICON_SIZE,			// Slice height
					PRICE_X + PRICE_TAG, 	// Draw x
					PRICE_Y + price_list_length * PRICE_H,								// Draw y
					RESOURCE_ICON_SIZE,			// Draw width
					RESOURCE_ICON_SIZE);		// Draw height
				
				// Draw price
				if (inventory.resources[i] >= currentRecipe.price[i]) {
					ctx.fillStyle = GUI_TEXT_COLOR;
				} else {
					ctx.fillStyle = GUI_ERROR_TEXT_COLOR;
				}
				ctx.fillText(currentRecipe.price[i], 
					PRICE_X, 
					PRICE_Y + RESOURCE_ICON_SIZE + price_list_length * PRICE_H);
					
				++price_list_length;
			}
		}
		
		// Draw recipe problems
		var problems = inventory._checkRecipe(currentRecipe);
		if (problems !== null) {
			var PROBLEMS_X = DETAIL_LEFT + 4;
			var PROBLEMS_Y = DETAIL_TOP + 160;
			var PROBLEMS_H = 16;
			ctx.fillStyle = GUI_ERROR_TEXT_COLOR;
			while (problems.length > 0) {
				ctx.fillText(problems.shift(), 
					PROBLEMS_X, 
					PROBLEMS_Y);
					
				PROBLEMS_Y += PROBLEMS_H;
			}
		}
		
		// TODO: Draw recipe item
		Game.drawImage(ctx,currentRecipeName+".png",DETAIL_LEFT + 240,DETAIL_TOP + 30);
	}
};

// State: playing the game
var Playing = function() {
	var s = new UIState();

	Game.decreaseMusic();

	var ITEM_NAMES = [ Game.TOWER_STATION, Game.TOWER_WALL, Game.TOWER_BASIC, Game.TOWER_BOMB ];
	
	s.gs = new Game.GameState();
	Game.currentState = s.gs;
	s.craftingOpen = false;

	s.update = function(elapsed) {
		this.gs.update(elapsed);
		if (this.gs.isDefeat) { Game.ui.state = Title(1); }
	};
	s.worldDraw = function(ctx) {
		this.gs.draw(ctx);
	};
	s.screenDraw = function(ctx) {
	
		hudDraw(ctx, Game.currentState.inventory);
        hpDraw(ctx, Game.currentState.player.hp);
		
		if (this.craftingOpen) {
			craftingDraw(ctx, Game.currentState.inventory);
		}
		
		debugDraw(ctx, 'Debug: ' + Game.currentState.debug);
		
		var mouse = Game.Input.mouse;
		
		if (Game.DEBUG_MOUSE) {
			ctx.fillStyle = '#ff0';
			ctx.font = '10pt sans-serif';
			ctx.textAlign = 'left';
			ctx.fillText("("+
				Game.screen2gameX(mouse.x, mouse.y).toFixed(2)+","+
				Game.screen2gameY(mouse.x, mouse.y).toFixed(2)+")", 
				mouse.x, mouse.y);
		}
	};
	s.mouseDown = function(mouseX, mouseY) {
		var overUI = false;
		var GUI_LEFT = (Game.WIDTH-CRAFTING_W)*0.5;
		var GUI_RIGHT = (Game.WIDTH+CRAFTING_W)*0.5;
		var GUI_TOP = CRAFTING_Y;
		var GUI_BOTTOM = CRAFTING_Y + CRAFTING_H;
		
		if (this.craftingOpen && 
			mouseX > GUI_LEFT &&
			mouseX < GUI_RIGHT &&
			mouseY > GUI_TOP &&
			mouseY < GUI_BOTTOM) {
			// Crafting GUI click
			
			var currentRecipe = null;
			var recipes = Game.currentState.inventory.getRecipes();
			var i = 0;
			for (var r in recipes) { if (recipes.hasOwnProperty(r)) {
				var RECIPE_LEFT		= GUI_LEFT + RECIPE_X;
				var RECIPE_RIGHT	= RECIPE_LEFT + RECIPE_W;
				var RECIPE_TOP		= GUI_TOP + RECIPE_Y + i * (RECIPE_H + RECIPE_Y);
				var RECIPE_BOTTOM	= RECIPE_TOP + RECIPE_H;
			
				if (mouseX > RECIPE_LEFT && 
					mouseX < RECIPE_RIGHT && 
					mouseY > RECIPE_TOP && 
					mouseY < RECIPE_BOTTOM) {
					currentRecipe = r;
				}
				
				++i;
			}}	

			if (currentRecipe !== null) {
				this.gs.inventory.craft(currentRecipe);
			}
		} else {
			// Game world click
			var x = Math.floor(Game.screen2gameX(mouseX, mouseY));
			var y = Math.floor(Game.screen2gameY(mouseX, mouseY));
			var tile = this.gs.gameBoard.getTile(x, y);
			if(tile.tag === 'resource') {
				this.gs.gather(x, y);
				this.gs.inventory.currentItem = null; 
			} else if (tile.tag === 'tower' && this.gs.inventory.currentItem === 'erase')
				this.gs.removeTower(x, y);
			else if (tile.tag === 'empty') {
				tile = this.gs.gameBoard.getTile(x, y);
				this.gs.plant(this.gs.inventory.currentItem, x, y);
			}
			
		}
	};
	s.keyDown = function(key) {
		var tile, x, y, mouseX, mouseY;

		if (key === 'e')
			this.craftingOpen = !this.craftingOpen;
		if (key === 'escape')
			this.gs.inventory.currentItem = null;
		if (key === '`')
			this.gs.inventory.currentItem = 'erase';
		if (key >= '1' && key <= '9')
			this.gs.inventory.currentItem = ITEM_NAMES[parseInt(key) - 1];
	};
	
	return s;
};

var Title = function(_type) {
	var s = new UIState();
	
	if (_type === 0)		s.screenDraw = drawMainTitle;
	else if (_type === 1)	s.screenDraw = drawGameOver;
	
	s.grace = 1000;
	s.update = function(elapsed) {
		if (s.grace > 0) { s.grace -= elapsed; }
	}	
	s.mouseDown = function() {
		if (s.grace <= 0) {
			Game.ui.state = Playing();
		}
	}
	
	return s;
};

function drawMainTitle(ctx) {
	ctx.font = "bold 18pt sans-serif";
	ctx.fillStyle = "#f80";
	ctx.textAlign = "center";
	
	ctx.fillText('Click to begin!', Game.WIDTH/2, Game.HEIGHT/4 + 288);

	ctx.font = "bold 16pt sans-serif";
	ctx.fillStyle = "#eee";
	ctx.fillText('WASD keys to move.', Game.WIDTH/2, Game.HEIGHT/4 + 48);
	ctx.fillText('Left-click resources to gather.', Game.WIDTH/2, Game.HEIGHT/4 + 88);
	ctx.fillText('E to open Crafting Menu.', Game.WIDTH/2, Game.HEIGHT/4 + 128);
	ctx.fillText('1234 keys to equip towers, left-click to build.', Game.WIDTH/2, Game.HEIGHT/4 + 168);
	ctx.fillText('grave key (`/~) for delete mode, left-click to delete.', Game.WIDTH/2, Game.HEIGHT/4 + 208);

	ctx.font = "bold 24pt sans-serif";
	ctx.fillStyle = "#f80";
	ctx.fillText('CASTLE MORTIS', Game.WIDTH/2, Game.HEIGHT/5);};
function drawGameOver(ctx) {
	ctx.fillStyle = "#f80";
	ctx.font = "bold 16pt sans-serif";
	ctx.textAlign = "center";
	
	ctx.fillText('Game over!', Game.WIDTH/2, Game.HEIGHT/4);
	ctx.fillText('Click to retry!', Game.WIDTH/2, Game.HEIGHT/4 + 124);

	ctx.font = "bold 18pt sans-serif";
	ctx.fillStyle = "#eee";
	ctx.fillText('Final Day: '+ (Math.floor(Game.currentState.time/Game.currentState.TIME_PER_DAY)+1), Game.WIDTH/2, Game.HEIGHT/4 + 40);
	ctx.fillText('Kill Count: '+Game.currentState.killCount, Game.WIDTH/2, Game.HEIGHT/4 + 82);
};

return new UI();


}());
