/*
	abm-nibbles.js
	Connected agents moving as a nibbles worm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200522
	1236 Clean from abm-nibbles.js and it works.
	1646 Simplify to viewWorld2 only in p tag.
	1656 Remove abm-base.js file, will be updated.
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
	addBorderTo(world);
	
	var b1 = new Bit(xmin + 1, ymin + 1, 1);
	var w1 = new Worm(xmin + 1, ymin + 3, 2);
	var c1 = new Cell(xmin + 9, ymin + 5, 3);
	var b2 = new Bit(xmin + 16, ymin + 11, 1);
	var b3 = new Bit(xmin + 2, ymin + 9, 1);
	var w2 = new Worm(xmin + 7, ymin + 10, 2);
	
	b1.pushToCollection();
	w1.pushToCollection();
	c1.pushToCollection();
	b2.pushToCollection();
	b3.pushToCollection();
	w2.pushToCollection();
	
	addAgentTo(world);
	
	view(world).inElement(p);
	
	console.log(pname);
	
	var PAUSE = true;
	var proc;
	
	/*
	document.body.addEventListener("click", function() {
		if(!PAUSE) {
			PAUSE = true;
			clearInterval(proc);
		} else {
			PAUSE = false;
			proc = setInterval(simulate, 20);
		}
	});
	
	var iter = 0
	var maxIter = 500;
	var startIter = 10;
	
	function simulate() {
		if(iter > startIter) {
			moveWorm(worm, world);
			
			viewWorld(world, worm).inElement(p);
		}
		
		iter++;
		
		if(iter >= maxIter) {
			clearInterval(proc);
		}
	}
	*/
}


// Add agents from ABMCollection to existing world
function addAgentTo() {
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
	
	
	
	/*
	var agents = arguments[0];
	var N = agents.length;
	
	
	
	var val = {
		toWorld: function() {
			var world = arguments[0];
			for(var k = 0; k < N; k++) {
				var i = agents[k].x;
				var j = agents[k].y;
				world[j][i] = k;
			}
		}
	}
	*/
	
	//return val;
}


// View world
function view() {
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
					//var cs = colors[agents[point].c];
					mark = ("0" + point).slice(-2) + "&nbsp;";
					//var m = "<font color='" + cs + "'";
					//m += "><b>" + mark + "</b></font>";
					//mark = m;
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
function	addBorderTo() {
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
