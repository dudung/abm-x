/*
	abm-odm-data.js
	Process output data from abm-odm app
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	Tatang Suheri | https://repository.unikom.ac.id/54572 
	
	20200605
	1619 Start this app.	
*/


// Define global variabels
var rawdata;


// Call main function
main();


function main() {
	readAllRawData();
}


// Read all raw data
function readAllRawData() {
	rawdata = [];
	rawdata.push(data01);
	rawdata.push(data02);
	rawdata.push(data03);
	rawdata.push(data04);
	rawdata.push(data05);
}

