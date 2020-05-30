---
layout: post
author: viridi
title: JS and C++ interaction (not a safe way)
mathjax: false
ptext: false
x3dom: false
threejs: false
category: www
tags: [js]
---
Output of a C++ program is monitored and shown using JS in an internet browser

## Required files
There are three files required for this project
1. `js-cpp-experiment.html`
2. `js-cpp-experiment.js`
3. `randint.cpp`

and a file is produced during the process

4. `data.txt`

where `randint.cpp` produces the file and `js-cpp-experiment.js` monitors, reads, and shows the content.


## JS file
Part of the JS file
```javascript
// Read the data through a script
function read() {
	var q = document.getElementById("output");
	
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "data.txt";
	script.onload = function() {
		var bb = ("0" + data.toString(16)).slice(-2);
		var rr = 255 - data;
		rr = ("0" + rr.toString(16)).slice(-2);
		q.style.color = "#" + rr + "00" + bb; 
		q.innerHTML = ("00" + data).slice(-3);
	}
	document.body.append(script);
	
	iter++;
	
	script.remove();
	
	if(iter >= iterMax) {
		clearInterval(proc);
		console.log("Maximum iteration achieved");
	}
}
```

## C++ file
Part of C++ file
```c++
int i = 0;
while(i < N) {
	int j = rand() % 256;
	
	ofstream fout;
	fout.open("data.txt");
	fout << "var data = " << j << ";" << endl;
	fout.close();
			
	this_thread::sleep_for(1s);
	i++;
}
```

## TXT file
```txt
var data = 0
```

## Note
Full version of JS dan C++ files are available [[1]](#ref1). This not a safe and recommended way to perform interaction between C++ and JS but perhaps the simplest way. I only think that this way is fun :smiley:, isn't it?

The important part of the code is how the `script` event `onload` make sure that the `script` ready, where it is named as `data.txt` and contains only one line defining the variable `data` and its value.

## Edit
2020-05-29 Create this post. <br />
2020-05-29 Change tag from chrome to js. <br />

## References
1. <a name="ref1"></a>. url <https://github.com/dudung/abm-x/tree/master/src/js-basic-example/js-cpp-experiment>

