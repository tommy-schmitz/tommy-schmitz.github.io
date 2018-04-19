// Load main library
var Game = window.Game || {};

(function() {
	var	soundList = [
			'intro.ogg',
			'loop.ogg',
			'triumphant.ogg',
			'hit.wav',
			'select.wav',
			'steps.wav'
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
			if(cache[filename].ready && !cache[filename].error)
				cache[filename].sound.play();
		}
	};
	
	var loop;
	var intro;
	Game.startMusic = function() {
		if (Game.MUTE) { return; }
		if (Game.currentMusic) { Game.currentMusic.pause(); }
		//return;  // TODO: remove this line when music exists

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
	
	var loop2;
	Game.playAlternateMusic = function() {
		if (Game.currentMusic) { Game.currentMusic.pause(); }
	
		loop2 = new Audio();
		loop2.addEventListener('ended', loop2.play, true);
		loop2.addEventListener('canplaythrough', function() {
			loop2.play();
			Game.currentMusic = loop2;
		}, true);
		loop2.src = 'triumphant.ogg';
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

	Game.MUSIC1 = 0;
	Game.MUSIC2 = 1;
	Game.currentSong = -1;
	Game.setMusic = function(music) {
		if (Game.MUTE) { return; }
		if (music === Game.MUSIC1) {
			if (Game.currentSong !== Game.MUSIC1) {
				Game.startMusic();
			}
		} else if (music === Game.MUSIC2) {
			if (Game.currentSong !== Game.MUSIC2) {
				Game.playAlternateMusic();
			}
		} else {
			Game.stopMusic();
			Game.currentMusic = null;
		}
		Game.currentSong = music;
	};
}());
