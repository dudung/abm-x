/*
	amb-md.js
	Agent-based model (ABM) and molecular dynamics (MD) method
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200616
	2020 Start from abm-sir app as base.
	2024 Move library from libs to libs/abm.
	2015 Copy libs/md from butiran.js, not adjusted yet.
	2044 Change to bgColor for ocean style.
	20200618
	2244 Rename main to main2 for archive only.
	20200619
	0515 Create clear function for Canvas and TextArea elements.
	0707 Draw grid on a Canvas element.
	0720 Create getValueOf to get params from input TextArea.
	0733 Fix return value of getValueOf function.
	0821 Use alert box.
	0825 Create empty event for all buttons.
	0843 Create tx and ty for coordinates transformation.
	0900 Can draw nanopattern but only zigzag.
	0926 Can draw nanowells and nanopillars.
	0950 Can draw empty space using abm matrix.
	
	References
	1. url https://stackoverflow.com/a/57474962/9475509
	2. url https://stackoverflow.com/a/58833088/9475509
	3. url https://www.w3schools.com/jsref/met_win_alert.asp
	   [20200619].
	4. url https://stackoverflow.com/a/43363105/9475509
*/


// Define global variabels
var backgroundColor, borderColor, fontColor;
var btnLoad, btnRead, btnStart, btnSave, btnAbout, btnHelp;
var taIn, taOut, can;
var um2px;
var proc, iter, iterMax, gridSize;
var Ncell, Dcell, Hnpat, Wnpat, world;
var XMIN, YMIN, XMAX, YMAX, xmin, ymin, xmax, ymax;

// Call main function
main();


// Define main function
function main() {
	initParams();
	
	[
		btnLoad, btnRead, btnStart, btnSave, btnAbout, btnHelp,
		taIn, taOut,
		can
	] = createElements();
	
	btnLoad.addEventListener("click", function() {
		loadParams();
		btnRead.disabled = false;
	});
	
	btnRead.addEventListener("click", function() {
		readParams();
		clear(can);
		paintMatrix(world).onCanvas("can");
		drawGrid((gridSize * um2px) + "px", "#f0f0ff").on(can);
		drawNanopattern(Wnpat, Hnpat).on(can);
		//drawStemCells().on(can);
		btnStart.disabled = false;
	});
	
	btnStart.addEventListener("click", function() {
		if(btnStart.innerHTML == "Start") {
			btnStart.innerHTML = "Stop";
			btnLoad.disabled = true;
			btnRead.disabled = true;
			btnAbout.disabled = true;
			btnHelp.disabled = true;
			taIn.disabled = true;
		} else {
			btnStart.innerHTML = "Start";
			btnLoad.disabled = false;
			btnRead.disabled = false;
			btnAbout.disabled = false;
			taIn.disabled = false;
			btnHelp.disabled = false;
		}
	});
	
	btnSave.addEventListener("click", function() {
	});
	
	btnAbout.addEventListener("click", function() {
		alert(
			"abm-md | About\n" + 
			"Version 20200619\n" +
			"Sparisoma Viridi | https://github.com/dudung/abm-x"
		);
	});
	
	btnHelp.addEventListener("click", function() {
		alert(
			"abm-md | Help\n" +
			"Use available buttons"
		);
	});
}


// Load default parameters to input TextArea
function loadParams() {
	clear(taIn);
	addLine("ITERTIME 0,1000\n").to(taIn);
	addLine("GRIDSIZE 5\n").to(taIn);
	addLine("CELLDIAM 20\n").to(taIn);
	addLine("CELLSNUM 20,20\n").to(taIn);
	addLine("CELLSSEP 5,5\n").to(taIn);
	addLine("NPHEIGHT 0,20\n").to(taIn);
	addLine("NPWIDTHX 10,10").to(taIn);
}


