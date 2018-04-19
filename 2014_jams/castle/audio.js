// Load main library
var Game = window.Game || {};

(function() {

	// Global
	Game.currentMusic = null;

	var	soundList = [
			// TODO: Add more audio files to this list.
			'hello.wav',
			'footstep1.wav',
			'footstep2.wav',
			'craft.wav',
			'place_building.wav',
			'tower_shoot.wav',
			'zombie_die.wav',
			'player_die.wav',
			'explosion.wav',
			'bomb_launch.wav',
			'zombie1.wav',
			'zombie2.wav',
			'zombie3.wav'
		];
		
	Game.MUTE = false;
	
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
	};

	Game.playSound = function(filename) {
		if (Game.MUTE) { return; }
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
			if(cache[filename].ready && !cache[filename].error) {
				cache[filename].sound.pause();
				cache[filename].sound.currentTime = 0;
				cache[filename].sound.play();
			}
		}
	};


(function() {   // Music scope


	var high_energy;
	var low_energy;
	var intro;
	var loop;
	loop = {
		play:  function() {high_energy.play();   low_energy.play(); },
		pause: function() {high_energy.pause();  low_energy.pause();}
	};

	var n = 4;
	var cb = function() {
		if(--n > 0)
			return;

		intro.addEventListener('ended', function() {
			Game.currentMusic = loop;
			low_energy.play();
			high_energy.play();
		}, true);
		low_energy.addEventListener('ended', function() {
			low_energy.play();
			high_energy.currentTime = 0;
			high_energy.play();
		}, true);
		Game.currentMusic = intro;
		intro.play();
	};
	var callback = function() {
		this.removeEventListener('canplaythrough', callback, true);
		cb();
	};
	Game.startMusic = cb;  // Must be called exactly ONCE outside this file

	Game.loadMusic = function() {
		if (Game.MUTE) { return; }
//		if (Game.currentMusic) { Game.currentMusic.pause(); }

		low_energy = new Audio();
		low_energy.addEventListener('canplaythrough', callback, true);
		high_energy = new Audio();
		high_energy.addEventListener('canplaythrough', callback, true);
		intro = new Audio();
		intro.addEventListener('canplaythrough', callback, true);

		high_energy.volume = 0.0;

		low_energy.src = 'low_energy.ogg';
		high_energy.src = 'high_energy.ogg';
		intro.src = 'intro.ogg';
	};
	
	Game.stopMusic = function() {
		if (Game.currentMusic) {
			Game.currentMusic.pause();
		}
	};
	Game.resumeMusic = function() {
		if (Game.MUTE) { return; }
		if (Game.currentMusic) {
			Game.currentMusic.play();
		}
	};
	var currentVolume = 0.0;
	var desiredVolume = 0.0;
	Game.increaseMusic = function() {
		if(Game.currentMusic === loop)
			desiredVolume = 1.0;
	};
	Game.decreaseMusic = function() {desiredVolume = 0.0;};
	Game.updateMusic = function(elapsed) {
		var RATE = 0.0005;

		if(currentVolume < desiredVolume) {
			currentVolume += elapsed * RATE;
			if(currentVolume > desiredVolume)
				currentVolume = desiredVolume;
			high_energy.volume = currentVolume;
		}
		if(currentVolume > desiredVolume) {
			currentVolume -= elapsed * RATE;
			if(currentVolume < desiredVolume)
				currentVolume = desiredVolume;
			high_energy.volume = currentVolume;
		}
	};


}());   // End music scope

}());
