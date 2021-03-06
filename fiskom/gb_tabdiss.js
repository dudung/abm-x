/*
	gb_tabdiss.js
	Tablet dissolution simulation based on grid model
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180613
	Create this HTML application based on lib/grid/table.js
	in butiran.js libraries and functions.
	Constructing createAndSetLayoutElements, createStyle.
	20180614
	Continue creating this application, with functions
	createIODiv, createAllStyles, changeStyleAttribute, openTA.
	Rename createIODiv to createIOTabText.
	20180620
	Rename it from gstd to tdsbgm and rebuild it from opsebf.
	Add CDN only for development.
	20180929
	Change name according to new naming convention.
	CDN https://rawgit.com/dudung/butiran/master/app
	/gb_tabdiss.html
*/

// Define some global variables
var t, dt, tbeg, tend;
var Tdata, sample;
var proc;
var tabs1, tabs2, bgroup;
var coordMin, coordMax;
var tablet, initial, geomet, maxXY, maxYZ, maxXZ;

// Call main function
main();

// Define main function
function main() {
	// Set layout of elements
	setLayout();
	
	// Log something
	log();
		
	// Set timer for processing simulation
	proc = new Timer(simulate, 1);
}

// Perform simulation
function simulate() {
	// Format time t
	t = +t.toFixed(10);
	
	// Dissolve tablet
	Tablet.stepDissolve(tablet);
	
	// Calculate remains of tablet
	var remains = Tablet.getRemains(tablet);
	
	// Display result in certain period of time
	if(sample.sampling()) {
		var tt = +(t / tend).toFixed(4);
		var rr = +(remains / initial).toFixed(4);
		var data = tt + " "
			+ rr + "";
		tabs1.text("Results").push(data);
		var textarea = tabs1.element("Results");
		textarea.scrollTop = textarea.scrollHeight;
		
		// Get projection
		var projXY = Tablet.getProjectionOf(tablet).onPlane("xy");
		var projYZ = Tablet.getProjectionOf(tablet).onPlane("yz");
		var projXZ = Tablet.getProjectionOf(tablet).onPlane("xz");
		
		Tablet.normalizeProjectionInitial(projXY, maxXY);
		Tablet.normalizeProjectionInitial(projYZ, maxYZ);
		Tablet.normalizeProjectionInitial(projXZ, maxXZ);
		
		var row, col, sr, sc, sizer, sizec;
		
		sc = (tabs2.graphic("xy").getCoord()[2] -
			tabs2.graphic("xy").getCoord()[0]);
		sr = (tabs2.graphic("xy").getCoord()[3] -
			tabs2.graphic("xy").getCoord()[1]);
		row	= projXY.length;
		col = projXY[0].length;
		sizer = sr / row;
		sizec = sc / col;
		tabs2.graphic("xy").clear();
		for(var r = 0; r < row; r++) {
			for(var c = 0; c < col; c++) {
				var val = projXY[r][c];
				var colR = 1 - val;
				var colG = 1 - val;
				var colB = 1 - val;
				var color = RGB.double2rgb(colR, colG, colB);
				var x = c * sizec;
				var y = r * sizer;
				tabs2.graphic("xy").setFillColor(color);
				var w = 1.1 * sizec;
				var h = 1.1 * sizer;
				tabs2.graphic("xy").fillRect(x, y, w, h);
			}
		}
		
		sc = (tabs2.graphic("yz").getCoord()[2] -
			tabs2.graphic("yz").getCoord()[0]);
		sr = (tabs2.graphic("yz").getCoord()[3] -
			tabs2.graphic("yz").getCoord()[1]);
		row	= projYZ.length;
		col = projYZ[0].length;
		sizer = sr / row;
		sizec = sc / col;
		tabs2.graphic("yz").clear();
		for(var r = 0; r < row; r++) {
			for(var c = 0; c < col; c++) {
				var val = projYZ[r][c];
				var colR = 1 - val;
				var colG = 1 - val;
				var colB = 1 - val;
				var color = RGB.double2rgb(colR, colG, colB);
				var x = c * sizec;
				var y = r * sizer;
				tabs2.graphic("yz").setFillColor(color);
				var w = 1.1 * sizec;
				var h = 1.1 * sizer;
				tabs2.graphic("yz").fillRect(x, y, w, h);
			}
		}
		
		sc = (tabs2.graphic("xz").getCoord()[2] -
			tabs2.graphic("xz").getCoord()[0]);
		sr = (tabs2.graphic("xz").getCoord()[3] -
			tabs2.graphic("xz").getCoord()[1]);
		row	= projXZ.length;
		col = projXZ[0].length;
		sizer = sr / row;
		sizec = sc / col;
		tabs2.graphic("xz").clear();
		for(var r = 0; r < row; r++) {
			for(var c = 0; c < col; c++) {
				var val = projXZ[r][c];
				var colR = 1 - val;
				var colG = 1 - val;
				var colB = 1 - val;
				var color = RGB.double2rgb(colR, colG, colB);
				var x = c * sizec;
				var y = r * sizer;
				tabs2.graphic("xz").setFillColor(color);
				var w = 1.1 * sizec;
				var h = 1.1 * sizer;
				tabs2.graphic("xz").fillRect(x, y, w, h);
			}
		}
	}
	
	// Terminate simulation when end time is reached
	if(t >= tend) {
		proc.stop();
		var ts = Timer.ts() + "|";
		tabs1.text("Log").push(ts + "Simulation stopped t = tend");
		bgroup.disable("Start");
		bgroup.setCaption("Start").to("Start");
		bgroup.enable("Draw");
	}
	
	// Increase time t
	t += dt;
}

