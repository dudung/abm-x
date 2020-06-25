/*
	slide.js
	Slide for text and graphic in JS.
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200625
	1644 Move this from js-anim-slide.js experiment.
	1707 Use inherit for display to show element [1].
	1722 Remove element from document.body [2].
	1738 Relative position works [3].
	1730 Relative then absolute [4].
	1922 Add text to slide.
	2014 Event of F11 keydown for full screen in Chrome [5].
	2017 Detect fullscreen mode [6].
	2118 Finish for today.
	
	References
	1. url https://www.w3schools.com/csSref/css_inherit.asp
	   [20200625].
	2. url https://stackoverflow.com/a/58221633/9475509
	3. url https://stackoverflow.com/a/48202318/9475509
	4. url https://stackoverflow.com/a/22858298/9475509
	5. url https://developer.mozilla.org/en-US/docs/Web
	   /API/KeyboardEvent/key [20200625].
	6. url https://stackoverflow.com/a/16755234/9475509
*/


// Define class of Slide
class Slide {
	constructor() {
		this.id = arguments[0];
		this.width = 614;
		this.height = 342;
		
		this.div = document.createElement("div");
		this.div.id = this.id;
		this.div.style.width = this.width + "px";
		this.div.style.height = this.height + "px";
		this.div.style.border = "1px solid #000";
		this.div.style.padding = "0px";
		this.div.style.display = "inherit";
		this.div.style.position = "relative";
		
		this.sldiv = document.createElement("div");
		this.div.append(this.sldiv);
		//this.sldiv.style.height = (this.height-32) + "px";
		this.sldiv.style.border = "1px solid #f00";
		this.sldiv.style.position = "absolute";
		this.sldiv.style.left = "0px";
		this.sldiv.style.top = "0px";
		this.sldiv.style.padding = "1em";
		
		this.slcan = document.createElement("canvas");
		this.div.append(this.slcan);
		this.slcan.style.background = "#eef";
		this.slcan.width = this.width;
		this.slcan.height = 342;
		this.slcan.style.width = this.width + "px";
		this.slcan.style.height = this.height + "px";
		this.slcan.style.position = "aboslute";
		this.slcan.style.left = "0px";
		this.slcan.style.top = "0px";		
	}
	
	appendTo() {
		var parel = arguments[0];
		parel.append(this.div);
	}
	
	removeFrom() {
		var el = document.getElementById(this.id);
		el.remove();
	}
	
	show() {
		this.div.style.display = "inherit";
	}
	
	hide() {
		this.div.style.display = "none";
	}
	
	setContentDiv() {
		var content = arguments[0];
		this.sldiv.innerHTML = content;
	}
	
	setContentCan() {
		var content = arguments[0];
		var cx = this.slcan.getContext("2d");
		eval(content);
	}
	
	zoom() {
		var el = document.getElementById(this.id);
		el.style.transform = "scale(2.2) translate(27%, 27%)";
	}
	
	unZoom() {
		var el = document.getElementById(this.id);
		el.style.transform = "scale(1) translate(0, 0)";
	}
}
