/*
	city.js
	Create city for abm-odm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200604
	0825 Start this library.
	0837 It work just fine. It can be painted on canvas.
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
	
	setRegion() {
		this.region = arguments[0];
	}
	
	setWorld() {
		this.world = arguments[0];
	}
	
	paint() {
		this.world
			.setRows(this.region[0], this.region[1])
			.cols(this.region[2], this.region[3])
			.to(this.type);
	}	
}

