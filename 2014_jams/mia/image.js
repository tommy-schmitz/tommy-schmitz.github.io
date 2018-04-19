// Load main library
var Game = window.Game || {};

Game.drawImage = (function() {
	// Image cache
	var images = {};
	// List of all images in the game
	var	imageList = [
			'hello.png',
			'wall_1.png',
			'testlockeddoor.png',
			'one_way_r.png',
			'one_way_l.png',
			'small_key.png',
			'player.png',
			'player_cast.png',
			'heart.png',
			'heart_half.png',
			'heart_empty.png',
			'explosion.png',
			'explosion_1.png',
			'enemy_1.png',
			'enemy_2.png',
			'enemy.png',
			'bat.png',
			'spike.png',
			'spike_block.png',
			'background.png',
			'title.png'
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
		var imageArgs = Array.prototype.slice.call(arguments,2);
		imageArgs.unshift(images[filename]);
		ctx.drawImage.apply(ctx,imageArgs);
		//ctx.drawImage(images[filename], x, y);
	};
}());

Game.drawImageInWorld = Game.drawImage;
/*
function(ctx, filename, x, y) {
	return Game.drawImage(ctx, filename, x-Game.camera.x, y-Game.camera.y);
};
*/
