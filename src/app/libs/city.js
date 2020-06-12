/*
	city.js
	Create city for abm-odm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200604
	0825 Start this library.
	0837 It work just fine. It can be painted on canvas.
	20200612
	2142 Extend City to CitySIR for tomorrow.
*/


// Define City class
class City {
	constructor() {
	}
	
	setName() {
		this.name = arguments[0];;
	}
	
	setType() {
		this.type = arguments[0];
	}
	
	// [xmin, ymin, xmax, ymax]
	// [col1, row1, col2, row2]
	setRegion() {
		this.region = arguments[0];
	}
	
	setWorld() {
		this.world = arguments[0];
	}
	
	// [xmin, ymin, xmax, ymax]
	// [col1, row1, col2, row2]
	paint() {
		this.world
			.setRows(this.region[1], this.region[3])
			.cols(this.region[0], this.region[2])
			.to(this.type);
	}	
}


// Define CitySIR class
class CitySIR extends City {
	constructor() {
	}
	
	calcSIR() {
		var iter = arguments[0];
		var a = arguments[1];
	}
}
