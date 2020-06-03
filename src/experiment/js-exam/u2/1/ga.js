// Execute main funtion
main();


// Define main function
function main() {
	var p1 = "0010110";
	var p2 = "1111111";
	var nn;
	for (nn=1;nn<11;nn++)
	{
	var x0 = 0;
	var y0 = 0;
	var n = 4;
	[c1, c2] = crossover(p1, p2, n);
	
	var val1 = fitness(p1,x0,y0);
	var val2 = fitness(p2,x0,y0);
	var val3 = fitness(c1,x0,y0);
	var val4 = fitness(c2,x0,y0);
	
	var val = [val1,val2,val3,val4]
	
	var i;
	var hold = [0,0];
	var max = 0;
	
	for (i = 0; i<5 ;i++)
	{
		if (val[i]>max)
		{
			max = val[i];
			hold[0] = i;
		}
	}
	var buang = hold[0];
	val[buang]= -100;
	var max = 0;
	
	for (i=0; i<5 ; i++)
	{
		if (val[i]>max)
		{
			max = val[i];
			hold[0] = i;
		}
	}
	var berhasil= [p1,p2];
	
	if (hold[0]==0){
		berhasil[0]=p1;
	}
	else if (hold[0]==1) {
		berhasil[0]=p2;
	}
	else if (hold[0]==2) {
		berhasil[0]=c1;
	}
	else if (hold[0]==3) {
		berhasil[0]=c2;
	}
	
	if (hold[1]==0){
		berhasil[1]=p1;
	}
	else if (hold[1]==1) {
		berhasil[1]=p2;
	}
	else if (hold[1]==2) {
		berhasil[1]=c1;
	}
	else if (hold[1]==3) {
		berhasil[1]=c2;
	}
	
	p1 = berhasil[0];
	p2 = berhasil[1];
	}
	console.log("Kromosom yang berhasil adalah : ");
	console.log(p1);
	console.log(p2);
	console.log("Dengan nilai fitness : ");
	var fit1 = fitness(p1,x0,y0);
	var fit2 = fitness(p2,x0,y0);
	console.log(fit1);
	console.log(fit2);
	
}


// Crossover two chromosome
function crossover() {
	var p1 = arguments[0];
	var p2 = arguments[1];
	var n = arguments[2];
	
	var c1 = p1.slice(0, n) + p2.slice(n);
	var c2 = p1.slice(n) + p2.slice(0, n);
	
	return [c1, c2];
}


// Get interpretation of position and class from chromosome
function getValues() {
	var p = arguments[0];
	
	var xs = p.slice(0, 3);
	var ys = p.slice(3, 6);
	var cs = p.slice(6);
	
	var x = xs.slice(0,1)*Math.pow(2,2)+xs.slice(1,2)*Math.pow(2,1)+xs.slice(2,3)*Math.pow(2,0);
	var y = ys.slice(0,1)*Math.pow(2,2)+ys.slice(1,2)*Math.pow(2,1)+ys.slice(2,3)*Math.pow(2,0);
	var g = cs;
	
	return [x, y, g];
}

// Create fitness function
	function fitness() {
	var p = arguments[0];
	var x0 = arguments [1];
	var y0 = arguments [2];
	
	var x, y, g;
	[x, y, g] = getValues(p);
	
	var dr = Math.sqrt(Math.pow((x-x0),2)+ Math.pow((y-y0),2));
	
	var val = 1/(1+dr);
	return val;
	}
	