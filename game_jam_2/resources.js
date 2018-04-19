// Load main library
var Game = window.Game || {};

Game.Resource = (function() {

	Game.IRON = 'iron';
	Game.WOOD = 'wood';
	Game.STONE = 'stone';
	Game.FUELS = 'explodium';
	Game.LIGHTSTONE = 'lightstone';

	var RESOURCE_HEIGHT = 32;
	var RESOURCE_WIDTH = 32;
	
	function Resource(type) {
		if (type != Game.IRON &&
		 type != Game.WOOD && 
		 type != Game.STONE && 
		 type != Game.FUELS && 
		 type != Game.LIGHTSTONE) {
			Game.assert(false);
		}
		else {
			this.type = type;
		}
		
	}

	Resource.prototype.getType = function() {
		return this.type;
	};

	Resource.prototype.draw = function draw(ctx, x, y) {
		Game.drawImage(ctx, this.getImage(), Math.floor(x - RESOURCE_WIDTH * 0.5), (y - RESOURCE_HEIGHT * 0.75));
	};

	Resource.prototype.getImage = function getImage() {
		switch (this.getType()) {
			case Game.IRON :
				return 'iron.png';
			case Game.WOOD :
				return 'wood.png';
			case Game.STONE :
				return 'stone.png';
			case Game.FUELS :
				return 'fuel.png';
			case Game.LIGHTSTONE :
				return 'lightstone.png';
			default:
				return 'resource.png';
		}
	};


	// Static constants representing the resources
	Resource.WOOD = new Resource(Game.WOOD);
	Resource.IRON = new Resource(Game.IRON);
	Resource.STONE = new Resource(Game.STONE);
	Resource.FUELS = new Resource(Game.FUELS);
	Resource.LIGHTSTONE = new Resource(Game.LIGHTSTONE);

	return Resource;
}());
