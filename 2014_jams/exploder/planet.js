window.Game = window.Game || {};

var Game = window.Game;

Game.assert(Game.Vec);
Game.assert(Game.Body);

(function() {

Game.BASE_DENSITY = 0.000001;
Game.massFromRadius = function(r) {
	return r*r*r*Game.BASE_DENSITY;
};

function Planet(pos, r, variance, resolution, options) {
	options = options || {};

	var mass = Game.massFromRadius(r);
	if(options.lowMass)
		mass *= 0.001;
	Game.Body.call(this, pos, new Game.Vec(0,0), r, mass, false);

	this.baseRadius = r;
	this.mountainHeight = variance || 10;
	this.outerRadius = this.baseRadius + this.mountainHeight;
	this.smoothChange = this.mountainHeight / 10;
	this.colonized = false;
	
	this.samples = resolution || 60;
	this.heightMap = [];
	this.normalMap = [];
	this.lines = [
		{ color: "gray",	width:	3 },
		{ color: "silver",	width:	1 }
	];
	
	this.generateHeightMap();
};
Planet.prototype = new Game.Body();
Game.Planet = Planet;

Planet.prototype.isColony = function() {
	return this.colonized;
};

var interact = function(m, v1, v2) {
	var CONSTANT = 20;
	var delta = v2.minus(v1);
	var mag = delta.magnitude();
	return delta.times(m*CONSTANT/mag/mag/mag);
};
var orbitalSpeed = function(r, M) {
	var a = interact(M, Game.Vec.ZERO, new Game.Vec(r, 0)).x;
	return Math.sqrt(a * r);
};
Planet.prototype.addSatellite = function (body, orbitRadius, orbitPosition) {
	body.pos = new Game.Vec(
		this.pos.x + Math.cos(orbitPosition) * orbitRadius,
		this.pos.y + Math.sin(orbitPosition) * orbitRadius
	);
	var dist = body.pos.minus(this.pos).magnitude();
	body.vel = body.pos.minus(this.pos).normalized().times(orbitalSpeed(dist,this.mass)).perp().plus(this.vel);
	return body;
};

Planet.prototype.getHeight = function(approachVector) {
	var angle = Math.atan2(approachVector.y, approachVector.x);
	if(angle < 0)
		angle += 2*Math.PI;
	var n = this.heightMap.length;
	var z = angle * n / 2 / Math.PI;
	var i = Math.floor(z);
	var i2 = (i+1)%n;
	var alpha = z - i;
	return this.heightMap[i] * (1-alpha) + this.heightMap[i2] * alpha;
};

Planet.prototype.getNormal = function(approachVector) {
	if(!approachVector)
		debugger;
	var angle = Math.atan2(approachVector.y, approachVector.x);
	if(angle < 0)
		angle += 2*Math.PI;
	var n = this.heightMap.length;
	var i = Math.floor(angle * n / 2 / Math.PI);
	return this.normalMap[i];
};

Planet.prototype.calculateNormal = function(i) {
	var n = this.samples;
	var i2 = (i+1)%n;
	var angle1 = i * 2 * Math.PI / n;
	var angle2 = i2 * 2 * Math.PI / n;
	var h1 = this.heightMap[i];
	var h2 = this.heightMap[i2];
	var x1 = h1 * Math.cos(angle1);
	var y1 = h1 * Math.sin(angle1);
	var x2 = h2 * Math.cos(angle2);
	var y2 = h2 * Math.sin(angle2);
	return new Game.Vec(y2-y1, x1-x2).normalized();
};

Planet.prototype.generateHeightMap = function () {
	var PLATFORM_THRESHOLD = 0.1,
		SMOOTH_THRESHOLD = 0.8,
		
		nextSampleType;

	this.heightMap[0] = this.baseRadius + this.mountainHeight * Math.random();
		
	for (var i = 1; i < this.samples; ++i) {
		// Generate the next height sample
		nextSampleType = Math.random();
		if (nextSampleType < PLATFORM_THRESHOLD) {
			// Continue same height
			this.heightMap[i] = this.heightMap[i-1];
		} else if (nextSampleType < SMOOTH_THRESHOLD) {
			// Smoothly incline
			this.heightMap[i] = this.heightMap[i-1];
			this.heightMap[i] += (Math.random() - 0.5) * this.smoothChange * 2;
			this.heightMap[i] =
				Math.min(Math.max(this.heightMap[i],this.baseRadius),this.baseRadius+this.mountainHeight);
		} else {
			// Random new height
			this.heightMap[i] = this.baseRadius + this.mountainHeight * Math.random();
		}
		
		// Generate the normal between the last two height samples
		this.normalMap[i-1] = this.calculateNormal(i-1);
	};
	
	this.normalMap[this.samples-1] = this.calculateNormal(this.samples-1);
	
	return this;
};

Planet.prototype.setColors = function() {
	var i, n = 0;
	for (i = 0; i < arguments.length - 1; i += 2) {
		this.lines[n] = {
			color:	arguments[i],
			width:	arguments[i+1]
		};
		
		++n;
	};
	
	while (this.lines.length > n) { this.lines.pop(); }
	return this;
};

Planet.prototype.isOnScreen = function() {
	if (this.pos.x + this.outerRadius > Game.camera.x && 
		this.pos.y + this.outerRadius > Game.camera.y &&
		this.pos.x - this.outerRadius < Game.camera.x + (Game.WIDTH/Game.camera.zoom) &&
		this.pos.y - this.outerRadius < Game.camera.y + (Game.HEIGHT/Game.camera.zoom)) { return true; }
	return false;
};

Planet.prototype.draw = function (ctx) {
	if (!this.isOnScreen()) { return; }
	
	++Game.planetsDrawn;
	
	ctx.beginPath();

	if (Game.camera.zoom * this.outerRadius < 4) {
	
		var pixelSize;
		for (var line = 0; line < this.lines.length; ++line) {
			pixelSize = Math.ceil(this.lines[line].width/Game.camera.zoom);
		
			ctx.fillStyle = this.lines[line].color;
			ctx.fillRect(this.pos.x - pixelSize / 2, this.pos.y - pixelSize / 2, pixelSize, pixelSize);
		}
	
	
	
	} else if (Game.camera.zoom * this.mountainHeight < 3) {
		
		ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2*Math.PI, true);
		
	} else {
	
		var currAngle = 0;
		var currX = this.heightMap[0] * Math.cos(0);
		var currY = this.heightMap[0] * Math.sin(0);
		ctx.moveTo(currX + this.pos.x,currY + this.pos.y);
		
		for (var i = 1; i < this.heightMap.length; ++i) {
			currAngle = 2*Math.PI*i/this.heightMap.length;
			currX = this.heightMap[i] * Math.cos(currAngle);
			currY = this.heightMap[i] * Math.sin(currAngle);
			ctx.lineTo(currX + this.pos.x,currY + this.pos.y);
		};
		
		ctx.closePath();
	
	}
	
	ctx.fillStyle = "black";

	for (var i = 0; i < this.lines.length; ++i) {
		ctx.strokeStyle	= this.lines[i].color;
		ctx.lineWidth	= this.lines[i].width / Game.camera.zoom;
		ctx.stroke();
	}

	// Draw colony stats
	if(this.colonized) {
		ctx.textAlign = 'center';
		ctx.font = (this.r*0.2) + "pt sans-serif";
		ctx.fillStyle = "#fff";
		ctx.fillText('COLONY',this.pos.x,this.pos.y-this.r*0.3);
		ctx.fillStyle = "#f80";
		ctx.fillText('FUEL',this.pos.x,this.pos.y+this.r*0.5);
		ctx.font = (this.r*0.4) + "pt sans-serif";
		ctx.fillText(Math.round(this.fuel),this.pos.x,this.pos.y+this.r*0.2);
	}

	// Debug draw of planet normals
	if (false) {
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#00f';
		for (var i = 0; i < this.heightMap.length; ++i) {
			var z = (i+0.5)*2*Math.PI/this.heightMap.length;
			ctx.beginPath();
			var h = this.heightMap[i]*0.5+this.heightMap[(i+1)%this.heightMap.length]*0.5;
			var v2 = new Game.Vec(h*Math.cos(z), h*Math.sin(z));
			v2 = v2.plus(this.pos);
			ctx.moveTo(v2.x, v2.y);
			v2 = v2.plus(this.normalMap[i].times(32));
			ctx.lineTo(v2.x, v2.y);
			ctx.stroke();
		}
		
		ctx.fillStyle = "white";
		ctx.fillText(this.mass,this.pos.x,this.pos.y);
	}
	
	return this;
};

}());

