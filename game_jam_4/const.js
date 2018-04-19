var Game = window.Game || {};


(function() {


Game.PLAYER_MAX_SPEED = 0.005;

var PIXEL = 1/16;
var JUMP_HEIGHT = 52 * PIXEL;
Game.JUMP_DURATION = 600;  // ms
Game.GRAVITY = 8 * JUMP_HEIGHT / Game.JUMP_DURATION / Game.JUMP_DURATION;
Game.INITIAL_JUMP_VELOCITY = -0.5 * Game.GRAVITY * Game.JUMP_DURATION;


}());
