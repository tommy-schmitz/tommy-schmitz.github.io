// Load main library
var Game = window.Game || {};

(function() {

	Game.smallKeys = [];

	var SmallKey = function(x, y) {
		this.x = x;
		this.y = y;
	};
	SmallKey.prototype.draw = function(ctx) {
		//ctx.fillStyle = '#000';
		//ctx.fillText('key', this.x, this.y);
		Game.drawImage(ctx,"small_key.png",this.x-16,this.y-16);
	};

	Game.addSmallKey = function(j, i) {
		Game.smallKeys.push(new SmallKey(j*32+16, i*32+16));
	};

}());
