// Load main library
var Game = window.Game || {};

Game.drawImage = (function() {
	// Image cache
	var images = {};
	// List of all images in the game
	var	imageList = [
			'danman.png',
			'tiles.png',
			'tileset.png',
			'bonehead.png',
			'default.png',
			'player-running-R1.png',
			'player-running-R2.png',
			'player-running-R3.png',
			'player-running-L1.png',
			'player-running-L2.png',
			'player-running-L3.png',
			'player-standing-R1.png',
			'player-standing-L1.png',
			'player-airborne-L.png',
			'player-airborne-R.png',
			'player-scoot-L.png',
			'player-scoot-R.png',
			'player-cannon-running-R1.png',
			'player-cannon-running-R2.png',
			'player-cannon-running-R3.png',
			'player-cannon-running-L1.png',
			'player-cannon-running-L2.png',
			'player-cannon-running-L3.png',
			'player-cannon-standing-R1.png',
			'player-cannon-standing-L1.png',
			'player-cannon-airborne-L.png',
			'player-cannon-airborne-R.png',
			'player-cannon-scoot-L.png',
			'player-cannon-scoot-R.png',
			'player-pain-L.png',
			'player-pain-R.png',
			'hp.png',
			'bonehead-metal-R1.png',
			'bonehead-metal-R2.png',
			'bonehead-metal-L1.png',
			'bonehead-metal-L2.png',
			'bullet-L.png',
			'bullet-R.png',
			'bangjoe-stand-L.png',
			'bangjoe-stand-R.png',
			'bangjoe-bang-L.png',
			'bangjoe-bang-R.png',
			'bang.png',
			'shieldjoe-stand-L.png',
			'shieldjoe-stand-R.png',
			'shieldjoe-shield-L.png',
			'shieldjoe-shield-R.png',
			'danman-running-L1.png',
			'danman-running-L2.png',
			'danman-running-L3.png',
			'danman-running-L4.png',
			'danman-running-R1.png',
			'danman-running-R2.png',
			'danman-running-R3.png',
			'danman-running-R4.png',
			'danman-attack1-L1.png',
			'danman-attack1-L2.png',
			'danman-attack1-R1.png',
			'danman-attack1-R2.png',
			'danman-jumping-L1.png',
			'danman-jumping-R1.png',
			'danman-sliding-L1.png',
			'danman-sliding-R1.png',
			'note1.png',

			'hello.png'
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
