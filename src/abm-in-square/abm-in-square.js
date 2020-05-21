/*
	abm-in-square.js
	Agents moving in a square
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200521
	1910 Start this application.
*/


// Define global variables
var pname = "abm-in-square";
var agents;

// Execute main function
main();


// Define main function
function main() {
	
	var N = 10;
	var xmin = 1;
	var xmax = 5;
	var ymin = 1;
	var ymax = 5;
	var mode = "random";
	agents = createAgent(N, [xmin, xmax], [ymin, ymax], mode);
	
	console.log(agents);
		
	console.log(pname);
}


// Create agents
function createAgent() {
	var N = arguments[0];
	var x = arguments[1];
	var y = arguments[2];
	var mode = arguments[3];
	
	var rx = x[1] - x[0];
	var ry = y[1] - y[0];
	console.log(rx, ry);
	
	var agents = [];
	var i = 0;
	var j = 0;
	while(i < N) {
	//for(var i = 0; i < N; i++) {
		
		var xx = Math.round(Math.random() * rx + x[0]);
		var yy = Math.round(Math.random() * ry + y[0]);
		
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
			if(!EXIST) {
				a.x = xx;
				a.y = yy;
				agents.push(a);
			} else {
				console.log("Agent already exists");
			}
		}
		i++;
	}
	
	return agents;
}
