/*
	js-car.js
	Example abstract class and class of passanger car versions
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	M Abdul Mubdi Bindar | https://github.com/abdulmubdibindar
	
	20200526
	1623 Start this class partially based on [1].
	1631 Try abstract class using new. [2].
	1643 Add Driver_Inluded [3] for better explanation.
	1738 Finish now. Note for advancing class structure.
	1749 Create README for this class.
	
	References
	1. url http://dx.doi.org/10.1016/j.enpol.2008.11.002
	2. url https://stackoverflow.com/a/43531011/9475509
	3. url https://en.wikipedia.org/w/index.php?oldid=952180603
*/

// Define global variables
var JS_CAR_TEST = true;


// Define the abstract class
class CarStructure {
	constructor() {
		this.Maximum_Length = 0;        // mm
		this.Maximum_Width = 0;         // mm
		this.Curb_Weight = 0;           // kg
		this.Driver_Included = false;    // 
		this.Luggage_Capacity = 0;      // l
		
		if(new.target === CarStructure) {
			var msg = "Cannot create an instance of "
				+ "an abstract class";
			throw new TypeError(msg);
		}
	}
};


// Define extended class
class Car extends CarStructure {
	constructor() {
		this.Make = 2000;
		this.Model = "Model";
		
		this.Transmission_Type = "manual";
		/*
		Manual
		Automatic
		*/

		this.Car_Size_Class = "Compact"
		/*
		Sport Car / Convertible
		Luxury / SUV
		Full-Size
		Mid-Size / Van
		Minivan
		Compact
		Subcompact
		Micro
		*/
				
		super();
	}
};

// Execute main function for test the classes
if(JS_CAR_TEST) main();


// Define main function
function main() {
	var car = new Car;
}




