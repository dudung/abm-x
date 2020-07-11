/*
	js-authind.js
	Explore author index of something
	
	Sparisoma Virid | https://github.com/abm-x
	
	20200611
	0355 Create this example.
	0537 Add first 40 data from Scopus [1].
	0602 Add 12 more.
	0633 Display using div as table.
	0638 Sort authors using swap [2].
	0645 View results with certain sort.
	0707 Add next pre-data from Sinta2 [3].
	0714 Add Scopus link.
	0719 Change link style and color, also back for even items.
	20200614
	1040 Update for iseng only.
	20200616
	0852 Update for iseng only, daily dynamic?
	
	References
	1. url https://www.scopus.com [20200611].
	2. url https://stackoverflow.com/a/872317/9475509.
	3. url http://sinta2.ristekbrin.go.id [20200611].
*/


// Declare global variables
var authors;
var purl = "https://www.scopus.com/authid/detail.uri?authorId=";

// Documets by author
// Total citations .. by .. documents
// h-index

// Execute main function
main();


// Define main function
function main() {
	authors = addAuthors();
	
	sort(authors, 4);
	
	displayInDivTable(authors);
}


// Sort by h-index
function sort() {
	var a = arguments[0];
	var N = a.length;
	var v = arguments[1];
	
	for(var i = 0; i < N - 1; i++) {
		for(var j = i + 1; j < N; j++) {
			if(a[i].scopus[0][v] < a[j].scopus[0][v]) {
				[a[i], a[j]] = [a[j], a[i]]
			}
		}
	}
}

// Display in div table
function displayInDivTable() {
	var a = arguments[0];
	var N = a.length;
	
	for(var i = 0; i < N; i++) {
		var row = document.createElement("div");
		if(i % 2 == 0) {
			row.style.background = "#eef";
		}
		
		var col4 = document.createElement("div");
		col4.innerHTML = i;
		col4.style.width = "2em";
		col4.style.textAlign = "right";
		col4.style.paddingRight = "1em";
		col4.style.border = "0px solid #000";
		col4.style.float = "left";
		var col0 = document.createElement("div");
		col0.innerHTML = "<a href='" + purl + a[i].id
			+ "' style='text-decoration: none; color: blue;'>"
			+ ("00" + a[i].id).slice(-12) + "</a>";
		col0.style.width = "100px";
		col0.style.border = "0px solid #000";
		col0.style.textAlign = "right";
		col0.style.paddingRight = "1em";
		col0.style.float = "left";
		var col1 = document.createElement("div");
		col1.innerHTML = a[i].scopus[0][1];
		col1.style.width = "2.2em";
		col1.style.textAlign = "right";
		col1.style.paddingRight = "1em";
		col1.style.border = "0px solid #000";
		col1.style.float = "left";
		var col2 = document.createElement("div");
		col2.innerHTML = a[i].scopus[0][4];
		col2.style.width = "2.2em";
		col2.style.textAlign = "right";
		col2.style.paddingRight = "1em";
		col2.style.border = "0px solid #000";
		col2.style.float = "left";
		var col3 = document.createElement("div");
		col3.innerHTML = a[i].name;
		col3.style.width = "250px";
		col3.style.border = "0px solid #000";
		col3.style.float = "left";
		
		row.append(col4);
		row.append(col1);
		row.append(col2);
		row.append(col0);
		row.append(col3);
		row.style.width = "100%";
		row.style.float = "left";
		
		document.body.append(row);
	}
}



