---
layout: post
author: viridi
title: Fluid thermal conductivity measurement
mathjax: true
ptext: false
x3dom: false
threejs: false
category: www
tags: [js]
---

Effects of Methylation on Chemical Bond and Thermophysical Properties of Ionic Based Imidazolium Cation

Above was the title of presentation [[1](#ref1)] from Yunita Anggraini, where following is the measurement system supervised mainly by Dr. Daniel Kurnia.

![](https://github.com/dudung/abm-x/raw/master/src/experiment/js-draw-apparatus/fluid-thermal-conductivity.png)

Fig 1 Measurement system of fluid conductivity thermal.

Observed results are then fitted using model [[2](#ref2)]

\begin{equation}
\kappa = A + BT + CT^2,
\end{equation}

by determining the coefficients $A$, $B$, and $C$ through least square method.

## Note
Purpose of this post is the future plan to produce Fig 1 using JS, X3DOM, Three.js, or SVG, with a real problem. In `js-draw-apparatus` there is only the image file without any JS files for description.

## Edit
2020-06-08 Create this post. <br />

## References
1. <a name="ref1"></a> Yunita Anggraini, "Effects of Methylation on Chemical Bond and Thermophysical Properties of Ionic Based Imidazolium Cation", Tesis Magister, Institut Teknologi Bandung, Indonesia, 6 Jun 2018, url <https://digilib.itb.ac.id/index.php/gdl/view/47481>.
2. <a name="ref2"></a> A. Kayode Coker, "Physical Property of Liquids and Gases" in Fortran Programs for Chemical Process Design, Analysis, and Simulation, Gulf Publishing Company, Houston, 1995, ch. 2, pp. 103-149, url <https://doi.org/10.1016/B978-088415280-4/50003-0>