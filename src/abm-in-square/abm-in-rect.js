/*
	abm-in-rect.js
	Agents moving in a square
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200521
	1910 Start this application.
	2024 Finish creating agents with random mode.
	2043 View agents in a PRE element as two columns.
	2105 View agents in a PRE element as matrix-like.
	2111 Add mode for viewing agents.
	2113 Set tab size for PRE element in viewing agents.
	2118 Renama square to rect for the name.
*/


// Define global variables
var pname = "abm-in-square";
var agents;

// Execute main function
main();


// Define main function
function main() {
	// Create agents
	var N = 20;
	var xmin = 5;
	var xmax = 24;
	var ymin = 3;
	var ymax = 19;
	var mode = "random";
	agents = createAgent(N, [xmin, xmax], [ymin, ymax], mode);
	N = agents.length;
	
	// Create element for showing agents
	pre = document.createElement("pre");
	document.body.append(pre);
	pre.style.tabSize = "4";
	
	// View agents
	viewAgent(agents, [xmin, xmax], [ymin, ymax]).inElement(pre);
	
	console.log(pname);
}


// Create world



// View agents in an HTML element
function viewAgent() {
	var agents = arguments[0];
	var x = arguments[1];
	var y = arguments[2];
	var mode = arguments[3];
	
	var cols = x[1] - x[0] + 1;
	var rows = y[1] - y[0] + 1;
	
	var val = {
		inElement: function() {
			var el = arguments[0];
			if(el instanceof HTMLPreElement) {
				console.log("Out to a PRE element");
				var lines = "";
				var N = agents.length;
				
				if(mode == undefined) {
					for(var j = 0; j < rows; j++) {
						var line = "";
						for(var i = 0; i < cols; i++) {
							var str = "-";
							var ii = i + x[0];
							var jj = j + y[0];		
							for(var k = 0; k < N; k++) {
								if(agents[k].x == ii && agents[k].y == jj) {
									str = k;
									break;
								}
							}
							line += str;
							if(i < cols - 1) line += "\t";
						}
						line += "\n";
						
						lines += line;
					}
				} else {
					for(var i = 0; i < N; i++) {
						lines += agents[i].x;
						lines += "\t";
						lines += agents[i].y;
						if(i < N - 1) {
							lines += "\n";
						}
					}
				}
				
				el.innerHTML = lines;
			}
		}
	}
	
	return val;
}


// Create agents in x and y ranges (include both limits)
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
