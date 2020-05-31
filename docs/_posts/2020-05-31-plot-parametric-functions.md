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
	var x = A 8 Math.cos(3 * omega * t);
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
	var y = A * Math.sin(1 * omega * t);
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

is how to plot the function of the first element in array or with index `0`. Complete JS code is available [[1](#ref1)].

## Edit
2020-05-31 Create this post. <br />

## References
1. <a name="ref1"></a> url <https://github.com/dudung/abm-x/tree/master/src/classes/js-plot-func>

