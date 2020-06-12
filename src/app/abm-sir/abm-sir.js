/*
	abm-sir.js
	Agent-based model (ABM) and susceptible-infected-recovered
	(SIR) model
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	Armi Susandi | https://fitb.itb.ac.id/dr-rer-nat-armi-susandi-mt 
	
	20200608
	2040 Start this app using abm-odm as the base.
	2047 Clean some lines.
	2101 Test and the old still works. Save for today. Pause.
	20200611
	0849 Create center free area.
	20200612
	1032 Read [1].
	1130 Move libraries to libs folder.
	1133 Comment all cities and roads, make free space + border.
	1137 Get solution for SIR from [2].
	1638 Add referensi [3].
	1657 Archive previous function and clear the code.
	1733 Make four equal region with the same population density.
	1741 Simplify code, general vars, func for cities and agents.
	1753 Create vertical wall. Pause.
	1927 Set wall hole with dataSetId.
	20200612
	2141 Pause. To-Do is listing S, I, R in each city.
	
	References
	1. url https://stackoverflow.com/a/48906011/9475509
	2. Albert-László Barabási, "Spreading Phonomena", in Network
	   Science, chapter 10, Cambridge University Press, 1st
		 edition, Aug 2016,
		 url https://isbnsearch.org/isbn/9781107076266,
		 http://networksciencebook.com/chapter/10,
		 https://barabasi.com/f/617.pdf.
	3. Tiberiu Harko, Francisco S. N. Lobo, M. K. Mak, "Exact
	   analytical solutions of the Susceptible-Infected-Recovered
		 (SIR) epidemic model and of the SIR model with equal death
		 and birth rates", Applied Mathematics and Computation
		 [Appl. Math. Comput.], vol. 236, no., pp. 184-194, Jun
		 2014, url https://doi.org/10.1016/j.amc.2014.03.030.
*/


// Define global variabels
var proc, iter, iterMax;
var dataSetId;
var world, city, road, agent;
var healingTime;

// Call main function
main();


