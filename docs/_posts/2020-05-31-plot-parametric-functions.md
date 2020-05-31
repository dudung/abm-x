---
layout: post
author: viridi
title: Plot parametric functions
mathjax: true
ptext: false
x3dom: false
threejs: false
category: www
tags: [js]
---
Using `canvas` in JS plot parametric functions

## Parameteric functions
Suppose that there are two parametric functions in the form of

\begin{equation}
\label{eqn:function-parametric-x}
x(t) = A cos(\omega t)
\end{equation}

and

\begin{equation}
\label{eqn:function-parametric-y}
y(t) = A sin(\omega t)
\end{equation}

with $t \in [0, T]$. Fig 1 can obtained using $A = 1$ and $T = 1$.

![](https://github.com/dudung/abm-x/raw/master/src/classes/js-plot-func/lissajous-1-1.png)
![](https://github.com/dudung/abm-x/raw/master/src/classes/js-plot-func/lissajous-1-2.png)
![](https://github.com/dudung/abm-x/raw/master/src/classes/js-plot-func/lissajous-3-2.png)
![](https://github.com/dudung/abm-x/raw/master/src/classes/js-plot-func/lissajous-3-1.png)

Fig 1 Lissajous pattern for $\omega_1$:$\omega_2$ are 1:1, 1:2, 3:2, and 3:1.

## Code snippets
Assume that there is already a `canvas` HTML DOM element defined and appended to a HTML with id of `canvas0`. Then the id can be informed to `jsPlotParametric` object through

```javascript
jsPlotParametric.setCanvasId("canvas0");
```

Next steps are  setting the range of $x \in [-1,1]$

```javascript
jsPlotParametric.setXRange(-1, 1);
```

range of $y \in [-1,1]$

```javascript
jsPlotParametric.setYRange(-1, 1);
```

and range of $t \in [0,1]$

```javascript
jsPlotParametric.setTRange(0, 1);
```

Following lines

```javascript
// Define 1st function of x(t)
function x1(t) {
	var A = 1;
	var T = 1;
	var omega = 2 * Math.PI * T;
	var omega1 = 3 * omega;
	var x = A * Math.cos(omega1 * t);
	return x;
}
```

are for Eqn. \eqref{eqn:function-parametric-x} and

```javascript
// Define 1st function of y(t)
function y1(t) {
	var A = 1;
	var T = 1;
	var omega = 2 * Math.PI * T;
	var omega2 = 1 * omega;
	var y = A * Math.sin(omega2 * t);
	return y;
}
```

for Eqn. \eqref{eqn:function-parametric-y}. Both functions representing Eqns. \eqref{eqn:function-parametric-x} and \eqref{eqn:function-parametric-y} should be added to `jsPlotParametric` through

```javascript
jsPlotParametric.addFunction(x1, y1, "#f00");
```

with the last parameter `#f00` is color of drawn function. Then

```javascript
jsPlotParametric.plot(0);
```

is how to plot the function of the first element in array or with index `0`. In the `jsPlotParametric` there are three arrays

```javascript
// Add function to be plotted
addFunction: function() {
	// Push function x(t)
	if(this.functionsx == undefined) {
		this.functionsx = [];
	}
	this.functionsx.push(arguments[0]);
	
	// Push function y(t)
	if(this.functionsy == undefined) {
		this.functionsy = [];
	}
	this.functionsy.push(arguments[1]);
	
	// Push color or #000 if not provided
	if(this.colors == undefined) {
		this.colors = [];
	}
	if(arguments[2] == undefined) {
		this.colors.push("#000");			
	} else {
		this.colors.push(arguments[2]);
	}
},
```

which area `functionsx`, `functionsy`, and `colors` that store parametric functions $x(t)$ and $y(t)$, and color for plotting. If the last arguments for color not provided, it will be set as `#000` by default.

Complete JS code is available [[1](#ref1)].

## Edit
2020-05-31 Create this post. <br />

## References
1. <a name="ref1"></a> url <https://github.com/dudung/abm-x/tree/master/src/classes/js-plot-func>

