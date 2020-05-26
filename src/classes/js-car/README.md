# js-car
Abstract class and extended class related to Car class

## CarStructure class
```javascript
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
```

## Car class

```javascript
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
```
