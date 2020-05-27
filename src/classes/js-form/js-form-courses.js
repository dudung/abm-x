/*
	js-form-courses.js
	Form for printing in PDF (experimental)
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200527
	0943 Move it from PTPB/20200527_Form_SP to js-form.
	1105 Continue make this form.
	1110 Move raw data in TSV format to js-list-courses file.
	1124 Create getTSVData and test it working.
	1240 Try to get all keys in an object according to [2].
	1245 Test getKeys and it works.
	1703 Create datetime for version inspired by [3].
	1753 Modify document title [4].
	1917 Try to produce adaptive textarea height [5].
	1934 Create resize and delayedResize and they work.
	2012 Resize parent-parent-parent.
	
	References
	1. url https://akademik.itb.ac.id/app/ka-tpb+2019-3/kelas
	   /kelas/open [20200527]
	2. url https://stackoverflow.com/a/208020/9475509
	   [20200527].
	3. url https://stackoverflow.com/a/4744635/9475509
	   [20200527].
	4. url https://www.w3schools.com/jsref/prop_doc_title.asp
	   [20200527].
	5. url https://stackoverflow.com/a/5346855/9475509
	   [20200527].		 
*/

// Define global variabeles
var TEST_FORM_COURSES = true;


// Execute main function
if(TEST_FORM_COURSES) main();


