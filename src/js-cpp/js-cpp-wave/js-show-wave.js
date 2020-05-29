/*
	js-show-wave.js
	Show wave data produced by cpp-gen-wave.cpp file
	
	Sparisoma Virid | https://github.com/abm-x
	
	20200529
	2005 Derive it from js-cpp-experment.js file.
	2146 View first string of JSON from data.txt file.
	2232 Get error Uncaught SyntaxError: Unexpected end of input.
	2235 Correct xrange from waveCurve.
	2244 Can avoid error message using [1], but not understand.
	2246 The error comes back.
	
	References
	1. url https://www.w3schools.com/js/js_errors.asp
	  [20200529].
*/


// Define global variables
var proc, iter, iterMax


// Execute main function
main();


// Define main function
function main() {
	iter = 0;
	iterMax = 10000;
	
	var p = document.createElement("p");
	p.id = "outText";
	document.body.append(p);
	
	var c = document.createElement("canvas");
	c.id = "outCanvas";
	c.width = "600";
	c.height = "60";
	c.style.width = c.width + "px";
	c.style.height = c.height + "px";
	c.style.background = "#fff";
	c.style.border = "#fff 0px solid";
	document.body.append(c);
	
	document.addEventListener("click", function() {
		clearInterval(proc);
		console.log("Click end the process");
	});
	
	proc = setInterval(read, 50);
}


// Read the data through a script
function read() {
	var q = document.getElementById("outText");
	var d = document.getElementById("outCanvas");
	
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "data.txt";
	script.onload = function() {
		
		try {
			var waveCurve = JSON.parse(data);
			clear(d);
			draw(d, waveCurve);
			
			q.innerHTML = "t = " + waveCurve.t + " s";
		} catch(err) {
			console.log(err);
			console.log(data);
		}
		
	}
	document.body.append(script);
	
	iter++;
	
	script.remove();
	
	if(iter >= iterMax) {
		clearInterval(proc);
		console.log("Maximum iteration achieved");
	}
}


// Draw wave on canvas
function draw() {
	var c = arguments[0];
	var w = arguments[1];
	var cx = c.getContext("2d");
	
	var x = w.x;
	var y = w.y;
	var N = x.length;
	
	cx.strokeStyle = "#f00";
	cx.lineWidth = 2;
	cx.beginPath();
	for(var i = 0; i < N; i++) {
		var xi = x[i];
		var yi = y[i];
		var TR = tr(xi, yi);
		var X = TR[0];
		var Y = TR[1];
		
		if(i == 0) {
			cx.moveTo(X, Y);
		} else {
			cx.lineTo(X, Y);
		}
	}
	cx.stroke();
	
	function tr() {
		var XMIN = 1;
		var XMAX = parseInt(c.width) - 1;
		var YMIN = parseInt(c.height) - 1;
		var YMAX = 1;
			
		var xmin = w.x[0];
		var xmax = w.x[w.x.length - 1];
		var ymin = -0.1;
		var ymax = 0.1;
		
		var xx = arguments[0];
		var yy = arguments[1];
		
		var XX = (xx - xmin) / (xmax - xmin);
		XX *= (XMAX - XMIN);
		XX += XMIN;
		
		var YY = (yy - ymin) / (ymax - ymin);
		YY *= (YMAX - YMIN);
		YY += YMIN;
		
		return [XX, YY];
	}
}

// Clear canvas
function clear() {
	var c = arguments[0];
	var LX = parseInt(c.width);
	var LY = parseInt(c.height);
	var cx = c.getContext("2d");
	cx.clearRect(0, 0, LX, LY);
}