/*
function Sun() {
	this.baseRadius = 180;
	this.mountainHeight = 10;
	this.smoothChange = 1;
	
	this.samples = 200;
	this.heightMap = [];
	this.lines = [
		{ color: "red",		width:	3 },
		{ color: "yellow",	width:	2 },
		{ color: "white",	width:	1 }
	];
};

Sun.prototype.generate = Planet.prototype.generate;
Sun.prototype.draw = Planet.prototype.draw;

Sun.prototype.wiggle = function () {
	var FLARE_CHANCE = 0.05,
		FLARE_HEIGHT = 240;

	for (var i = 0; i < this.heightMap.length; ++i) {
		if (Math.random() < FLARE_CHANCE / this.heightMap.length) {
			this.heightMap[i] = FLARE_HEIGHT;
		} else {
			if (this.heightMap[i] > this.baseRadius + this.mountainHeight) {
				this.heightMap[i] -=
					(this.heightMap[i] - this.baseRadius) / 10;
			} else {
				this.heightMap[i] += (Math.random() - 0.5) * this.smoothChange * 2;
				this.heightMap[i] =
					Math.min(Math.max(this.heightMap[i],this.baseRadius),this.baseRadius+this.mountainHeight);
			}
		}
	};

	return this;
};

function Resource() {
	this.baseRadius = 5;
	this.mountainHeight = 10;
	this.smoothChange = 2;
	
	this.samples = 10;
	this.heightMap = [];
	this.lines = [
		{ color: "blue",	width:	3 },
		{ color: "fuchsia",	width:	2 },
		{ color: "white",	width:	1 }
	];
	
	this.glow = 0;
	this.glowCycle = 1000;
};
Resource.prototype.generate = Planet.prototype.generate;
Resource.prototype.update = function(elapsed) {
	this.glow += elapsed; 
	if (this.glow > this.glowCycle) { this.glow -= this.glowCycle; }
	
	this.lines[0].width = 3 + 4 * Math.pow(1 - this.glow / this.glowCycle,2);
	this.lines[1].width = 2 + 3 * Math.pow(1 - this.glow / this.glowCycle,2);
	this.lines[2].width = 1 + 2 * Math.pow(1 - this.glow / this.glowCycle,2);	
};
Resource.prototype.draw = Planet.prototype.draw;
*/