// Read params from input TextArea
function readParams() {
	var it = getValueOf("ITERTIME").from(taIn);
	iter = it[0];
	iterMax = it[1];
	
	gridSize = getValueOf("GRIDSIZE").from(taIn)[0];
	
	Ncell = getValueOf("CELLSNUM").from(taIn);
	Dcell = getValueOf("CELLDIAM").from(taIn);
	Hnpat = getValueOf("NPHEIGHT").from(taIn);
	Wnpat = getValueOf("NPWIDTHX").from(taIn);
	
	XMIN = 0;
	XMAX = can.width;
	YMIN = can.height;
	YMAX = 0;

	xmin = XMIN / um2px;
	ymin = YMAX / um2px;
	xmax = XMAX / um2px;
	ymax = YMIN / um2px;
	
	var ROWS = ymax / gridSize;
	var COLS = xmax / gridSize;
	world = new Matrix(ROWS, COLS, 1);   // 1 = empty space
	matrixPixelSize = gridSize * um2px;  // Change grid size
}


// Transform x to X
function tx() {
	var x = arguments[0];
	var X = (x - xmin) / (xmax - xmin);
	X *= (XMAX- XMIN);
	X += XMIN;
	return X;
}


// Transform y to Y
function ty() {
	var y = arguments[0];
	var Y = (y - ymin) / (ymax - ymin);
	Y *= (YMAX- YMIN);
	Y += YMIN;
	return Y;
}


// Get value of pattern from a TextArea
function getValueOf() {
	var pattern = arguments[0];
	var o = {
		from: function() {
			var el = arguments[0];
			var val;;
			
			var lines = el.value.split("\n");
			var N = lines.length;
			if(lines[N - 1].length == 0) {
				lines.pop();
				N = lines.length;
			}
			for(var i = 0; i < N; i++) {
				var cols = lines[i].split(" ");
				var M = cols.length;
				for(var j = 0; j < M; j++) {
					if(cols[0] == pattern) {
						var arr = cols[1].split(",");
						val = arr.map(e => parseFloat(e));
						break;
					}
				}
			}
			return val;
		}
	};
	
	/*
	var x = getValueOf("XRANGE").from(taIn);
	*/
	
	return o;
}


// Draw nanopattern
function drawNanopattern() {
	var w = arguments[0];
	var h = arguments[1];
	var Nw = w.length;
	
	var dx = w.reduce((a, b) => a + b, 0);
	
	var o = {
		on: function() {
			var el = arguments[0];
			var cx = el.getContext("2d");
			
				var N = (xmax - xmin) / dx;
				cx.strokeStyle = "#f00";
				cx.lineWidth = 2;
				cx.beginPath();
				for(var i = 0; i < N; i++) {
					var x = xmin + i * dx;
					for(var j = 0; j < Nw; j++) {
						var xx = [];
						var yy = [];
						
						xx.push(x);
						yy.push(ymin + h[j]);
						
						x += w[j];
						xx.push(x);
						yy.push(ymin + h[j]);
						
						var Ngrid = dx / (gridSize * um2px);
						for(var k = 0; k < Ngrid.length; k++) {
							
						}
						
						for(var k = 0; k < xx.length; k++) {
							var X = tx(xx[k]);
							var Y = ty(yy[k]);
							if(i == 0 && j == 0 && k == 0) {
								cx.moveTo(X, Y);
							} else {
								cx.lineTo(X, Y);
							}
						}
					}
				}
				cx.stroke();
		}
	};
	
	return o;
}

// Draw square grid with certain size
function drawGrid() {
	var l = parseInt(arguments[0]);
	var c = arguments[1];
	var o = {
		on: function() {
			var can = arguments[0];
			var w = can.width;
			var h = can.height;
			var Nx = w / l;
			var Ny = h / l;
			
			var cx = can.getContext("2d");
			cx.strokeStyle = c;
			cx.lineWidth = 1;
			
			for(var j = 0; j < Ny; j++) {
				for(var i = 0; i < Nx; i++) {
					var x = i * l;
					var y = j * l;
					cx.beginPath();
					cx.rect(x, y, x + l, y + l);
					cx.stroke();
				}
			}
		}
	};
	
	/*
	drawGrid("10px", "#e0e0ff").on(can);
	*/
	
	return o;
}


