/*
	abm-in-square.js
	Agents moving in a square
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200521
	1910 Start this application.
	2024 Finish creating agents with random mode.
	2043 View agents in a PRE element and test it.
*/


// Define global variables
var pname = "abm-in-square";
var agents;

// Execute main function
main();


// Define main function
function main() {
	// Create agents
	var N = 10;
	var xmin = 1;
	var xmax = 5;
	var ymin = 1;
	var ymax = 5;
	var mode = "random";
	agents = createAgent(N, [xmin, xmax], [ymin, ymax], mode);
	N = agents.length;
	
	// Create element for showing agents
	pre = document.createElement("pre");
	document.body.append(pre);
	
	// View agents
	viewAgent(agents).inElement(pre);
	
	console.log(pname);
}


// View agents in an HTML element
function viewAgent() {
	var agents = arguments[0];
	
	var val = {
		inElement: function() {
			var el = arguments[0];
			if(el instanceof HTMLPreElement) {
				console.log("Out to a PRE element");
				var str = "";
				var N = agents.length;
				for(var i = 0; i < N; i++) {
					str += agents[i].x + "\t";
					str += agents[i].y + "\n";
				}
				el.innerHTML = str;
			}
		}
	}
	
	return val;
}


// Create agents
function createAgent() {
	var N = arguments[0];
	var x = arguments[1];
	var y = arguments[2];
	var mode = arguments[3];
	
	var rx = x[1] - x[0];
	var ry = y[1] - y[0];
	
	var agents = [];
	var j = 0;
	for(var i = 0; i < 10 * N; i++) {
		var xx, yy;
		
		if(mode == "random") {
			xx = Math.round(Math.random() * rx + x[0]);
			yy = Math.round(Math.random() * ry + y[0]);
		}
		
		var a = {};
		if(i == 0) {
			a.x = xx;
			a.y = yy;
			agents.push(a);
		} else {
			var EXIST = false;
			
			var M = agents.length;			
			for(var j = 0; j < M; j++) {
				if(xx == agents[j].x && yy == agents[j].y) {
					EXIST = EXIST || true;
				}
			}
			
			if(!EXIST && j < N) {
				a.x = xx;
				a.y = yy;
				agents.push(a);
				j++;
				//console.log("Agent is included");
			} else {
				//console.log("Agent exists");
			}
		}
		
		if(j > N - 1) {
			break;
		}
	}
	
	return agents;
}
