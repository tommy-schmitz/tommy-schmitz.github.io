// Load main library
var Game = window.Game || {};

Game.drawImage = (function() {
	// Image cache
	var images = {};
	// List of all images in the game
	var	imageList = [
			'hello.png',
			'tiles.png',
			'minotaur.png',
			'minotaur_attack.png',
			'minotaur_hurt.png',
			'select.png',
			'tiles.png',
			'teams.png',
			'killer_rabbit.png',
			'killer_rabbit_attack.png',
			'killer_rabbit_hurt.png',
			'manikin.png',
			'manikin_hurt.png',
			'arrows.png',
			'numbers.png',
			'ai.png',
			'dragon.png',
			'dragon_attack.png',
			'dragon_hurt.png'
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
			img.src = imageList[i];
		}
	}

	Game.drawNumber = function(ctx, number, x, y) {
		var numberString = Math.ceil(number).toString(),	
			decimal, i;
		
		for (i = 0; i < numberString.length; ++i) {
			decimal = parseInt(numberString[i]);
			this.drawImage(ctx,'numbers.png',
				decimal * 4,
				0,
				4,
				5,
				x - (numberString.length - i) * 4,
				y - 5,
				4,
				5);
				
		}
	};
	
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

Game.drawImageInWorld = Game.drawImage;
/*
function(ctx, filename, x, y) {
	return Game.drawImage(ctx, filename, x-Game.camera.x, y-Game.camera.y);
};
*/
