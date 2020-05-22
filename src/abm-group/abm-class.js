/*
	abm-class.js
	Abstract Class Agent and the implementations
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200522
	1633 Move four classes from abm-base.js file.
	1706 Move color table from abm-base.js file.
	1718 Correct  Cell constructor.
	1726 Add id to all Bit with ABMId.
*/

// Define global variables
var colors = [
	"#000", "#00f", "#0f0", "#0ff",
	"#f00", "#f0f", "#ff0", "#fff",
	"#999", "#99f", "#9f9", "#9ff",
	"#f99", "#f9f", "#ff9", "#eee",
];

var ABMCollection= [];
var ABMId = 0;

// Abstract Class Agent
class Agent {
	constructor(x, y, c) {
		if(this.constructor == Agent) {
			throw new Error("Abstract classes can not be "
			+ "instantiated.");
		}
		
		if(arguments.length == 3) {
			this.x = x;
			this.y = y;
			this.c = c
		} else {
			this.x = 0;
			this.y = 0;
			this.c = 0;
		}
	}
	
	pushToCollection() {
		throw new Error("Method 'pushToCollection()' must be "
		+ "implemented.");
	}
};


// Class of Bit
class Bit extends Agent{
	constructor(x, y, c) {
		if(arguments.length < 3) {
			super()
		} else {
			super(x, y, c);
		}
		this.id = ABMId;
		ABMId++;
	}
	
	pushToCollection() {
		ABMCollection.push(this);
		console.log(this.constructor.name);
	}
};


// Class of Worm
class Worm extends Agent {
	constructor(x, y, c, N) {
		if(arguments.length < 3) {
			super()
		} else {
			super(x, y, c);
		}
		this.agents = [];
		var N = arguments[3];
		if(N == undefined) {
			N = 4;
		}
		for(var i = 0; i < N; i++) {
			var b = new Bit(this.x + i, this.y, this.c);
			this.agents.push(b);
		}
	}
	
	pushToCollection() {
		ABMCollection.push(this);
		console.log(this.constructor.name);
	}
}


// Class of Cell
class Cell extends Agent {
	constructor(x, y, c, N) {
		if(arguments.length < 3) {
			super()
		} else {
			super(x, y, c);
		}
		this.agents = [];
		var N = arguments[3];
		if(N == undefined) {
			N = 16;
		}
		if(N < 16) N = 16
		var R = Math.round(N / 2 / Math.PI);
		var dq = 2 * Math.PI / N;
		for(var i = 0; i < N; i++) {
			var q = i * dq;
			var xx = Math.round(this.x + R * Math.cos(q));
			var yy = Math.round(this.y + R * Math.sin(q));
			var b = new Bit(xx, yy, this.c);
			this.agents.push(b);
		}
	}
	
	pushToCollection() {
		ABMCollection.push(this);
		console.log(this.constructor.name);
	}
}