// Add a line to a TextArea element
function addLine() {
	var line = arguments[0];
	var o = {
		to: function() {
			var el = arguments[0];
			el.value += line;
		}
	};
	
	/*
	addLine("ITERTIME 1000\n").to(taIn);
	*/
	
	return o;
}


// Intialize parameters
function initParams() {
	backgroundColor = "#fff";
	borderColor = "#aae";
	fontColor = "#00f";
	
	/*
		width = 800 px = 400 µm
		1 = 2 (px / µm)
		
		cell = 20 µm = 40 px
		grid = 10 px
	*/
	um2px = 2;
}


// Create required HTML DOM elements
function createElements() {
	var elems = [];
	
	var div0 = document.createElement("div");
	div0.style.width = "800px";
	div0.style.height = "240px";
	div0.style.border = "1px solid " + borderColor;
	div0.style.borderBottom = "0px solid " + borderColor;
	div0.style.background = backgroundColor;
	
	var can = document.createElement("canvas");
	can.width = 800;
	can.height = 240;
	can.style.width = can.width + "px";
	can.style.height = can.height + "px";
	can.id = "can";
	
	var div1 = document.createElement("div");
	div1.style.width = "802px";
	div1.style.height = "124px";
	div1.style.border = "0px solid " + borderColor;
	div1.style.background = backgroundColor;
	
	var taIn = document.createElement("textarea");
	taIn.style.width = "200px";
	taIn.style.height = "122px";
	taIn.style.overflowY = "scroll";
	taIn.style.border = "1px solid " + borderColor;
	taIn.style.background = backgroundColor;
	taIn.style.float = "left"
	
	var div2 = document.createElement("div");
	div2.style.width = "60px";
	div2.style.height = "126px";
	div2.style.border = "1px solid " + borderColor;
	div2.style.background = backgroundColor;
	div2.style.float = "left"

	var taOut = document.createElement("textarea");
	taOut.style.width = "528px";
	taOut.style.height = "122px";
	taOut.style.overflowY = "scroll";
	taOut.style.border = "1px solid " + borderColor;
	taOut.style.background = backgroundColor;
	taOut.style.float = "left"
	
	var btnLoad = document.createElement("button");
	btnLoad.innerHTML = "Load";
	btnLoad.style.width = "60px";
	btnLoad.disabled = false;
	
	var btnRead = document.createElement("button");
	btnRead.innerHTML = "Read";
	btnRead.style.width = "60px";
	btnRead.disabled = true;
	
	var btnStart = document.createElement("button");
	btnStart.innerHTML = "Start";
	btnStart.style.width = "60px";
	btnStart.disabled = true;

	var btnSave = document.createElement("button");
	btnSave.innerHTML = "Save";
	btnSave.style.width = "60px";
	btnSave.disabled = true;

	var btnAbout = document.createElement("button");
	btnAbout.innerHTML = "About";
	btnAbout.style.width = "60px";
	btnAbout.disabled = false;
	
	var btnHelp = document.createElement("button");
	btnHelp.innerHTML = "Help";
	btnHelp.style.width = "60px";
	btnHelp.disabled = false;

	document.body.append(div0);
		div0.append(can);
	document.body.append(div1);
		div1.append(taIn);
		div1.append(div2);
			div2.append(btnLoad);
			div2.append(btnRead);
			div2.append(btnStart);
			div2.append(btnSave);
			div2.append(btnAbout);
			div2.append(btnHelp);
		div1.append(taOut);

	elems.push(btnLoad);
	elems.push(btnRead);
	elems.push(btnStart);
	elems.push(btnSave);
	elems.push(btnAbout);
	elems.push(btnHelp);
	elems.push(taIn);
	elems.push(taOut);
	elems.push(can);
	
	return elems;
}


