/*
	abm-nibbles.js
	Connected agents moving as a nibbles worm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200522
	0609 It is inspired by [1] for connected agents.
	0611 Try to run abm-in-rect.js with abm-base.js library.
	0614 Clean and distribute [2] to abm-base.js, abm-nibbles.js.
	
	References
	1. url https://en.wikipedia.org/w/index.php?oldid=945651481
	   [20200522].
	2. url https://github.com/dudung/abm-x/tree/master/src/abm-in
	   -rect [20200522].
*/


// Define global variables
var pname = "abm-nibbles";
var colors, agents, world;

// Execute main function
main();


// Define main function
function main() {
	// Create element for showing agents
	p = document.createElement("p");
	p.style.fontFamily = "Courier";
	p.style.tabSize = "1"
	document.body.append(p);
	
	// Define color table
	colors = ["#f00", "#0f0", "#00f"];
	
	// Create agents
	var N = 25;
	var xmin = 5;
	var xmax = 9;
	var ymin = 2;
	var ymax = 6;
	var mode = "random";
	agents = createAgent(N, [xmin, xmax], [ymin, ymax], mode);
	N = agents.length;
	
	// Create world in the form of a rect
	xmin = 0;
	ymin = 0;
	xmax = 19;
	ymax = 9;
	world = createWorld(xmin, ymin, xmax, ymax);
	addBorder(world);
	addAgent(agents).toWorld(world);
	viewWorld(world, agents).inElement(p);
	
	console.log(pname);
	
	var proc = setInterval(simulate, 100);
	
	var iter = 0
	var maxIter = 200;
	var startIter = 40;
	
	function simulate() {
		if(iter > startIter) {
			moveAgent(agents, world);
			
			viewWorld(world, agents).inElement(p);
		}
		
		iter++;
		
		if(iter >= maxIter) {
			clearInterval(proc);
		}
	}
}

