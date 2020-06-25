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
	2014 Detect fullscreen mode other way [7].
	
	References
	1. url https://stackoverflow.com/a/49301815/9475509
	2. url https://docs.mathjax.org/en/v2.7-latest/configuration
	   .html [20200624].
	3. url https://stackoverflow.com/a/37916340/9475509
	4. url https://stackoverflow.com/a/57187787/9475509
	5. url https://stackoverflow.com/a/14858293/9475509
	6. url https://andrew.hedges.name/experiments/fullscreen/
	   [20200625].
	7. url https://stackoverflow.com/a/16755234/9475509
*/


// Define global variables
var proc, iter, iterMax;


// Execute main function
main();


// Define main function
function main() {
	slide = new Slide("slide0");
	slide.appendTo(document.body);
	
	slide.setContentDiv(`
	Cirlce in $xy$-plane is set of points that has the relation
	
	\\begin{equation}
	\\label{eqn:circle-equation}
	(x - x_c)^2 + (y - y_c)^2 = R^2,
	\\end{equation}

	where $(x_c, y_c)$ is center point of the circle with radius
	$R$.
	
	<br /><br />
	<center>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	$(x, y)$
	</center>

	<br />
	<center>
	$R$
	&nbsp;&nbsp;&nbsp;&nbsp;
	</center>


	<br />
	<center>
	$(x_c, y_c)$
	</center>
	<br /><br />
	
	Every point $(x, y)$, where the red point is an example, will obey Eqn. \\eqref{eqn:circle-equation}.
	`);
	
	slide.setContentCan(`
	cx.lineWidth = 2;
	cx.strokeStyle = "#00f";
	cx.beginPath();
	cx.arc(307, 210, 50, 0, 2 * Math.PI);
	cx.stroke();
	
	cx.strokeStyle = "#00f";
	cx.beginPath();
	cx.moveTo(307, 210);
	cx.lineTo(330, 165);
	cx.stroke();
	
	cx.fillStyle = "#00f";
	cx.beginPath();
	cx.arc(307, 210, 3, 0, 2 * Math.PI);
	cx.fill();
	
	cx.fillStyle = "#f00";
	cx.beginPath();
	cx.arc(330, 165, 3, 0, 2 * Math.PI);
	cx.fill();
	`);
	
	//MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

	document.body.addEventListener("keydown", function() {
		var e = event;
		if(e.key == "F11") {
			if(window.innerWidth == screen.width) {
				slide.zoom();
			} else {
				slide.unZoom();
			}
		}
		var isFullscreen = document.fullscreenElement != null;
				
	});
}
