// Load main library
var Game = window.Game || {};

(function() {
	var	soundList = [
			'intro.ogg',
			'loop.ogg',
			'block.wav',
			'death.wav',
			'enemy_die.wav',
			'explosion.wav',
			'hurt.wav',
			'key.wav',
			'laser.wav',
			'unlock.wav'
		];
	
	// Pre-load all images
	var cache = {};
	Game.loadSounds = function(callback) {
		var numLoadedsounds = 0, i, snd, cacheLine;
		
		for(i = 0;  i < soundList.length;  ++i) {
			snd = new Audio();
			cacheLine = {sound: snd, ready: false, error: false};
			cache[soundList[i]] = cacheLine;
			// Call the callback after all images are loaded
			snd.addEventListener("canplaythrough", (function(_cacheline) { return function() {
				_cacheline.ready = true;
				++numLoadedsounds;
				if(numLoadedsounds == soundList.length)
					callback();
			}}(cacheLine)),false);
			// Skip this sound if it failed to load
			snd.addEventListener("error", (function(_cacheline) { return function() {
				_cacheline.error = true;
				++numLoadedsounds;
				if(numLoadedsounds == soundList.length)
					callback();
			}}(cacheLine)),false);
			snd.src = soundList[i];
		}
	}

	Game.playSound = function(filename) {
		if(!cache.hasOwnProperty(filename)) {
			var audio = new Audio(),
				cacheLine = {sound: audio, ready: false};
			audio.addEventListener("canplaythrough", function() {
				cacheLine.ready = true;
				audio.play();
			}, true);
			cache[filename] = cacheLine;
			audio.src = filename;
		} else {
			if(cache[filename].ready && !cache[filename].error)
				cache[filename].sound.play();
		}
	};

	var loop;
	var intro;
	Game.startMusic = function() {
		loop = new Audio();
		var playThis = loop.play;
		var playIntro = function() {
			loop.removeEventListener('canplaythrough', playIntro, true);
			intro = new Audio();
			Game.currentMusic = intro;
			intro.addEventListener('canplaythrough', playThis, true);
			intro.addEventListener('ended', function() {
				loop.play();
				Game.currentMusic = loop;
			}, true);
			intro.src = 'intro.ogg';
		};
		loop.addEventListener('ended', playThis, true);
		loop.addEventListener('canplaythrough', playIntro, true);
		loop.src = 'loop.ogg';
	};

	Game.stopMusic = function() {
		if (Game.currentMusic) {
			Game.currentMusic.pause();
		}
	};
	Game.resumeMusic = function() {
		if (Game.currentMusic) {
			Game.currentMusic.play();
		}
	};

}());
