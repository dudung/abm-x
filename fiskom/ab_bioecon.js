/*
	ab_bioecon.js
	Simulation of plantation in bioeconomy based on ABM
	
	Sparisoma Viridi | dudung@gmail.command
	
	20180909
	Start this simulation project.
	20180911
	Add comments and make better code layout.
	20180929
	Change name according to new naming convention.
	CDN https://rawgit.com/dudung/butiran/master/app
	/ab_bioecon.html
	20181120
	Cancel previous CDN and rename file to JS.
	Define main function.
*/

// Call main function
main();

// Define main function
function main() {
	
	// Set page title
	var p = document.createElement("p");
	p.innerHTML = "Agent-based model for bioeconomy plantation simulation";
	p.style.fontWeight = "bold";
	document.body.append(p);

	// Temperature distribution
	var temp = new DistDiscIntGaussian(20, 4, 
		{min: 0, max: 40, step: 1, N: 365}
	);

	var tatemp = document.createElement("textarea");
	tatemp.style.height = "100px";
	document.body.append(tatemp);
	var N = 365;
	var content = "# T\tpT\n";
	for(var i = 0; i < N; i++) {
		var line = (i + 1) + "\t" + temp.getValue() + "\n";
		content += line;
	}
	tatemp.value = content;


	// Precipitation distribution
	var ipre = new DistDiscIntReciprocal(-3,
		{min: 0, max: 50, step: 1, N: 365}
	);

	var taipre = document.createElement("textarea");
	taipre.style.height = "100px";
	document.body.append(taipre);
	var N = 365;
	var content = "# I\tpI\n";
	for(var i = 0; i < N; i++) {
		var line = (i + 1) + "\t" + ipre.getValue() + "\n";
		content += line;
	}
	taipre.value = content;


	// Growing function related to temperature
	var tagrowtemp = document.createElement("textarea");
	tagrowtemp.style.height = "100px";
	document.body.append(tagrowtemp);
	var N = 40;
	var content = "# T\tGT\n";
	var TL = 10;
	var TO = 27;
	var TH = 38;
	var c2 = -0.0084;
	for(var i = 0; i <= N; i++) {
		var line = i + "\t" + GrowTemp(i, TL, TO, TH, c2) + "\n";
		content += line;
	}
	tagrowtemp.value = content;


	// Growing function related to water
	var tagrowwater = document.createElement("textarea");
	tagrowwater.style.height = "100px";
	document.body.append(tagrowwater);
	var N = 50;
	var content = "# H\tGH\n";
	var HL = 20;
	var HH = 40;
	for(var i = 0; i <= N; i++) {
		var line = i + "\t" + GrowWater(i, HL, HH) + "\n";
		content += line;
	}
	tagrowwater.value = content;


	// Sigmoid function
	var tasig = document.createElement("textarea");
	tasig.style.height = "100px";
	document.body.append(tasig);
	var N = 50;
	var content = "# t\tS\n";
	var A = 1;
	var b = 0.4;
	var t0 = 15
	for(var i = 0; i <= N; i++) {
		var line = i + "\t"
			+ Sigmoid(i, A, b, t0).toExponential(5) + "\n";
		content += line;
	}
	tasig.value = content;


	// Derivative of sigmoid function
	var tadsig = document.createElement("textarea");
	tadsig.style.height = "100px";
	document.body.append(tadsig);
	var N = 50;
	var content = "# t\tDG0\n";
	var A = 1;
	var b = 0.4;
	var t0 = 15
	for(var i = 0; i <= N; i++) {
		var line = i + "\t"
			+ dSigmoid(i, A, b, t0).toExponential(5) + "\n";
		content += line;
	}
	tadsig.value = content;


	// Farming types variables
	var plantCF = new Plant(
		{TL: 10, TO: 27, TH: 38, c2: -0.0084},
		{HL: 20, HH: 40},
		{A: 1, b: 0.4, t0: 15},
		30, 10, 180, false, 2.4875
	);

	var plantOF = new Plant(
		{TL: 10, TO: 27, TH: 38, c2: -0.0084},
		{HL: 20, HH: 40},
		{A: 1, b: 0.4, t0: 15},
		30, 10, 180, true, 2.4875
	);

	var plantSF = new Plant(
		{TL: 10, TO: 27, TH: 38, c2: -0.0084},
		{HL: 20, HH: 40},
		{A: 1, b: 0.4, t0: 15},
		30, 10, 180, true, 2.4875
	);

	var plantSF2 = new Plant(
		{TL: 10, TO: 27, TH: 38, c2: -0.0084},
		{HL: 20, HH: 40},
		{A: 1, b: 0.4, t0: 15},
		30, 10, 180, false, 2.4875
	);

	var TO = 27;
	var HH = 40;

	var taplants = document.createElement("textarea");
	taplants.style.height = "100px";
	taplants.style.width = "520px";
	document.body.append(taplants);
	var content = "# t\tsCF     \tsOF     \tsSF     \tsSF-\n";
	var tmin = 0;
	var tmax = 365;
	for(var t = tmin; t < tmax; t++) {
		var T = temp.getValue();
		var H = ipre.getValue() * 1;
		
		plantCF.grow(T, H, t);
		var aCF = plantCF.getAge();
		var sCF = plantCF.getSize();

		plantOF.grow(T, H, t);
		var aOF = plantOF.getAge();
		var sOF = plantOF.getSize();

		plantSF.grow(TO, HH, t);
		var aSF = plantSF.getAge();
		var sSF = plantSF.getSize();
		
		plantSF2.grow(TO, HH, t);
		var aSF2 = plantSF2.getAge();
		var sSF2 = plantSF2.getSize();
		
		var line = t + "\t"
			+ sCF.toExponential(5) + "\t"
			+ sOF.toExponential(5) + "\t"
			+ sSF.toExponential(5) + "\t"
			+ sSF2.toExponential(5) + "\n";
		content += line;
	}
	taplants.value = content;


	// Plant final size according to each farming type
	var taplantsize = document.createElement("textarea");
	taplantsize.style.height = "100px";
	taplantsize.style.width = "300px";
	document.body.append(taplantsize);
	var content = "# i\tsCF\tsOF\tsSF\tsSF-\n";
	var N = plantCF.finalSize.length;
	for(var i = 0; i < N; i++) {
		content += i + "\t"
			+ plantCF.finalSize[i].toFixed(2) + "\t"
			+ plantOF.finalSize[i].toFixed(2) + "\t"
			+ plantSF.finalSize[i].toFixed(2) + "\t"
			+ plantSF2.finalSize[i].toFixed(2) + "\n";
	}
	taplantsize.value = content;


	// Calculate avarage and standard deviation
	var tastat = document.createElement("textarea");
	tastat.style.height = "100px";
	document.body.append(tastat);
	var content = "# FS\tavg\tdev\n";
	var savg = avg(plantCF.finalSize).toFixed(2);
	var sdev = dev(plantCF.finalSize).toFixed(2);
	content += "CF\t" + savg + "\t" + sdev + "\n";
	savg = avg(plantOF.finalSize).toFixed(2);
	sdev = dev(plantOF.finalSize).toFixed(2);
	content += "OF\t" + savg + "\t" + sdev + "\n";
	savg = avg(plantSF.finalSize).toFixed(2);
	sdev = dev(plantSF.finalSize).toFixed(2);
	content += "SF\t" + savg + "\t" + sdev + "\n";
	savg = avg(plantSF2.finalSize).toFixed(2);
	sdev = dev(plantSF2.finalSize).toFixed(2);
	content += "SF-\t" + savg + "\t" + sdev + "\n";
	tastat.value = content;

}
