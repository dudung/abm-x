/*
	abm-odm.js
	Create origin-destination matrix (ODM)
	using agent-based model (ABM)
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	Tatang Suheri | https://repository.unikom.ac.id/54572 
	
	20200603
	0812 Start this app.
	0913 Put a ref [1].
	20200604
	0511 Test of line with -y.
	0601 Test object with type Agent.
	0747 Test of array of Agents.
	0811 Create many agents for random motion test.
	0814 Can do random motion.
	0916 Can record visited city in agent.
	200605
	1051 Finisih testDrawingLines function which works.
	1056 Fix testDrawingLines.
	
	References
	1. Martin L. Hazelton, "Some comments on origin–destination
	   matrix estimation", Transportation Research Part A: Policy
		 and Practice [Transport. Res. A-Pol.], vol. 37, no. 10,
		 pp. 811-822, Dec 2003, url
		 https://doi.org/10.1016/S0965-8564(03)00044-2
*/


// Define global variabels
var proc, iter, iterMax;

// Call main function
main();


// Define main function
function main() {
	iter = 0;
	iterMax = 10000;

	var canId = "can0";
	
	var can = document.createElement("canvas");
	can.id = canId;
	can.width = 500;
	can.height = 500;
	can.style.width = can.width + "px";
	can.style.height = can.height + "px";
	can.style.border = "1px solid #444";
	document.body.append(can);
	
	// Define world
	var world = new Matrix(50, 50, 0);
	
	// Define border -- actually not necessary
	world.setCol(0).to(0);
	world.setRow(0).to(0);
	world.setCol(49).to(0);
	world.setRow(49).to(0);
	
	// Define cities region
	var city = [];
	
	// Define NW city
	var c1 = new City;
	c1.setName("NW");
	c1.setType(2);
	c1.setRegion([01, 01, 10, 10]);
	c1.setWorld(world);
	c1.paint();
	city.push(c1);

	// Define NE city
	var c2 = new City;
	c2.setName("NE");
	c2.setType(3);
	c2.setRegion([42, 01, 48, 10]);
	c2.setWorld(world);
	c2.paint();
	city.push(c2);
	
	// Define SW city
	var c3 = new City;
	c3.setName("SW");
	c3.setType(4);
	c3.setRegion([01, 43, 10, 48]);
	c3.setWorld(world);
	c3.paint();
	city.push(c3);
	
	// Define SE city
	var c4 = new City;
	c4.setName("SE");
	c4.setType(5);
	c4.setRegion([42, 43, 48, 48]);
	c4.setWorld(world);
	c4.paint();
	city.push(c4);
	
	
	// Define roads
	road = [];
	
	// Define NW -- NE two ways
	/*
	world.drawLine2(11, 02, 41, 02).withColor(1);
	world.drawLine2(11, 03, 41, 03).withColor(1);
	world.drawLine2(11, 05, 41, 05).withColor(1);
	world.drawLine2(11, 06, 41, 06).withColor(1);
	*/
	
	// Define road from city 0 to city 1
	var lane01a = world.coordLine2(11, 02, 41, 02);
	var lane01b = world.coordLine2(11, 03, 41, 03);
	var lane01 = lane01a.concat(lane01b);
	var r01 = new Road();
	r01.setName("0->1");
	r01.setType(1);
	r01.setWorld(world);
	r01.setRegionXY(lane01);
	r01.setDirection([1, 2, 4], [0.6, 0.2, 0.2]);
	r01.paint();
	road.push(r01);
	
	// Define road from city 1 to city 2
	var lane10a = world.coordLine2(11, 05, 41, 05);
	var lane10b = world.coordLine2(11, 06, 41, 06);
	var lane10 = lane10a.concat(lane10b);
	var r10 = new Road();
	r10.setName("1->0");
	r10.setType(1);
	r10.setWorld(world);
	r10.setRegionXY(lane10);
	r01.setDirection([3, 4, 2], [0.6, 0.2, 0.2]);
	r10.paint();
	road.push(r10);
	
	/*
	// Define NW -- NE two ways
	world.setRows(02, 03).cols(11, 41).to(1);
	world.setRows(05, 06).cols(11, 41).to(1);
	
	// Define SW -- SE two ways
	world.setRows(48, 48).cols(11, 41).to(1);
	world.setRows(45, 45).cols(11, 41).to(1);

	// Define NW -- SW two ways
	world.setRows(11, 42).cols(01, 02).to(1);
	world.setRows(11, 42).cols(04, 05).to(1);
	
	// Define NE -- SE two ways
	world.setRows(11, 42).cols(47, 48).to(1);
	world.setRows(11, 42).cols(44, 45).to(1);
	
	// Define NW -- SE two ways
	world.drawLine(10, 11, 41, 42).withColor(1);
	world.drawLine(11, 11, 42, 42).withColor(1);
	world.drawLine(07, 11, 40, 44).withColor(1);
	world.drawLine(08, 11, 41, 44).withColor(1);
	
	// Define SW -- NE two ways
	world.drawLine(11, 43, 43, 11).withColor(1);
	world.drawLine(11, 44, 43, 12).withColor(1);
	world.drawLine(08, 42, 41, 09).withColor(1);
	world.drawLine(09, 42, 41, 10).withColor(1);
	*/
	
	// Create agents of type Agent
	var agent = [];
	
	// Create agents of type 1
	var posType1 = [
		[02, 02], [04, 02], [06, 02], [08, 02],
		[02, 04], [04, 04], [06, 04], [08, 04],
		[02, 06], [04, 06], [06, 06], [08, 06],
		[02, 08], [04, 08], [06, 08], [08, 08],
	];
	var type1 = 12;
	for(var i = 0; i < posType1.length; i++) {
		var x = posType1[i][0];
		var y = posType1[i][1];
		var a = new Agent(x, y);
		a.setWorld(world);
		a.setType(type1);
		a.checkCity(city, iter);
		a.paint();
		agent.push(a);
	}
	
	// Create agents of type 2
	var posType2 = [
		[43, 02], [45, 02], [47, 02],
		[43, 04], [45, 04], [47, 04],
		[43, 06], [45, 06], [47, 06],
		[43, 08], [45, 08], [47, 08],
	];
	var type2 = 13;
	for(var i = 0; i < posType2.length; i++) {
		var x = posType2[i][0];
		var y = posType2[i][1];
		var a = new Agent(x, y);
		a.setWorld(world);
		a.setType(type2);
		a.checkCity(city, iter);
		a.paint();
		agent.push(a);
	}
	
	// Create agents of type 3
	var posType3 = [
		[02, 45], [04, 45], [06, 45], [08, 45],
		[02, 47], [04, 47], [06, 47], [08, 47],
	];
	var type3 = 14;
	for(var i = 0; i < posType3.length; i++) {
		var x = posType3[i][0];
		var y = posType3[i][1];
		var a = new Agent(x, y);
		a.setWorld(world);
		a.setType(type3);
		a.checkCity(city, iter);
		a.paint();
		agent.push(a);
	}
	
	// Create agents of type 4
	var posType4 = [
		[43, 45], [45, 45], [47, 45],
		[43, 47], [45, 47], [47, 47],
	];
	var type4 = 15;
	for(var i = 0; i < posType4.length; i++) {
		var x = posType4[i][0];
		var y = posType4[i][1];
		var a = new Agent(x, y);
		a.setWorld(world);
		a.setType(type4);
		a.checkCity(city, iter);
		a.paint();
		agent.push(a);
	}

	// Paint the matrix on canvas
	paintMatrix(world).onCanvas(canId);
	
	START = true;
	
	if(START) {
		proc = setInterval(
			function() { 
				simulate(
					agent, road, city, 
					world, "can0") },
			1
		);
		START = false;
	}
	
	can.addEventListener("click", function() {
		var e = arguments[0];
		var t = e.target;
		var x = e.offsetX;
		var y = e.offsetY;
		
		var dx = matrixPixelSize;
		var dy = matrixPixelSize;
		
		var c = Math.floor(x / dx);
		var r = Math.floor(y / dy);
		if(world != undefined) {
			world.m[r][c] = 1;
		}
		
		//console.log(r, c);
		paintMatrix(world).onCanvas(canId);
	});

}


