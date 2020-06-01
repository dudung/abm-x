---
layout: post
author: viridi
title: World matrix for ABM simulation
mathjax: true
ptext: false
x3dom: false
threejs: false
category: www
tags: [js]
---
A matrix in JS is used for reprenting world matrix and related spatial information

## World matrix
An empty world will be represented in a matrix will all components are zero

\begin{equation}
\label{eqn:matrix-world-empty}
\mathbf{E} = \left[
\begin{array}{ccccc}
0 & 0 & 0 & \dots  & 0 \\
0 & 0 & 0 & \dots  & 0 \\
0 & 0 & 0 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \dots & 0
\end{array}
\right]
\end{equation}


Dirichlet y(a) = A.


\begin{equation}
\label{eqn:function-parametric-x}
x(t) = A cos(\omega t)
\end{equation}

## Edit
2020-06-01 Create this post. <br />

## References
1. <a name="ref1"></a> url <https://www.multiphysics.us/BC.html>
