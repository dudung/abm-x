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



and the content is the size according to [[2](#ref2)].


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

## Note
1. Not exists JS can be detected directly. You should remove and add again the extension. Some errors are difficult to find since it shows different lines.
2. It can create element in the JS file. 

## Edit
2020-05-20 Create this post. <br />

## References
1. <a name="ref1"></a> Prateek Mehta, "Creating Google Chrome Extensions", Apress, 1st edition, Jun 2016, url <https://isbnsearch.org/isbn/9781484217740>.
2. <a name="ref2"></a> url <https://stackoverflow.com/a/20424740/9475509> [20200520].

