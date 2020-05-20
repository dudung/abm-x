---
layout: post
author: viridi
title: Learn Chrome extension
mathjax: false
ptext: false
x3dom: false
threejs: false
category: www
tags: [chrome]
---
How to create and test Google Chrome extension without publishing it.

## Required files
There are four basic files required in creating a Google Chrome extension [[1](#ref1)]
1. `icon.png`
2. `manifest.json`
3. `popup.html`
4. `popup_script.js`

## Icon
All icons are prepared

![](https://github.com/dudung/abm-x/raw/master/src/chrome-ext/ShowX/icon.png)
![](https://github.com/dudung/abm-x/raw/master/src/chrome-ext/ShowX/icon16.png)
![](https://github.com/dudung/abm-x/raw/master/src/chrome-ext/ShowX/icon48.png)
![](https://github.com/dudung/abm-x/raw/master/src/chrome-ext/ShowX/icon128.png)

and the content is simply the size, according to [[2](#ref2)].

## JSON file
```json
{
	"manifest_version" : 2,
	"name" : "ShowX",
	"description" : "Extension to show x",
	"version" : "0.1",
	"browser_action" : {
		"default_title" : "ShowX",
		"default_icon" : "icon.png",
		"default_popup" : "popup.html"
	},
	"icons" : {
		"16" : "icon16.png",
		"48" : "icon48.png",
		"128" : "icon128.png"
	}
}
```

## HTML file
```
<!doctype html>
<html>
	<head>
		<script src="popup_script.js">
		</script>
		<style>
			body {
				padding: 10px;
				margin: 10px;
				width: 200px;
				height: 200px;
			}
		</style>
	</head>
	<body>
	</body>
</html>
```

## JS file
```javascript
document.addEventListener("DOMContentLoaded", drawRandom);

function drawRandom() {
	var c = document.createElement("canvas");
	document.body.append(c);
	c.width = "200";
	c.height = "200";
	c.style.width = c.width + "px";
	c.style.height = c.height + "px";
	c.style.background = "#fff";
	
	var cx = c.getContext("2d");
	
	var lx = parseInt(c.width);
	var ly = parseInt(c.height);
	var lr = 0.05 * Math.sqrt(lx * ly);
	
	var color = [
		"#aaa", "#aaf", "#afa", "#aff",
		"#faa", "#faf", "#ffa", "#fff",
		"#888", "#88f", "#8f8", "#8ff",
		"#f88", "#f8f", "#ff8", "#888",
	]
	
	var N = 100;
	for(var i = 0; i < N; i++) {
		var x = Math.random() * (lx - 20) + 10;
		var y = Math.random() * (ly - 20) + 10;
		var r = Math.random() * lr;
		
		var c = parseInt(Math.random() * 16);
		cx.fillStyle = color[c];
		
		cx.beginPath();
		cx.arc(x, y, r, 0, 2 * Math.PI);
		cx.fill();
	}
}
```


## Note
1. Not exists JS can not be detected directly. You should remove and add again the extension. Some errors are difficult to find since it shows different lines.
2. It can create element in the JS file as in this example.
3. It can use MathJax by referencing the CDN.
4. Shown errors are also the old ones. Remove the unecessary to avoid confusion as I have encountered.

## Edit
2020-05-20 Create this post. <br />

## References
1. <a name="ref1"></a> Prateek Mehta, "Creating Google Chrome Extensions", Apress, 1st edition, Jun 2016, url <https://isbnsearch.org/isbn/9781484217740>.
2. <a name="ref2"></a> url <https://stackoverflow.com/a/20424740/9475509> [20200520].

