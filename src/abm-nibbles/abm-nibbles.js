/*
	abm-nibbles.js
	Connected agents moving as a nibbles worm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200522
	0609 It is inspired by [1] for connected agents.
	0611 Try to run abm-in-rect.js with abm-base.js library.
	0614 Clean and distribute [2] to abm-base.js, abm-nibbles.js.
	0642 Create a linear worm with direction.
	
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
	var N = 5;
	var mode = "linier-vertical-to-bottom";
	worm = createWorm(N, xmin + 6, ymin + 6, mode);
	
	addAgent(worm).toWorld(world);
	viewWorld(world, worm).inElement(p);
	
	console.log(pname);
	
	/*
	var proc = setInterval(simulate, 100);
	
	var iter = 0
	var maxIter = 200;
	var startIter = 40;
	
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


// Create a worm
function createWorm() {
	var N = arguments[0];
	var xo = arguments[1];
	var yo = arguments[2];
	var mode = arguments[3];
	
	var worm = [];
	if(mode == "linier-horizontal-to-right") {
		for(var i = 0; i < N; i++) {
			var xx = xo + i;
			var yy = yo;
			var cc = 0;
			var agent = {
				x: xx,
				y: yy,
				c: cc,
			};
			worm.push(agent);
		}
	}
	if(mode == "linier-horizontal-to-left") {
		for(var i = 0; i < N; i++) {
			var xx = xo - i;
			var yy = yo;
			var cc = 0;
			var agent = {
				x: xx,
				y: yy,
				c: cc,
			};
			worm.push(agent);
		}
	}
	if(mode == "linier-vertical-to-bottom") {
		for(var i = 0; i < N; i++) {
			var xx = xo;
			var yy = yo + i;
			var cc = 0;
			var agent = {
				x: xx,
				y: yy,
				c: cc,
			};
			worm.push(agent);
		}
	}
	if(mode == "linier-vertical-to-top") {
		for(var i = 0; i < N; i++) {
			var xx = xo;
			var yy = yo - i;
			var cc = 0;
			var agent = {
				x: xx,
				y: yy,
				c: cc,
			};
			worm.push(agent);
		}
	}
	
	return worm;
}