// Simulate
function simulate() {
	var a = arguments[0];
	var r = arguments[1];
	var c = arguments[2];
	var w = arguments[3];
	var id = arguments[4];
	
	for(var i = 0; i < a.length; i++) {
		a[i].moveOnRoad(r);
		a[i].checkCity(c, iter);
	}
	paintMatrix(w).onCanvas(id), 
	
	//console.log(iter);
		
	iter++;
	if(iter > iterMax) {
		clearInterval(proc);
	}
}


// Function test drawing lines
function testDrawingLines() {
	var world = arguments[0];
	
	world.drawLine2(20, 20, 30, 29).withColor(1); // SE
	world.drawLine2(20, 24, 30, 34).withColor(1); // SE
	world.drawLine2(20, 28, 30, 39).withColor(1); // SE
	
	world.drawLine2(20, 20, 30, 09).withColor(3); // NE
	world.drawLine2(20, 24, 30, 14).withColor(3); // NE
	world.drawLine2(20, 28, 30, 19).withColor(3); // NE
	
	world.drawLine2(20, 20, 10, 29).withColor(4); // SW
	world.drawLine2(20, 24, 10, 34).withColor(4); // SW
	world.drawLine2(20, 28, 10, 39).withColor(4); // SW
	
	world.drawLine2(20, 20, 10, 11).withColor(5); // NW
	world.drawLine2(20, 24, 10, 14).withColor(5); // NW
	world.drawLine2(20, 28, 10, 19).withColor(5); // NW

	world.drawLine2(20, 19, 20, 09).withColor(6); // N
	world.drawLine2(21, 20, 31, 20).withColor(7); // E
	world.drawLine2(19, 20, 09, 20).withColor(8); // W
	world.drawLine2(20, 21, 20, 31).withColor(9); // S
}