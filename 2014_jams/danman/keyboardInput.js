// Load main library
var Game = window.Game || {};

Game.KeyboardInput = (function() {
    // Input object
    var KeyboardInput = {};

    // Keymap
    var keymap = {
        65: 'a',
        68: 'd',
        83: 's',
        87: 'w',
        70: 'fire',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'jump',
    };

    KeyboardInput.shoot = function () {
        var shoot = this.keys[keymap["70"]];
        shoot = typeof shoot != "undefined" ? shoot : false;
        return shoot;
    };

    KeyboardInput.jump = function () {
        var space = this.keys[keymap["32"]];
        space = typeof space != "undefined" ? space : false;
        return space;
    };

    KeyboardInput.up = function () {
//        var upW = this.keys[keymap["87"]];
//        upW = typeof upW != "undefined" ? upW : false;
        var upArrow = this.keys[keymap["38"]];
        upArrow = typeof upArrow != "undefined" ? upArrow : false;
        return upArrow;
    };

    KeyboardInput.down = function () {
//        var downS = this.keys[keymap["83"]];
//        downS = typeof  downS != "undefined" ? downS : false;
        var downArrow = this.keys[keymap["40"]];
        downArrow = typeof  downArrow != "undefined" ? downArrow : false;
        return downArrow;
    };

    KeyboardInput.left = function () {
//        var leftA = this.keys[keymap["65"]];
//        leftA = typeof leftA != "undefined" ? leftA : false;
        var leftArrow = this.keys[keymap["37"]];
        leftArrow = typeof leftArrow != "undefined" ? leftArrow : false;
        return leftArrow;
    };

    KeyboardInput.right = function () {
//        var rightD = this.keys[keymap["68"]];
//        rightD = typeof rightD != "undefined" ? rightD : false;
        var rightArrow = this.keys[keymap["39"]];
        rightArrow = typeof rightArrow != "undefined" ? rightArrow : false;
        return rightArrow;
    };

    // Input initialization
    KeyboardInput.init = function init() {
        // Prevent double-initialization
        if (this.keys) { return; }

        var canvas = document.getElementById("myCanvas");

        // Last key pressed
        this.lastKey = null;
        // Key input buffer
        this.keys = {};
        // Mouse input buffer
        this.mouse = {};

        // Key down event
        document.addEventListener("keydown",function(e) {
            KeyboardInput.lastKey = e.keyCode;
			if(!KeyboardInput.keys[keymap[e.keyCode]]) {
				KeyboardInput.keys[keymap[e.keyCode]] = true;
				Game.ui.keyDown(keymap[e.keyCode]);
			}
        },false);
        // Key up event
        document.addEventListener("keyup",function(e) {
            KeyboardInput.keys[keymap[e.keyCode]] = false;
        },false);

        // Mouse movement
        canvas.addEventListener("mousemove",function(e) {
            KeyboardInput.mouse.x = e.pageX - canvas.offsetLeft;
            KeyboardInput.mouse.y = e.pageY - canvas.offsetTop;
            Game.ui.mouseMove(e.offsetX + Game.camera.x, e.offsetY + Game.camera.y);
        },false);
        // Mouse down event
        canvas.addEventListener("mousedown",function(e) {
            var offsetX = e.pageX - canvas.offsetLeft;
            var offsetY = e.pageY - canvas.offsetTop;
            if (e.which === 1) {
                KeyboardInput.mouse.button = true;
                Game.ui.mouseDown(offsetX + Game.camera.x, offsetY + Game.camera.y);
            } else if(e.which === 3) {
                Game.ui.cancel();
            }
            e.preventDefault();
        },false);
        // Mouse up event
        canvas.addEventListener("mouseup",function(e) {
            KeyboardInput.mouse.button = false;
            e.preventDefault();
        },false);
        // Context menu event (just to disable the context menu)
        canvas.addEventListener("contextmenu",function(e) {
            e.preventDefault();
        },false);
    };

    return KeyboardInput;
}());