// Define main function
function main() {
	// Available 0, 1, 2, 4, 5
	dataSetId = 1;
	
	healingTime = 14;
	
	iter = 0;
	iterMax = 10000;
	
	var canId = "can0";
	var can = document.createElement("canvas");
	can.id = canId;
	can.width = 245 * 2;
	can.height = 245 * 2;
	can.style.width = can.width + "px";
	can.style.height = can.height + "px";
	can.style.border = "1px solid #444";
	can.style.float = "left";
	document.body.append(can);
	
	// Default value is 10 with w = 500, h = 500
	matrixPixelSize = 5 * 2;
	
	var div = document.createElement("div");
	div.style.border = "0px solid #888";
	div.style.height = "500px";
	div.style.width = "270px";
	div.style.float = "left";
	document.body.append(div);
		
	var btn = document.createElement("button");
	btn.innerHTML = "Start";
	div.append(btn);
	
	btn.addEventListener("click", function() {
		var e = arguments[0];
		var t = e.target;
		console.log(t.innerHTML);
		if(t.innerHTML == "Start") {
			proc = setInterval(
				function() { 
					simulate(
						agent, road, city, 
						world, "can0") 
				},
				10
			);
			
			t.innerHTML = "Stop";
		} else {
			clearInterval(proc);
			t.innerHTML = "Start";
		}
	});
	
	txa = document.createElement("textarea");
	txa.style.width = "265px";
	txa.style.height = "475px";
	txa.style.overflowY = "scroll";
	div.append(txa);
	
	// Define world
	world = new Matrix(49, 49, 1);
	
	// Define border -- actually not necessary
	world.setCol(0).to(0);
	world.setRow(0).to(0);
	world.setCol(48).to(0);
	world.setRow(48).to(0);
	
	// Select case according to dataSetId
	world.setRow(24).to(0);
	world.setCol(24).to(0);
	
	dataSetId = 6;
	
	if(dataSetId < 6) {
		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < dataSetId; j++) {
				world.m[24][3 + i * 5 + j] = 1;
				world.m[3 + i * 5 + j][24] = 1;
				world.m[24][45 - (i * 5 + j)] = 1;
				world.m[45 - (i * 5 + j)][24] = 1;
			}
		}
	} else {
		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < dataSetId; j++) {
				world.m[24][3 + i * 5 + j] = 1;
				//world.m[3 + i * 5 + j][24] = 1;
				world.m[24][45 - (i * 5 + j)] = 1;
				//world.m[45 - (i * 5 + j)][24] = 1;
			}
		}
	}
	
	// Define cities region
	city = [];
	createAllCities();
	
	// Define roads
	road = [];
	createAllRoads();
	
	// Create agents of type Agent, typeS
	agent = [];
	createAllAgents();
	
	// Set infection agent
	agent[10].setInfected(iter);
	
	// Display agents
	var N = agent.length;
	for(var i = 0; i < N; i++) {
		agent[i].paint();
	}
	
	// Paint the matrix on canvas
	paintMatrix(world).onCanvas(canId);
		
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
		a[i].heal(iter);
		a[i].spreadInfection(iter, a);
	}
	paintMatrix(w).onCanvas(id);
	
	
	
	
	var str = iter + "\n";
	for(var i = 0; i < agent.length; i++) {
		str += ("0" + i).slice(-2) + " | ";
		str += agent[i].visitedCity + " | ";
		str += agent[i].visitedIter + "\n";
	}
	txa.value = str;
		
	iter++;
	if(iter > iterMax) {
		clearInterval(proc);
	}
}

	
// Create all agents
function createAllAgents() {
	// Create of agent in NW region, typeS
	var xmin = 2;
	var xmax = 23;
	var dx = 2;
	var ymin = 2;
	var ymax = 23;
	var dy = 2;
	for(var y = ymin; y <= ymax; y += dy) {
		for(var x = xmin; x <= xmax; x += dx) {
			var a = new AgentSIR(x, y);
			a.setWorld(world);
			a.setSusceptible(iter);
			a.setHealingTime(healingTime);
			a.checkCity(city, iter);
			agent.push(a);
		}
	}
	
	// Create of agent in NE region, typeS
	var xmin = 26;
	var xmax = 47;
	var dx = 2;
	var ymin = 2;
	var ymax = 23;
	var dy = 2;
	for(var y = ymin; y <= ymax; y += dy) {
		for(var x = xmin; x <= xmax; x += dx) {
			var a = new AgentSIR(x, y);
			a.setWorld(world);
			a.setSusceptible(iter);
			a.setHealingTime(healingTime);
			a.checkCity(city, iter);
			agent.push(a);
		}
	}
	
	// Create of agent in SW region, typeS
	var xmin = 2;
	var xmax = 23;
	var dx = 2;
	var ymin = 26;
	var ymax = 47;
	var dy = 2;
	for(var y = ymin; y <= ymax; y += dy) {
		for(var x = xmin; x <= xmax; x += dx) {
			var a = new AgentSIR(x, y);
			a.setWorld(world);
			a.setSusceptible(iter);
			a.setHealingTime(healingTime);
			a.checkCity(city, iter);
			agent.push(a);
		}
	}
	
	// Create of agent in SE region, typeS
	var xmin = 26;
	var xmax = 47;
	var dx = 2;
	var ymin = 26;
	var ymax = 47;
	var dy = 2;
	for(var y = ymin; y <= ymax; y += dy) {
		for(var x = xmin; x <= xmax; x += dx) {
			var a = new AgentSIR(x, y);
			a.setWorld(world);
			a.setSusceptible(iter);
			a.setHealingTime(healingTime);
			a.checkCity(city, iter);
			agent.push(a);
		}
	}
}	

	
// Create all roads
function createAllRoads() {
}