// Clear Canvas and TextArea elements
function clear() {
	var el = arguments[0];
	if( el instanceof HTMLCanvasElement) {
		var cx = el.getContext("2d");
		cx.beginPath();
		cx.clearRect(0, 0, el.width, el.height);
		cx.fill();
	}
	if(el instanceof HTMLTextAreaElement) {
		el.value = "";
	}

	/*
	var cx = can.getContext("2d");
	cx.beginPath();
	cx.fillRect(0, 0, 800, 200);
	cx.fill();
	
	clear(can);
	*/
}




// Define main2 function -- archive for easier editing
function main2() {
	var div0 = document.createElement("div");
	div0.style.width = "556px";
	div0.style.height = "367px";
	div0.style.border = "1px solid #88f";
	div0.style.background = "#eee";
	div0.style.float = "left";
	div0.style.border = "1px solid #00f";
	document.body.append(div0);
		
	var div1 = document.createElement("div");
	div1.style.width = "552px";
	div1.style.fontFamily = "Monospace";
	div1.style.letterSpacing = "normal";
  div1.style.wordSpacing = "0px";
	div1.style.fontSize = "13.3333px";
  div1.style.fontStretch = "normal";
  div1.style.border = "1px solid #008";	
  div1.style.color = "#fff";	
  div1.style.background = "#00a";	
	div1.style.fontWeight = 400;
	div1.style.paddingLeft = "2px";
	div1.innerHTML = "ITR "
		+ "C0S C0I C0R C0N "
		+ "C1S C1I C1R C1N "
		+ "C2S C2I C2R C2N "
		+ "C3S C3I C3R C3N "
		+ "CAN";
	div0.append(div1);
	
	txa1 = document.createElement("textarea");
	txa1.style.width = "550px";
	txa1.style.height = "4.4em";
	txa1.style.overflowY = "scroll";
	txa1.style.border = "1px solid #00f";
	txa1.style.background = bgColor;
	div0.append(txa1);
	
	var div2 = document.createElement("div");
	div2.style.width = "552px";
	div2.style.fontFamily = "Monospace";
	div2.style.letterSpacing = "normal";
  div2.style.wordSpacing = "0px";
	div2.style.fontSize = "13.3333px";
  div2.style.fontStretch = "normal";
  div2.style.border = "1px solid #009";	
  div2.style.color = "#fff";	
  div2.style.background = "#00a";	
	div2.style.fontWeight = 400;
	div2.style.paddingLeft = "2px";
	div2.innerHTML = "AID "
		+ "SUS INF REC IBA HIS";
	div0.append(div2);
	
	txa2 = document.createElement("textarea");
	txa2.style.width = "550px";
	txa2.style.height = "11.4em";
	txa2.style.overflowY = "scroll";
	txa2.style.overflowX = "scroll";
	txa2.style.whiteSpace = "nowrap";
	txa2.style.border = "1px solid #00f";
	txa2.style.background = bgColor;
	div0.append(txa2);
	
	var div3 = document.createElement("div");
	div3.style.width = "552px";
	div3.style.fontFamily = "Monospace";
	div3.style.letterSpacing = "normal";
  div3.style.wordSpacing = "0px";
	div3.style.fontSize = "13.3333px";
  div3.style.fontStretch = "normal";
  div3.style.border = "1px solid #008";	
  div3.style.color = "#fff";	
  div3.style.background = "#00a";	
	div3.style.fontWeight = 400;
	div3.style.paddingLeft = "2px";
	div3.innerHTML = "PARAMETR "
		+ "VALUE";
	div0.append(div3);
	
	var txa3 = document.createElement("textarea");
	txa3.style.width = "480px";
	txa3.style.height = "78px";
	div0.append(txa3);
	txa3.value = "SCENARIO 0\n"
		+ "HEALTIME 14\n"
		+ "ITERTIME 300\n"
		+ "INFAGENT 0\n"
		+ "RECAGENT 1,2,11,12,13,22,23,24";
	txa3.style.overflowY = "scroll";
	txa3.style.border = "1px solid #00f";
	txa3.style.background = bgColor;
	
	canId = "can0";
	var can = document.createElement("canvas");
	can.id = canId;
	can.width = 245 * 1.5;
	can.height = 245 * 1.5;
	can.style.width = can.width + "px";
	can.style.height = can.height + "px";
	can.style.border = "1px solid #44f";
	can.style.background = bgColor;
	document.body.append(can);
	
	// Default value is 10 with w = 500, h = 500
	matrixPixelSize = 5 * 1.5;
	
	var divBtn = document.createElement("div");
	divBtn.style.width = "70px";
	divBtn.style.float = "right";
	div0.append(divBtn);
	
	btn0 = document.createElement("button");
	btn0.innerHTML = "Read";
	btn0.style.width = "70px";
	divBtn.append(btn0);
	
	btn0.addEventListener("click", function() {
		// Define world
		world = new Matrix(49, 49, 1);
		
		// Define border -- actually not necessary
		world.setCol(0).to(0);
		world.setRow(0).to(0);
		world.setCol(48).to(0);
		world.setRow(48).to(0);
		
		iter = 0;

		var temp = getValueFromTextarea("ITERTIME", txa3);
		iterMax = parseInt(temp);

		var temp = getValueFromTextarea("SCENARIO", txa3);
		var dataSetId = parseInt(temp);
		if(dataSetId > 10) {
			console.log("WARNING: dataSetId > 10 will be set to 0");
		}
		
		var temp = getValueFromTextarea("HEALTIME", txa3);
		var healingTime = parseInt(temp);
		
		var temp = getValueFromTextarea("INFAGENT", txa3);
		var infagent = temp.split(",").map(i => parseInt(i));
		
		var temp = getValueFromTextarea("RECAGENT", txa3);
		var recagent = temp.split(",").map(i => parseInt(i));
		
		txa1.value = "";
		txa2.value = "";
		
		initialize(dataSetId, healingTime, infagent, recagent);
		
		btn.disabled = false;
		btn2.disabled = true;
	});

	btn = document.createElement("button");
	btn.innerHTML = "Start";
	btn.style.width = "70px";
	btn.disabled = true;
	divBtn.append(btn);
	
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
			btn0.disabled = true;
		} else {
			clearInterval(proc);
			t.innerHTML = "Start";
			btn0.disabled = false;
		}
	});
	
	btn2 = document.createElement("button");
	btn2.innerHTML = "Save";
	btn2.style.width = "70px";
	btn2.disabled = true;
	divBtn.append(btn2);
	
	btn2.addEventListener("click", function() {
		var params = txa3.value;
		var outCity = txa1.value;
		var outAgent = txa2.value;

		var sdt = new Date();
		var dd = sdt.getDate();
		var mm = ("0" + (sdt.getMonth() + 1)).slice(-2);
		var yyyy = sdt.getYear() + 1900;
		var HH = ("0" + sdt.getHours()).slice(-2);
		var MM = ("0" + sdt.getMinutes()).slice(-2);
		var SS = ("0" + sdt.getSeconds()).slice(-2);
		var datetime = yyyy + "-" + mm + "-" + dd + " " +
			HH + ":" + MM + ":" + SS;
		
		var fn = yyyy + "-" + mm + "-" + dd + "-" +
			HH + "-" + MM + "-" + SS;

		var content = "" +
			"# abm-sir\n" +
			"Output of `abm-sir` as part of [`abm-x`]" +
			"(https://github.com/dudung/abm-x)\n" +
			"\n" +
			"## Parameter\n```\n" +
			div3.innerHTML + "\n" +
			params +
			"\n```\n\n" +
			"## City\n" +
			"![](" + fn + ".png)\n\n```\n" +
			div1.innerHTML + "\n" +
			outCity +
			"\n```\n\n" +
			"## Agent\n```\n" +
			div2.innerHTML  + "\n" +
			outAgent +
			"\n```\n\n" +
			"## Note\n" +
			"Created on " + datetime;

		// Solution 0 -- only view the result
		/*
		console.log(content);
		*/
		
		/*
		// Solution 1 -- can not change filename
		var uriContent = "data:application/octet-stream," + 	
			encodeURIComponent(content);
		newWindow = window.open(uriContent, 'neuesDokument');
		*/
		
		/*
		// Solution 2 -- can not save new window
		var nw = window.open("");
		var div = document.createElement("pre");
		div.innerHTML = content;
		nw.document.body.append(div);
		*/
		
		// Solution 3 -- it works [12], even without append to body
		var nw = window.open("");
		var uriContent = "data:application/octet-stream," + 	
			encodeURIComponent(content);
		var a = document.createElement("a");
		nw.document.body.append(a);
		a.download = fn + ".md";
		a.href = uriContent;
		a.click();
		nw.close();
		
		var can = document.getElementById("can0");
		var a = document.createElement("a");
		a.download = fn + ".png";
		a.href = can.toDataURL("image/png")
			.replace("image/png", "image/octet-stream");
		a.click();
		
		var ldir = "file:///C:/Users/Sparisoma%20Viridi/Downloads/";
		var ffn = ldir + fn + ".md";
		setTimeout(function() {	var nw2 = window.open(ffn); }, 2000);
		
	});
	
	btn1 = document.createElement("button");
	btn1.innerHTML = "About";
	btn1.style.width = "70px";
	divBtn.append(btn1);
	
	btn1.addEventListener("click", function() {
		alert(
			"abm-md (version 20200616)\n" +
			"Sparisoma Viridi | https://github.com/dudung"
		);
	});

	can.addEventListener("click", function() {
		/*
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
		*/
	});
}


