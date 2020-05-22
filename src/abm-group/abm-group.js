/*
	abm-nibbles.js
	Connected agents moving as a nibbles worm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200522
	1236 Clean from abm-nibbles.js and it works.
	1646 Simplify to viewWorld2 only in p tag.
	1656 Remove abm-base.js file, will be updated.
	1728 Can add agent to world but not the color.
	1738 Obtain color for each agent but not in efficient way.
	1741 Still do not know how to move Cell (and Worm).
	1900 Start to move Bit in random.
	1924 Can move Bit in random mode.
	1027 Try to move Worm.
	1943 Worm can move, Cell not yet. Fin for today. Muede.
*/


// Define global variables
var pname = "abm-group";


// Execute main function
main();


// Define main function
function main() {
	// Create element for showing agents
	p = document.createElement("p");
	p.style.fontFamily = "Courier";
	p.style.tabSize = "1"
	document.body.append(p);
	
	// Create world in the form of a rect
	var xmin = 0;
	var ymin = 0;
	var xmax = 19;
	var ymax = 14;
	world = createEmptyWorld(xmin, ymin, xmax, ymax);
	addBorderToWorld(world);
	
	var b1 = new Bit(xmin + 1, ymin + 1, 1);
	var w1 = new Worm(xmin + 1, ymin + 3, 5);
	var c1 = new Cell(xmin + 5, ymin + 8, 4);
	var b2 = new Bit(xmin + 16, ymin + 11, 1);
	var b3 = new Bit(xmin + 12, ymin + 2, 1);
	var w2 = new Worm(xmin + 11, ymin + 8, 5, 8);
	
	b1.pushToCollection();
	w1.pushToCollection();
	c1.pushToCollection();
	b2.pushToCollection();
	b3.pushToCollection();
	w2.pushToCollection();
	
	addAgentToWorld(world);
	
	viewWorld(world).inElement(p);
	
	console.log(pname);
	
	var PAUSE = true;
	var proc;
	
	document.body.addEventListener("click", function() {
		if(!PAUSE) {
			PAUSE = true;
			clearInterval(proc);
		} else {
			PAUSE = false;
			proc = setInterval(simulate, 100);
		}
	});
	
	var iter = 0
	var maxIter = 500;
	var startIter = 10;
	
	function simulate() {
		if(iter > startIter) {
			
			moveBitRandomInWorld(world, b1, b2, b3);
			
			moveWormRandomInWorld(world, w1, w2);
			
			viewWorld(world).inElement(p);
		}
		
		iter++;
		
		if(iter >= maxIter) {
			clearInterval(proc);
		}
	}
}


// Move Worm in random
function moveWormRandomInWorld() {
	var N = arguments.length;
	var world = arguments[0];
	
	for(var i = 1; i < N; i++) {
		var obj = arguments[i];
		
		var M = obj.agents.length;
		
		var b = obj.agents[0];

		var O = 8;
		var j = Math.round(Math.random() * (O - 1));
		var q = j * Math.PI * 2 / O;
		
		var dx = Math.round(Math.cos(q));
		var dy = Math.round(Math.sin(q));
		
		var xsrc = b.x;
		var ysrc = b.y;
		
		var xdest = xsrc + dx;
		var ydest = ysrc + dy;
		
		if(world[ydest][xdest] == -1) {
			
			world[ysrc][xsrc] = -1;
			world[ydest][xdest] = b.id;
			
			b.x = xdest;
			b.y = ydest;
			
			
			for(var k = 1; k < M; k++) {
				xdest = xsrc;
				ydest = ysrc;
				
				b = obj.agents[k];
				xsrc = b.x; 
				ysrc = b.y;
				
				world[ysrc][xsrc] = -1;
				world[ydest][xdest] = b.id;
				
				b.x = xdest;
				b.y = ydest;
			}
		}
	}
}


// Move Bit in random
function moveBitRandomInWorld() {
	var N = arguments.length;
	var world = arguments[0];
	
	for(var i = 1; i < N; i++) {
		var b = arguments[i];
		
		var M = 8;
		var j = Math.round(Math.random() * (M - 1));
		var q = j * Math.PI * 2 / M;
		
		var dx = Math.round(Math.cos(q));
		var dy = Math.round(Math.sin(q));
		
		var xsrc = b.x;
		var ysrc = b.y;
		
		var xdest = xsrc + dx;
		var ydest = ysrc + dy;
		
		if(world[ydest][xdest] == -1) {
			
			world[ysrc][xsrc] = -1;
			world[ydest][xdest] = b.id;
			
			b.x = xdest;
			b.y = ydest;
		}
		
	}
}


