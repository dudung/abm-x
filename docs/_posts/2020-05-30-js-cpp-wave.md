---
layout: post
author: viridi
title: C++ and JS showing travelling wave on a string
mathjax: false
ptext: false
x3dom: false
threejs: false
category: www
tags: [js]
---
Simulating a traveling wave on a string

## Files
Thera are three files and one temporary file required for the system to work, where the details are are available [[1]](#ref1). And the files are `cpp-gen-wave.cpp`, `js-cpp-wave.html`, and `js-view-wave.js`; and also `data.txt`.

## Processes
How this works is shown in following Fig 1.

![](https://github.com/dudung/abm-x/raw/master/src/js-cpp/js-cpp-wave/system.png)

Fig 1 Interaction between `cpp-gen-wave.cpp`, `js-cpp-wave.html`, and `js-view-wave.js` while showing travelling wave in an internet browser, e.g. Google Chrome.

There are two independent processes that work at the same time, where the first is compiled `cpp-gen-wave.cpp` that is continuously producing wave curve data in `data.txt` file with JSON format, and the second is `js-cpp-wave.html` that calls `js-view-wave.js` in an internet browser monitoring `data.txt` file by including it with `script` HTML DOM element. When it is ready, the JSON object will be read and used to draw the wave curve in `canvas` HTML DOM element.

## Note
Better monitoring way is required. And when it is successful, every old programming language with ability in producing file, e.g. `data.txt`, can interact with HTML + CSS + JS files and show something using an internet browser.

## Edit
2020-05-30 Create this post. Fix typo. <br />

## References
1. <a name="ref1"></a> url <https://github.com/dudung/abm-x/tree/master/src/js-cpp/js-cpp-wave>

