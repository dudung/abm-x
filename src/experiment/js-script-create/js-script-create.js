/*
	js-script-create.js
	Explore HTML DOM element script
	
	Sparisoma Virid | https://github.com/abm-x
	
	20200601
	1655 Create this example.
	1730 Try onload but not yet implement [1].
	1736 Implement [2] for checking inexisting variables [2].
	1829 Previous in main does not work in function.
	1848 Include script only.
	1900 Try JQuery to read local file [3], conflict CORS policy.
	1935 Try iframe and the same, do not understand [4].
	2014 Cancel iframe trial, back to script.
	2130 Fail to work. Close this one.
	
	References
	1. url https://stackoverflow.com/a/27000218/9475509
	   [20200601].
	2. url https://stackoverflow.com/a/30003227/9475509
	   [20200601].
	3. url https://stackoverflow.com/a/16139747/9475509
	   [20200601].
	4. ur https://stackoverflow.com/a/25098153/9475509
	   [20200601].
*/

// Declare global variables
var srcs = [
	"data.js",
	"data.txt"
];
var sid = 0;


// Execute main function
main();


// Define main function
function main() {
	loadScripts();
	
	//console.log(data_js);
}


// Load scripts in order
function loadScripts() {
	var src = srcs[sid];
	var script = document.getElementById(sid);

	if(script == undefined) {
		var script = document.createElement("script");
		script.src = src;
		script.id = sid;
		document.body.append(script);
	}
	
	
	script.onload = function() {
		var e = arguments[0];
		console.log("script " + src + " is ready");
		
		if(sid < srcs.length - 1) {
			sid++;
			loadScripts();
		}
	}
}



// Include script
function includeScript() {
	var src = arguments[0];
	var script = document.getElementById(id);
	
	// Create HTML DOM element
	if(script == undefined) {
		var script = document.createElement("script");
		script.src = src;
		script.id = id;
		document.body.append(script);
		scriptNum++;
		
		script.onload = function() {
			console.log(name + " is ready");
			scriptId++;
		}
	}
}
 

// Do not work
function doNotWork() {
	//includeScript("data-csv.txt");
	
	$.get("data.js",function(scriptContent){
		alert(scriptContent)
	});

	/* -- work in main() but not in function
	// Create HTML DOM element
	var script = document.createElement("script");
	script.src = "data.js";
	document.body.append(script);
	
	if(window.hasOwnProperty("data_js")) {
		console.log(data_js);
	}
	
	script.onload = function() {
		var e = arguments[0];
		
		if(window.hasOwnProperty("data_js")) {
			console.log(data_js);
		}
	}
	*/
	
	iframe.contentWindow.postMessage("", "*");

	window.addEventListener('message', event => {
			// IMPORTANT: check the origin of the data! 
			if (event.origin.startsWith("file:///L:/home/Sparisoma%20Viridi/Documents/abm-x/src/experiment/js-script-create/")) { 
					// The data was sent from your site.
					// Data sent with postMessage is stored in event.data:
					console.log(event.data); 
			} else {
					// The data was NOT sent from your site! 
					// Be careful! Do not use it. This else branch is
					// here just for clarity, you usually shouldn't need it.
					return; 
			} 
	}); 

	var sc = document.createElement("script");
	
	var iframe = document.createElement("iframe");
	//iframe.src = "data-csv.txt";
	iframe.style.border = "0px";
	iframe.id = "my-frame";
	/*
	iframe.contentDocument.innerText = `
	INSTITUT TEKNOLOGI BANDUNG,,,
	Daftar Nilai Akhir,,,
	 ,,,
	Mata Kuliah: FI1102 Fisika Dasar IB,,,
	No Kelas: 10,,,
	Semester: 1 - 2014/2015,,,
	"Dosen: Dr.rer.nat. Sparisoma Viridi, S.Si.",,,
	 ,,,
	NO,NIM,NAMA,NILAI
	1,15214003,Ulama Andika,AB
	2,15214004,Lady Viona Yacup,A
	3,15214005,Mitra Sehari,C
	4,15214006,Papan Pan,E
	5,15214007,Beowulf Wolf,BC
	`;
	*/
	document.body.append(iframe);
	
	console.log(iframe.contentDocument.body.innerHTML);
	//	includeScriptForVar("data.js", "data_js");
	//	includeScriptForVar("data.txt", "data.txt");
}
