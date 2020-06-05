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
	city = [];
	
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
	
	// Define NW -- NE two ways
	world.setRows(01, 02).cols(11, 41).to(1);
	world.setRows(04, 05).cols(11, 41).to(1);
	
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
	
	// Create agents of type Agent
	agent = [];
	
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
			function() { simulate(agent, world, "can0") },
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
	var w = arguments[1];
	var id = arguments[2];
	
	for(var i = 0; i < a.length; i++) {
		a[i].moveRandom();
		a[i].checkCity(city, iter);
	}
	paintMatrix(w).onCanvas(id), 
	
	//console.log(iter);
		
	iter++;
	if(iter > iterMax) {
		clearInterval(proc);
	}
}