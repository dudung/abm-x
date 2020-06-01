/*
	js-script-create-2.js
	Explore HTML DOM element script
	
	Sparisoma Virid | https://github.com/abm-x
	
	20200601
	2133 Continue the failed js-script-create.
	2210 Can upload the script but not so modular.
	2211 It still requires global parameters.
*/

var fname = [
	"scriptAdd.js",
	"scriptSub.js",
	"scriptMul.js",
	"scriptDiv.js"
];


// Execute premain function
premain();

// Define main function
function premain() {
	N = fname.length;
	i = 0;
	
	loadScripts();
}

function loadScripts() {
	var script = document.createElement("script");
	script.src = fname[i];
	document.body.append(script);
	
	script.onload = function() {
		i++;
		if(i < N) {
			loadScripts();
		} else {
			main();
		}
	}
}


function main() {
	var a = add(1, 2);
	console.log(a);
	
	var b = sub(5, 7);
	console.log(b);
	
	var c = mul(1.5, 4);
	console.log(c);
	
	var d = div(4, 8);
	console.log(d);
}
