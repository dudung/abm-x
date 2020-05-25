/*
	js-button.js
	Create and view buttton element
	
	Sparisoma Virid | https://github.com/abm-x
	
	20200525
	1827 Create this example.
	
	References
	1. url https://www.w3schools.com/jsref/dom_obj_all.asp
	   [20200525].
*/


// Execute main function
main();


// Define main function
function main() {
	// Create a button, a HTML DOM element object
	var btn = document.createElement("button");
	
	// Append created element to document body
	document.body.append(btn);
	
	// Set some style
	btn.style.width = "100px";
	
	// Create a string for storing messages
	var str = "Click me!";
	
	// Display the string as button caption
	btn.innerHTML = str;
	
	// Register click event to the button and executed function
	btn.addEventListener("click", btnClicked);
	
	// Display message in JS console
	console.log("js-button.js");
}


// Function executed when the button is clicked
function btnClicked() {
	// Display message in JS console
	console.log("the button is clicked!");
}