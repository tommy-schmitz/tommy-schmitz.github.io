// Load main library
var Game = window.Game || {};

Game.drawImage = (function() {
	// Image cache
	var images = {};
	// List of all images in the game
	var	imageList = [
			// TODO: Add more image files to this list.
			'hello.png',
			'player_left.png',
            'player_right.png',
            'zombie.png',
			'resource_icons.png',
            'stone.png',
            'fuel.png',
            'iron.png',
            'lightstone.png',
            'wood.png',
            'basic.png',
            'zombie_right.png',
            'zombie_left.png',
            'tile_hover.png',
            'tile_hover_far.png',
            'icon_basic.png',
            'icon_bomb.png',
            'icon_station.png',
            'icon_wall.png',
            'wall.png',
            'place_wall.png',
            'delete_wall.png',
			'station.png',
			'place_station.png',
			'delete_station.png',
            'basic.png',
            'place_basic.png',
            'delete_basic.png',
            'bomb.png',
            'place_bomb.png',
            'delete_bomb.png',
            'explosion.png',
            'runner_left.png',
            'runner_right.png',
            'tall_grass.png',
            'tall_grass_2.png',
            'tall_grass_3.png'
		];
	
	// Pre-load all images
	Game.loadImages = function(callback) {
		var numLoadedImages = 0, i, img;
		
		for(i = 0;  i < imageList.length;  ++i) {
			img = new Image();
			images[imageList[i]] = img;
			// Call the callback after all images are loaded
			img.onload = function() {
				++numLoadedImages;
				if(numLoadedImages == imageList.length)
					callback();
			};
			img.onerror = function() {
				this.src = imageList[0];
				++numLoadedImages;
				if(numLoadedImages == imageList.length)
					callback();
			};
			img.src = imageList[i];
		}
	}

	// Draw an image
	return function (ctx, filename) {
		var imageArgs = Array.prototype.slice.call(arguments,2),
			cachedImage = images[filename];
			
		// Obvious, but not crash-y, indication that image is not in cache
		if (cachedImage === undefined) { cachedImage = images['hello.png']; }
		
		imageArgs.unshift(cachedImage);
		ctx.drawImage.apply(ctx,imageArgs);
	};
}());
