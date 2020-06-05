/*
	abm-odm-data.js
	Process output data from abm-odm app
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	Tatang Suheri | https://repository.unikom.ac.id/54572 
	
	20200605
	1619 Start this app.
	1912 Using map to conver string to int [1].
	2009 Create textarea for output.
	
	References
	1. url https://stackoverflow.com/a/61116417/9475509
*/


// Call main function
main();


// Define main function
function main() {
	var rawdata = readAllRawData();
	
	var data1 = [];
	for(var i = 0; i < rawdata.length; i++) {
		var rd = removeEmptyLines(rawdata[i]);
		data1.push(rd);
	}
	
	var data2 = [];
	for(var i = 0; i < data1.length; i++) {
		var rd = keepLinesWithMark(data1[i], "|");
		data2.push(rd);
	}
	
	data3 = [];
	for(var i = 0; i < data2.length; i++) {
		var rd = toColumnData(data2[i], "|");
		data3.push(rd);
	}
	
	txa = document.createElement("textarea");
	txa.style.overflowY = "scroll";
	document.body.append(txa);
	txa.style.width = parseInt(window.innerWidth - 22) + "px";
	txa.style.height = parseInt(window.innerHeight - 26) + "px";
	txa.value = "";
	
	for(var j = 0; j < data2.length * 0 + 1; j++) {
		var a = data3[j][0];
		var c = data3[j][1];
		var i = data3[j][2];
		
		var N = a.length;
		for(var n = 0; n < N * 1 + 0; n++) {
			txa.value += a[n] + "\t" + c[n].length + "\n";
		}
	}
	
}


// Convert to column data with separator mark
function toColumnData() {
	var rd = arguments[0];
	var mark = arguments[1];
	
	var agent = [];
	var city = [];
	var iter = [];
	
	var lines = rd.split("\n");
	for(var i = 0; i < lines.length; i++) {
		var row = lines[i];
		var cols = row.split(mark);
		
		agent.push(cols[0].trim());
		city.push(cols[1].trim().split(",").map((e)=>parseInt(e)));
		iter.push(cols[2].trim().split(",").map((e)=>parseInt(e)));
	}
	
	return [agent, city, iter];
}


// Keep only lines with certain mark
function keepLinesWithMark() {
	var rd = arguments[0];
	var mark = arguments[1];
	lines = rd.split("\n");
	var N = lines.length;
	if(lines[0].indexOf(mark) < 0) lines.shift();
	return lines.join("\n");	
}


// Remove EmptyLines
function removeEmptyLines() {
	var rd = arguments[0];
	var lines = rd.split("\n");
	var N = lines.length;
	if(lines[N - 1].length == 0) lines.pop();
	if(lines[0].length == 0) lines.shift();
	return lines.join("\n");
}


// Read all raw data
function readAllRawData() {
	var raw = [];
	raw.push(data01);
	raw.push(data02);
	raw.push(data03);
	raw.push(data04);
	raw.push(data05);
	raw.push(data06);
	raw.push(data07);
	raw.push(data08);
	raw.push(data09);
	raw.push(data10);
	return raw;
}