// Set layout of elements
function setLayout() {
	// Create title page
	var p = document.createElement("p");
	p.innerHTML = "Table dissolution simulation " +
		"based on grid model";
	p.style.fontWeight = "bold";
	document.body.append(p);

	// Define first Tabs
	tabs1 = new Tabs("tabs1");
	tabs1.setWidth("350px");
	tabs1.setHeight("240px");
	tabs1.addTab("Log", 0);
	tabs1.addTab("Params", 0);
	tabs1.addTab("Results", 0);
	
	// Define second Tabs
	tabs2 = new Tabs("tabs2");
	tabs2.setWidth("300px");
	tabs2.setHeight("300px");
	tabs2.addTab("xy", 1);
	tabs2.addTab("yz", 1);
	tabs2.addTab("xz", 1);
	tabs2.addTab("tN", 1);
	
	// Clear all tabs
	tabs1.text("Params").clear();
	tabs1.text("Results").clear();
	tabs1.text("Log").clear();
	tabs2.graphic("xy").clear();
	tabs2.graphic("yz").clear();
	tabs2.graphic("xz").clear();
	tabs2.graphic("tN").clear();

	// Define bgroup
	bgroup = new Bgroup("bgroup");
	bgroup.setWidth("60px");
	bgroup.setHeight("147px");
	bgroup.addButton("Clear");
	bgroup.addButton("Load");
	bgroup.addButton("Read");
	bgroup.addButton("Start");
	bgroup.addButton("Draw");
	bgroup.addButton("Help");
	bgroup.addButton("About");
	bgroup.disable("Read");
	bgroup.disable("Start");
	bgroup.disable("Draw");
}

// Load parameters
function loadParameters() {
	tabs1.text("Params").push("GEOMET 3");
	tabs1.text("Params").push("DIMENX 50"); //50
	tabs1.text("Params").push("DIMENY 50"); //50
	tabs1.text("Params").push("DIMENZ 50"); //50
	tabs1.text("Params").push("DIMEXH 20");
	tabs1.text("Params").push("DIMEYH 20");
	tabs1.text("Params").push("MAXVAL 1000"); //1000
	tabs1.text("Params").push();
	tabs1.text("Params").push("TSTEP 1");
	tabs1.text("Params").push("TDATA 100");
	tabs1.text("Params").push("TBEG 0");
	tabs1.text("Params").push("TEND 20000");
	tabs1.text("Params").push();
	tabs1.text("Params").push("COORDMIN 0 0 0");
	tabs1.text("Params").push("COORDMAX 100 100 100");
	var ta = tabs1.element("Params");
	ta.scrollTop = ta.scrollHeight;
}
	
// Get parameters
function readParameters() {
	var text = tabs1.element("Params").value;
	geomet = Parse.getFrom(text).valueOf("GEOMET");
	Nx = Parse.getFrom(text).valueOf("DIMENX");
	Ny = Parse.getFrom(text).valueOf("DIMENY");
	Nz = Parse.getFrom(text).valueOf("DIMENZ");
	Nxh = Parse.getFrom(text).valueOf("DIMEXH");
	Nyh = Parse.getFrom(text).valueOf("DIMEYH");
	maxValue = Parse.getFrom(text).valueOf("MAXVAL");
	tbeg = Parse.getFrom(text).valueOf("TBEG");
	tend = Parse.getFrom(text).valueOf("TEND");
	dt = Parse.getFrom(text).valueOf("TSTEP");
	Tdata = Parse.getFrom(text).valueOf("TDATA");
	coordMin = Parse.getFrom(text).valueOf("COORDMIN");
	coordMax = Parse.getFrom(text).valueOf("COORDMAX");
	
	// Initiate tablet
	if(geomet == 0) {
		tablet = Tablet.createBlockTablet(Nx, Nx, Nx);
	} else if(geomet == 1) {
		tablet = Tablet.createEllipsoidTablet(Nx, Nx, Nx);
	} else if(geomet == 2) {
		tablet = Tablet.createCylinderTablet(Nx, Nx, Nx);
	} else if(geomet == 3) {
		tablet = Tablet.createHollowCylinderTablet(Nx, Nx, Nx,
			Nxh, Nxh);
	}
	Tablet.setMaxValue(tablet, maxValue);
	initial = Tablet.getRemains(tablet);
	
	// Get projection
	var projXY = Tablet.getProjectionOf(tablet).onPlane("xy");
	var projYZ = Tablet.getProjectionOf(tablet).onPlane("yz");
	var projXZ = Tablet.getProjectionOf(tablet).onPlane("xz");
	
	maxXY = Tablet.getMaxProjection(projXY);
	maxYZ = Tablet.getMaxProjection(projYZ);
	maxXZ = Tablet.getMaxProjection(projXZ);
	
	// Initiate time
	t = tbeg;
	
	// Set sampling
	sample = new Sample(Tdata, dt);
	
	// Set coordinate ranges
	tabs2.graphic("xy").setCoord(
		[coordMin.x, coordMin.y, coordMax.x, coordMax.y]);
	tabs2.graphic("yz").setCoord(
		[coordMin.y, coordMin.z, coordMax.y, coordMax.z]);
	tabs2.graphic("xz").setCoord(
		[coordMin.x, coordMin.z, coordMax.x, coordMax.z]);
	tabs2.graphic("tN").setCoord(
		[0, 0, 1, 1]);
}	

