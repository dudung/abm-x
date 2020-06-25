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
	20200625
	1558 Try transform scale [4] and translate [5].
	1603 Try fullscreen [6].
	1639 Create class of Slide.
	1644 Move the class to slide.js libs folder.
	
	References
	1. url https://stackoverflow.com/a/49301815/9475509
	2. url https://docs.mathjax.org/en/v2.7-latest/configuration
	   .html [20200624].
	3. url https://stackoverflow.com/a/37916340/9475509
	4. url https://stackoverflow.com/a/57187787/9475509
	5. url https://stackoverflow.com/a/14858293/9475509
	6. url https://andrew.hedges.name/experiments/fullscreen/
	   [20200625].
*/


// Define global variables
var proc, iter, iterMax;


// Execute main function
main();


// Define main function
function main() {
	slide = new Slide("slide0");
	slide.appendTo(document.body);
		
	var eqn =`
	There is no $a$ in following formula
	
	\\begin{equation}
	\\label{eqn:schroe}
	\\frac{\\partial^2 \\psi}{\\partial x^2} + (E - H) \\psi = 0
	\\end{equation}

	Equation \\eqref{eqn:schroe} is something.
	`;
	
	slide.sldiv.innerHTML = eqn;
	
	var cx = slide.slcan.getContext("2d");
	cx.strokeStyle = "#f00";
	cx.beginPath();
	cx.arc(100, 100, 20, 0, 2 * Math.PI);
	cx.stroke();
}

	
function aa() {	
	slideShow = false;
	
	
	
	var w = 614;
	var h = 342;
	var sdiv = document.createElement("div");
	sdiv.style.width = w + "px";
	sdiv.style.height = h + "px";
	sdiv.style.border = "1px solid #000";
	sdiv.style.padding = "0px";
	sdiv.addEventListener("click", function() {
		if(!slideShow) {
			slideShow = true;
			sdiv.style.transform = "scale(2.2) translate(27%, 27%)";
			sdiv.requestFullscreen();
		} else {
			slideShow = false;
			sdiv.style.transform = "scale(1) translate(0,0)";
		}
	});
	document.body.append(sdiv);
	
	
	
	/**/
	var eqn =`
	There is no $a$ in following formula
	\\begin{equation}
	\\label{eqn:schroe}
	\\frac{\\partial^2 \\psi}{\\partial x^2} + (E - H) \\psi = 0
	\\end{equation}

	Equation \\eqref{eqn:schroe} is something.
	`;
	
	sdiv.innerHTML = eqn;
	
	//MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
	
	if(slideShow) {
		//sdiv.style.transform = "scale(2.2) translate(27%, 27%)";
		sdiv.requestFullscreen();
	}
}

