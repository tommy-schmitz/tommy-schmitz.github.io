// Load main library
var Game = window.Game || {};

Game.assert(Game.Boss);

(function() {

Game.EMPTY = 0;
Game.WALL = 1;
Game.ADVANCE= 2;

var baseWorld =	"[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][];"+
                "]ABC[]ABC[]ABC[]ABC[]bcf[]ABC[]ABC[]ABC[]ABC[]ABC[]ABC[]ABC[]ABC[]ABC[]ABC[]ABC[]ABC[]AB;"+
				"[][][][][][][][][][]aaaa[][][][][][][][][][][][][][][][][][][][][][][][][][]DEF][][][][];"+
                "]mnaaaaajknaaaajkkkkknjkknaaaaaabcccccfaaaamnaaaaajknaaaajkkkkknjkknaaaaaabcDEFcfaaaaABC;"+
				"[aaaaajkknaaaaaaaaajkkkknaaaaaaaaaaaaecfaaaaaaaajkknaaaaaaaaajkkkknaaaaaaaaaDEFecfaaaDEF;"+
                "]aajkkkkknaaaaaaaajknaaaaamnaaaaaaefefaaaaaaajkkkkknaaaaaaaajknaaaamnaaaaaaaGHIfaaaaaDEF;"+
				"[fajkhcgknaajknaaaaaaaaaaaaaaaaaaaaaaaaaaaaaajkhcgknaajknaaaaaaaaaaaaaaaaaaaaaaaaaaaaDEF;"+
                "]aaabcccccfaaeccfaaaaaaaaaaaaaaaaaaaaaaabfaaaabcccccfaaeccfaaaaaaaaaaaaaaaaaaaaaaaaaaDEF;"+
				"[faaaaabcfaaaaaaaaaaaaaaaa[][][][][][][aaefaaaaaecdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaDEF;"+
                "]cfabcccfaaaaaabcdaaaaaaaaaABCaaaaaABCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaABCaaaaaaaaaaaaaaDEF;"+
				"[daabcfaaaaaaecccfaaaaaaaaaDEFaabfaDEFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaDEFaaaaaaaaaaaaaaGHI;"+
                "]aaaaeccfaaaABCdaaaaaaABCaaDEFaecfaDEFaaaaaaaaaaaaaaaaaa[][][][aaa[]DEF][][][]aaa][][][];"+
				"[knaaaaaaaaaDEFaaaaaaaDEFaaDEFjkhcdDEFaaaa[][][aa][][]aa][ABC[]$$$][DEF[]ABC][aaa[]ABC][;"+
                "]kkknaaaaaaaGHIaaaaaaaGHI$$GHIaaaaaGHIaaaaaABCaaaaABCaaa[]GHI][ABC[]GHI][GHI[]aaa][GHI[];"+
				"[][][][][][][][][][][][][][][][][][][]aaaaaDEFaaaaDEFaaa][][][][][][][][][][][xxx[][][][;";

var loadBaseWorld = function(gs) {
	gs.world = Game.loadWorld(baseWorld, loadWeird0);
	gs.checkpoint = loadBaseWorld;

	gs.player.x = 3;
	gs.player.y = 14;
	gs.enemyList.push(new Game.Zombie(20,10));
	//gs.enemyList.push(new Game.Zombie(16,2));
	gs.enemyList.push(new Game.Bang(27,5));
	gs.enemyList.push(new Game.Bang(50,5));
	gs.enemyList.push(new Game.Bang(69,5));
};

var secondWorld =   "[][]aaa][][][][;"+
                    "]aaaaaaaaaaajk];"+
                    "[aaaaaaaaaaaaj[;"+
                    "]aaaaaaaaaajkk];"+
                    "[aaaaaaaaaaaaa[;"+
                    "]aaaaaaaaaaaaa];"+
                    "[aaaABCaaaABCa[;"+
                    "]aaaDEFaaaDEFa];"+
                    "[$$$GHIaaaDEFa[;"+
                    "][][][]aaaDEFa];"+
                    "[cfaaaaaaaDEFa[;"+
                    "]faaaaaaaaDEFa];"+
                    "[aaaaaaaaaDEFa[;"+
                    "]naaaaaaaaDEFa];"+
                    "[aaa]aaaaaGHIa[;"+
                    "]aaa[][][][][a];"+
                    "[aaaaamnaaaaaa[;"+
                    "]aaaaajknaaaaa];"+
                    "[aaaajopnaaaaa[;"+
                    "]aaabccfaaaaaa];"+
                    "[aaaaeccfaaaaa[;"+
                    "]aaabcdaaaaaaa];"+
                    "[aaaaaaaaaaaaa[;"+
                    "]aaaaaaaABCaaa];"+
                    "[aaaaaaaGHIaaa[;"+
                    "][][][][][]aaa];"+
                    "[]^GHHIaaaaaaaA;"+
                    "]%aaDFaaaaaaaaD;"+
                    "[%aaGIaaaaaaaaD;"+
                    "]%aaaaajlaaaaAB;"+
                    "[%aaaajkkknaaDE;"+
                    "]%aaaaaamklaaDE;"+
                    "[%aaaaaaaaaaABB;"+
                    "]%aaaaaaaaaaDEE;"+
                    "[%aaACaaaaaaGHH;"+
                    "]%aa][][][][][];"+
                    "[%aaaaaaaaaaaa[;"+
                    "]%aaaaaaaaaaaa];"+
                    "[%aaaaaabfaaaa[;"+
                    "]%aaabccccfaaax;"+
                    "[%aaaaedaaaaaax;"+
                    "]%aaaaaaaaaaaax;"+
                    "[%ACaaaACaaa[][;"+
                    "]%DFaaaDFaaaaa];"+
                    "[%GI$$$GI$$$$$[;"+
                    "[][][][][][][][;";

var loadSecondWorld = function(gs) {
	gs.world = Game.loadWorld(secondWorld, loadThirdWorld);
	gs.checkpoint = loadSecondWorld;

	gs.player.x = 5;
	gs.player.y = 2;
	gs.enemyList.push(new Game.Zombie(9,15));
	gs.enemyList.push(new Game.Zombie(9,30));
	gs.enemyList.push(new Game.Bang(9,20));
};

var thirdWorld =	"[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][;"+
					"]ABC[]ABC[]ABC[]ABC[]ABC]aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaGHHHIaaaGHHHIaaaGHHHI];"+
					"[GHI[]GHI[]GHI[]GHI[]GHI[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa[;"+
					"][][][][][][][][][][][][]aaa[][][][][][][][][][]aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa];"+
					"[aaaaaaaaaaaaaaaaaaaaaABCaaaaaaaaaaaaaaaaaaaaABCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa[;"+
					"]aaaaaaaaaaaaaaaaaaaaaDEFaaaaaaaaaaaaaaaaaaaaDEFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa];"+
					"aaaaaaaaaaaaaaaaaaaaaaGHIABCaaaaaaaaaaaaaaaaaDEFaa[][]aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa[;"+
					"aaaaaaaaaaaaaaaaaaaaaa[][][][][][][][][][]aaaDEFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa];"+
					"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaDEFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa[;"+
					"]aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaGHIaaaaaaaaaa[][]aaaaaaaaaaaaaaaaaaaaaaaa];"+
					"[aaaaaaaaaaaaaaaaaaa[][][][][][][][][][][][][][]aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa[;"+
					"]aaaaaaaaaaaaaaaaaaaaaABCaaaaaaaaaaaaaaaaaaaaABCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaax;"+
					"[aaaaaaaaaABCaaaABCaaaDEFaaaaaaaaaaaaaaaaaaaaDEFaaaaaaaaaaaaaaaaaABBBCaaaaaaaaaaaaaaaax;"+
					"]aaaaaaaaaGHI$$$GHI$$$GHIaaaaaaaaaaaaaaaaaaaaGHI$$$$$$$$$$$$$$$$$GHHHIaaaaaaaaaaABCaaax;"+
					"[][][][][][][][][][][][][aaaaaaaaaaaaaaaaaaaa][][][][][][][][][][][][][][][][][][][][][;";

var loadThirdWorld = function(gs) {
	gs.world = Game.loadWorld(thirdWorld, loadBossCorridor);
	gs.checkpoint = loadSecondWorld;

	gs.player.x = 2;
	gs.player.y = 10;
	gs.enemyList.push(new Game.Bang(21,10));
	gs.enemyList.push(new Game.Bang(30,6));
	gs.enemyList.push(new Game.ShieldJoe(31,7));
	gs.enemyList.push(new Game.Bang(32,7));
	gs.enemyList.push(new Game.ShieldJoe(33,7));
	gs.enemyList.push(new Game.Bang(34,7));
	gs.enemyList.push(new Game.ShieldJoe(35,7));
	gs.enemyList.push(new Game.Zombie(74,10));
	gs.enemyList.push(new Game.Zombie(78,10));
};

var bossCorridor =	"[][][][][][][][][][];"+
					"]ABC[]ABC[]ABC[]ABC[;"+
					"[DEF[]DEF[]DEF[]DEF[;"+
					"]GHI[]GHI[]GHI[]GHI[;"+
					"[][][][][][][][][][];"+
					"][][][][][][][][][][;"+
					"Xaaaaaaaaaaaaaaaaaax;"+
					"Xaaaaaaaaaaaaaaaaaax;"+
					"Xaaaaaaaaaaaaaaaaaax;"+
					"][][][][][][][][][][;"+
					"[][][][][][][][][][];"+
					"]ABC[]ABC[]ABC[]ABC[;"+
					"[DEF[]DEF[]DEF[]DEF[;"+
					"]GHI[]GHI[]GHI[]GHI[;"+
					"[][][][][][][][][][];";

var loadBossCorridor = function(gs) {
	gs.world = Game.loadWorld(bossCorridor, loadBossRoom);
	gs.checkpoint = loadBossCorridor;  // Unnecessary?

	gs.player.x = 2;
	gs.player.y = 9;
};

var blank1 =
	"[][][][][][][][;" +
	"]aaaaaaaaaaaaa];" +
	"[aaaaaaaaaaaaa[;" +
	"]aaaaaaaaaaaaa];" +
	"[aaaaaaaaaaaaa[;" +
	"]aaaaaaaaaaaaa];" +
	"[aaaaaaaaaaaaa[;" +
	"]aaaaaaaaaaaaa];" +
	"[aaaaaaaaaaaaa[;" +
	"]aaaaaaaaaaaaa];" +
	"[aaaaaaaaaaaaa[;" +
	"]aaaaaaaaaaaaa];" +
	"[aaaaaaaaaaaaa[;" +
	"]aaaaaaaaaaaaa];" +
	"[][][][][][][][;" ;

var blank2 =
  "[][][][][][][][][][][][][][][][][][][][][][];" +
  "]aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa[;" +
  "[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa];" +
  "]aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa[;" +
  "[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa];" +
  "]aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa[;" +
  "[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa];" +
  "]aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa[;" +
  "[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa];" +
  "]aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa[;" +
  "[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa];" +
  "]aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa[;" +
  "[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa];" +
  "]aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa[;" +
  "[][][][][][][][][][][][][][][][][][][][][][];" ;

var weird0 =
	"[aaa[][][][][][;" +
	"]aaaaaaaaaaaa[];" +
	"[aaaaaaaaaaaa][;" +
	"]aaaaaaaaaaaa[];" +
	"[aaabccfaaaaa][;" +
	"]aaaabcfaaaaaax;" +
	"[aaaaaaaaaaaaax;" +
	"]aaaaaaaaaaaaax;" +
	"[][][][][][][][;" +
	"]ABCaaaaaaaABC];" +
	"[DEFaaaaaaaDEF[;" +
	"]DEFaaaaaaaDEF];" +
	"[DEFaaaaaaaDEF[;" +
	"]DEFaaaaaaaDEF];" +
	"[DEFaaaaaaaDEF[;" ;
var loadWeird0 = function(gs) {
	gs.world = Game.loadWorld(weird0, loadWeird1);
	gs.checkpoint = loadBaseWorld;

	gs.player.x = 2.5;
	gs.player.y = 2;
};
var weird1 =
	"[][][][][][][][;" +
	"][aaaaaaaaaaaa];" +
	"[]aaaaaaaaaaaa[;" +
	"][aaaaaaaaaaaa];" +
	"[]aaajkkkknaaa[;" +
	"xaaaaaajnaaaaa];" +
	"xaaaaaaaaaaaaa[;" +
	"xaaaaaaaaaaaaa];" +
	"[][][][][][][][;" +
	"]ABCaaaaaaaABC];" +
	"[DEFaaaaaaaDEF[;" +
	"]DEFaaaaaaaDEF];" +
	"[DEFaaaaaaaDEF[;" +
	"]DEFaaaaaaaDEF];" +
	"[DEFaaaaaaaDEF[;" ;
var loadWeird1 = function(gs) {
	gs.world = Game.loadWorld(weird1, loadWeird2);
	gs.checkpoint = loadBaseWorld;

	gs.player.x = 2;
	gs.player.y = 8;
};
var weird2 =
	"[xxx[aaaaaaaa][;" +
	"]aa[]aajnaaaa[];" +
	"[aaa[ajkknaaa][;" +
	"]aaa]aaaaaaaa[];" +
	"[]aa[aaaaaa][][;" +
	"]faa]aaaaaa[aaa;" +
	"[aaa[aaaaaa]aaa;" +
	"]fa[][][][][aaa;" +
	"[faaaaaaaaaaaa[;" +
	"]aaaaaaaaaaaaa];" +
	"[][][][][][aaa[;" +
	"]aaa]%aaaaaaaa];" +
	"[$$$[%aaaaaaaj[;" +
	"][][][][][][][];" ;
var loadWeird2 = function(gs) {
	gs.world = Game.loadWorld(weird2, loadWeird3);
	gs.checkpoint = loadBaseWorld;

	gs.player.x = 13;
	gs.player.y = 8;
	gs.enemyList.push(new Game.Zombie(2, 10));
};
var weird3 =
	"[aaa[aaaaaaaa][;" +
	"]aaa]aajnaaaa[];" +
	"[aaa[ajkknaaa][;" +
	"]aaa]aaaaaaaa[];" +
	"[aaa[aaaaaa][][;" +
	"]faa]aaaaaa[aaa;" +
	"[aaa[aaaaaa]aaa;" +
	"]faa][][][][aaa;" +
	"[faa[aaaaaaaaa[;" +
	"]aaa]aaaaaaaaa];" +
	"[xxx[][][][aaa[;" +
	"]aaa]%aaaaaaaa];" +
	"[$$$[%aaaaaaaj[;" +
	"][][][][][][][];" ;
var loadWeird3 = function(gs) {
	gs.world = Game.loadWorld(weird3, loadTommyLevel0);
	gs.checkpoint = loadWeird3;

	gs.player.x = 2;
	gs.player.y = 2.5;
	gs.player.vy = Game.INITIAL_JUMP_VELOCITY * 0.5;
};

var tommyLevel0 =
  "[aaa[][][][][][][][][][][][][][].........;" +
  "]aaa]aaaaaaaaaaaaaaaaaaaaaa..............;" +
  "[aaa[aaaaaaaaaaaaaaaaaaaaaa..............;" +
  "]aaa]aaaaaaaaaaaaaaaaaaaaaa..aaa...aaaaax;" +
  "[aaa[aaaaaaaaaaaaaaaaaaaaaa..aaa...aaaaax;" +
  "]aaa][][][][][][][][][][][][]aa[...a.....;" +
  "[aaaaaaaaa.aa.aaaaaaaaaaa.aaaaaaaa.aaABBB;" +
  "]aaaaaaaaa.aa.aaaaaaaaaaa.aaaaaaaa.aaDEEE;" +
  "[aaa....aa....aa....aa.....aABBCaa..aDEEE;" +
  "]aaa.kk.aaaaaaaa.cc.aaaaaaaaDEEFaaaaaDEEE;" +
  "[aaa.kk.aaaaaaaa.cc.aaaaaaaaGHHIaaaaaGHHH;" +
  "][][][][][][][][][][][][][][][][.........;" +
  "[ABC..ABC..ABC..ABC..ABC..ABC..ABC..ABC..;" +
  "]GHI..GHI..GHI..GHI..GHI..GHI..GHI..GHI..;" +
  "[][][][][][][][][][][][][][][][].........;" ;
var loadTommyLevel0 = function(gs) {
	gs.world = Game.loadWorld(tommyLevel0, loadTommyLevel1);
	gs.checkpoint = loadTommyLevel0;

	gs.player.x = 2.5;
	gs.player.y = 2;
	gs.enemyList.push(new Game.Zombie(6, 11));
	gs.enemyList.push(new Game.Bang(12, 8));
	gs.enemyList.push(new Game.ShieldJoe(17, 8));
	gs.enemyList.push(new Game.ShieldJoe(19, 8));
	gs.enemyList.push(new Game.ShieldJoe(27, 8));
	gs.enemyList.push(new Game.ShieldJoe(36, 8));
	gs.enemyList.push(new Game.ShieldJoe(36, 5));
};
var tommyLevel1 =
  "..................................................;" +
  ".aaabcfaa.aaaaaACaaaaaACaaaaa..aaaaaaaaaaaaaaaaaaa;" +
  ".aaaabfaa.aaaaaDFaaaaaDFaaaaa..aaaaaaaaaaaaaaaaaaa;" +
  "..........aaaaaGIaaaaaGIaaaaa.....................;" +
  "aaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaxx;" +
  "aaa.naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaxx;" +
  ".aa.knaa...aaa....aaa....aaa....aaaaaaaaaaaaaa....;" +
  "Caa.naa...aaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaa.aa.;" +
  "Faa.aaa..aaaaaaaaaaaaaaaaaaaa.aaaaa.........aa.aa.;" +
  "Faa.naa.aaaaaaaACaaaaaACaaaaa.aaaa.............aa.;" +
  "Faa..aaaaaaaaaaDFaaaaaDFaaaaa.aaaaaaaaaaaaaaaaaaa.;" +
  "FaaaaabfaaaaaaaDF.aaaaDF.aaaa..aaaaaaaaaaaaaaaaa..;" +
  "InaaaabcfaaaaaaGIaaaaaGIaaaaa...aaaaaaaaaaaaaaa...;" +
  "..................................................;" +
  ".ABC..ABC..ABC..ABC..ABC..ABC..ABC..ABC..ABC..ABC.;" ;
var loadTommyLevel1 = function(gs) {
	gs.world = Game.loadWorld(tommyLevel1, loadTommyLevel2);
	gs.checkpoint = loadTommyLevel0;

	gs.player.x = 2;
	gs.player.y = 5;
	gs.enemyList.push(new Game.Bang(14.5, 6));
	gs.enemyList.push(new Game.ShieldJoe(21.5, 6));
	gs.enemyList.push(new Game.ShieldJoe(28.5, 6));
	gs.enemyList.push(new Game.Bang(30, 6));
	gs.enemyList.push(new Game.Zombie(44.5, 9));
	gs.enemyList.push(new Game.Zombie(45.5, 9));
};
var tommyLevel2 =
  ".......................;" +
  ".aaabfaaaaaaaaaaaaaaaax;" +
  ".aaaaaaaaaaaaaaaaaaaaax;" +
  ".............aaaaaa....;" +
  "aaa.ABC..ABC.aaaaaaaa&.;" +
  "aaa..........aa.aaaaa&.;" +
  ".aa.aaaabfaa..a....aa&.;" +
  ".aa.aaaaaaaaaaa.%aaaa&.;" +
  ".aa.aa....aaaaa.%aaaa&.;" +
  ".aa..a.aa.aa....%aa....;" +
  ".aaaaa.aa.aa.AC.%aaaa&.;" +
  ".naaaa.aa.aa.GI.%aaaa&.;" +
  "..........a........aa&.;" +
  ".aaaaaaaa.aaaajnaaaaa&.;" +
  ".aabfaaaa.aaaaaaaaaaa&.;" +
  ".......................;" ;
var loadTommyLevel2 = function(gs) {
	gs.world = Game.loadWorld(tommyLevel2, loadTommyLevel3);
	gs.checkpoint = loadTommyLevel2;

	gs.player.x = 2;
//	gs.player.x = 39;
	gs.player.y = 6;
	gs.enemyList.push(new Game.Zombie(5, 3));
	gs.enemyList.push(new Game.Zombie(6, 3));
};
var tommyLevel3 =
  ".........................................................................;"+
  ".aaaaaaaaaaaaaaabccfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.;"+
  ".aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaajnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.;"+
  "...................................................................aa.aa.;"+
  "aaa.^^^^^aaabfaaaa.aaaaaaaabcfaaa&.aaaaa.aaaaaaaaaaaaaaaaaaaaaaaaa..a.aa.;"+
  "aaa.aaaaaaabfaaaaa.aaaaaaaaaaaaaa&.aaaaa.aaaaaaaaaaaaaaaaabfaaaaaaaaa.aa.;"+
  ".aa.aaaaaaaa....aa.aaaaajkkknaaaa&.aa.aa.aa.......aaaabcccccfaaajknaa.aa.;"+
  ".aa.aaaaaaaa.aaaaa.aaaaaajnaaaaaa&.aa.aa.aaa.aaaa.aaaaaabcfaaaaajnaa..aa.;"+
  ".aa.aaaaaaaa.aaaaa.aaaaaaaaaaaaaa&.aa.aa.aaa.aaaa.aa.aaaaaaaaaajkkna..aa.;"+
  ".aa.aaaaa....aa....aaaaaaaa....aa&.a...a..aaaaaaa.aa.aaaaaaaaaaaaaaa..aa.;"+
  ".aa.aaaaa.aaaaa.aaaaaaaaaaaaaaaaa&.aaa.aa.aaaaaaa.aa.aaa.aaaaaaaaaaABCaa.;"+
  ".aa.aaaaa.aaaaa.aaaaaaaaaaaaaaaaa&.aaa.aa.aa...aaABBCaaa.aaaaaaaaaaDEFaa.;"+
  ".aa.aa....aa....aaABBCaa.......aaa..aa..a....aaaaDEEFaaa.aaa.aaa.aaDEFaa.;"+
  ".aaaaa.%aaaaaaaaaaDEEFaaACaaaACaaaaaaaa.aaaaaaaaaDEEF....aaa.aaa.aaDEFaa.;"+
  ".aaaaa.%aaaaaaaaaaGHHIaaGIaaaGIaaaaaaaa.aaaaaaaa.GHHI....jka.aaa.aaGHIaa.;"+
  "......................$$..............................................xx.;";
var loadTommyLevel3 = function(gs) {
	gs.world = Game.loadWorld(tommyLevel3, loadSecondWorld);
	gs.checkpoint = loadTommyLevel2;

	gs.player.x = 2;
	gs.player.y = 6;
	gs.enemyList.push(new Game.Zombie(13, 3));
	gs.enemyList.push(new Game.Zombie(14, 3));
	gs.enemyList.push(new Game.Bang(29, 9));
	gs.enemyList.push(new Game.Bang(30, 9));
	gs.enemyList.push(new Game.ShieldJoe(28, 12));
	gs.enemyList.push(new Game.ShieldJoe(30, 12));
	gs.enemyList.push(new Game.Zombie(39, 9));
	gs.enemyList.push(new Game.Zombie(40, 12));
	gs.enemyList.push(new Game.Zombie(38, 15));
	gs.enemyList.push(new Game.ShieldJoe(43, 12));
};

var bossRoom =	"[][][][][][][][;"+
				"]aaaaaaaaaaaaa];"+
				"[cccacaaacacca[;"+
				"]caaaccaacacac];"+
				"[cccacacacacac[;"+
				"]caaacaaccacac];"+
				"Xcccacaaacacca[;"+
				"Xaaaaaaaaaaaaa];"+
				"Xaaaaaaaaaaaaa[;"+
				"]aaaaaaaaaaaaa];"+
				"[aaaaaaaaaaaaa[;"+
				"]aaaaaaaaaaaaa];"+
				"[aaaaaaaaaaaaa[;"+
				"]aaaaaaaaaaaaa];"+
				"[][][][][][][][;";

var loadBossRoom = function(gs) {
	gs.world = Game.loadWorld(bossRoom);
	gs.checkpoint = loadBossCorridor;

	gs.player.x = 2;
	gs.player.y = 7;
	gs.enemyList.push(new Game.Boss(13,14));
};

Game.TILE_WIDTH = 16;
Game.TILE_HEIGHT = 16;
				
Game.loadWorld = function initWorld(template) {
	var world = new World(),
		worldX = 0, worldY = 0, i;
	
	world.bounds.right = 0;
	
	if (template === undefined) { template = baseWorld; }
	
	for (i = 0; i < template.length; ++i) {
		switch(template[i]) {
			case 'a': world.grid[worldY][worldX] = new Tile(0, worldX, worldY, false, false); break;
			case 'b': world.grid[worldY][worldX] = new Tile(1, worldX, worldY, false, false); break;
			case 'c': world.grid[worldY][worldX] = new Tile(2, worldX, worldY, false, false); break;
			case 'd': world.grid[worldY][worldX] = new Tile(3, worldX, worldY, false, false); break;
			case 'e': world.grid[worldY][worldX] = new Tile(4, worldX, worldY, false, false); break;
			case 'f': world.grid[worldY][worldX] = new Tile(5, worldX, worldY, false, false); break;
			case 'g': world.grid[worldY][worldX] = new Tile(6, worldX, worldY, false, false); break;
			case 'h': world.grid[worldY][worldX] = new Tile(7, worldX, worldY, false, false); break;
			case 'i': world.grid[worldY][worldX] = new Tile(16, worldX, worldY, false, false); break;
			case 'j': world.grid[worldY][worldX] = new Tile(17, worldX, worldY, false, false); break;
			case 'k': world.grid[worldY][worldX] = new Tile(18, worldX, worldY, false, false); break;
			case 'l': world.grid[worldY][worldX] = new Tile(19, worldX, worldY, false, false); break;
			case 'm': world.grid[worldY][worldX] = new Tile(20, worldX, worldY, false, false); break;
			case 'n': world.grid[worldY][worldX] = new Tile(21, worldX, worldY, false, false); break;
			case 'o': world.grid[worldY][worldX] = new Tile(22, worldX, worldY, false, false); break;
			case 'p': world.grid[worldY][worldX] = new Tile(23, worldX, worldY, false, false); break;
			case 'A': world.grid[worldY][worldX] = new Tile(32, worldX, worldY, true, false); break;
			case 'B': world.grid[worldY][worldX] = new Tile(33, worldX, worldY, true, false); break;
			case 'C': world.grid[worldY][worldX] = new Tile(34, worldX, worldY, true, false); break;
			case 'D': world.grid[worldY][worldX] = new Tile(48, worldX, worldY, true, false); break;
			case 'E': world.grid[worldY][worldX] = new Tile(49, worldX, worldY, true, false); break;
			case 'F': world.grid[worldY][worldX] = new Tile(50, worldX, worldY, true, false); break;
			case 'G': world.grid[worldY][worldX] = new Tile(64, worldX, worldY, true, false); break;
			case 'H': world.grid[worldY][worldX] = new Tile(65, worldX, worldY, true, false); break;
			case 'I': world.grid[worldY][worldX] = new Tile(66, worldX, worldY, true, false); break;
			case '.':
				world.grid[worldY][worldX]
				    = new Tile(80+(worldX+worldY)%2,worldX,worldY,true,false);
				break;
			case '[': world.grid[worldY][worldX] = new Tile(80, worldX, worldY, true, false); break;
			case ']': world.grid[worldY][worldX] = new Tile(81, worldX, worldY, true, false); break;
			case 'X': world.grid[worldY][worldX] = new Tile(82, worldX, worldY, true, false); break;
			case '$': world.grid[worldY][worldX] = new Tile(35, worldX, worldY, true, true); break;
			case '%': world.grid[worldY][worldX] = new Tile(36, worldX, worldY, true, true); break;
			case '^': world.grid[worldY][worldX] = new Tile(37, worldX, worldY, true, true); break;
			case '&': world.grid[worldY][worldX] = new Tile(38, worldX, worldY, true, true); break;
			case 'x': 
				world.grid[worldY][worldX] = new Tile(0, worldX, worldY, false, false); 
				world.grid[worldY][worldX].worldTarget = arguments[1];
			break;
			case ';':
				worldX = 0;
				worldY += 1;
				world.grid.push([]);
			continue;
		}
		++worldX;
		if (worldX > world.bounds.right) { world.bounds.right = worldX; }
	}
	if (world.grid[world.grid.length-1].length === 0) {
		world.grid.pop(); // need to do this so that we dont end up with a trailing empty array in world grid
	}
	
	world.bounds.left = 0;
	world.bounds.top = 0;
	world.bounds.right *= Game.TILE_WIDTH;
	world.bounds.bottom = world.grid.length * Game.TILE_HEIGHT;
	
	world.endOfLevel = false;
	world.time = 0;
	world.defeatCondition = false;
	world.victoryCondition = false;
	
	return world;
	console.log("loaded world");
	//Game.totalDeaths = 0;
};

function World() {

    this.grid = [
        []
    ];
    this.layers = 2;
    this.bounds = {};
	this.targets = [];

    this.translatePositionToTile = function (x, y) {
        var xTile = Math.floor(x / (Game.TILE_WIDTH * Game.SCALE_FACTOR));
        var yTile = Math.floor(y / (Game.TILE_HEIGHT * Game.SCALE_FACTOR));
        if (this.grid[yTile] && this.grid[yTile][xTile]) {
            return this.grid[yTile][xTile];
        }
        return null;
    };

    var Node = function (tile) {
        var _tile = tile;
        _tile._visited = false;
        _tile._distance = 9999999999999;
        _tile.previousTile;
        _tile.beenInQueue = false;

        _tile.setBeenInQueue = function (value) {
            _tile.beenInQueue = value;
        };

        _tile.hasBeenInQueue = function () {
            return _tile.beenInQueue;
        };

        _tile.getDistance = function () {
            return _tile._distance;
        };

        _tile.setDistance = function (distance, previousTile) {
            _tile._distance = distance;
            _tile._previousTile = previousTile;
        };

        _tile.getPreviousTile = function () {
            return _tile._previousTile;
        };

        _tile.setVisited = function () {
            _tile._visited = true;
        };

        _tile.getVisited = function () {
            return _tile._visited;
        };

        return _tile;
    };
}

World.prototype.getBounds = function getBounds() {
	return this.bounds;
};

World.prototype.draw = function draw(ctx) {
	var i, j, currentTile, currentLayer = 0;
	for (currentLayer = 0; currentLayer < this.layers; ++currentLayer) {
		for (j = 0; j < this.grid.length; ++j) {
			for (i = 0; i < this.grid[j].length; ++i) {
				if ((j + 1) * Game.TILE_WIDTH * Game.SCALE_FACTOR >= Game.camera.y &&
					(i + 1) * Game.TILE_WIDTH * Game.SCALE_FACTOR >= Game.camera.x &&
					j * Game.TILE_WIDTH * Game.SCALE_FACTOR < Game.camera.y + Game.HEIGHT &&
					i * Game.TILE_WIDTH * Game.SCALE_FACTOR < Game.camera.x + Game.WIDTH) {
					this.grid[j][i].drawLayer(ctx,currentLayer);
				}
			}
		}
	}
};

// updating the time in each unit
World.prototype.update = function (elapsed) {
}


Game.validCoord = function(x, y) {
	return   x >= 0  &&  y >= 0  &&  y < Game.currentWorld.grid.length
	     &&  x < Game.currentWorld.grid[y].length;
};

function Tile(type,x,y, solid, death) {
	this.type = type;
	this.imageX = (this.type % 16) * Game.TILE_WIDTH;
	this.imageY = Math.floor(this.type / 16) * Game.TILE_WIDTH;
	this.unit = null;
	this.x = x;
	this.y = y;
    this.solid = (typeof solid != "undefined")?solid:false;
    this.death = (typeof death != "undefined")?death:false;
}
Tile.prototype.getDeath = function () {
    return this.death;
}
Tile.prototype.getSolid = function() {
    return this.solid;
};
Tile.prototype.setSolid = function(isSolid) {
    this.solid = isSolid;
}
Tile.prototype.getX = function() {
	return this.x;
};
Tile.prototype.getY = function() {
	return this.y;
};
Tile.prototype.drawLayer = function (ctx,layer) {
	if (layer === 0) {
		// Layer 0 is background layer
		Game.drawImage(ctx, 'tileset.png', 
			this.imageX,				// Slice x
			this.imageY,				// Slice y
			Game.TILE_WIDTH,			// Slice width
			Game.TILE_HEIGHT,			// Slice height
			this.getX() * Game.TILE_WIDTH, 	// Draw x
			this.getY() * Game.TILE_HEIGHT,	// Draw y
			Game.TILE_WIDTH,		// Draw width
			Game.TILE_HEIGHT);		// Draw height
	}
};

Game.track = [loadBaseWorld, loadBossRoom];


}());
