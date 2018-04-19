// Load main library
var Game = window.Game || {};


(function() {


var PIXEL = 1/16;
Game.PLAYER_WIDTH = 16 * PIXEL;
Game.PLAYER_HEIGHT = 23 * PIXEL;

Game.collide = function(grid, actor) {
	var result = [false,0];
	var resolveCollisions = function(x, y, dir) {
		var j = Math.floor(x);
		var i = Math.floor(y);
		var xoff = x - (j+((dir.x+1)/2));
		var yoff = y - (i+((dir.y+1)/2));
		var snapx, snapy;

		if(grid[i] === undefined)
			debugger;
        if(grid[i][j].getDeath() && actor.invincibility <= 0) {
            actor.hp = 0;
			actor.dead = 1;
            return;
        }
        if(grid[i][j].worldTarget) {
            Game.ui.state.gs.travelTo(grid[i][j].worldTarget);
            return;
        }
		if(!grid[i][j].getSolid())
			return;

		// Set snapx and/or snapy to true, as appropriate
		var canSnapX = grid[i-dir.y][j].getSolid();
		var canSnapY = grid[i][j-dir.x].getSolid();
		snapx = snapy = false;
		if(dir.y === 0)
			snapx = true;
		else if(canSnapX && canSnapY)
			snapx = snapy = true;
		else if(canSnapX)
			snapx = true;
		else if(canSnapY)
			snapy = true;
		else if(dir.x*xoff <= dir.y*yoff)
			snapx = true;
		else
			snapy = true;

		// Nudge the actor
		if(snapx) {
			actor.x  +=  dir.x * -1  -  xoff;
			result[1] = dir.x;
		}
		if(snapy) {
			actor.y  +=  dir.y * -1  -  yoff;
			if(dir.y * actor.vy  >  0) {  // If velocity is "toward" the wall
				actor.vy = 0;
				if(dir.y === 1)
					result[0] = true;
			}
		}
	};

	var HALF_GIRTH  = 0.5 * Game.PLAYER_WIDTH;
	var HALF_HEIGHT = 0.5 * Game.PLAYER_HEIGHT;
	var x0 = function() {return actor.x - HALF_GIRTH;};
	var x1 = function() {return actor.x + HALF_GIRTH;};
	var y0 = function() {return actor.y - 2*HALF_HEIGHT;};
	var y1 = function() {return actor.y - HALF_HEIGHT;};
	var y2 = function() {return actor.y;};

	resolveCollisions(x0(), y1(), {x: -1, y: 0});
	resolveCollisions(x1(), y1(), {x: 1, y: 0});
	resolveCollisions(x0(), y0(), {x: -1, y: -1});
	resolveCollisions(x1(), y0(), {x: 1,  y: -1});
	resolveCollisions(x0(), y2(), {x: -1, y: 1});
	resolveCollisions(x1(), y2(), {x: 1,  y: 1});
//	resolveCollisions(x0(), y0(), {x: -1, y: -1});

	return result;
};


}());