// Add author on 20200611
function addAuthors() {
	var authors = [];
	
	var i = {
		id: 8907867800,
		name: "Gunara, Bobby Eka",
		scopus: [
			["2020-06-11", 70, 178, 91, 8],
			["2020-06-28", 70, 179, 92, 8],
		],
	}; authors.push(i);
	
	var i = {
		id: 38062474600,
		name: "Sutrisno, Widayani",
		scopus: [
			["2020-06-11", 31, 97, 80, 6],
			["2020-06-28", 31, 101, 82, 6],
		],
	}; authors.push(i);
	
	var i = {
		id: 7801632785,
		name: "Khotimah, Siti Nurul",
		scopus: [
			["2020-06-11", 44, 50, 45, 3],
			["2020-06-28", 44, 52, 47, 3],
		],
	}; authors.push(i);
	
	var i = {
		id: 14523651300,
		name: "Suryana, Risa",
		scopus: [
			["2020-06-11", 42, 100, 87, 6],
		],
	}; authors.push(i);
	
	var i = {
		id: 57195339550,
		name: "Khairurrijal, Khairurrijal",
		scopus: [
			["2020-06-11", 235, 1264, 929, 16],
		],
	}; authors.push(i);
	
	var i = {
		id: 55569167500,
		name: "Abdullah, Mikrajuddin",
		scopus: [
			["2020-06-11", 188, 1823, 1489, 22],
		],
	}; authors.push(i);
	
	var i = {
		id: 6503920168,
		name: "Bindar, Yazid",
		scopus: [
			["2020-06-11", 50, 143, 138, 4],
			["2020-06-28", 50, 144, 139, 4],
		],
	}; authors.push(i);
	
	var i = {
		id: 11042498800,
		name: "Sanny, Teuku Abdullah",
		scopus: [
			["2020-06-11", 13, 13, 13, 2],
		],
	}; authors.push(i);
	
	var i = {
		id: 8913123600,
		name: "Basar, Khairul",
		scopus: [
			["2020-06-11", 42, 142, 88, 6],
			["2020-06-28", 43, 154, 91, 7],
		],
	}; authors.push(i);
	
	var i = {
		id: 6508068924,
		name: "Wenten, I. Gede",
		scopus: [
			["2020-06-11", 112, 1633, 840, 24],
		],
	}; authors.push(i);
	
	var i = {
		id: 9738950800,
		name: "Novitrian, Novitrian",
		scopus: [
			["2020-06-11", 30, 70, 48, 5],
		],
	}; authors.push(i);
	
	var i = {
		id: 36808979800,
		name: "Darma, Yudi",
		scopus: [
			["2020-06-11", 83, 343, 206, 10],
		],
	}; authors.push(i);
	
	var i = {
		id: 56242449300,
		name: "Haryono, Suprijadi",
		scopus: [
			["2020-06-11", 64, 222, 205, 7],
		],
	}; authors.push(i);
	
	var i = {
		id: 6506346884,
		name: "Yuliarto, Brian",
		scopus: [
			["2020-06-11", 129, 713, 575, 17],
		],
	}; authors.push(i);
	
	var i = {
		id: 15136804000,
		name: "Purqon, Acep",
		scopus: [
			["2020-06-11", 52, 49, 42, 3],
		],
	}; authors.push(i);
	
	var i = {
		id: 8392624400,
		name: "Noor, Fatimah Arofiati",
		scopus: [
			["2020-06-11", 46, 103, 61, 4],
		],
	}; authors.push(i);
	
	var i = {
		id: 22835283600,
		name: "Munir, Muhammad Miftahul",
		scopus: [
			["2020-06-11", 92, 764, 530, 14],
		],
	}; authors.push(i);
	
	var i = {
		id: 7409690514,
		name: "Ismunandar, Ismunandar",
		scopus: [
			["2020-06-11", 61, 769, 608, 14],
		],
	}; authors.push(i);
	
	var i = {
		id: 6602363828,
		name: "Suendo, Veinardi",
		scopus: [
			["2020-06-11", 68, 599, 537, 14],
		],
	}; authors.push(i);
	
	var i = {
		id: 56780209700,
		name: "Kadja, Grandprix Thomryes Marth",
		scopus: [
			["2020-06-11", 21, 96, 92, 6],
		],
	}; authors.push(i);
	
	var i = {
		id: 13403022500,
		name: "Permana, Sidik",
		scopus: [
			["2020-06-11", 66, 227, 120, 9],
			["2020-06-28", 66, 227, 120, 9],
		],
	}; authors.push(i);
	
	var i = {
		id: 14829794900,
		name: "Viridi, Sparisoma",
		scopus: [
			["2020-06-11", 116, 123, 114, 5],
			["2020-06-28", 117, 127, 116, 5],
		],
	}; authors.push(i);
	
	var i = {
		id: 23101676700,
		name: "Su'ud, Zaki",
		scopus: [
			["2020-06-11", 162, 580, 259, 12],
		],
	}; authors.push(i);
	
	var i = {
		id: 6508353978,
		name: "Budhi, Yogi Wibisono",
		scopus: [
			["2020-06-11", 27, 112, 82, 6],
		],
	}; authors.push(i);

	var i = {
		id: 24472206900,
		name: "Wulandari, Priastuti",
		scopus: [
			["2020-06-11", 16, 163, 149, 5],
		],
	}; authors.push(i);
	
	var i = {
		id: 6602279949,
		name: "Iskandar, Alexander A.",
		scopus: [
			["2020-06-11", 37, 120, 97, 6],
		],
	}; authors.push(i);
	
	var i = {
		id: 57056179800,
		name: "Hidayat, Wahyu",
		scopus: [
			["2020-06-11", 19, 110, 101, 3],
		],
	}; authors.push(i);
	
	var i = {
		id: 26531530200,
		name: "Napitu, Berlinson Dominikus",
		scopus: [
			["2020-06-11", 8, 30, 29, 3],
		],
	}; authors.push(i);
	
	var i = {
		id: 55243495000,
		name: "Suroso, Agus",
		scopus: [
			["2020-06-11", 35, 86, 45, 5],
		],
	}; authors.push(i);
	
	var i = {
		id: 8907868200,
		name: "Zen, Freddy Permana",
		scopus: [
			["2020-06-11", 101, 307, 162, 11],
		],
	}; authors.push(i);
	
	var i = {
		id: 36809097500,
		name: "Akbar, Fiki Taufik",
		scopus: [
			["2020-06-11", 27, 8, 7, 2],
		],
	}; authors.push(i);
	
	var i = {
		id: 57193715510,
		name: "Akbar, Saiful",
		scopus: [
			["2020-06-11", 71, 126, 93, 6],
		],
	}; authors.push(i);
	
	var i = {
		id: 6602490139,
		name: "Suksmono, Andriyan Bayu",
		scopus: [
			["2020-06-11", 159, 822, 677, 13],
		],
	}; authors.push(i);
	
	var i = {
		id: 9743468800,
		name: "Prijamboedi, Bambang",
		scopus: [
			["2020-06-11", 46, 198, 189, 8],
		],
	}; authors.push(i);
	
	var i = {
		id: 38361882700,
		name: "Pramutadi, Asril",
		scopus: [
			["2020-06-11", 20, 67, 54, 5],
		],
	}; authors.push(i);
	
	var i = {
		id: 7003660707,
		name: "Alatas, Husin",
		scopus: [
			["2020-06-11", 86, 209, 152, 9],
		],
	}; authors.push(i);
	
	var i = {
		id: 36125036700,
		name: "Irwanto, Dwi",
		scopus: [
			["2020-06-11", 46, 94, 70, 6],
			["2020-06-28", 47, 113, 80, 6],
		],
	}; authors.push(i);
	
	var i = {
		id: 56547539300,
		name: "Purwanto, Agus",
		scopus: [
			["2020-06-11", 15, 69, 53, 4],
		],
	}; authors.push(i);
	
	var i = {
		id: 6701754064,
		name: "Mart, Terry",
		scopus: [
			["2020-06-11", 141, 2060, 816, 22],
		],
	}; authors.push(i);
	
	var i = {
		id: 6507828371,
		name: "Susandi, Armi",
		scopus: [
			["2020-06-11", 11, 8, 8, 1],
		],
	}; authors.push(i);

	var i = {
		id: 24779568900,
		name: "Aditiawati, Pingkan",
		scopus: [
			["2020-06-11", 50, 188, 166, 8],
		],
	}; authors.push(i);

	var i = {
		id: 55844947500,
		name: "Taufik, Intan",
		scopus: [
			["2020-06-11", 5, 32, 32, 3],
		],
	}; authors.push(i);

	var i = {
		id: 21740946000,
		name: "Agusta, Mohammad Kemal",
		scopus: [
			["2020-06-11", 37, 226, 159, 9],
		],
	}; authors.push(i);

	var i = {
		id: 55664348000,
		name: "Barlian, Anggraini",
		scopus: [
			["2020-06-11", 20, 214, 209, 5],
		],
	}; authors.push(i);

	var i = {
		id: 12784493100,
		name: "Dipojono, Hermawan K.",
		scopus: [
			["2020-06-11", 79, 307, 251, 10],
		],
	}; authors.push(i);

	var i = {
		id: 56257529100,
		name: "Adhika, Damar R.",
		scopus: [
			["2020-06-11", 18, 14, 12, 2],
		],
	}; authors.push(i);

	var i = {
		id: 10642210000,
		name: "Indartono, Yuli Setyo",
		scopus: [
			["2020-06-11", 22, 127, 108, 5],
		],
	}; authors.push(i);

	var i = {
		id: 8601757900,
		name: "Rachmawati, Heni",
		scopus: [
			["2020-06-11", 69, 669, 580, 13],
		],
	}; authors.push(i);

	var i = {
		id: 6701602153,
		name: "Santosa, Sigit Puji",
		scopus: [
			["2020-06-11", 32, 1059, 779, 9],
		],
	}; authors.push(i);

	var i = {
		id: 23096075700,
		name: "Sembiring, Jaka",
		scopus: [
			["2020-06-11", 44, 128, 118, 6],
		],
	}; authors.push(i);

	var i = {
		id: 56502202000,
		name: "Rosmansyah, Yusep",
		scopus: [
			["2020-06-11", 60, 125, 119, 6],
		],
	}; authors.push(i);

	/*	
	var i = {
		id: ,
		name: "",
		scopus: [
			["2020-06-11", , , , ],
		],
	}; authors.push(i);
	*/
	
	return authors;
}


