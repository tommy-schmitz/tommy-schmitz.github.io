// Load main library
var Game = window.Game || {};

(function() {


// Activates the flag in 'dirs' that corresponds to 'offset'
var helper = function(offset, dirs) {
	if(offset.x == -1)
		dirs.w = true;
	if(offset.x == 1)
		dirs.e = true;
	if(offset.y == -1)
		dirs.n = true;
	if(offset.y == 1)
		dirs.s = true;
};

Game.drawArrow = function(ctx, prev, curr, next) {
	var prevOffset, nextOffset, dirs;
	dirs = {n: false, e: false, w: false, s:false};
	if(prev) {
		prevOffset = {x: (prev.x - curr.x), y: (prev.y - curr.y)};
		helper(prevOffset, dirs);
	}
	if(next) {
		nextOffset = {x: (next.x - curr.x), y: (next.y - curr.y)};
		helper(nextOffset, dirs);
	}

	if(prev && next) {
		if(dirs.e && dirs.s)    num = 4;
		if(dirs.w && dirs.s)    num = 5;
		if(dirs.w && dirs.e)    num = 6;
		if(dirs.n && dirs.e)    num = 11;
		if(dirs.n && dirs.w)    num = 12;
		if(dirs.n && dirs.s)    num = 13;
	} else if(prev) {
		if(dirs.w)    num = 0;
		if(dirs.n)    num = 1;
		if(dirs.s)    num = 7;
		if(dirs.e)    num = 8;
	} else if(next) {
		if(dirs.e)    num = 2;
		if(dirs.s)    num = 3;
		if(dirs.n)    num = 9;
		if(dirs.w)    num = 10;
	} else {
		return;
	}

	Game.drawImage(ctx, 'arrows.png',
	               (num%7)*Game.TILE_WIDTH, Math.floor(num/7)*Game.TILE_HEIGHT,
	               Game.TILE_WIDTH, Game.TILE_HEIGHT,
	               curr.x*Game.TILE_WIDTH, curr.y*Game.TILE_HEIGHT,
	               Game.TILE_WIDTH, Game.TILE_HEIGHT);
};

Game.getPath = function(tile, moveRange) {
	var result = [];
	while(tile) {
		result.unshift(tile);
		tile = tile.getPreviousTile();
	}
	return result;
};


}())
