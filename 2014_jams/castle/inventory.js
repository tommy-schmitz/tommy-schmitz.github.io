// Load main library
var Game = window.Game || {};

(function() {

	// this is now really important for inventory. It designates the number of different types of resources and is used for mapping
	// the type of resource to the number of resources in an inventory
	var RESOURCE_TYPES = [Game.WOOD, Game.STONE, Game.IRON, Game.FUELS];
	var RECIPES = {
		station: ["Crafting Station",	false,	[10, 0, 2, 0, 0]],
		wall:    ["Wall",				true,	[2, 2, 0, 0, 0], 3],
		basic:   ["Basic Tower",		true,	[4, 4, 5, 0, 0]],
		bomb:    ["Bomb Tower",			true,	[2, 8, 8, 4, 0]],
	};
	var recipes = (function() {
		var itemType, r, result;
		result = {};
		for(itemType  in  RECIPES) {
			r = RECIPES[itemType];
			result[itemType] = {
				name:					r[0],
				needsCraftingStation:	r[1],
				price:					r[2],
				amount:					r[3] || 1
			};
		}
		return result;
	}());

	var isCraftingStation = function(tile) {
		return  tile.tag === 'tower'  &&  tile.dataObject.getType() === 'station';
	}
	var craftingStationNearby = function(gs) {
		var i, j;
		var playerX = Math.floor(gs.player.x);
		var playerY = Math.floor(gs.player.y);
		var x, y;
		for(i = -gs.player.RANGE;  i <= gs.player.RANGE;  ++i) {
			for(j = -gs.player.RANGE;  j <= gs.player.RANGE;  ++j) {
				x = playerX + j;
				y = playerY + i;
				if(isCraftingStation(gs.gameBoard.getTile(x, y)))
					return true;
			}
		}
		return false;
	}

	// constructor
	var Inventory = function(gs) {
		var itemType;

		this.items = {};
		for(itemType  in  RECIPES) {
			this.items[itemType] = 0;
		}

		this.resources = [];
		for (var i = 0, length = RESOURCE_TYPES.length; i < length; i++) {
			this.resources.push(0);
            //debug
            if(Game.DEBUG) { this.resources[i] = 100; }
		}

		this.gs = gs;
	};
	Inventory.prototype._checkRecipe = function(recipe) {
		var i;
		var problems = [];

		if(recipe.needsCraftingStation && !craftingStationNearby(this.gs))
			problems.push('You must be near a crafting station');

		for(i = 0;  i < RESOURCE_TYPES.length;  ++i) {
			if(recipe.price[i] > this.resources[i])
				problems.push('Not enough ' + RESOURCE_TYPES[i]);
		}
		if(problems.length === 0)
			return null;
		return problems;
	};
	Inventory.prototype.craft = function(itemType) {
		var i;

		var recipe = recipes[itemType];
		var checkResult = this._checkRecipe(recipe);
		if(checkResult)
			return checkResult;

		for(i = 0;  i < RESOURCE_TYPES.length;  ++i)
			this.resources[i] -= recipe.price[i];
		this.items[itemType] += recipe.amount;
	};
	Inventory.prototype.getRecipes = function() {
		return recipes;
	};
	Inventory.prototype.addResource = function (resource) {
		var index;
		for (var i = 0, length = RESOURCE_TYPES.length; i < length; i++) {
			if (RESOURCE_TYPES[i] === resource.getType()) {
				index = i;
				break;
			}
		}
		if (typeof index === "number" && index < this.resources.length) {
			this.resources[index]++;
		}
	};
	// Returns true if the item could be removed, otherwise false.
	Inventory.prototype.removeItem = function(type) {
		if(this.items[type] >= 1) {
			--this.items[type]
			return true;
		}
		return false;
	};
	
	Game.Inventory = Inventory;


}());