// Initialize
function initialize() {
	var dataSetId = arguments[0];
	var healingTime = arguments[1];
	var infagent = arguments[2];
	var recagent = arguments[3];
	
	// Select case according to dataSetId
	world.setRow(24).to(0);
	world.setCol(24).to(0);
	
	if(dataSetId < 6) {
		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < dataSetId; j++) {
				world.m[24][3 + i * 5 + j] = 1;
				world.m[3 + i * 5 + j][24] = 1;
				world.m[24][45 - (i * 5 + j)] = 1;
				world.m[45 - (i * 5 + j)][24] = 1;
			}
		}
	} else if(dataSetId < 11) {
		for(var i = 0; i < 4; i++) {
			var jMax = dataSetId - 5;
			for(var j = 0; j < jMax; j++) {
				world.m[24][3 + i * 5 + j] = 1;
				world.m[24][45 - (i * 5 + j)] = 1;
				world.m[45 - (i * 5 + j)][24] = 1;
			}
		}
	} else {
	}
	
	// Define cities region
	city = [];
	createAllCities();
	
	// Define roads
	road = [];
	createAllRoads();
	
	// Create agents of type Agent, typeS
	agent = [];
	createAllAgents(healingTime);
	
	// Set origin infection agent
	/*
	oiAgent = 0;
	agent[oiAgent].setInfected(iter);
	*/
	for(var i = 0; i < infagent.length; i++) {
		var id = infagent[i];
		agent[id].setInfected(iter);
	}
	
	// Set origin recovered agent
	for(var i = 0; i < recagent.length; i++) {
		var id = recagent[i];
		agent[id].setInfected(iter);
		agent[id].setRecovered(iter);
	}
	
	// Display agents
	var N = agent.length;
	for(var i = 0; i < N; i++) {
		agent[i].paint();
	}
	
	// Paint the matrix on canvas
	paintMatrix(world).onCanvas(canId);
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
	
	for(var i = 0; i < c.length; i++) {
		c[i].calcSIR(iter, a);
	}
	
	/*
	var str = iter + "\n";
	for(var i = 0; i < agent.length; i++) {
		str += ("0" + i).slice(-2) + " | ";
		str += agent[i].visitedCity + " | ";
		str += agent[i].visitedIter + "\n";
	}
	txa.value = str;
	*/
	
	var N = 0;
	var str = iter.toString().padStart(3, "0") + " ";
	for(var i = 0; i < city.length; i++) {
		var lastS = city[i].S[city[i].S.length - 1];
		var lastI = city[i].I[city[i].I.length - 1];
		var lastR = city[i].R[city[i].R.length - 1];
		var lastN = city[i].N[city[i].N.length - 1];
		
		N += lastN;
		
		str += lastS.toString().padStart(3, "0") + " ";
		str += lastI.toString().padStart(3, "0") + " ";
		str += lastR.toString().padStart(3, "0") + " ";
		str += lastN.toString().padStart(3, "0") + " ";
	}
	str += N.toString().padStart(3, "0");
	if(iter > 0) txa1.value += "\n";
	txa1.value += str;
	txa1.scrollTop = txa1.scrollHeight;
	
	if(iter >= iterMax) {
		for(var i = 0; i < agent.length; i++) {
			var iba = agent[i].infectedByAgent;
			for(var j = 0; j < agent.length; j++) {
				if(iba == -1) {
					break;
				} else if(iba === agent[i].id) {
					agent[i].chainInfection.push(
						iba.toString().padStart(3, "0")
					);
					break;
				} else if(iba == agent[i].chainInfection[agent[i].
					chainInfection.length -1]) {
					break;
				} else {
					agent[i].chainInfection.push(
						iba.toString().padStart(3, "0")
					);
				}
				iba = agent[iba].infectedByAgent;
			}
		}
	}
	
	var str = "";
	for(var i = 0; i < agent.length; i++) {
		str += agent[i].id.toString().padStart(3, "0");
		str += " ";
		
		var sus = agent[i].timeSusceptible.toString()
			.padStart(3, "0");
		str += sus;
		str += " ";
		
		var inf = agent[i].timeInfected.toString()
			.padStart(3, "0");
		if(inf == "0-1") inf = "-01";
		str += inf;
		str += " ";
		
		var rec = agent[i].timeRecovered.toString()
			.padStart(3, "0");
		if(rec == "0-1") rec = "-01";
		str += rec;
		str += " ";
		
		var iba = agent[i].infectedByAgent.toString()
			.padStart(3, "0");
		if(iba == "0-1") iba = "-01";
		str += iba;
		str += " ";
		
		str += agent[i].chainInfection.join("-");
		
		if(i < agent.length - 1) str += "\n";
	}
	txa2.value = str;
	
	iter++;
	if(iter > iterMax) {
		clearInterval(proc);
		btn.innerHTML = "Start";
		btn.disabled = true;
		btn0.disabled = false;
		btn2.disabled = false;
	}
}


