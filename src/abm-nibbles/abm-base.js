/*
	abm-base.js
	Base function for abm-x application
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200522
	0609 Derive it from abm-in-rect.js program.
	0618 Test it and it works as previous abm-in-rect.js.
*/


// Define global variables
var pname = "abm-nibbles";
var colors = ["#f00", "#0f0", "#00f"];


// Move agents
function moveAgent() {
	var agents = arguments[0];
	var world = arguments[1];
	
	var N = agents.length;
	
	for(var k = 0; k < N; k++) {
		var di = Math.round(Math.random() * 2 - 1);
		var dj = Math.round(Math.random() * 2 - 1);
		
		var i = agents[k].x;
		var j = agents[k].y;
		
		// Move src to dest if empty
		if(world[j + dj][i + di] == -1) {
			world[j + dj][i + di] = k;
			world[j][i] = -1;
			agents[k].x = i + di;
			agents[k].y = j + dj;
		}
	}	
}


// Add agent to existing world
function addAgent() {
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
	
	return val;
}


// Add border to a world with value -2
function	addBorder() {
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


// View world
function viewWorld() {
	var world = arguments[0];
	var rows = world.length;
	var cols = world[0].length;
	var agents = arguments[1];
	
	function createPreContent() {
		var content = "";
		for(var j = 0; j < rows; j++) {
			var line = "";
			for(var i = 0; i < cols; i++) {
				var point = world[j][i];
				var mark;
				if(point == -1) {
					mark = "-&nbsp;";
				} else if(point == -2) {
					mark = "&#9639;&nbsp;";
				} else if(point >= 0) {
					mark = ("0" + point).slice(-2);
				}
				line += mark;
				if(i < cols - 1) {
					line += "\t";
				}
			}
			line += "\n";
			content += line;
		}
		return content;
	}
	
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
					var cs = colors[agents[point].c];
					mark = ("0" + point).slice(-2) + "&nbsp;";
					mark = "<font color='" + cs + "'>" + mark;
					mark += "</font>"
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
			if(el instanceof HTMLPreElement) {
				el.innerHTML = createPreContent();
			} else if(el instanceof HTMLParagraphElement) {
				el.innerHTML = createParagraphContent();
			} else if(el.nodeName == "CODE") {
				el.innerHTML = createParagraphContent();
			}
		}
	}
	
	return val;
}


// Create world which is a matrix of -1
function createWorld() {
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
		var xx, yy, cc;
		
		if(mode == "random") {
			xx = Math.round(Math.random() * rx + x[0]);
			yy = Math.round(Math.random() * ry + y[0]);
			cc = Math.round(Math.random() * 2 + 0);
		}
		
		var a = {};
		if(i == 0) {
			a.x = xx;
			a.y = yy;
			a.c = cc;
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
				a.c = cc;
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


// Save previous not-used-anymore lines
function unusedLinesOfCode() {
	// Create element for showing agents
	var pre = document.createElement("pre");
	document.body.append(pre);
	//p.style.fontVariantNumeric = "tabular-nums";
	pre.style.tabSize = "3";
	
	// View created agents in two columns or matrix-like view
	viewAgent(agents).inElement(pre);
}
