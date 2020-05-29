/*
	js-show-wave.js
	Show wave data produced by cpp-gen-wave.cpp file
	
	Sparisoma Virid | https://github.com/abm-x
	
	20200529
	2005 Derive it from js-cpp-experment.js file.	
*/


// Define global variables
var proc, iter, iterMax


// Execute main function
main();


// Define main function
function main() {
	iter = 0;
	iterMax = 1000;
	
	var p = document.createElement("p");
	p.id = "output";
	p.style.fontWeight = "bold";
	p.style.fontSize = "40px";
	document.body.append(p);
	
	document.addEventListener("click", function() {
		clearInterval(proc);
		console.log("Click end the process");
	});
	
	proc = setInterval(read, 1000);
}


// Read the data through a script
function read() {
	var q = document.getElementById("output");
	
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "data.txt";
	script.onload = function() {
		var bb = ("0" + data.toString(16)).slice(-2);
		var rr = 255 - data;
		rr = ("0" + rr.toString(16)).slice(-2);
		q.style.color = "#" + rr + "00" + bb; 
		q.innerHTML = ("00" + data).slice(-3);
	}
	document.body.append(script);
	
	iter++;
	
	script.remove();
	
	if(iter >= iterMax) {
		clearInterval(proc);
		console.log("Maximum iteration achieved");
	}
}
