/*
	js-script-create.js
	Explore HTML DOM element script
	
	Sparisoma Virid | https://github.com/abm-x
	
	20200601
	1655 Create this example.
	
	References
*/


// Execute main function
main();


// Define main function
function main() {
	// Create HTML DOM element
	var script = document.createElement("script");
	script.src = "data.js";
	document.body.append(script);
	
	console.log(data_js);
}

