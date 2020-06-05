/*
	agent.js
	Create and manipulate agent for abm-odm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200604
	0552 Start this library.
	0740 Test random move but not painted.
	0742 Fix color from object type.
	0905 Add checkCity function to record in visitedCity.
*/


// Define directions
var agentDirection = [
	[0, 0],   // 0 Still
	[1, 0],   // 1 Right
	[0, -1],  // 2 Top 
	[-1, 0],  // 3 Left
	[0, 1],   // 4 Down
];


// Define Agent class
class Agent {
	constructor() {
		this.x = 0;
		this.y = 0;
		if(arguments.length == 2) {
			this.x = arguments[0];
			this.y = arguments[1];
		}
		this.visitedCity = [];
	}
	
	setWorld() {
		var w = arguments[0];
		this.world = w;
	}
	
	setType() {
		var t = arguments[0];
		this.type = t;
	}
	
	paint() {
		var m = this.world.m;
		this.previousType = m[this.y][this.x];
		m[this.y][this.x] = this.type;
	}
	
	moveRandom() {
		var xsrc = this.x;
		var ysrc = this.y;
		
		var iDir = Math.floor(Math.random() * 5);
		var dx = agentDirection[iDir][0];
		var dy = agentDirection[iDir][1];
		
		var xdest = xsrc + dx;
		var ydest = ysrc + dy;
		
		var m = this.world.m;
		var type = m[ydest][xdest];
		if(0 < type && type < 12) {
			
			var previousType = this.previousType; 
			this.previousType = m[ydest][xdest];
			
			m[ydest][xdest] = this.type;
			m[ysrc][xsrc] = previousType;
			
			this.x = xdest;
			this.y = ydest;
		}
	}
		
	checkCity() {
		var c = arguments[0];
		for(var i = 0; i < c.length; i++) {
			var xmin = c[i].region[0];
			var ymin = c[i].region[1];
			var xmax = c[i].region[2];
			var ymax = c[i].region[3];
			
			var x = this.x;
			var y = this.y;
			
			var inXRange = (xmin <= x) && (x <= xmax);
			var inYRange = (ymin <= y) && (y <= ymax);
			var inRange = inXRange && inYRange;
			
			if(inRange) {
				var currentCity = i;
				var visitedCityRecord = this.visitedCity.length;
				if(visitedCityRecord > 0) {
					var lastCity = this.visitedCity[visitedCityRecord - 1];
					if(lastCity != currentCity) {
						this.visitedCity.push(currentCity);
					}
				} else if(visitedCityRecord == 0) {
					this.visitedCity.push(currentCity);
				}
			}
			
		}
	}
	
}

