/*
	js-plot-func.js
	Plot a function that is passed as argument
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200531
	0318 Start this program.
	0522 Simplify and cancel previous idea.
	0551 Try to implement namespace using an object [1].
	0751 Define funstions as array in jsPlot object.
	0825 Use the same for colors.
	0836 Set x and y ranges.
	0849 Finish first version of plot function.
	1625 Change functions to in x and y for parametric ones.
	1704 Rename jsPlot to jsPlotParametric.
	
	References
	1. url https://stackoverflow.com/a/881556/9475509
*/

// Define global variables
var JS_PLOT_FUNC = true;


// Define object of jsPlot for nam
var jsPlotParametric = {
	// Set canvasId for plotting
	setCanvasId: function() {
		this.canvasId = arguments[0];
	},
	
	// Set x range
	setXRange: function() {
		this.xmin = arguments[0];
		this.xmax = arguments[1];
	},
	
	// Set y range
	setYRange: function() {
		this.ymin = arguments[0];
		this.ymax = arguments[1];
	},
	
	// Set t range
	setTRange: function() {
		this.tmin = arguments[0];
		this.tmax = arguments[1];
	},
	
	// Add function to be plotted
	addFunction: function() {
		// Push function x(t)
		if(this.functionsx == undefined) {
			this.functionsx = [];
		}
		this.functionsx.push(arguments[0]);
		
		// Push function y(t)
		if(this.functionsy == undefined) {
			this.functionsy = [];
		}
		this.functionsy.push(arguments[1]);
		
		// Push color or #000 if not provided
		if(this.colors == undefined) {
			this.colors = [];
		}
		if(arguments[2] == undefined) {
			this.colors.push("#000");			
		} else {
			this.colors.push(arguments[2]);
		}
	},
	
	// Plot selected function
	plot: function() {
		var functionId = arguments[0];
		var c = this.colors[functionId];
		var fx = this.functionsx[functionId];
		var fy = this.functionsy[functionId];
		
		var can = document.getElementById(this.canvasId);
		var XMIN = 0 + 1;
		var XMAX = can.width - 1;
		var YMIN = can.height - 1;
		var YMAX = 0 + 1;
		
		var xmin = this.xmin;
		var xmax = this.xmax;
		var ymin = this.ymin;
		var ymax = this.ymax;
		
		var tmin = this.tmin;
		var tmax = this.tmax;
		var Nt = 100;
		var dt = (tmax - tmin) / Nt;
		
		var cx = can.getContext("2d");
		cx.lineWidth = 2;
		cx.strokeStyle = c;
		cx.beginPath();
		for(var i = 0; i <= Nt; i++) {
			var t = i * dt;
			
			var x = fx(t);
			var y = fy(t);
			
			var X = transformX(x);
			var Y = transformY(y);
			
			if(i == 0) {
				cx.moveTo(X, Y);
			} else {
				cx.lineTo(X, Y);
			}
		}
		cx.stroke();
				
		function transformX() {
			var X = (x - xmin) / (xmax - xmin);
			X *= (XMAX - XMIN);
			X += XMIN;
			return X;
		}
		function transformY() {
			var Y = (y - ymin) / (ymax - ymin);
			Y *= (YMAX - YMIN);
			Y += YMIN;
			return Y;
		}
	}
};


// Execute main function for test the classes
if(JS_PLOT_FUNC) main2();

// Define main function #2 -- Lissajous curve
function main2() {
	can = document.createElement("canvas");
	with(can) {
		id = "canvas0";
		width = 100;
		height = 100;
		with(style) {
			width = can.width + "px"
			height = can.height + "px";
		}
	}
	document.body.append(can);
	
	jsPlotParametric.setCanvasId("canvas0");
	jsPlotParametric.setXRange(-1, 1);
	jsPlotParametric.setYRange(-1, 1);
	jsPlotParametric.setTRange(0, 1);

	jsPlotParametric.addFunction(x1, y1, "#f00");
	jsPlotParametric.plot(0);
	
	// Define 1st function of x(t)
	function x1(t) {
		var T = 1;
		var omega = 2 * Math.PI * T;
		var x = Math.cos(omega * t);
		return x;
	}
	
	// Define 1st function of y(t)
	function y1(t) {
		var T = 1;
		var omega = 2 * Math.PI * T;
		var y = Math.sin(omega * t);
		return y;
	}
}


// Define main function #1
function main1() {
	can = document.createElement("canvas");
	with(can) {
		id = "canvas0";
		width = 200;
		height = 200;
		with(style) {
			width = can.width + "px"
			height = can.height + "px";
		}
	}
	document.body.append(can);
	
	jsPlot.setCanvasId("canvas0");
	jsPlot.setXRange(0, 1);
	jsPlot.setYRange(0, 2);
	jsPlot.setTRange(0, 1);
	jsPlot.addFunction(x, y1, "#f00");
	jsPlot.addFunction(x, y2, "#0f0");
	jsPlot.addFunction(x, y3, "#00f");
	
	jsPlot.plot(0);
	jsPlot.plot(1);
	jsPlot.plot(2);
	
	// Define 0th function of x(t)
	function x(t) {
		var x = t;
		return x;
	}
	
	// Define 1st function of y(t)
	function y1(t) {
		var y;
		if(0 <= t && t <= 0.5) {
			y = +4 * (t - 0);
		} else if(0.5 <= t && t <= 1) {
			y = -4 * (t - 1);
		}	else {
			y = 0;
		}
		return y;
	}
	
	// Define 2nd function of y(t)
	function y2(t) {
		var y;
		if(0 <= t && t <= 1) {
			y = 1;
		}	else {
			y = 0;
		}
		return y;
	}

	// Define 3rd function of y(t)
	function y3(t) {
		var y;
		if(0 <= t && t <= 1) {
			var a = 1.5;
			var b = 6;
			y = a - b * (0.5 - t)**2;
		}	else {
			y = 0;
		}
		return y;
	}
}

/*
	The normalized y_3(t) derivation
	y_3(t) = a - b (0.5 - t)^3
	Y_3(t) = ax + (b/3) (0.5 - t)^3
	Y_3(1) = a - (b/3)(-0.5)^3 = a + b / 24
	Y_3(0) = 0 - (b/3)(+0.5)^3 = 0 - b / 24
	Y_3(1) - Y3(0) = a - b / 12
	
	c = 1 / (a - b / 12)
	a = 1
	b = 4
	(a - b / 12) = 1 - 4 / 12 = 1 - 1/3 = 2/3
	c = 3 / 2
	
	a' = ca = 1.5
	b' = cb = 6
	y_3(t) = 1.5 - 6 (0.5 - t)^2
*/

