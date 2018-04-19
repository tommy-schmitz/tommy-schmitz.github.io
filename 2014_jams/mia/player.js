// Load main library
var Game = window.Game || {};

Game.player = (function() {
	var GRID_SIZE = 32,
		SPELL_RANGE = 50,
		MAX_HP = 10;

	function Player() {
		this.x = 32*10;
		this.y = 32*2;

		this.spawnX = this.x;
		this.spawnY = this.y;
		
		this.sectorX = 0;
		this.sectorY = 0;
		
		this.reset();
	};
	
	Player.prototype.reset = function reset() {
		this.health = MAX_HP;
		this.invulnerable = 0;
		this.dead = 0;
		this.smallKeys = 0;
		this.victory = 0;
	};

	Player.prototype.setSpawnPoint = function() {
		this.spawnX = this.x;
		this.spawnY = this.y;
	};
	Player.prototype.respawn = function() {
		this.x = this.spawnX;
		this.y = this.spawnY;
		this.health = MAX_HP;
		this.invulnerable = 0;
		this.dead = 0;
	};
	
	Player.prototype.update = function update(elapsed) {
		var SECTOR_WIDTH = Game.wallGrid.sectorWidth * GRID_SIZE,
			SECTOR_HEIGHT = Game.wallGrid.sectorHeight * GRID_SIZE,
			myright   = this.x + GRID_SIZE,
			mybottom  = this.y + GRID_SIZE,
			self = this;

		if (this.dead === 0 && !this.victory) {
			var SPEED = 0.1 * elapsed,
				HIT_COOLDOWN = 2000,			// ms
				HIT_GRACE = 2,
			
				dir = {x: 0, y: 0},
				keys = Game.Input.keys,
				
				i, a;

			// Move player.
			if(keys['a'])
				--dir.x
			if(keys['d'])
				++dir.x;
			if(keys['w'])
				--dir.y;
			if(keys['s'])
				++dir.y;
			if(dir.x != 0  &&  dir.y != 0)
				SPEED *= 0.707;
			this.x += dir.x * SPEED;
			this.y += dir.y * SPEED;

			// Resolve collisions.
			var resolveCollisions = function(x, y, dir) {
				var j = Math.floor(x/GRID_SIZE);
				var i = Math.floor(y/GRID_SIZE);
				var xoff = x - (j+((dir.x+1)/2))*GRID_SIZE;
				var yoff = y - (i+((dir.y+1)/2))*GRID_SIZE;
				var snapx, snapy;
				if(Game.wallGrid[i][j] == null)
					return;

				// One-way doors
				if(      Game.wallGrid[i][j].type === 'one_way_r'
				      && (x - j*GRID_SIZE  <  16)                 ) {
					Game.removeWall(j, i);
					Game.playSound("unlock.wav");
					return;
				}
				if(      Game.wallGrid[i][j].type === 'one_way_l'
				      && (x - j*GRID_SIZE  >=  16)                ) {
					Game.removeWall(j, i);
					Game.playSound("unlock.wav");
					return;
				}

				// Unlock locked doors
				if(        Game.wallGrid[i][j].type === 'locked_door'
				        && self.smallKeys > 0                         ) {
					--self.smallKeys;
					Game.removeWall(j, i);
					Game.playSound("unlock.wav");
					return;
				}

				if(dir.x*xoff <= dir.y*yoff  &&  Game.wallGrid[i][j-dir.x] == null)
					snapx = true;
				else if(dir.x*xoff >= dir.y*yoff  &&  Game.wallGrid[i-dir.y][j] == null)
					snapy = true;
				else
					snapx = snapy = true;

				if(snapx)
					Game.player.x += GRID_SIZE * dir.x * -1  -  xoff;
				if(snapy)
					Game.player.y += GRID_SIZE * dir.y * -1  -  yoff;
			};

			resolveCollisions(this.x, this.y, {x: -1, y: -1});
			resolveCollisions(this.x+GRID_SIZE,this.y, {x: 1, y: -1});
			resolveCollisions(this.x, this.y+GRID_SIZE, {x: -1, y: 1});
			resolveCollisions(this.x+GRID_SIZE, this.y+GRID_SIZE,
							  {x: 1, y: 1});
			resolveCollisions(this.x, this.y, {x: -1, y: -1});
					
			// Find which sector the player is in
			if (this.x > (this.sectorX + 1) * SECTOR_WIDTH) {
				this.sectorX += 1;
			} else if(this.x < this.sectorX * SECTOR_WIDTH) {
				this.sectorX -= 1;
			}
			if (this.y > (this.sectorY + 1) * SECTOR_HEIGHT) {
				this.sectorY += 1;
			} else if(this.y < this.sectorY * SECTOR_HEIGHT) {
				this.sectorY -= 1;
			}
			
			// Check for collisions with enemies
			if (this.invulnerable === 0) {
				for (i = 0; i < Game.actors.length; ++i) {
					a = Game.actors[i];
					if ((a.x + a.width - HIT_GRACE > this.x) &&
						(a.x + HIT_GRACE < myright) &&
						(a.y + a.height - HIT_GRACE > this.y) &&
						(a.y + HIT_GRACE < mybottom)) {
						if(a.attackPower > 0) {
							this.health -= a.attackPower;
							if (this.health > 0) {
								this.invulnerable = HIT_COOLDOWN;
								Game.playSound("hurt.wav");
							} else {
								this.dead = elapsed;
								++Game.totalDeaths;
								Game.Input.mouse.button = false;
								Game.playSound("death.wav");
								Game.stopMusic();
								Game.currentMusic = null;
							}
							break;
						}
					}
				}
			} else {
				this.invulnerable -= elapsed;
				if (this.invulnerable < 0) { this.invulnerable = 0; }
			}

			// Check for collisions with keys
			for(i = Game.smallKeys.length-1;  i >= 0;  --i) {
				if(        Game.smallKeys[i].x < myright
				        && Game.smallKeys[i].x > this.x
				        && Game.smallKeys[i].y < mybottom
				        && Game.smallKeys[i].y > this.y   ) {
					Game.smallKeys.splice(i, 1);
					Game.playSound("key.wav");
					++this.smallKeys;
				}
			}
				
			// Check for victory
			if (this.y > (Game.wallGrid.height - 2) * 32) {
				this.victory += elapsed;
			}
				
			// Check whether player is casting
			if (Game.Input.mouse.button && Game.currentSpell == null) {
				spellX = Game.camera.x + Game.Input.mouse.x - this.x - GRID_SIZE * 0.5;
				spellY = Game.camera.y + Game.Input.mouse.y - this.y - GRID_SIZE * 0.5;
				spellRange = SPELL_RANGE / Math.sqrt(spellX*spellX+spellY*spellY);
				spellX = this.x + GRID_SIZE * 0.5 + spellRange * spellX;
				spellY = this.y + GRID_SIZE * 0.5 + spellRange * spellY;
			
				Game.castBasicSpell(spellX,spellY);
			} 
		} 
		else if (this.dead > 0) {
			this.dead += elapsed;
			if (Game.Input.mouse.button || (this.dead > 5000)) {
				Game.currentMode = 2;
				Game.Input.mouse.button = false;
			}
		}
		else {
			this.victory += elapsed;
			if (this.victory > 2000) {
				Game.clearWorld();
				Game.currentMode = 3;
				Game.Input.mouse.button = false;
			}
		}
	};
	
	Player.prototype.draw = function draw(ctx) {
		var t = 0, i, dx, dy;
	
		if (this.dead === 0) {
			if (this.victory > 0) {
				Game.drawImageInWorld(ctx, 'player.png', Math.round(this.x), Math.round(this.y + this.victory * 0.05));
			} else if (Math.floor(this.invulnerable / 100) % 2 === 0) {
				if (Game.currentSpell) {
					Game.drawImageInWorld(ctx, 'player_cast.png', Math.round(this.x), Math.round(this.y));
				} else {
					Game.drawImageInWorld(ctx, 'player.png', Math.round(this.x), Math.round(this.y));
				}
			}
		} else {
			for (i = 0; i < 8; ++i) {
				if (i >= 1 && i <= 3) { dx = this.dead * 0.1; }
				else if (i >= 5 && i <= 7) { dx = this.dead * -0.1; }
				else { dx = 0; }
				if (i < 2 || i >= 7) { dy = this.dead * -0.1; }
				else if (i >= 3 && i <= 5) { dy = this.dead * 0.1; }
				else { dy = 0; }
				if (dx && dy) {
					dx *= 0.707;
					dy *= 0.707;
				}
				
				ctx.beginPath();
				ctx.fillStyle = "#fff";
				ctx.arc(this.x + 16 + dx,this.y + 16 + dy,Math.floor(this.dead / 100) % 2 === 0 ? 8 : 16,0,2*Math.PI,false);
				ctx.fill();
			}
		}
	};
	
	Player.prototype.drawUI = function drawUI(ctx) {
		var i;
		// Draw health bar
		for (i = 0; i < 5; ++i) {
			if (this.health > i*2 + 1) {
				Game.drawImage(ctx, 'heart.png', 2 + i * 16, 2);
			} else if (this.health > i*2) {
				Game.drawImage(ctx, 'heart_half.png', 2 + i * 16, 2);
			} else {
				Game.drawImage(ctx, 'heart_empty.png', 2 + i * 16, 2);
			}
		}
		for (i = 0; i < this.smallKeys; ++i) {
			Game.drawImage(ctx, 'small_key.png', 90 + i * 32, 0);
		}
	};

	Player.prototype.onClick = function() {
		var spellX, spellY, spellRange;
		if(this.dead === 0  &&  !this.victory  &&  Game.currentSpell == null) {
			spellX = Game.camera.x+Game.Input.mouse.x - this.x - GRID_SIZE*0.5;
			spellY = Game.camera.y+Game.Input.mouse.y - this.y - GRID_SIZE*0.5;
			spellRange = SPELL_RANGE / Math.sqrt(spellX*spellX+spellY*spellY);
			spellX = this.x + GRID_SIZE * 0.5 + spellRange * spellX;
			spellY = this.y + GRID_SIZE * 0.5 + spellRange * spellY;

			Game.castBasicSpell(spellX, spellY);
		}
	};

	return new Player();
}());
