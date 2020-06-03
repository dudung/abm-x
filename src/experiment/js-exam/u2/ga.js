/*
	ga.js
	Simple genetic algoritm (GA)
	
	Sparisoma Viridi | https://github.com/dudung/jsxPhys
	
	20200501
	1255 Create this program.
	1318 Cancel the use of online compiler [1].
	1447 Finishe getValues and begin fitness.
	
	Refrences
	1. https://jsconsole.com/ [20200501]
*/


// Execute main funtion
main();


// Define main function
function main() {
	var p1 = "0010110";
	var p2 = "1111111";
	
	var n = 4;
	var c1, c2;
	[c1, c2] = crossover(p1, p2, n);
	
	console.log(p1);
	console.log(p2);
	console.log(c1);
	console.log(c2);
}


// Create fitness function
function fitness() {
	var p = arguments[0];
	
	var x, y, g;
	[x, y, g] = getValues(p);
	
	var xo = 1;
	var yo = 1;
	var dx2 = (x - xo) * (x - xo);
	var dy2 = (y - yo) * (y - yo);
	var dr = Math.sqrt(dx2 + dy2);
	var val = 1 / (1 + dr);
	return val;
}


// Get interpretation of position and group from chromosome
function getValues() {
	var p = arguments[0];
	
	var xs = p.slice(0, 3);
	var ys = p.slice(3, 6);
	var gs = p.slice(6);
	
	var x = -1;
	var y = -1;
	var g = -1;
	
	x = parseInt(xs, 2);
	y = parseInt(ys, 2);
	g = parseInt(gs, 2);
	
	return [x, y, g];
}


// Crossover two chromosome
function crossover() {
	var p1 = arguments[0];
	var p2 = arguments[1];
	var n = arguments[2];
	
	var c1 = p1.slice(0, n) + p2.slice(n);
	var c2 = p1.slice(n) + p2.slice(0, n);
	
	return [c1, c2];
}