// Create all agents
function createAllAgents() {
	var healingTime = arguments[0];

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
			a.id = agent.length - 1;
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
			a.id = agent.length - 1;
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
			a.id = agent.length - 1;
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
			a.id = agent.length - 1;
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
	var c1 = new CitySIR;
	c1.setName("NW");
	c1.setType(5);
	c1.setRegion([25, 01, 47, 23]);
	c1.setWorld(world);
	c1.paint();
	city.push(c1);
	
	// Define SW city
	var c1 = new CitySIR;
	c1.setName("NW");
	c1.setType(5);
	c1.setRegion([01, 25, 23, 47]);
	c1.setWorld(world);
	c1.paint();
	city.push(c1);
	
	// Define SE city
	var c1 = new CitySIR;
	c1.setName("NW");
	c1.setType(5);
	c1.setRegion([25, 25, 47, 47]);
	c1.setWorld(world);
	c1.paint();
	city.push(c1);
}


// Get value from textarea -- note different format
function getValueFromTextarea() {
	var pattern = arguments[0];
	var txa = arguments[1];
	var val = "";
	var lines = txa.value.split("\n");
	for(var i = 0; i < lines.length; i++) {
		var cols = lines[i].split(" ");
		if(cols[0] == pattern) {
			val = cols[1];
			break;
		}
	}
	return val;
}