/*
6032157
SINTA ID
28,4 (11.06) - 28.47 - 28.41 (14.06, 15.06, 28.06) - 28.48 (07.11)
Overall Score
8,8 (11.06) - 8.86 - 8.83 (14.06, 15.06, 28.0) - 8.85 (07.11)
3 Years Score
2858 (11.06) - 2881.5 - 2878.5 (14.06, 15.06, 26.06) - 2882 (07.11)
Overall Score V2
1156 (11.06) - 1178.5 - 1177 (14.06, 15.06, 26.06) -- 1177.5 (07.11)
3 Years Score V2
0
Books
818 (11.06) - 807 (14.06) - 806 (15.06) - 817 (26.06) - 831 (07.11)
Rank in National
590 (11.06) - 517 (14.06) - 574 (15.06) - 611 (26.06) - 635 (07.11)
3 Years National Rank
0
IPR
Scoring 
91 (11.06, 14.06, 15.06, 26.06, 07.11)
Rank in Affiliation
34 (11.06, 14.06, 15.06, 26.06, 07.11)
3 Years Affiliation Rank


5972840
SINTA ID
30,08 - 30,15 (26.06)
Overall Score
3,25 - 30.24 (26.06)
3 Years Score
2760,5 - 2764 (26.06)
Overall Score V2
588,5 - 588 (26.06)
3 Years Score V2
0
Books
874 (11.06) - 872 (14.06) - 886 (26.06)
Rank in National
2483 (11.06) - 2524 (14.06) - 2626 (26.06)
3 Years National Rank
0
IPR
Scoring 
95 (11.06, 14.06) - 96 (26.06)
Rank in Affiliation
141 (11.06, 14.06) - 144 (26.06)
3 Years Affiliation Rank


5993841
SINTA ID
10,66
Overall Score
3,46
3 Years Score
983,5
Overall Score V2
417,5
3 Years Score V2
0
Books
4236
Rank in National
4430
3 Years National Rank
0
IPR
Scoring 
59
Rank in Affiliation
84
3 Years Affiliation Rank


257412
SINTA ID
47,23
Overall Score
33,45
3 Years Score
4374,5
Overall Score V2
3536,5
3 Years Score V2
9
Books
330
Rank in National
29
3 Years National Rank
0
IPR
Scoring 
2
Rank in Affiliation
2
3 Years Affiliation Rank
*/
