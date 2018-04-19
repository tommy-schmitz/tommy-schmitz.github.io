// Load main library
var Game = window.Game || {};

Game.Input = (function() {
	// Input object
	var Input = {};

    Input.shoot = function () {
        return Game.KeyboardInput.shoot() || (Game.VirtualGamePad.isActive && Game.VirtualGamePad.state.fire);
    };

    Input.left = function () {
        return Game.KeyboardInput.left() || (Game.VirtualGamePad.isActive && Game.VirtualGamePad.state.left);
    };

    Input.right = function () {
        return Game.KeyboardInput.right() || (Game.VirtualGamePad.isActive && Game.VirtualGamePad.state.right);
    };

    Input.up = function () {
        return Game.KeyboardInput.up() || (Game.VirtualGamePad.isActive && Game.VirtualGamePad.state.up);
    };

    Input.down = function () {
        return Game.KeyboardInput.down() || (Game.VirtualGamePad.isActive && Game.VirtualGamePad.state.down);
    };

    Input.jump = function () {
        return Game.KeyboardInput.jump() || (Game.VirtualGamePad.isActive && Game.VirtualGamePad.state.jump);
    };


	// Input initialization
	Input.init = function init() {
        Game.KeyboardInput.init();
        Game.VirtualGamePad.init();
	};
	
	return Input;
}());