// Add agents from ABMCollection to existing world
function addAgentToWorld() {
	var world = arguments[0];
	
	var N = ABMCollection.length;
	for(var k = 0; k < N; k++) {
		var obj = ABMCollection[k];
		
		if(obj instanceof Bit) {
			var i = obj.x;
			var j = obj.y;
			var c = obj.c;
			var id = obj.id;
			
			world[j][i] = id;
		}
		
		if(obj instanceof Worm) {
			var M = obj.agents.length;
			for(var l = 0; l < M; l++) {
				var i = obj.agents[l].x;
				var j = obj.agents[l].y;
				var c = obj.agents[l].c;
				var id = obj.agents[l].id;
				
				world[j][i] = id;
			}
		}
		
		if(obj instanceof Cell) {
			var M = obj.agents.length;
			for(var l = 0; l < M; l++) {
				var i = obj.agents[l].x;
				var j = obj.agents[l].y;
				var id = obj.agents[l].id;
				
				world[j][i] = id;
			}
		}
	}
}


// View world
function viewWorld() {
	var world = arguments[0];
	var rows = world.length;
	var cols = world[0].length;
	var agents = arguments[1];
	
	function createParagraphContent() {
		var content = "";
		for(var j = 0; j < rows; j++) {
			var line = "";
			for(var i = 0; i < cols; i++) {
				var point = world[j][i];
				var mark;
				if(point == -1) {
					mark = "&nbsp;&nbsp;&nbsp;";
				} else if(point == -2) {
					mark = "<a style='letter-spacing:0.985em'>&#9639;</a>";
				} else if(point >= 0) {
					var m = ("0" + point).slice(-2) + "&nbsp;";
					
					var id = point;
					var c = getAgentColorWithId(id);
					
					var cs = colors[c];
					m = "<font color='" + cs + "'"
					+ "><b>" + m + "</b></font>";
					
					mark = m;
				}
				line += mark;
				if(i < cols - 1) {
					line += "";
				}
			}
			line += "<br \>";
			content += line;
		}
		return content;
	}

	var val = {
		inElement: function() {
			var el = arguments[0];
			if(el instanceof HTMLParagraphElement) {
				el.innerHTML = createParagraphContent();
			}
		}
	}
	
	return val;
}


// Get color from all Agent
function getAgentColorWithId() {
	var targetId = arguments[0];
	var color;
	
	var N = ABMCollection.length;
	for(var i = 0; i < N; i++) {

		var obj = ABMCollection[i];
		
		if(obj instanceof Bit) {
			var c = obj.c;
			var id = obj.id;
			if(targetId == id) {
				color = c;
			}
		}
		
		if(obj instanceof Worm) {
			var M = obj.agents.length;
			for(var l = 0; l < M; l++) {
				var c = obj.agents[l].c;
				var id = obj.agents[l].id;
				if(targetId == id) {
					color = c;
				}
			}
		}
		
		if(obj instanceof Cell) {
			var M = obj.agents.length;
			for(var l = 0; l < M; l++) {
				var c = obj.agents[l].c;
				var id = obj.agents[l].id;
				if(targetId == id) {
					color = c;
				}
			}
		}

	}
	
	return color;
}


// Create empty world which is a matrix of -1
function createEmptyWorld() {
	var xmin = arguments[0];
	var ymin = arguments[1];
	var xmax = arguments[2];
	var ymax = arguments[3];
	
	var cols = xmax - xmin + 1;
	var rows = ymax - ymin + 1;
	
	var world = [];
	for(var j = 0; j < rows; j++) {
		var line = [];
		for(var i = 0; i < cols; i++) {
			line.push(-1);
		}
		world.push(line);
	}
	
	return world;
}


// Add border to a world with value -2
function	addBorderToWorld() {
	var world = arguments[0];
	var rows = world.length;
	var cols = world[0].length;
	for(var j = 0; j < rows; j++) {
		for(var i = 0; i < cols; i++) {
			if(j == 0 || i == 0 || j == rows - 1 || i == cols - 1) {
				world[j][i] = -2;
			}
		}
	}
}
