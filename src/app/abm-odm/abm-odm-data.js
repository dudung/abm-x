/*
	abm-odm-data.js
	Process output data from abm-odm app
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	Tatang Suheri | https://repository.unikom.ac.id/54572 
	
	20200605
	1619 Start this app.	
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
	}
	
	return [agent];
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
	return raw;
}

