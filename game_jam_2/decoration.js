// Load main library
var Game = window.Game || {};

Game.Decoration = (function() {

	Game.TALL_GRASS = 'tall_grass';
    Game.TALL_GRASS_2 = 'tall_grass_2';
    Game.TALL_GRASS_3 = 'tall_grass_3';

	var RESOURCE_HEIGHT = 32;
	var RESOURCE_WIDTH = 64;
	
	function Decoration(type) {
		if (type != Game.TALL_GRASS &&
            type != Game.TALL_GRASS_2 &&
            type != Game.TALL_GRASS_3) {
			Game.assert(false);
		}
		else {
			this.type = type;
		}
		
	}

	Decoration.prototype.getType = function() {
		return this.type;
	};

	Decoration.prototype.draw = function draw(ctx, x, y) {
		Game.drawImage(ctx, this.getImage(), Math.floor(x - RESOURCE_WIDTH * 0.5), (y - RESOURCE_HEIGHT * 0.75));
	};

	Decoration.prototype.getImage = function getImage() {
		switch (this.getType()) {
			case Game.TALL_GRASS :
				return 'tall_grass.png';
			case Game.TALL_GRASS_2 :
				return 'tall_grass_2.png';
			case Game.TALL_GRASS_3 :
				return 'tall_grass_3.png';
			default:
				return 'resource.png';
		}
	};


	// Static constants representing the resources
	Decoration.TALL_GRASS = new Decoration(Game.TALL_GRASS);
	Decoration.TALL_GRASS_2 = new Decoration(Game.TALL_GRASS_2);
	Decoration.TALL_GRASS_3 = new Decoration(Game.TALL_GRASS_3);

	return Decoration;
}());
