var Game = window.Game || {};


(function() {


var PIXEL = 1/16;

// Arguments are rectangles of the form {x0:, x1:, y0:, y1:}
Game.isOverlap = function(a, b) {
	return  a.x1 > b.x0  &&  b.x1 > a.x0  &&  a.y1 > b.y0  &&  b.y1 > a.y0;
};

// Modifies the argument rectangle r
Game.translate = function(r, dx, dy) {
	r.x0 += dx;   r.x1 += dx;
	r.y0 += dy;   r.y1 += dy;
};

Game.debugRect = function(ctx, rect) {
	ctx.beginPath();
	ctx.fillStyle = '#f0f';
	ctx.rect(rect.x0/PIXEL, rect.y0/PIXEL, (rect.x1-rect.x0)/PIXEL, (rect.y1-rect.y0)/PIXEL);
	ctx.fill();
};

Game.drawHPBar = function(ctx, amount, max, x) {
	var HPBAR_X = Math.floor(Game.camera.x / Game.SCALE_FACTOR) + x;
	var HPBAR_Y = Math.floor(Game.camera.y / Game.SCALE_FACTOR) + 20;
	var HPBAR_W = 8;
	var HPBAR_H = max*2+1;
	
	ctx.beginPath();
	ctx.fillStyle = "black";
    ctx.lineWidth = "0";
    ctx.rect(HPBAR_X, HPBAR_Y, HPBAR_W, HPBAR_H);
    ctx.fill();
	
	for (var i=0; i<amount; i++) {
		Game.drawImage(ctx, 'hp.png', HPBAR_X+1, HPBAR_Y+HPBAR_H-2-(2*i));
	}
};


}());
