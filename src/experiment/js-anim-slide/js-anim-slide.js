/*
	js-anim-slide.js
	Show animated slide with JS in a browser
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200624
	1903 Start this experiment.
	1928 Confuse why it does not work.
	1945 Try to use MathJax [1], but something is missing.
	1956 MathJax works after using in-line configuration [2].
	2011 Use remove async attribute [3].
	
	References
	1. url https://stackoverflow.com/a/49301815/9475509
	2. url https://docs.mathjax.org/en/v2.7-latest/configuration
	   .html [20200624].
	3. url https://stackoverflow.com/a/37916340/9475509
*/

// Define global variables
var proc, iter, iterMax;


// Execute main function
main();


// Define main function
function main() {
	var eqn =`
	There is no $a$ in following formula
	\\begin{equation}
	\\label{eqn:schroe}
	\\frac{\\partial^2 \\psi}{\\partial x^2} + (E - H) \\psi = 0
	\\end{equation}

	Equation \\eqref{eqn:schroe} is something.
	`;

	var div = document.createElement("div");
	div.innerHTML = eqn;
	document.body.append(div);
	
	MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

