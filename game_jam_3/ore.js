window.Game = window.Game || {};

var Game = window.Game;

Game.assert(Game.Vec);
Game.assert(Game.Body);

(function() {

function Ore(pos, vel) {
	Game.Body.call(this, pos, vel, 10, 0.000001, false);

	this.lines = [
		{ color: "black",	width:	9 },
		{ color: "navy",	width:	7 },
		{ color: "purple",	width:	5 },
		{ color: "fuchsia",	width:	3 },
		{ color: "white",	width:	1 }
	];
	this.expand = 0.2;
	this.miniGlow = 0;
	this.maxLineWidth = 10;
};
Ore.prototype = new Game.Body();
Game.Ore = Ore;

Ore.prototype.isOnScreen = function() {
	if (this.pos.x + this.r > Game.camera.x && 
		this.pos.y + this.r > Game.camera.y &&
		this.pos.x - this.r < Game.camera.x + (Game.WIDTH/Game.camera.zoom) &&
		this.pos.y - this.r < Game.camera.y + (Game.HEIGHT/Game.camera.zoom)) { return true; }
	return false;
};

Ore.prototype.draw = function (ctx) {
	if (!this.isOnScreen()) { return; }
	
	if (Game.camera.zoom * this.r < 1) {
	
		var pixelSize = Math.ceil(2/Game.camera.zoom);
		
		this.miniGlow += this.expand;
		if (this.miniGlow > this.lines.length) { this.miniGlow = 0; }
		
		ctx.fillStyle = this.lines[Math.floor(this.miniGlow)].color;
		ctx.fillRect(this.pos.x - pixelSize * 0.5, this.pos.y - pixelSize * 0.5, pixelSize, pixelSize);
	
	} else {
		
		for (var i = 0; i < this.lines.length; ++i) {
			ctx.fillStyle	= this.lines[i].color;
			ctx.beginPath();
			ctx.arc(this.pos.x, this.pos.y, this.lines[i].width, 0, 2*Math.PI, true);
			ctx.fill();
			
			this.lines[i].width += this.expand;
		}
		
		if (this.lines[0].width > this.maxLineWidth) {
			this.lines[0].width = 0;
			this.lines.push(this.lines.shift());
		}
	} 	
	
	return this;
};

}());
