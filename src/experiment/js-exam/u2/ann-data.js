/*
	data.js
	Produce data for U2 FI3201-01 in jsxPhys
	
	Sparisoma Viridi | https://github.com/jsxPhys
	
	20200501
	1048 Begin this program
	1124 Begin data2 function.
	1129 Begin data3 function.
	1201 Finish data3 and cancel data4.
*/

// Execute main function
main();

// Define main function
function main() {
	var ta = document.createElement("textarea");
	document.body.append(ta);
	ta.style.width = "400px";
	ta.style.height = "300px";
	ta.style.overflowY = "scroll";
	
	var N = 20;
	ta.value = data3(N);
}


// Generate data set 3
function data3() {
	var N = arguments[0];
	var xmin = 0; xmax = 1;
	var ymin = 0; ymax = 1;
	var str = "";
	for(var i = 0; i < N; i++) {
		var x = xmin + 1.0 * Math.random() * (xmax - xmin);
		var y = ymin + 1.0 * Math.random() * (ymax - ymin);
		var x2 = (x - 0.5)*(x - 0.5);
		var y2 = (y - 0.5)*(y - 0.5);
		var r2 = x2 + y2;
		var r = Math.sqrt(r2);
		var s = 0;
		if(r > 0.25) s = 1;
		x = x.toFixed(3);
		y = y.toFixed(3);
		str += x + " | " + y + " | " + s + "\n";
	}
	return str;
}


// Generate data set 2
function data2() {
	var N = arguments[0];
	var xmin = 0; xmax = 1;
	var ymin = 0; ymax = 1;
	var str = "";
	for(var i = 0; i < N; i++) {
		var x = xmin + 1.0 * Math.random() * (xmax - xmin);
		var y = ymin + 1.0 * Math.random() * (ymax - ymin);
		var s = 0;
		if(y > x) s = 1;
		x = x.toFixed(3);
		y = y.toFixed(3);
		str += x + " | " + y + " | " + s + "\n";
	}
	return str;
}


// Generate data set 1
function data1() {
	var N = arguments[0];
	var xmin = 0; xmax = 1;
	var ymin = 0; ymax = 1;
	var str = "";
	for(var i = 0; i < N; i++) {
		if(i < N/2) {
			var x = xmin + 0.5 * Math.random() * (xmax - xmin);
			var y = ymin + 1.0 * Math.random() * (ymax - ymin);
			x = x.toFixed(3);
			y = y.toFixed(3);
			str += x + " | " + y + " | " + 0 + "\n";
		} else {
			var x = xmax - 0.5 * Math.random() * (xmax - xmin);
			var y = ymin + 1.0 * Math.random() * (ymax - ymin);
			x = x.toFixed(3);
			y = y.toFixed(3);
			str += x + " | " + y + " | " + 1 + "\n";
		}
	}
	return str;
}

