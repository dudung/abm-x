/*
	js-script-create.js
	Explore HTML DOM element script
	
	Sparisoma Virid | https://github.com/abm-x
	
	20200601
	1655 Create this example.
	1730 Try onload but not yet implement [1].
	1736 Implement [2] for checking inexisting variables [2].
	
	References
	1. url https://stackoverflow.com/a/27000218/9475509
	   [20200601].
	2. url https://stackoverflow.com/a/30003227/9475509
	   [20200601].
*/


// Execute main function
main();


// Define main function
function main() {
	/*
	// Create HTML DOM element
	var script = document.createElement("script");
	script.src = "data.js";
	document.body.append(script);
	
	if(window.hasOwnProperty("data_js")) {
		console.log(data_js);
	}
	
	script.onload = function() {
		var e = arguments[0];
		
		if(window.hasOwnProperty("data_js")) {
			console.log(data_js);
		}
	}
	*/
}


// Include script and get variables with name
function isngvwn() {
	var src = arguments[0];
	var name = arguments[1];
	
	// Create HTML DOM element
	var script = document.createElement("script");
	script.src = src;
	document.body.append(script);
	
	var value;
	
	script.onload = function() {
		if(window.hasOwnProperty(name)) {
			value = window[name];
		}
	}
	
	return value;
}

