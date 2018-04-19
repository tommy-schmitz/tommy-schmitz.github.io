// Load main library
var Game = window.Game || {};

Game.collide = function(gameBoard, actor) {
	var resolveCollisions = function(x, y, dir) {
		var j = Math.floor(x);
		var i = Math.floor(y);
		var xoff = x - (j+((dir.x+1)/2));
		var yoff = y - (i+((dir.y+1)/2));
		var snapx, snapy;

		if(gameBoard.getTile(j, i).tag === 'empty')
			return;

		if(      dir.x*xoff <= dir.y*yoff
		      && gameBoard.getTile(j-dir.x, i).tag === 'empty')
			snapx = true;
		else if(    dir.x*xoff >= dir.y*yoff
		         && gameBoard.getTile(j, i-dir.y).tag === 'empty')
			snapy = true;
		else
			snapx = snapy = true;

		if(snapx)
			actor.x  +=  dir.x * -1  -  xoff;
		if(snapy)
			actor.y  +=  dir.y * -1  -  yoff;
	};

	var HALF_GIRTH = 0.25;
	var x0 = function() {return actor.x - HALF_GIRTH;};
	var y0 = function() {return actor.y - HALF_GIRTH;};
	var x1 = function() {return actor.x + HALF_GIRTH;};
	var y1 = function() {return actor.y + HALF_GIRTH;};

	resolveCollisions(x0(), y0(), {x: -1, y: -1});
	resolveCollisions(x1(), y0(), {x: 1,  y: -1});
	resolveCollisions(x0(), y1(), {x: -1, y: 1});
	resolveCollisions(x1(), y1(), {x: 1,  y: 1});
	resolveCollisions(x0(), y0(), {x: -1, y: -1});
};