// Log something and show manually	
function log() {
	try { 
		console.log(
			showOnly(logjs).forFilter(
				{
					app: "tdsbgm",
					date: "20180623",
					after: "2000",
				}
			)
		);
	}
	catch(err) {
		var msg = "opsebf logs only in development stage";
		console.warn(msg);
	}
}

// Do something when buttons clicked
function buttonClick(event) {
	var target = event.target;
	
	if(target.innerHTML == "Start") {
		target.innerHTML = "Stop";
		proc.start();
		var ts = Timer.ts() + "|";
		tabs1.text("Log").push(ts + "Simulation is starting");
		var ta = tabs1.element("Log");
		ta.scrollTop = ta.scrollHeight;
		bgroup.disable("Draw");
	} else if(target.innerHTML == "Stop"){
		target.innerHTML = "Start";
		proc.stop();
		var ts = Timer.ts() + "|";
		tabs1.text("Log").push(ts + "Simulation stopped");
		var ta = tabs1.element("Log");
		ta.scrollTop = ta.scrollHeight;
		bgroup.enable("Draw");
	}
	
	if(target.innerHTML == "About") {
		alert(
			"tdsbgm | "
			+ "Table dissolution simulation based on grid model"
			+ "\n"
			+ "Version 20180623"
			+ "\n"
			+ "Sparisoma Viridi | dudung@gmail.com"
			+ "\n"
			+ "\n"
			+ "Based on butiran "
			+ "| https://github.com/dudung/butiran"
			+ "\n"
			+ "MIT License | "
			+ "Copyright (c) 2018 Sparisoma Viridi"
		);
		var ts = Timer.ts() + "|";
		tabs1.text("Log").push(ts + "About is called");
		var ta = tabs1.element("Log");
		ta.scrollTop = ta.scrollHeight;
	}
	
	if(target.innerHTML == "Help") {
		alert(""
			+ "[Clear]    clear all text and graphic\n"
			+ "[Load]     load default parameters\n"
			+ "[Read]     read parameters from text\n"
			+ "[Start]     start simulation\n"
			+ "[Draw]     draw results\n"
			+ "[Help]     show this help\n"
			+ "[About]   describe this application\n"
		);
		var ts = Timer.ts() + "|";
		tabs1.text("Log").push(ts + "Help is called");
		var ta = tabs1.element("Log");
		ta.scrollTop = ta.scrollHeight;
	}
	
	if(target.innerHTML == "Load") {
		tabs1.text("Params").clear();
		loadParameters();
		var ts = Timer.ts() + "|";
		tabs1.text("Log").push(ts + "Default parameters are loaded");
		var ta = tabs1.element("Log");
		ta.scrollTop = ta.scrollHeight;
		bgroup.enable("Read");
	}
	
	if(target.innerHTML == "Read") {
		readParameters();
		var ts = Timer.ts() + "|";
		tabs1.text("Log").push(ts + "Parameters are read");
		var ta = tabs1.element("Log");
		ta.scrollTop = ta.scrollHeight;
		bgroup.enable("Start");
	}
	
	if(target.innerHTML == "Clear") {
		tabs1.text("Params").clear();
		var ts = Timer.ts() + "|";
		tabs1.text("Log").push(ts + "Parameters are cleared");
		var ta = tabs1.element("Log");
		ta.scrollTop = ta.scrollHeight;
		bgroup.disable("Read");
		bgroup.disable("Start");
	}
	
	if(target.innerHTML == "Draw") {
		drawResults();
		var ts = Timer.ts() + "|";
		tabs1.text("Log").push(ts + "Results will be drawn");
		var ta = tabs1.element("Log");
		ta.scrollTop = ta.scrollHeight;
	}
}

// Draw on chart
function drawResults() {
	// Get results
	var text = tabs1.element("Results").value;
	var tt = Parse.getFrom(text).column(0);
	var NN = Parse.getFrom(text).column(1);
	
	// Draw on related chart
	tabs2.graphic("tN").clear();
	tabs2.graphic("tN").setLineColor("#f00");	
	tabs2.graphic("tN").lines(tt, NN);
}
