/*
	abm-nibbles.js
	Connected agents moving as a nibbles worm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200522
	1236 Clean from abm-nibbles.js and it works.
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
	var world = createWorld(xmin, ymin, xmax, ymax);
	addBorder(world);
	
	// Create a worm
	var N = 16;
	var mode = "linier-horizontal-to-right";
	var cBody = 2;
	var cHead = 0;
	worm = createWorm(N, xmin + 1, ymin + 2, mode, cBody, cHead);
	
	for(var i = 0; i < N; i++) {
		worm[i].c = i;
	}
	
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

