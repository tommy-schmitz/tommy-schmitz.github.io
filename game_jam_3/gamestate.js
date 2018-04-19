window.Game = window.Game || {};

//imports
var Game = window.Game;

Game.assert(Game.Body);
Game.assert(Game.Vec);

(function() {

// defined at bottom of file
var ThrustParticle;
var CrashParticle;
var RockParticle;
var LaserParticle;

var interact = function(m, v1, v2) {
	var CONSTANT = 20;
	var deltaX = v2.x - v1.x;
	var deltaY = v2.y - v1.y;
	var mag = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
	var multiplier = m*CONSTANT/mag/mag/mag;
	return new Game.Vec(deltaX*multiplier, deltaY*multiplier);
};
var orbitalSpeed = function(r, M) {
	var a = interact(M, Game.Vec.ZERO, new Game.Vec(r, 0)).x;
	return Math.sqrt(a * r);
};

var randomAngle = function() {
	return Math.random()*2*Math.PI;
};

var randomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var MAX_FUEL = Game.MAX_FUEL = 100.0;
Game.MAX_HP = 100.0;

var GameState = function(options) {
	this.bodies = [];

	options = options || {};
	this.onHPChange = options.onHPChange || function(){};
	
	var sun = new Game.Planet(new Game.Vec(-20000,0), 6000, 200, 200);
	sun.setColors("red", 10, "yellow", 6, "white", 2);
	this.bodies.push(sun);
	
	var pinkPlanet = new Game.Planet(new Game.Vec(3000,1000), 1200, 150, 200);
	pinkPlanet.setColors("maroon", 10, "purple", 6, "gray", 2);
	sun.addSatellite(pinkPlanet,50000,0);
	this.bodies.push(pinkPlanet);
	this.generateAsteroidField(20,3500,1000,10,30,pinkPlanet);

	var pinkMoon = new Game.Planet(Game.Vec.ZERO, 250, 30, 200);
	pinkMoon.setColors("white", 4, "gray", 2);
	pinkPlanet.addSatellite(pinkMoon,2800,randomAngle());
	this.bodies.push(pinkMoon);
	
	var midPlanetAngle = randomAngle();
	var midPlanet1 = new Game.Planet(Game.Vec.ZERO, 900, 100, 200);
	midPlanet1.setColors(randomColor(), 10, randomColor(), 6);
	sun.addSatellite(midPlanet1, 80000, midPlanetAngle);
	this.bodies.push(midPlanet1);
	this.generateAsteroidField(10,3500,1000,10,30,midPlanet1);
	
	var midPlanet2 = new Game.Planet(Game.Vec.ZERO, 900, 100, 200);
	midPlanet2.setColors(randomColor(), 10, randomColor(), 6);
	sun.addSatellite(midPlanet2, 80000, midPlanetAngle+(2*Math.PI/3));
	this.bodies.push(midPlanet2);
	this.generateAsteroidField(10,3500,1000,10,30,midPlanet2);
	
	var midPlanet3 = new Game.Planet(Game.Vec.ZERO, 900, 100, 200);
	midPlanet3.setColors(randomColor(), 10, randomColor(), 6);
	sun.addSatellite(midPlanet3, 80000, midPlanetAngle+(4*Math.PI/3));
	this.bodies.push(midPlanet3);
	this.generateAsteroidField(10,3500,1000,10,30,midPlanet3);

	var innerPlanet = new Game.Planet(Game.Vec.ZERO, 400, 50);
	innerPlanet.setColors('#800', 10, '#f00', 6, '#fff', 3);
	sun.addSatellite(innerPlanet, 10000, 0);
	this.bodies.push(innerPlanet);

	var greyPlanet = new Game.Planet(Game.Vec.ZERO, 300, 100, 200);
	greyPlanet.setColors("#444", 10, "#bbb", 6, "white", 2);
	sun.addSatellite(greyPlanet, 250000, randomAngle());
	this.bodies.push(greyPlanet);
	this.generateAsteroidField(40,3500,1000,10,30,greyPlanet);
	
	this.generateAsteroidField(80,125000,5000,100,40,sun);
	this.generateAsteroidField(40,400000,20000,100,50,sun);
	
	var bluePlanet = new Game.Planet(Game.Vec.ZERO, 3000, 300, 200);
	bluePlanet.setColors(randomColor(), 10, randomColor(), 6);
	sun.addSatellite(bluePlanet,200000,randomAngle());
	this.bodies.push(bluePlanet);
	
	var greenPlanet = new Game.Planet(Game.Vec.ZERO, 400, 60, 60);
	greenPlanet.setColors(randomColor(), 4, randomColor(), 2);
	bluePlanet.addSatellite(greenPlanet,16000,randomAngle());
	this.bodies.push(greenPlanet);
	
	// PARTICLES
	this.particles = new Game.ParticleSystem();
	this.LaserParticle = LaserParticle(this);
	
	// PLAYER STATS
	this.playerThrustLow = 0.04;
	this.playerThrustHigh = 0.20;
	this.playerTool = 0;
	this.TOOL_COUNT = 2;
	this.fuel = MAX_FUEL;
	this.USING_FUEL = true;
	this.oreCount = 0;
	this.moneyCount = 0;
	this.hp = Game.MAX_HP;

	// PLAYER
	this.player = new Game.Body(new Game.Vec(28500,0), new Game.Vec(0,10), 10, 0.00000001, false);
	pinkPlanet.addSatellite(this.player,1700,randomAngle());
	this.bodies.push(this.player);
	this.oreCount = 0;
	this.moneyCount = 0;
	this.coursePoints = [];
	this.coursePlanets = []
	this.plotting = false;
	this.PLOT_STEPS = 150;
	
	// TOOLS
	this.LASER_RANGE = 500;
	this.TRACTOR_RANGE = 500;
	this.TRACTOR_POWER = 0.0000001;
	this.tractorFieldAlpha = 0;
	this.tractorFieldAlphaRate = 8;
	
	// ORE STATS
	this.oreValue = 1000;
	
	// ASTEROID STATS
	this.rockMaxRadius = 30;
	this.rockMinRadius = 5;
	this.rockMaxMass = 0.001;
	this.rockStartVel = 2;

	// DRONES
	this.drones = [];

	// ROUTES
	this.colonies = [];
	//debug
	if(Game.DEBUG) {
		this.oreCount = 3;
		this.colonize(pinkPlanet);
		this.colonize(sun);
		this.colonize(pinkMoon);
	}
	
	// CONTROLS (WIP)
	this.BUTTON_ROUTE = 81;
	this.BUTTON_SWITCH_TOOL = 65;
	this.BUTTON_EQUIP_LASER = 49;
	this.BUTTON_EQUIP_TRACTOR = 50;
	this.BUTTON_THRUST = 1;
	this.BUTTON_USE_TOOL = 3;
	this.BUTTON_COURSE = 67;
};
Game.GameState = GameState;

GameState.prototype.addRoute = function(b1, b2) {
	return;  // Adding routes manually is disabled now!

	Game.assert(b1 && b2);

	if(b1 === b2)
		return;
	if(!b1.isColony() || !b2.isColony())
		return;

	var route = {
		source: b1,
		destination: b2,
		cooldown: 0
	};
	this.routes.push(route);
};

GameState.prototype.generateAsteroidField = function(number,radius,variance,min_size,size_variance,sun) {
	var ASTEROID_NUMBER = number,
		FIELD_RADIUS = radius,
		RADIUS_VARIANCE = variance,
		MIN_SIZE = min_size,
		SIZE_VARIANCE = size_variance,
		POSITION_VARIANCE = Math.PI / 20,
		currSize, currRadius, currPos, asteroid;
	
	for (var i = 0; i < ASTEROID_NUMBER; ++i) {
		currSize = Math.random();
			
		asteroid = new Game.Planet(
			Game.Vec.ZERO, 
			MIN_SIZE + currSize*SIZE_VARIANCE,
			undefined,
			undefined,
			{lowMass:true});
			
		currRadius = FIELD_RADIUS - RADIUS_VARIANCE + Math.random() * RADIUS_VARIANCE * 2;
		currPos = i / ASTEROID_NUMBER * Math.PI * 2 
			- POSITION_VARIANCE 
			+ Math.random() * POSITION_VARIANCE * 2;
		
		sun.addSatellite(asteroid,currRadius,currPos);
		this.bodies.push(asteroid);
	}
};

GameState.prototype.findNearestPlanet = function(rock) {
	var found = false;
	var greatest = 0;
	var result;
	for (var i=0; i<this.bodies.length; ++i) {
		var curr = interact(this.bodies[i].mass,rock.pos,this.bodies[i].pos).sqMag();
		if (!found || curr > greatest) {
			result = this.bodies[i];
			greatest = curr;
			found = true;
		}
	}
	return result;
};

GameState.prototype.newOrbiter = function(x,y) {
	var pos = new Game.Vec(x,y);
	var size = Math.random()*(this.SIZE_MAX-this.SIZE_MIN)+this.SIZE_MIN;
	var result = new Game.Body(new Game.Vec(x,y), new Game.Vec(0,0), size, 0.001, false);
	var planet = this.findNearestPlanet(result);
	var dist = pos.minus(planet.pos).magnitude();
	var vel = pos.minus(planet.pos).normalized().times(orbitalSpeed(dist,planet.mass)).perp();
	result.vel = vel;
	return result;
};

GameState.prototype._thrustDir = function() {
	var result;
	if(Game.Input.mouse.buttonLeft === true) {
		result = new Game.Vec(Game.Input.mouse.x + Game.camera.x,
		                      Game.Input.mouse.y + Game.camera.y);
		result = result.minus(this.player.pos).normalized();
	} else {
		result = Game.Vec.ZERO;
	}
	return result;
};

GameState.prototype._thrustAmount = function() {
	if(Game.Input.mouse.buttonLeft === true) {
		if (Game.Input.keys['SHIFT'])
			return this.playerThrustHigh;
		else
			return this.playerThrustLow;
	} else {
		return 0;
	}
};

var swapDestinations = function(drone) {
	var temp = drone.destination;
	drone.destination = drone.source;
	drone.source = temp;
};

Game.DRONE_CONSTANT = 0.5;

var DRONE_CAPACITY = 20;
GameState.prototype._tryToSpawnDrone = function(c1, c2) {
	var DRONE_PRICE = 0;
	if(c1.cooldown === 0  &&  this.moneyCount >= DRONE_PRICE
	      && c1.fuel >= DRONE_CAPACITY) {
		this.moneyCount -= DRONE_PRICE;
		c1.fuel -= DRONE_CAPACITY;
		c1.cooldown = 1300;

		var pos = c2.pos.minus(c1.pos).normalized();
		pos = pos.plus(pos.perp().times(Game.DRONE_CONSTANT)).normalized();
		pos = pos.times(c1.r).plus(c1.pos);
		var drone = new Game.Body(pos, c1.vel, 10, 0.00001, false);
		drone.isDrone = true;
		drone.source = c1;
		drone.destination = c2;
		this.bodies.push(drone);
		this.drones.push(drone);
		return true;
	}
	return false;
};

GameState.prototype.colonize = function(body) {
	body.colonized = true;
	body.fuel = 0;
	body.cooldown = 0;
	this.colonies.push(body);
	this.recomputeMinimumSpanningTree();
};

GameState.prototype.recomputeMinimumSpanningTree = function() {
	var getLeader = function(c) {
		for(;;) {
			if(c.parent === c)
				return c;
			c = c.parent;
		}
	};
	for(var i = 0;  i < this.colonies.length;  ++i) {
		var c = this.colonies[i];
		Game.assert(c.parent === undefined);
		c.neighbors = [];
		c.parent = c;
	}
	var edges = [];
	var makeEdge = function(c1, c2) {
		var weight = c1.pos.minus(c2.pos).sqMag();
		return {c1:c1, c2:c2, w: weight};
	};
	for(var i = 0;  i < this.colonies.length;  ++i)
		for(var j = i+1;  j < this.colonies.length;  ++j)
			edges.push(makeEdge(this.colonies[i], this.colonies[j]));
	edges.sort(function(e1, e2)
	    {return e1.w < e2.w ? -1 : e1.w > e2.w ? 1 : 0});
	for(;  edges.length > 0;  edges.shift()) {
		var e = edges[0];
		var leader1 = getLeader(e.c1);
		var leader2 = getLeader(e.c2);
		if(leader1 !== leader2) {
			if(Math.random() < 0.5)
				leader1.parent = leader2;
			else
				leader2.parent = leader1;
			e.c1.neighbors.push(e.c2);
			e.c2.neighbors.push(e.c1);
		}
	}
	for(var i = 0;  i < this.colonies.length;  ++i)
		this.colonies[i].parent = undefined;
};

GameState.prototype._updateColonies = function(elapsed) {
	// Occasionally update minimum spanning tree
	if(Math.random() < 0.01)
		this.recomputeMinimumSpanningTree();

	// Compute "effective fuel" for each colony
	for(var i = 0;  i < this.colonies.length;  ++i) {
		var c = this.colonies[i];
		Game.assert(c.effectiveFuel === undefined);
		c.effectiveFuel = c.fuel;
	}
	for(var i = 0;  i < this.drones.length;  ++i)
		this.drones[i].destination.effectiveFuel += DRONE_CAPACITY;

/*
	var totalFuel = 0;  // Total "effective" fuel contained by all colonies
	for(var i = 0;  i < this.colonies.length;  ++i)
		totalFuel += this.colonies[i].effectiveFuel;
	var average = totalFuel / this.colonies.length;
*/

	for(var i = 0;  i < this.colonies.length;  ++i) {
		var c1 = this.colonies[i];
		c1.cooldown = Math.max(0.0, c1.cooldown - elapsed);

		// Optimization: Only TRY to spawn drones when you CAN ...
		if(c1.cooldown > 0.0)
			continue;

		// Try to spawn drones toward a random neighbor in need
		if(c1.neighbors.length < 1)
			continue;
		var c2 = c1.neighbors[Math.floor(c1.neighbors.length * Math.random())];
		if(c1.effectiveFuel > MAX_FUEL+DRONE_CAPACITY  &&
		      (c1.effectiveFuel > c2.effectiveFuel+DRONE_CAPACITY+0.1
		        || Math.random() < (1/250)))
			if(this._tryToSpawnDrone(c1, c2)) {
				c1.effectiveFuel -= DRONE_CAPACITY;
				c2.effectiveFuel += DRONE_CAPACITY;
			}
	}

	for(var i = 0;  i < this.colonies.length;  ++i)
		this.colonies[i].effectiveFuel = undefined;
};

GameState.prototype.damagePlayer = function(amount) {
	Game.assert(amount > 0);
	this.hp -= amount;

	if(this.hp <= 0.0) {
		this.hp = 0;
		this.player.dead = true;
	}

	var f = this.onHPChange;
	f();
};

GameState.prototype.optimizedBounce = function(bounce) {
	var gs = this;

	var makeKey = function(x, y) {
		return x + "," + y;
	};

	var grid = {};
	var K = 7000;
	var computeGrid = function() {
		// Upper bound on distance between centers of colliding bodies
		for(var i = 0;  i < gs.bodies.length;  ++i) {
			var b = gs.bodies[i];
			var x = Math.floor(b.pos.x / K);
			var y = Math.floor(b.pos.y / K);
			var key = makeKey(x, y);
			grid[key] = grid[key] || [];
			grid[key].push(b);
		}
	};
	computeGrid();

	var computed = {};

	var helper2 = function(list1, list2) {
		if(!list2)
			return;

		if(list1 === list2) {
			for(var i1 = list1.length-1;  i1 >= 0;  --i1) {
				var b1 = list1[i1];
				for(var i2 = i1-1;  i2 >= 0;  --i2) {
					var b2 = list1[i2];
					var dx = b1.pos.x - b2.pos.x;
					var dy = b1.pos.y - b2.pos.y;
					var depth = (b1.outerRadius || b1.r) +
					            (b2.outerRadius || b2.r);
					if (dx*dx+dy*dy < depth*depth)
						bounce(b1, b2);
				}
			}
		} else {
			for(var i1 = list1.length-1;  i1 >= 0;  --i1) {
				var b1 = list1[i1];
				for(var i2 = list2.length-1;  i2 >= 0;  --i2) {
					var b2 = list2[i2];
					var dx = b1.pos.x - b2.pos.x;
					var dy = b1.pos.y - b2.pos.y;
					var depth = (b1.outerRadius || b1.r) +
					            (b2.outerRadius || b2.r);
					if (dx*dx+dy*dy < depth*depth)
						bounce(b1, b2);
				}
			}
		}
	};

	var helper1 = function(body) {
		var x = Math.floor(body.pos.x / K);
		var y = Math.floor(body.pos.y / K);
		var key1 = makeKey(x, y);
		var list1 = grid[key1];
		if(list1 === undefined)
			return;
		for(var i = -1;  i <= 1;  ++i)
			for(var j = -1;  j <= 1;  ++j) {
				var key2 = makeKey(x+j, y+i);
				var specialKey = (key1<key2 ?  key1+';'+key2 :  key2+';'+key1);
				if(!computed[specialKey]) {
					computed[specialKey] = true;
					helper2(list1, grid[key2]);
				}
			}
	};

	for(var i = this.bodies.length-1;  i >= 0;  --i)
		helper1(this.bodies[i]);

};

var collisionDanger = function(refVel, b) {
	return b.vel.minus(refVel).sqMag();
};

GameState.prototype.update = function(elapsed) {
	var PAIN_TOLERANCE = 4;
	var gs = this;
	var i, j;
	var alpha = 1 - (0.001 * elapsed);

	var onBounce = function(b1, b2, refVel) {
		// Player
		if(b1 === gs.player) {
			var player = b1;
			
			if (b2 instanceof Game.Ore) {
				gs.bodies.splice(gs.bodies.indexOf(b2),1);
				gs.oreCount++;
				return;
			}

			// Kill player in high-speed collisions
			var danger = collisionDanger(refVel, player);
			if(danger > PAIN_TOLERANCE)
				gs.damagePlayer(danger - PAIN_TOLERANCE);

			if(b2.isColonizable() && !b2.isColony())
				gs.colonize(b2);

			if(b2.isColony()) {
				var oreTransfer = gs.oreCount;
				gs.oreCount = 0;
				b2.fuel += oreTransfer*MAX_FUEL;

				var transfer = Math.min(MAX_FUEL - gs.fuel, b2.fuel);
				b2.fuel -= transfer;
				gs.fuel += transfer;
			}
		}

		// Drone
		if(b1.isDrone) {
			var drone = b1;
			if(b2.isColony()) {
				if(b2 !== drone.source) {
					b2.fuel += DRONE_CAPACITY;
					drone.dead = true;
				}
			} else if(collisionDanger(refVel, drone) > PAIN_TOLERANCE) {
				drone.dead = true;
//				console.log("Crash! " + b2.r + " " + (drone.destination.pos.minus(drone.pos).magnitude()-drone.destination.outerRadius));
//				gs.particles.add(new CrashParticle(drone.pos, drone.vel));
			}
		}
	};
	var bounce = function(b1, b2) {
		if(   (b1 === gs.player && b2.isDrone) ||
		      (b2 === gs.player && b1.isDrone)    )
			return;

		var p1 = b1.pos;
		var p2 = b2.pos;
		var delta = p2.minus(p1);
		var negDelta = delta.negated();
		var depth = b1.getHeight(delta) + b2.getHeight(negDelta);
		var sqDistance = delta.sqMag();

		if(sqDistance >= depth*depth)
			return;

		var distance = Math.sqrt(sqDistance);
		var mProp = b1.mass / (b1.mass + b2.mass);
		var nudge1 = delta.normalized().times((1-mProp)*(distance-depth));
		var nudge2 = delta.normalized().times(mProp*(depth-distance));
		if (b1 !== gs.player || !(b2 instanceof Game.Ore)) {
			b1.pos = b1.pos.plus(nudge1);
		}
		if (b2 !== gs.player || !(b1 instanceof Game.Ore)) {
			b2.pos = b2.pos.plus(nudge2);
		}

		var refVel = b1.vel.times(b1.mass).plus(b2.vel.times(b2.mass)).times(1/(b1.mass+b2.mass));
		var deltaV = b1.vel.minus(b2.vel);
		var normal1 = b1.getNormal(delta);
		var normal2 = b2.getNormal(negDelta);
		var ELASTICITY = 0.6;

		onBounce(b1, b2, refVel);
		onBounce(b2, b1, refVel);
		
		if(   (b1 === gs.player && b2 instanceof Game.Ore) ||
		      (b2 === gs.player && b1 instanceof Game.Ore)    )
			return;

		if(deltaV.dot(normal2) < 0) {
			var dv1 = refVel.minus(b1.vel);
			var deltaVel1 = dv1.times(1+ELASTICITY).project(normal2)
			         .plus( dv1.times(1-ELASTICITY).project(normal2.perp()) );
			b1.vel = b1.vel.plus(deltaVel1);
		}
		if(deltaV.dot(normal1) > 0) {
			var dv2 = refVel.minus(b2.vel);
			var deltaVel2 = dv2.times(1+ELASTICITY).project(normal1)
			         .plus( dv2.times(1-ELASTICITY).project(normal1.perp()) );
			b2.vel = b2.vel.plus(deltaVel2);
		}
	};
	var b1, b2;
	var p1, p2;
	var x1, y1, x2, y2;
	var p1, p2;
	var v1, v2;
	for(i = 0;  i < this.bodies.length;  ++i) {
		b1 = this.bodies[i];
		// TRACTOR BEAM
		if (b1.tractor) {
			var target = new Game.Vec(Game.Input.mouse.x+Game.camera.x,Game.Input.mouse.y+Game.camera.y);
			b1.vel = b1.vel.plus(target.minus(b1.pos).normalized().times(this.TRACTOR_POWER/b1.mass));
			if (b1.pos.minus(this.player.pos).magnitude() > this.TRACTOR_RANGE) {
				b1.tractor = false;
			}
		}
		b1.pos = b1.pos.plus(b1.vel);
	}
	var doubleForLoop = function() {
		var massives = [];
		for(var i = 0;  i < gs.bodies.length;  ++i)
			if(gs.bodies[i].mass >= 1)  //Inlined isMassive
				massives.push(gs.bodies[i]);
		for(i = 0;  i < massives.length;  ++i) {
			b1 = massives[i];
			for(j = 0;  j < gs.bodies.length;  ++j) {
				b2 = gs.bodies[j];
				if(b1 === b2)
					continue;

				p1 = b1.pos;
				p2 = b2.pos;
				var dv = interact(b1.mass, p2, p1);
				b2.vel = new Game.Vec(b2.vel.x+dv.x, b2.vel.y+dv.y);
			}
		}
	};
	doubleForLoop();

	this.optimizedBounce(bounce);

	// Note: Removing bodies may require updating other data structures,
	//       such as gs.drones
	if(this.player.dead) {
		this.player.dead = false;
		this.bodies.splice(this.bodies.indexOf(this.player), 1);
	}

	for(var i = this.drones.length-1;  i >= 0;  --i)
		if(this.drones[i].dead) {
			this.bodies.splice(this.bodies.indexOf(this.drones[i]), 1);
			this.drones.splice(i, 1);
		}
	
	// FUEL
	var fuelExpenditure = this._thrustAmount();
	if (this.USING_FUEL) {
		if(fuelExpenditure > this.fuel)
			fuelExpenditure = this.fuel;
		this.fuel -= fuelExpenditure;
	}

	// PLAYER THRUST
	var playerThrust;
	if(fuelExpenditure > 0)
		playerThrust = this._thrustDir().times(fuelExpenditure);
	else
		playerThrust = Game.Vec.ZERO;
	this.player.vel = this.player.vel.plus(playerThrust);

	// COLONIES
	this._updateColonies(elapsed);
	
	// PARTICLES
	this.particles.update(elapsed);
	if(fuelExpenditure > 0) {
		this.particles.add(new ThrustParticle(
			this.player.pos.plus(playerThrust.normalized().times(-this.player.r)),
			this.player.vel.plus(playerThrust.times(-2))));
	}
	
	// COURSE PLOTTING
	if (this.plotting) {
		this.plotCourse();
	}
	else {
		this.coursePoints = [];
		this.coursePlanets = [];
	}

	for(var i = 0;  i < this.drones.length;  ++i) {
		var drone = this.drones[i];
		var dp = drone.destination.pos.minus(drone.pos);
		var distToSurface = dp.magnitude() - drone.destination.outerRadius;
		var desiredSpeed;
		if(distToSurface < 0)
			desiredSpeed = 1;
		else {
			desiredSpeed = Math.sqrt(2*this.playerThrustHigh*distToSurface)-5;
			desiredSpeed = Math.max(1, desiredSpeed);
		}
		var dv = drone.vel.minus(drone.destination.vel);
		var desiredDV = dp.normalized().times(desiredSpeed);
		var thrustDir = desiredDV.minus(dv).normalized()
		var thrustVec = thrustDir.times(this.playerThrustHigh);
		drone.vel = drone.vel.plus(thrustVec);
	}
	
	Game.camera.goTo(this.player.pos.x, this.player.pos.y);
};

GameState.prototype.draw = function(ctx) {
	for(var i = 0;  i < this.bodies.length;  ++i) {
		this.bodies[i].draw(ctx);
		if (this.bodies[i].tractor) {
			ctx.globalAlpha = ((Math.sin(this.tractorFieldAlpha*(Math.PI/180))+1)/4)+0.5;
			ctx.beginPath();
			ctx.strokeStyle = '#88f';
			ctx.lineWidth = 4;
			ctx.arc(this.bodies[i].pos.x,this.bodies[i].pos.y,1.8*this.bodies[i].r+5,0,2*Math.PI);
			ctx.stroke();
			ctx.globalAlpha = 1;
		}
	}
		
	// PARTICLES
	this.particles.draw(ctx);
	this.tractorFieldAlpha += this.tractorFieldAlphaRate;
	this.drawCourse(ctx);

	// Debug
	if(Game.DEBUG) {
		var v = Game.Vec.ZERO;
		for(var i = 0;  i < this.bodies.length;  ++i) {
			var b = this.bodies[i];
			if(this.bodies[i] !== this.player)
				v = v.plus(interact(b.mass, this.player.pos, b.pos));
		}
		v = v.plus(this._thrustDir().times(this._thrustAmount()));

		ctx.beginPath();
		ctx.strokeStyle = '#f00';
		ctx.moveTo(this.player.pos.x, this.player.pos.y);
		ctx.lineTo(this.player.pos.x + v.x*500, this.player.pos.y + v.y*500);
		ctx.stroke();
	}
};

GameState.prototype.drawCourse = function(ctx) {
	var start = 0;
	var first = true;
	ctx.beginPath();
	ctx.strokeStyle = 'red';
	ctx.lineWidth = (2/Game.camera.zoom);
	if (this.coursePoints.length > 0) {
		ctx.moveTo(this.coursePoints[0].pos.x,this.coursePoints[0].pos.y);
	}
	for (var i=0; i<this.coursePoints.length; ++i) {
		start++;
		if (start > (0.002/Game.camera.zoom)) {
			start = 0;
			ctx.lineTo(this.coursePoints[i].pos.x,this.coursePoints[i].pos.y);
		}
	}
	ctx.stroke();
	// DEBUG
	for (var j=0; j<this.coursePlanets.length; ++j) {
		ctx.beginPath();
		ctx.lineWidth = 1.5*(1/Game.camera.zoom);
		ctx.strokeStyle = 'blue';
		ctx.arc(this.coursePlanets[j].pos.x,this.coursePlanets[j].pos.y,1.5*(1/Game.camera.zoom),0,2*Math.PI);
		ctx.stroke();
	}
	
};

GameState.prototype.plotCourse = function() {
	var b1;
	if (this.coursePoints.length < 1) {	
		b1 = new Game.Body(this.player.pos, this.player.vel, 10, 0.00001, false);
		this.coursePlanets = [];
		for (var i=0; i<this.bodies.length; ++i) {
			if (this.bodies[i].mass >= 1) {  // Inlined isMassive
				var toAdd = new Game.Planet(this.bodies[i].pos, this.bodies[i].r, 100,100);
				toAdd.vel = new Game.Vec(this.bodies[i].vel.x, this.bodies[i].vel.y);
				this.coursePlanets.push(toAdd);
			}
		}
	}
	else { 
		var bPos = this.coursePoints[this.coursePoints.length-1].pos; 
		var bVel = this.coursePoints[this.coursePoints.length-1].vel; 
		b1 = new Game.Body(bPos, bVel, 10, 0.00001, false);
	}
	//UPDATE PLAYER
	for (var i=0; i<this.PLOT_STEPS; ++i) {
		for(var j = 0;  j < this.coursePlanets.length;  ++j) {
			var b2 = this.coursePlanets[j];
			var p1 = b1.pos;
			var p2 = b2.pos;
			b1.vel = b1.vel.plus(interact(b2.mass, p1, p2));
		}
		b1.pos = b1.pos.plus(b1.vel);
		for (var a=0; a<this.coursePlanets.length; ++a) {
			var planet1 = this.coursePlanets[a];
			for (var b=a+1; b<this.coursePlanets.length; ++b) {
				var planet2 = this.coursePlanets[b];
				var p1 = planet1.pos;
				var p2 = planet2.pos;
				planet1.vel = planet1.vel.plus(interact(planet2.mass, p1, p2));
				planet2.vel = planet2.vel.plus(interact(planet1.mass, p2, p1));
			}
			planet1.pos = planet1.pos.plus(planet1.vel);
		}
	}
	this.coursePoints.push(b1);
};

GameState.prototype.keyDown = function(keyCode) {
	if (keyCode === this.BUTTON_SWITCH_TOOL) {
		this.playerTool = (this.playerTool+1)%this.TOOL_COUNT;
	}
	else if (keyCode === this.BUTTON_COURSE) {
		this.plotting = true;
	}
	else if (keyCode === this.BUTTON_EQUIP_LASER) {
		this.playerTool = 0;
	}
	else if (keyCode === this.BUTTON_EQUIP_TRACTOR) {
		this.playerTool = 1;
	}
};

GameState.prototype.keyUp = function(keyCode) {
	if (keyCode === this.BUTTON_COURSE) {
		this.plotting = false;
	}
};

GameState.prototype.bodyAtMouse = function() {
	var mouseVec = new Game.Vec(Game.Input.mouse.x + Game.camera.x, Game.Input.mouse.y + Game.camera.y);
	for(var i = 0;  i < this.bodies.length;  ++i) {
		var body = this.bodies[i];
		if(body.pos.minus(mouseVec).sqMag() < body.r*body.r)
			return body;
	}
	return null;
};

GameState.prototype.mouseDown = function(x,y,which) {
	var mouseVec = new Game.Vec(Game.Input.mouse.x + Game.camera.x, Game.Input.mouse.y + Game.camera.y);
	// LMB DOWN
	if (which === this.BUTTON_THRUST) {

	}
	// RMB DOWN
	else if (which === this.BUTTON_USE_TOOL) {
		var target = null;
		var targetSqDist = 9999999999;
		var attackLocation = null;
		for (var i = 0; i < this.bodies.length; ++i) {
			var body = this.bodies[i];
			var delta = mouseVec.minus(body.pos);
			var sqDist = delta.sqMag();
			var tolerance = body.r + 75/Game.camera.zoom;
			if(      body === this.player  ||  !body.susceptibleToTools()
				  || sqDist > tolerance*tolerance)
				continue;
			if(sqDist < targetSqDist) {
				targetSqDist = sqDist;
				target = body;
				if(sqDist > body.r*body.r)
					attackLocation =
					        body.pos.plus(delta.normalized().times(body.r));
				else
					attackLocation = mouseVec;
			}
		}
		if(target)
			this.clickAsteroid(target, attackLocation.x, attackLocation.y);
	}
	
};

GameState.prototype.mouseUp = function(x,y,which) {
	// LMB UP
	if (which === this.BUTTON_THRUST) {
	
	}
	
	// RMB UP
	if (which === this.BUTTON_USE_TOOL) {
		for (var i=0; i<this.bodies.length; ++i) {
			this.bodies[i].tractor = false;
		}
	}
};

GameState.prototype.randRockVel = function(rock) {
	var RAND_FACTOR = 0.4;
	var x = rock.vel.x + (Math.random()*RAND_FACTOR*2)-RAND_FACTOR;
	var y = rock.vel.y + (Math.random()*RAND_FACTOR*2)-RAND_FACTOR;
	var result = new Game.Vec(x,y);
	return result;
};

var LASER_BEAM = 0;
var TRACTOR_BEAM = 1;
GameState.prototype.inRange = function(rock, tool) {
	var range;
	if(tool === 0)
		range = this.LASER_RANGE;
	else if(tool === 1)
		range = this.TRACTOR_RANGE;
	else
		Game.assert(false);
	return this.player.pos.minus(rock.pos).sqMag() < range*range;
};

GameState.prototype.clickAsteroid = function(rock,x,y) {
	if(!this.inRange(rock, this.playerTool))
		return;

	if (this.playerTool === LASER_BEAM) {
		this.killBody(rock,x,y);
		this.particles.add(new this.LaserParticle(new Game.Vec(x,y), rock));
	}
	else if (this.playerTool === TRACTOR_BEAM) {
		rock.tractor = true;
	} else {
		Game.assert(false);
	}
};

GameState.prototype.killBody = function(rock,x,y) {
	//this.bodies.push(new Game.Body(new Game.Vec(x,y), this.randRockVel(rock), this.rockMinRadius, 0.001, false));
	var roll = Math.random();
	//var newRock = new Game.Planet(new Game.Vec(x,y), this.rockMinRadius, 3);
	//newRock.vel = this.randRockVel(rock);
	//this.bodies.push(newRock);
	
	// Don't make extra rocks from ore!
	if (!(rock instanceof Game.Ore) && rock.r > this.rockMinRadius+1) {
	
		var newRock = new Game.Ore(new Game.Vec(x,y), this.randRockVel(rock));
		this.bodies.push(newRock);
		
		if (roll < 0.8) {
			var r1 = rock.r - this.rockMinRadius;
			if (r1 < this.rockMinRadius) r1 = this.rockMinRadius;
			newRock = new Game.Planet(new Game.Vec(rock.pos.x,rock.pos.y), r1, Math.max(3,r1/3), undefined, {lowMass:true});
			newRock.vel = this.randRockVel(rock);
			this.bodies.push(newRock);
		}
		else if (roll < 1.0) {
			var r1 = (Math.random()+Math.random())*rock.r/2;
			var r2 = rock.r-r1;
			if (r1 < this.rockMinRadius) r1 = this.rockMinRadius;
			if (r2 < this.rockMinRadius) r2 = this.rockMinRadius;
			newRock = new Game.Planet(new Game.Vec(rock.pos.x,rock.pos.y), r1, Math.max(3,r1/3), undefined, {lowMass:true});
			newRock.vel = this.randRockVel(rock);
			this.bodies.push(newRock);
			newRock = new Game.Planet(new Game.Vec(rock.pos.x,rock.pos.y), r2, Math.max(3,r2/3), undefined, {lowMass:true});
			newRock.vel = this.randRockVel(rock);
			this.bodies.push(newRock);
		}
		
	}
	
	this.bodies.splice(this.bodies.indexOf(rock), 1);
	
	// ROCK PARTICLES
	var RP_COUNT = 0.5;
	for (var i = 0; i < rock.r*RP_COUNT; ++i) { 
		var randPos = rock.pos.plus(new Game.Vec((Math.random()*rock.r*2)-rock.r,(Math.random()*rock.r*2)-rock.r));
		while (randPos.minus(rock.pos).magnitude() > rock.r) {
			var randPos = rock.pos.plus(new Game.Vec((Math.random()*rock.r*2)-rock.r,(Math.random()*rock.r*2)-rock.r));
		}
		var mag = randPos.minus(rock.pos).magnitude();
		var prop = (mag/rock.r)*this.rockStartVel;
		var vel = randPos.minus(rock.pos).normalized().times(prop).plus(rock.vel);
		this.particles.add(new RockParticle(randPos, vel));
	}
};


var ThrustParticle = function (pos, vel) {
	this.pos = pos;
	this.vel = vel.plus(new Game.Vec(Math.random()-0.5,Math.random()-0.5).times(vel.magnitude()/10));
	this.life = 1000;
	this.r = 1;
};
ThrustParticle.prototype.update = function (elapsed) {
	this.life -= elapsed;
	if (this.life <= 0) { return true; }
	this.pos = this.pos.plus(this.vel);
};
ThrustParticle.prototype.draw = function (ctx) {
	ctx.globalAlpha = this.life / 1000;

	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2*Math.PI, true);
	ctx.fill();
	
	ctx.globalAlpha = 1;
};

var CrashParticle = function(pos, vel) {
	ThrustParticle.call(this, pos, vel);
	this.vel = vel;
	this.life = 5000;
};
CrashParticle.prototype = new ThrustParticle(Game.Vec.ZERO, Game.Vec.ZERO);
CrashParticle.prototype.draw = function(ctx) {
	ctx.strokeStyle = '#f00';
	ctx.beginPath();
	ctx.moveTo(this.pos.x-10/Game.camera.zoom, this.pos.y-10/Game.camera.zoom);
	ctx.lineTo(this.pos.x+10/Game.camera.zoom, this.pos.y+10/Game.camera.zoom);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(this.pos.x+10/Game.camera.zoom, this.pos.y-10/Game.camera.zoom);
	ctx.lineTo(this.pos.x-10/Game.camera.zoom, this.pos.y+10/Game.camera.zoom);
	ctx.stroke();
};

var LaserParticle = function(gs) {
	var LaserParticle = function (pos2, target) {
		this.pos2 = pos2;
		this.target = target;
		this.vel = target.vel;
		this.life = 100;
		this.w = 1;
	};
	LaserParticle.prototype.update = function (elapsed) {
		this.life -= elapsed;
		if (this.life <= 0) { return true; }
		this.pos2 = this.pos2.plus(this.vel);
	};
	LaserParticle.prototype.draw = function (ctx) {
		//ctx.globalAlpha = this.life / 100;

		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.strokeStyle = 'red';
		ctx.moveTo(gs.player.pos.x, gs.player.pos.y);
		ctx.lineTo(this.pos2.x, this.pos2.y);
		ctx.stroke();
		
		//ctx.globalAlpha = 1;
	};
	return LaserParticle;
};

var RockParticle = function (pos, vel) {
	var SIZE = 4;
	this.pos = pos;
	this.pos1 = pos.plus(new Game.Vec((Math.random()*SIZE*2)-SIZE, (Math.random()*SIZE*2)-SIZE));
	this.pos2 = pos.plus(new Game.Vec((Math.random()*SIZE*2)-SIZE, (Math.random()*SIZE*2)-SIZE));
	this.pos3 = pos.plus(new Game.Vec((Math.random()*SIZE*2)-SIZE, (Math.random()*SIZE*2)-SIZE));
	this.vel = vel;
	this.life = 1200 + Math.random()*2000;
	this.startFade = 500;
	this.r = 1;
	var MAX_ROT = 8;
	this.degrees = (Math.random()*MAX_ROT*2)-MAX_ROT;
	this.rot = 0;
};
RockParticle.prototype.update = function (elapsed) {
	this.life -= elapsed;
	if (this.life <= 0) { return true; }
	this.pos = this.pos.plus(this.vel);
	this.pos1 = this.pos1.plus(this.vel);
	this.pos2 = this.pos2.plus(this.vel);
	this.pos3 = this.pos3.plus(this.vel);
	this.rot = this.rot + (this.degrees*Math.PI/180);
};
RockParticle.prototype.draw = function (ctx) {
	ctx.globalAlpha = Math.min(this.life / this.startFade,1);
	/*
	ctx.save();
	//ctx.translate(this.pos1.x-Game.camera.x, this.pos1.y-Game.camera.y);
	ctx.translate(this.pos.x, this.pos.y);
	ctx.rotate(this.rot);
	//ctx.translate(-(this.pos1.x-Game.camera.x), -(this.pos1.y-Game.camera.y));
	ctx.translate(-(this.pos.x), -(this.pos.y));
	*/

	ctx.beginPath();
	ctx.strokeStyle = 'white';
	ctx.moveTo(this.pos1.x, this.pos1.y);
	ctx.lineTo(this.pos2.x, this.pos2.y);
	ctx.lineTo(this.pos3.x, this.pos3.y);
	ctx.closePath();
	ctx.stroke();
	
	//ctx.restore();
	
	ctx.globalAlpha = 1;
};

}());
