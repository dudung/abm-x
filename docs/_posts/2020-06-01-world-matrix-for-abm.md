---
layout: post
author: viridi
title: World matrix for ABM simulation (a design)
mathjax: true
ptext: false
x3dom: false
threejs: false
category: www
tags: [js]
---
Design of a matrix in JS is used for reprenting world matrix and related spatial information

## World matrix
An empty world will be represented in a matrix will all components are zero

\begin{equation}
\label{eqn:matrix-world-empty}
\mathbf{W}_E = \left[
\begin{array}{ccccccc}
0 & 0 & 0 & 0 & 0 & \dots  & 0 \newline
0 & 0 & 0 & 0 & 0 & \dots  & 0 \newline
0 & 0 & 0 & 0 & 0 & \dots  & 0 \newline
0 & 0 & 0 & 0 & 0 & \dots  & 0 \newline
0 & 0 & 0 & 0 & 0 & \dots  & 0 \newline
\vdots & \vdots & \vdots & \vdots & \vdots & \ddots & \vdots \newline
0 & 0 & 0 & 0 & 0 & \dots & 0
\end{array}
\right]
\end{equation}

## Border
With Dirichlet boundary condition, $u(a) = u_A$ [[1](#ref1)], eqn. \eqref{eqn:matrix-world-empty} will become

\begin{equation}
\label{eqn:matrix-world-border}
\mathbf{W}_{BC} = \left[
\begin{array}{ccccc}
-1 & -1 & -1 & -1 & -1 & \dots  & -1 \newline
-1 & 0 & 0 & 0 & 0 & \dots  & -1 \newline
-1 & 0 & 0 & 0 & 0 & \dots  & -1 \newline
-1 & 0 & 0 & 0 & 0 & \dots  & -1 \newline
-1 & 0 & 0 & 0 & 0 & \dots  & -1 \newline
\vdots & \vdots & \vdots & \vdots & \vdots & \ddots & \vdots \newline
-1 & -1 & -1 & -1 & -1 & \dots & -1
\end{array}
\right],
\end{equation}

where $a$ is the index at the border of the matrix.

## Separation wall
In to the matrix a separation wall can also be added, e.g.

\begin{equation}
\label{eqn:matrix-world-border-wall}
\mathbf{W}_{BC+SP} = \left[
\begin{array}{ccccc}
-1 & -1 & -1 & -1 & -1 & \dots  & -1 \newline
-1 & 0 & 0 & -1 & 0 & \dots  & -1 \newline
-1 & 0 & 0 & -1 & 0 & \dots  & -1 \newline
-1 & 0 & 0 & -1 & 0 & \dots  & -1 \newline
-1 & 0 & 0 & 0 & 0 & \dots  & -1 \newline
\vdots & \vdots & \vdots & \vdots & \vdots & \ddots & \vdots \newline
-1 & -1 & -1 & -1 & -1 & \dots & -1
\end{array}
\right],
\end{equation}

## Other walls
By adding value of -1 other walls can also be introduced to the system.

## JS code snippet
Following code snippet

can be used to perfrom eqns. \eqref{eqn:matrix-world-empty} - \eqref{eqn:matrix-world-border-wall}.

```javascript
var W_E = createZeroMatrix(m, n);

var W_BC = addBorderTo(W_E);

var walls = createWalls([[0, 3], [0, 4], [0, 5]]);
var W_BC_SP = addWallsTo(W_E, walls);

viewWorld(W_BC_SP).inCanvas("canvas0");
viewWorld(W_BC_SP).inTextarea("textarea0");
viewWorld(W_BC_SP).inConsole();
//viewWorld(W_BC_SP).inFile("file0.txt");
```

## Edit
2020-06-01 Create this post. <br />
2020-06-02 Edit this post. <br />

## References
1. <a name="ref1"></a> url <https://www.multiphysics.us/BC.html>