// Create all cities
function createAllCities() {
	// Define NW city
	var c1 = new CitySIR;
	c1.setName("NW");
	c1.setType(5);
	c1.setRegion([01, 01, 23, 23]);
	c1.setWorld(world);
	c1.paint();
	city.push(c1);

	// Define NE city
	var c1 = new City;
	c1.setName("NW");
	c1.setType(5);
	c1.setRegion([25, 01, 47, 23]);
	c1.setWorld(world);
	c1.paint();
	city.push(c1);
	
	// Define SW city
	var c1 = new City;
	c1.setName("NW");
	c1.setType(5);
	c1.setRegion([01, 25, 23, 47]);
	c1.setWorld(world);
	c1.paint();
	city.push(c1);
	
	// Define SE city
	var c1 = new City;
	c1.setName("NW");
	c1.setType(5);
	c1.setRegion([25, 25, 47, 47]);
	c1.setWorld(world);
	c1.paint();
	city.push(c1);
}


// Archive previous version
function previousFunction() {
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
	
	// Define OO city
	var c5 = new City;
	c5.setName("OO");
	c5.setType(1);
	c5.setRegion([22, 23, 28, 30]);
	c5.setWorld(world);
	c5.paint();
	city.push(c5);
	
	// Define roads
	var road = [];
	
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
	
	// Define road from city 1 to city 0
	var lane10a = world.coordLine2(11, 05, 41, 05);
	var lane10b = world.coordLine2(11, 06, 41, 06);
	var lane10 = lane10a.concat(lane10b);
	var r10 = new Road();
	r10.setName("1->0");
	r10.setType(1);
	r10.setWorld(world);
	r10.setRegionXY(lane10);
	r10.setDirection([3, 4, 2], [0.6, 0.2, 0.2]);
	r10.paint();
	road.push(r10);

	// Define road from city 2 to city 3
	var lane23 = world.coordLine2(11, 48, 41, 48);
	var r23 = new Road();
	r23.setName("2->3");
	r23.setType(1);
	r23.setWorld(world);
	r23.setRegionXY(lane23);
	r23.setDirection([3, 4, 2], [0.6, 0.2, 0.2]);
	r23.paint();
	road.push(r23);

	// Define road from city 3 to city 2
	var lane32 = world.coordLine2(11, 45, 41, 45);
	var r32 = new Road();
	r32.setName("3->2");
	r32.setType(1);
	r32.setWorld(world);
	r32.setRegionXY(lane32);
	r32.setDirection([1, 2, 4], [0.6, 0.2, 0.2]);
	r32.paint();
	road.push(r32);
	
	// Define road from city 2 to city 0
	var lane20a = world.coordLine2(01, 11, 01, 42);
	var lane20b = world.coordLine2(02, 11, 02, 42);
	var lane20 = lane20a.concat(lane20b);
	var r20 = new Road();
	r20.setName("2->0");
	r20.setType(1);
	r20.setWorld(world);
	r20.setRegionXY(lane20);
	r20.setDirection([2, 3, 1], [0.6, 0.2, 0.2]);
	r20.paint();
	road.push(r20);
	
	// Define road from city 0 to city 2
	var lane02a = world.coordLine2(04, 11, 04, 42);
	var lane02b = world.coordLine2(05, 11, 05, 42);
	var lane02 = lane02a.concat(lane02b);
	var r02 = new Road();
	r02.setName("0->2");
	r02.setType(1);
	r02.setWorld(world);
	r02.setRegionXY(lane02);
	r02.setDirection([4, 1, 3], [0.6, 0.2, 0.2]);
	r02.paint();
	road.push(r02);

	// Define road from city 1 to city 3
	var lane13a = world.coordLine2(47, 11, 47, 42);
	var lane13b = world.coordLine2(48, 11, 48, 42);
	var lane13 = lane13a.concat(lane13b);
	var r13 = new Road();
	r13.setName("1->3");
	r13.setType(1);
	r13.setWorld(world);
	r13.setRegionXY(lane13);
	r13.setDirection([4, 1, 3], [0.6, 0.2, 0.2]);
	r13.paint();
	road.push(r13);

	// Define road from city 0 to city 3
	var lane03a = world.coordLine2(10, 11, 41, 42);
	var lane03b = world.coordLine2(11, 11, 42, 42);
	var lane03 = lane03a.concat(lane03b);
	var r03 = new Road();
	r03.setName("0->3");
	r03.setType(1);
	r03.setWorld(world);
	r03.setRegionXY(lane03);
	r03.setDirection([1, 3, 4], [0.4, 0.2, 0.4]);
	r03.paint();
	road.push(r03);

	// Define road from city 3 to city 0
	var lane30a = world.coordLine2(07, 11, 40, 44);
	var lane30b = world.coordLine2(08, 11, 41, 44);
	var lane30 = lane30a.concat(lane30b);
	var r30 = new Road();
	r30.setName("3->0");
	r30.setType(1);
	r30.setWorld(world);
	r30.setRegionXY(lane30);
	r30.setDirection([2, 3, 1], [0.4, 0.4, 0.2]);
	r30.paint();
	road.push(r30);

	// Define road from city 2 to city 1
	var lane21a = world.coordLine2(11, 43, 43, 11);
	var lane21b = world.coordLine2(11, 44, 43, 12);
	var lane21 = lane21a.concat(lane21b);
	var r21 = new Road();
	r21.setName("2->1");
	r21.setType(1);
	r21.setWorld(world);
	r21.setRegionXY(lane21);
	r21.setDirection([1, 2, 3], [0.4, 0.4, 0.2]);
	r21.paint();
	road.push(r21);

	// Define road from city 1 to city 2
	var lane12a = world.coordLine2(08, 42, 41, 09);
	var lane12b = world.coordLine2(09, 42, 41, 10);
	var lane12 = lane12a.concat(lane12b);
	var r12 = new Road();
	r12.setName("1->2");
	r12.setType(1);
	r12.setWorld(world);
	r12.setRegionXY(lane12);
	r12.setDirection([3, 4, 1], [0.4, 0.4, 0.2]);
	r12.paint();
	road.push(r12);
	
	// Create agents of type Agent
	agent = [];
	
	// Create agents of type 1
	var posType1 = [
		[02, 02], [04, 02], [06, 02], [08, 02], // 0
		[02, 04], [04, 04], [06, 04], [08, 04],
		
		[02, 06], [04, 06], [06, 06], [08, 06], // +1
		[02, 08], [04, 08], [06, 08], [08, 08],
		
		[03, 03], [05, 03], [07, 03], [09, 03], // +2
		[03, 05], [05, 05], [07, 05], [09, 05],
		[03, 07], [05, 07], [07, 07], [09, 07],
		[03, 09], [05, 09], [07, 09], [09, 09],
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
		[43, 02], [45, 02], [47, 02], // 0
		[43, 04], [45, 04], [47, 04],

		[43, 06], [45, 06], [47, 06], // +1
		[43, 08], [45, 08], [47, 08],
		
		[44, 03], [46, 03],           // +2
		[44, 05], [46, 05],
		[44, 07], [46, 07],
		[44, 09], [46, 09],
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
		[02, 45], [04, 45], [06, 45], [08, 45], // 0

		[02, 47], [04, 47], [06, 47], [08, 47], // +1

		[03, 46], [05, 46], [07, 46], [09, 46], // +2
		[03, 44], [05, 44], [07, 44], [09, 44],
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
		[43, 45], [45, 45], [47, 45], // 0

		[43, 47], [45, 47], [47, 47], // +1

		[44, 46], [46, 46],           // +1
		[44, 44], [46, 44],
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
}

