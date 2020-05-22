/*
	abm-nibbles.js
	Connected agents moving as a nibbles worm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200522
	0609 It is inspired by [1] for connected agents.
	0611 Try to run abm-in-rect.js with abm-base.js library.
	0614 Clean and distribute [2] to abm-base.js, abm-nibbles.js.
	0642 Create a linear worm with direction.
	0711 Move worm in horizontal or vertical direction in a step.
	0717 Set random direction, worm may be trapped with its tail.
	0726 Add event for pause the simulation.
	0745 Program start by clicking the body.
	
	References
	1. url https://en.wikipedia.org/w/index.php?oldid=945651481
	   [20200522].
	2. url https://github.com/dudung/abm-x/tree/master/src/abm-in
	   -rect [20200522].
*/


// Define global variables
var pname = "abm-nibbles";
var colors;

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
	var world = createWorld(xmin, ymin, xmax, ymax);
	addBorder(world);
	
	// Create a worm
	var N = 10;
	var mode = "linier-vertical-to-bottom";
	var cBody = 2;
	var cHead = 0;
	worm = createWorm(N, xmin + 6, ymin + 2, mode, cBody, cHead);
	
	addAgent(worm).toWorld(world);
	viewWorld(world, worm).inElement(p);
	
	console.log(pname);
	
	var PAUSE = true;
	var proc;
	
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
}


// Move worm as connected agents
function moveWorm() {
	var agents = arguments[0];
	var world = arguments[1];
	
	var N = agents.length;
	
	var di, dj;
	var dir = Math.round(Math.random() * 20);
	if(dir <= 9) { di = 1; dj = 0; }
	if(dir == 10) { di = 0; dj = 1; }
	if(dir == 11) { di = 0; dj = -1; }
	if(dir >= 12) { di = -1; dj = 0; }
	
	
	var k = 0;
	var i = agents[k].x;
	var j = agents[k].y;
	
	// Move src to dest if empty
	if(world[j + dj][i + di] == -1) {
		world[j + dj][i + di] = k;
		world[j][i] = -1;
		agents[k].x = i + di;
		agents[k].y = j + dj;
		
		for(var k = 1; k < N; k++) {
			var i2 = agents[k].x;
			var j2 = agents[k].y;
			
			world[j][i] = k;
			world[j2][i2] = -1;	
			agents[k].x = i;
			agents[k].y = j;

			i = i2;
			j = j2;
		}	
	}
}



// Create a worm
function createWorm() {
	var N = arguments[0];
	var xo = arguments[1];
	var yo = arguments[2];
	var mode = arguments[3];
	var color1 = arguments[4];
	
	var worm = [];
	if(mode == "linier-horizontal-to-right") {
		for(var i = 0; i < N; i++) {
			var xx = xo + i;
			var yy = yo;
			var agent = {
				x: xx,
				y: yy,
				c: color1,
			};
			worm.push(agent);
		}
	}
	if(mode == "linier-horizontal-to-left") {
		for(var i = 0; i < N; i++) {
			var xx = xo - i;
			var yy = yo;
			var agent = {
				x: xx,
				y: yy,
				c: color1,
			};
			worm.push(agent);
		}
	}
	if(mode == "linier-vertical-to-bottom") {
		for(var i = 0; i < N; i++) {
			var xx = xo;
			var yy = yo + i;
			var agent = {
				x: xx,
				y: yy,
				c: color1,
			};
			worm.push(agent);
		}
	}
	if(mode == "linier-vertical-to-top") {
		for(var i = 0; i < N; i++) {
			var xx = xo;
			var yy = yo - i;
			var agent = {
				x: xx,
				y: yy,
				c: color1,
			};
			worm.push(agent);
		}
	}
	
	// Color the head if provided
	var color2 = arguments[5];
	if(color2 != undefined) {
		worm[0].c = color2;
	}
	
	return worm;
}