// Define main function
function main() {
	courses = getTSVData(rawmatkul);
	var N = courses.length;
	
	var div0 = document.createElement("div");
	div0.style.border = "1px solid #99f";
	div0.style.padding = "5px";
	div0.style.height = "430px";
	
	// Title
	var div0_1 = document.createElement("div");
	div0_1.style.padding = "5px";
	div0_1.style.height = "30px";
	div0_1.style.background = "#f8f8ff";
	div0_1.innerHTML = "<h2><font color='blue'>Form evaluasi "
		+ "dan kesiapan SP-TPB (internal)</font></h2>"

	// Version
	var div0_2 = document.createElement("div");
	div0_2.style.padding = "5px";
	div0_2.style.height = "50px";
	div0_2.style.background = "#f8f8ff";
	
	// Lecturer
	var div1 = document.createElement("div");
	div1.style.padding = "5px";
	div1.style.height = "42px";
	div1.style.background = "#f8f8ff";
	
	var div1_1 = document.createElement("div");
	div1_1.style.float = "left";
	div1_1.style.width = "150px";
	div1_1.style.height = "38px";
	div1_1.innerHTML = "Nama dosen "
		+ " / koordinator / Kaprodi";
	div1_1.style.padding = "2px";
	div1_1.style.border = "1px solid #99f";
	
	var div1_2 = document.createElement("div");
	div1_2.style.float = "left";
	div1_2.style.padding = "2px";
	div1_2.style.height = "38px";
	div1_2.style.width = "431px";
	div1_2.style.border = "1px solid #99f";
	
	var inp1_2 = document.createElement("input");
	inp1_2.style.width = "426px";
	
	// Course
	var div2 = document.createElement("div");
	div2.style.padding = "5px";
	div2.style.height = "25px";
	div2.style.background = "#f8f8ff";
	
	var div2_1 = document.createElement("div");
	div2_1.style.float = "left";
	div2_1.style.width = "150px";
	div2_1.style.height = "21px";
	div2_1.innerHTML = "Mata kuliah";
	div2_1.style.padding = "2px";
	div2_1.style.border = "1px solid #99f";
	
	var div2_2 = document.createElement("div");
	div2_2.style.float = "left";
	div2_2.style.padding = "2px";
	div2_2.style.height = "21px";
	div2_2.style.width = "431px";
	div2_2.style.border = "1px solid #99f";
	
	var sel2_2 = document.createElement("select");
	for(var i = 0; i < N; i++) {
		var opt = document.createElement("option");
		
		var keys = getKeys(courses[i]);
		var str = courses[i][keys[0]] + " ";
		str += courses[i][keys[1]] + " (";	
		str += courses[i][keys[2]] + " SKS) ";
				
		opt.text = str;
		sel2_2.add(opt);
	}
	sel2_2.selectedIndex = -1;
	sel2_2.addEventListener("change", function() {
		sdt = new Date();
		var dd = sdt.getDate();
		var mm = ("0" + (sdt.getMonth() + 1)).slice(-2);
		var yyyy = sdt.getYear() + 1900;
		var HH = ("0" + sdt.getHours()).slice(-2);
		var MM = ("0" + sdt.getMinutes()).slice(-2);
		var SS = ("0" + sdt.getSeconds()).slice(-2);
		
		var sdt2 = yyyy + mm + dd;
		sdt2 += "-" + HH + MM + SS;
	
		var ccode = sel2_2.value.split(" ")[0];
		var fn = ccode + "-" + sdt2;
		document.title = fn;
		div0_2.innerHTML = "<h3>Kode: <font color='red'>"
			+ fn + " </font></h3>";
	});
	
	// Average mark offline vs online
	var div3 = document.createElement("div");
	div3.style.padding = "5px";
	div3.style.height = "25px";
	div3.style.background = "#f8f8ff";
	
	var div3_1 = document.createElement("div");
	div3_1.style.float = "left";
	div3_1.style.width = "150px";
	div3_1.style.height = "21px";
	div3_1.innerHTML = "Rata-rata nilai";
	div3_1.style.padding = "2px";
	div3_1.style.border = "1px solid #99f";
	
	var div3_2 = document.createElement("div");
	div3_2.style.float = "left";
	div3_2.style.padding = "2px";
	div3_2.style.height = "21px";
	div3_2.style.width = "431px";
	div3_2.style.border = "1px solid #99f";
	
	var spa3_2_1 = document.createElement("span");
	spa3_2_1.innerHTML = "normal, luring";
	spa3_2_1.style.paddingLeft = "0.5em";
	spa3_2_1.style.paddingRight = "0.5em";
	
	var inp3_2_1 = document.createElement("input");
	inp3_2_1.style.width = "50px";
	
	var spa3_2_2 = document.createElement("span");
	spa3_2_2.innerHTML = "PSBB, daring";
	spa3_2_2.style.paddingLeft = "2em";
	spa3_2_2.style.paddingRight = "0.5em";
	
	var inp3_2_2 = document.createElement("input");
	inp3_2_2.style.width = "50px";

	// Short evaluation
	var div4 = document.createElement("div");
	div4.style.padding = "5px";
	div4.style.height = "70px";
	div4.style.background = "#f8f8ff";
	
	var div4_1 = document.createElement("div");
	div4_1.innerHTML = "Komentar mengenai pelaksanaan "
		+ "perkuliahan daring dibandingkan luring";
	div4_1.style.padding = "2px";
	div4_1.style.border = "1px solid #99f";
	div4_1.style.width = "588px";
	
	var div4_2 = document.createElement("div");
	div4_2.style.padding = "2px";
	div4_2.style.border = "1px solid #99f";
	div4_2.style.width = "588px";
	
	var tar4_2 = document.createElement("textarea");
	tar4_2.style.width = "99%";
	tar4_2.style.height = "auto";
	tar4_2.style.overflow = "hidden";
	tar4_2.addEventListener("change", function () {
		resize(tar4_2);
	});
	tar4_2.addEventListener("keydown", function() {
		delayedResize(tar4_2);
	});
	
	// Readyness evaluation
	var div5 = document.createElement("div");
	div5.style.padding = "5px";
	div5.style.height = "70px";
	div5.style.background = "#f8f8ff";
	
	var div5_1 = document.createElement("div");
	div5_1.innerHTML = "Kesiapan pelaksanaan "
		+ "perkuliahan daring semester pendek";
	div5_1.style.padding = "2px";
	div5_1.style.border = "1px solid #99f";
	div5_1.style.width = "588px";
	
	var div5_2 = document.createElement("div");
	div5_2.style.padding = "2px";
	div5_2.style.border = "1px solid #99f";
	div5_2.style.width = "588px";
	
	tar5_2 = document.createElement("textarea");
	tar5_2.style.width = "99%";
	tar5_2.style.height = "auto";
	tar5_2.style.overflow = "hidden";
	tar5_2.addEventListener("change", function () {
		resize(tar5_2);
	});
	tar5_2.addEventListener("keydown", function() {
		delayedResize(tar5_2);
	});
	
	function delayedResize() {
		var t = arguments[0];
		setTimeout(function() {
			resize(t)
		}, 0);
	}
		
	function resize() {
		var t = arguments[0];
		t.style.height = 'auto';
    t.style.height = (t.scrollHeight-4) + 'px';
		
		var hh = parseInt(t.style.height);
		t.parentElement.style.height = (hh + 10) + "px";
		t.parentElement.parentElement.style.height = (hh + 40)
			+ "px";
		t.parentElement.parentElement.parentElement.style.height
			= (hh + 400) + "px";
	}
	
	// Lecturer
	var div6 = document.createElement("div");
	div6.style.padding = "5px";
	div6.style.height = "42px";
	div6.style.background = "#f8f8ff";
	
	var div6_1 = document.createElement("div");
	div6_1.style.float = "left";
	div6_1.style.width = "150px";
	div6_1.style.height = "38px";
	div6_1.innerHTML = "Jumlah kelas daring yang akan dibuka";
	div6_1.style.padding = "2px";
	div6_1.style.border = "1px solid #99f";
	
	var div6_2 = document.createElement("div");
	div6_2.style.float = "left";
	div6_2.style.padding = "2px";
	div6_2.style.height = "38px";
	div6_2.style.width = "431px";
	div6_2.style.border = "1px solid #99f";
	
	var inp6_2 = document.createElement("input");
	inp6_2.style.width = "426px";

	document.body.append(div0);
		div0.append(div0_1);
		div0.append(div0_2);
		div0.append(div1);
			div1.append(div1_1);
			div1.append(div1_2);
				div1_2.append(inp1_2);
		div0.append(div2);
			div2.append(div2_1);
			div2.append(div2_2);
				div2_2.append(sel2_2);
		div0.append(div3);
			div3.append(div3_1);
			div3.append(div3_2);
				div3_2.append(spa3_2_1);
				div3_2.append(inp3_2_1);
				div3_2.append(spa3_2_2);
				div3_2.append(inp3_2_2);
		div0.append(div4);
			div4.append(div4_1);
			div4.append(div4_2);
				div4_2.append(tar4_2);
		div0.append(div5);
			div5.append(div5_1);
			div5.append(div5_2);
				div5_2.append(tar5_2);
		div0.append(div6);
			div6.append(div6_1);
			div6.append(div6_2);
				div6_2.append(inp6_2);
}


// Get keys according to [2].
function getKeys() {
	var obj = arguments[0];
	var keys = [];
	for(var key in obj) {
		keys.push(key);
	}
	return keys;
}

// Get data from TSV format
function getTSVData() {
	var raw = arguments[0];
	
	var lines = raw.split("\n");
	var N = lines.length;
	if(lines[N - 1].length == 0) lines.pop();
	if(lines[0].length == 0) lines.shift();
	N = lines.length;
	
	var data = [];
	var headers = [];
	for(var i = 0; i < N; i++) {
		var cols = lines[i].split("\t");
		var M = cols.length;
		if(i == 0) {
			for(var j = 0; j < M; j++) {
				headers.push(cols[j]);
			}
		} else {
			var course = {};
			for(var j = 0; j < M; j++) {
				course[headers[j]] = cols[j];
			}
			data.push(course);
		}
	}
	
	return data;
}

