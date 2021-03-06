/*
	butiran.js
	Simulation of physical system based on granular particles
	(en: granular particle, id: butiran)
	
	URL https://github.com/dudung/butiran
	
	Sparisoma Viridi | dudung@gmail.com
		
	20180905
	Recreate this library and merge all into this single file
	in order to simplify maintenance.
	20180906
	Confuse in naming convention of variables, functions, and
	filenames.
	20180909
	Start the ABM with designing number generator.
	20180929
	Merge old version of butiran.js into this file and perform
	some modification.
*/



/*
	Polynomial
	
	20180301
	Create this library and tested.
	20180519
	Fix unnecessary typo and implement node.js module.exports
	command.
	20180520
	Add comments and adjust export format as sequence.js script.
	Modify constructor by introducing single coefs with 0 value
	to avoid error in calculating polynomial order.
	20180906
	Redefine class of Polynomial to get better consistency in
	writing the code.
	Define and test constructor, dif, int, mul, div (zu Hause)
	Fix int without explicit boundary condition,
	continue add, sub, mul (and der Uni).
	Move it from old version of butiran.js to the new one.
*/

class Polynomial {
	// Constructor
	constructor() {
		this.coefs = arguments[0];
		this.length = this.coefs.length;
	}
	
	// Differentiate a polynomial
	static dif() {
		var oldp = arguments[0];
		var N = oldp.length - 1;
		var oldcs = oldp.coefs;
		var newcs = [];
		for(var i = 0; i < N; i++) {
			newcs[i] = (i + 1) * oldcs[i + 1];
		}
		var newp = new Polynomial(newcs);
		return newp;
	}
	
	// Integrate a polynomial
	static int() {
		var p = arguments[0];
		var c0 = arguments[1];
		var N = p.length;
		var c = p.coefs;
		var coefs = [];
		coefs[0] = (c0 != undefined) ? c0 : 0;
		for(var i = 0; i < N; i++) {
			coefs[i + 1] =  c[i] / (i + 1);
		}
		var pint = new Polynomial(coefs);
		return pint;
	}
	
	// Multiply a polynomial with a number
	static mul() {
		if(typeof arguments[1] == "number") {
			var p = arguments[0];
			var N = p.length;
			var c = p.coefs;
			var d = arguments[1];
			var cmul = [];
			for(var i = 0; i < N; i++) {
				cmul[i] =  d * c[i];
			}
			var pmul = new Polynomial(cmul);
			return pmul;
		} else {
			var p1 = arguments[0];
			var N1 = p1.length;
			var p2 = arguments[1];
			var N2 = p2.length;
			var c1 = p1.coefs;
			var c2 = p2.coefs;
			var N = N1 + N2 - 1;
			var coefs = [];
			for(var i = 0; i < N; i++) {
				var d = 0;
				for(var j = 0; j <= i; j++) {
					var d1 = c1[j];
					var d2 = c2[i - j];
					d1 = (d1 != undefined) ? d1 : 0;
					d2 = (d2 != undefined) ? d2 : 0;
					var dd = d1 * d2;
					d += dd
				}
				coefs[i] = d;
			}
			var pmul = new Polynomial(coefs);
			return pmul;
		}
	}
	
	// Divide a polynomial with a number
	static div() {
		var p = arguments[0];
		var N = p.length;
		var c = p.coefs;
		var d = arguments[1];
		var cdiv = [];
		for(var i = 0; i < N; i++) {
			cdiv[i] =  c[i] / d;
		}
		var pdiv = new Polynomial(cdiv);
		return pdiv;
	}
	
	// Add two polynomials
	static add() {
		var p1 = arguments[0];
		var N1 = p1.length;
		var p2 = arguments[1];
		var N2 = p2.length;
		var N = (N1 >= N2) ? N1 : N2;
		var c1 = p1.coefs;
		var c2 = p2.coefs;
		var cadd = [];
		for(var i = 0; i < N; i++) {
			c1[i] = (c1[i] != undefined) ? c1[i] : 0;
			c2[i] = (c2[i] != undefined) ? c2[i] : 0;
			cadd[i] = c1[i] + c2[i];
		}
		var padd = new Polynomial(cadd);
		return padd;
	}
	
	// Substract two polynomials
	static sub() {
		var p1 = arguments[0];
		var N1 = p1.length;
		var p2 = arguments[1];
		var N2 = p2.length;
		var N = (N1 >= N2) ? N1 : N2;
		var c1 = p1.coefs;
		var c2 = p2.coefs;
		var csub = [];
		for(var i = 0; i < N; i++) {
			c1[i] = (c1[i] != undefined) ? c1[i] : 0;
			c2[i] = (c2[i] != undefined) ? c2[i] : 0;
			csub[i] = c1[i] - c2[i];
		}
		var psub = new Polynomial(csub);
		return psub;
	}
	
	// Calculate value of a polynomial
	val() {
		if(arguments.length == 0) {
			return 0;
		} else {
			var x = arguments[0];
			var c = this.coefs;
			var fx = 0;
			var N = this.length;
			for(var i = 0; i < N; i++) {
				var dfx = c[i] * Math.pow(x, i);
				fx += dfx;
			}
			return fx;
		}
	}
}



/*
	Random number generator
	
	20180302
	Create this library of functions.
	20180520
	Add module.export for ES module support.
	20180909
	Integrate randInt and randIntN functions, which is
	previously in random.js, into butiran.js file.
*/

class Random {
	// Generate int \in [min, max]
	static randInt(min, max) {
		var x = Math.random() * (max - min) + min;
		x = Math.round(x);
		return x;
	}

	// Generate array of N number of int
	static randIntN(min, max, N) {
		var x = [];
		for(var i = 0; i < N; i++) {
			x.push(randInt(min, max));
		}
		return x;
	}
}



/*
	Discrete integer Gaussian distribution (DIGD)
	
	20180909
	Prepare number generator for AMB simulation (ICGAB 2018).
	Functions generateNumber, correctNumber, generateSequence,
	randomizeSequence, getValue are tested.
*/

class DistDiscIntGaussian {
	// Constructor
	constructor() {
		this.mu = arguments[0];
		this.sigma = arguments[1];
		this.min = arguments[2].min;
		this.max = arguments[2].max;
		this.step = arguments[2].step;
		this.N = arguments[2].N;
		this.x = [];
		this.y = [];
		this.n = [];
		this.sequence = [];
		this.pos = 0;
		
		this.generateNumber();
		this.correctNumber();
		this.generateSequence();
		this.randomizeSequence();
	}
	
	// Define Gaussian distribution function
	func(x) {
		var m = this.mu;
		var s = this.sigma;
		var sp = Math.sqrt(2 * Math.PI);
		var A = 1 / (s * sp);
		var x_m2 = (x - m) * (x - m);
		var b = 2 * s * s;
		var y = A * Math.exp(-x_m2 / b);
		return y;
	}
	
	// Generate number of data
	generateNumber() {
		var imin = this.min;
		var imax = this.max;
		var di = this.step;
		for(var i = imin; i <= imax; i += di) {
			var xx = i;
			var yy = this.func(xx);
			var nn = Math.round(this.N * yy);
			this.x.push(xx);
			this.y.push(yy);
			this.n.push(nn);
		}
	}
		
	// Correct number of data
	correctNumber() {
		var imin = this.min;
		var imax = this.max;
		var NN = 0;
		for(var i = 0; i < (imax - imin); i++) {
			var nn = this.n[i];
			NN += nn;
		}
		var imid = Math.round((imin + imax) / 2);
		var dn = this.N - NN;
		this.n[imid] += dn;
	}
	
	// Generate sequence
	generateSequence() {
		this.sequence = [];
		var Ni = this.x.length;
		for(var i = 0; i < Ni; i++) {
			var Nj = this.n[i];
			for(var j = 0; j < Nj; j++) {
				this.sequence.push(this.x[i]);
			}
		}
	}
	
	// Randomize sequence
	randomizeSequence() {
		var seq = this.sequence;
		var N = seq.length;
		for(var i = 0; i < N; i++) {
			var src = Random.randInt(0, N - 1);
			var dest = Random.randInt(0, N - 1);
			[seq[src], seq[dest]] = [seq[dest], seq[src]];
		}
	}
	
	// Get value of sequence
	getValue() {
		var value = this.sequence[this.pos];
		this.pos++;
		if(this.pos == this.N) {
			this.pos = 0;
		}
		return value;
	}
}



/*
	Discrete integer reciprocal distribution (DIRD)
	
	20180909
	Create distribution for AMB simulation (ICGAB 2018).
	Functions generateNumber, correctNumber, generateSequence,
	randomizeSequence, getValue are tested.
	Implement different correction procedure as in DIGD.
*/

class DistDiscIntReciprocal {
	// Constructor
	constructor() {
		this.infinity = arguments[0];
		this.min = arguments[1].min;
		this.max = arguments[1].max;
		this.step = arguments[1].step;
		this.N = arguments[1].N;
		this.x = [];
		this.y = [];
		this.n = [];
		this.sequence = [];
		this.pos = 0;
		
		this.generateNumber();
		this.correctNumber();
		this.generateSequence();
		this.randomizeSequence();
	}
	
	// Define Gaussian distribution function
	func(x) {
		var inf = this.infinity;
		var min = this.min;
		var max = this.max;
		var ln1 = Math.log(min - inf);
		var ln2 = Math.log(max - inf);
		var A = 1 / (ln2 - ln1);
		var y = A / (x - inf);
		return y;
	}
	
	// Generate number of data
	generateNumber() {
		var imin = this.min;
		var imax = this.max;
		var di = this.step;
		for(var i = imin; i <= imax; i += di) {
			var xx = i;
			var yy = this.func(xx);
			var nn = Math.round(this.N * yy);
			this.x.push(xx);
			this.y.push(yy);
			this.n.push(nn);
		}
	}
		
	// Correct number of data
	correctNumber() {
		var imin = this.min;
		var imax = this.max;
		var NN = 0;
		for(var i = 0; i < (imax - imin); i++) {
			var nn = this.n[i];
			NN += nn;
		}
		var imid = Math.round((imin + imax) / 2);
		var dn = this.N - NN;
		var Ni = Math.abs(dn);
		for(var i = 0; i < Ni; i++) {
			this.n[i] += Math.sign(dn)
		}
	}
	
	// Generate sequence
	generateSequence() {
		this.sequence = [];
		var Ni = this.x.length;
		for(var i = 0; i < Ni; i++) {
			var Nj = this.n[i];
			for(var j = 0; j < Nj; j++) {
				this.sequence.push(this.x[i]);
			}
		}
	}
	
	// Randomize sequence
	randomizeSequence() {
		var seq = this.sequence;
		var N = seq.length;
		for(var i = 0; i < N; i++) {
			var src = Random.randInt(0, N - 1);
			var dest = Random.randInt(0, N - 1);
			[seq[src], seq[dest]] = [seq[dest], seq[src]];
		}
	}
	
	// Get value of sequence
	getValue() {
		var value = this.sequence[this.pos];
		this.pos++;
		if(this.pos == this.N) {
			this.pos = 0;
		}
		return value;
	}
}



/*
	Plantation growth function (PGF)
	
	20180909
	Create this functions for AMB simulation (ICGAB 2018).
	Functions GrowTemp, GrowWater, Sigmoid, and dSigmoid
	are tested.
*/

// Define temperature dependece growing factor
function GrowTemp(T, TL, TO, TH, c2) {
	var TLO = TL + Math.sqrt((TO - TL)*(TO - TL) + 1/c2);
	var THO = TH - Math.sqrt((TH - TO)*(TH - TO) + 1/c2);
	var val;
	if(T < TL) {
		val = 0
	} else if((TL <= T) && (T < TLO)) {
		var a = c2 * (TLO - TO)*(TLO - TO) + 1;
		var b = T - TL;
		var c = TLO - TL;
		val = a * b / c;
	} else if((TLO <= T) && (T <= THO)) {
		val = 1 + c2 * (T - TO)*(T - TO);
	} else if((THO < T) && (T <= TH)) {
		var a = c2 * (THO - TO)*(THO - TO) + 1;
		var b = T - TH;
		var c = THO - TH;
		val = a * b / c;		
	} else {
		val = 0;
	}
	return val;
}

// Define water dependece growing factor
function GrowWater(H, HL, HH) {
	var val;
	if(H < HL) {
		val = 0
	} else if((HL <= H) && (H < HH)) {
		val = (H - HL) / (HH - HL);
	} else {
		val = 1;
	}
	return val;
}

// Define sigmoid function
function Sigmoid(t, A, b, t0) {
	var B = Math.exp(-b * (t - t0));
	var val = A / (1 + B);
	return val;
}

// Define derivative of sigmoid function
function dSigmoid(t, A, b, t0) {
	var s = Sigmoid(t, A, b, t0);
	var val = s * (1 - s);
	return val;
}



/*
	Plant
	
	20180909
	Create this class using features from PGF, DIGD, DIRD.
	20180910
	Test and start simulation.
	20180911
	Add feature in recording final size for several replanting
	process.
*/

class Plant {
	// Constructor
	constructor() {
		this.tem = arguments[0];
		this.wat = arguments[1];
		this.sig = arguments[2];
		this.maxAge = arguments[3];
		this.lagTime = arguments[4];
		this.tauSoil = arguments[5];
		this.isResoil = arguments[6];
		this.Acorr = arguments[7];
		this.tSoil = 0;
		this.size = 0;
		this.age = 0;
		this.tlag = 0;
		this.idle = false;
		this.t = 0;
		this.finalSize = [];
		this.f
	}
	
	// Grow plant
	grow() {
		var T = arguments[0];
		var H = arguments[1];
		this.t = arguments[2];
		
		if(this.age < this.maxAge) {
			var tem = this.tem;
			var fT = GrowTemp(T, tem.TL, tem.TO, tem.TH, tem.c2);
			
			var wat = this.wat;
			var fH = GrowWater(H, wat.HL, wat.HH);
			
			var sig = this.sig;
			var fS = dSigmoid(this.age, sig.A, sig.b, sig.t0);
			var dsize = fT * fH * fS;
			
			var aa = 1 / this.tauSoil;
			var fSO = Math.exp(-aa*(this.t - this.tSoil));
			dsize *= fSO / this.Acorr;
			
			this.age++;
			this.size += dsize;
		} else {
			if(!this.idle) {
				this.finalSize.push(this.size);
			}
			
			if(this.tlag < this.lagTime) {
				this.idle = true;
				this.tlag++
			} else {
				this.replant();
				if(this.isResoil) this.resoil();
			}
		}
	}
	
	// Replant
	replant() {		
		this.age = 0;
		this.size = 0;
		this.tlag = 0;
		this.idle = false;
	}
	
	// Resoil
	resoil() {
		this.tSoil = this.t;
	}
	
	// Get age
	getAge() {
		var val = 0;
		if(!this.idle) {
			val = this.age;
		} else {
			val = 0;
		}
		return val;
	}
	
	// Get size
	getSize() {
		var val = 0;
		if(!this.idle) {
			val = this.size;
		} else {
			val = 0;
		}
		return val;
	}
}



/*
	Simple statistics
	
	20180911
	Create sum, avg, and dev for array. All are tested in web
	browser JS console.
*/

// Calculate sum of terms
function sum(x) {
	var N = x.length;
	var Sx = 0;
	for(var i = 0; i < N; i++) {
		Sx += x[i];
	}
	return Sx;
}

// Calculate average of terms
function avg(x) {
	var N = x.length;
	var Sx = sum(x);
	var avgx = Sx / N;
	return avgx;
}

// Calculate standard deviation
function dev(x) {
	var N = x.length;
	var avgx = avg(x);
	var s2 = 0;
	for(var i = 0; i < N; i++) {
		var x_avgx = x[i] - avgx;
		var x_avgx2 = x_avgx * x_avgx;
		s2 += x_avgx2;
	}
	s2 /= N;
	var devx = Math.sqrt(s2);
	return devx;
}



/*
	vect3.js
	Vector in 3-d Cartesian coordinate system
	
	Sparisoma Viridi | dudung@gmail.com
	
	20170214
	Create this library with following functions defined for
	Vect3 class
	add()	add two Vect3,
	sub() subtract two Vect3,
	dot()	dot product of two Vect3,
	crs()	cross product of two Vect3,
	mul()	multiplication of Vect3 with scalar,
	div() division of Vect3 with scalar,
	len() length of a Vect3,
	uni()	unit vector of a Vect3,
	neg()	negative of a Vect3.
	All are tested and works.
	20171226
	Create this object (again).
	Change crs() to cross(), uni() to unit(), 
	20171227
	Add some comments for clearer documentation.
	20180527
	Use node.js and webpack to wrap it to butiran.js and
	add node neg() from vect3old.js library.
	20180603
	Fix unit vector of 0 vector.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Vect3
class Vect3 {
	// Create three different types of constructor
	constructor() {
		if(arguments.length == 0) {
			this.x = 0.0;
			this.y = 0.0;
			this.z = 0.0;
		} else if(arguments.length == 3) {
			this.x = arguments[0];
			this.y = arguments[1];
			this.z = arguments[2];
		} else if(arguments.length == 1) {
			if(arguments[0] instanceof Vect3)
			this.x = arguments[0].x;
			this.y = arguments[0].y;
			this.z = arguments[0].z;
		}
	}
	
	// Get string value
	strval() {
		var s = "(";
		s += this.x + ", ";
		s += this.y + ", ";
		s += this.z;
		s += ")";
		return s;
	}
	
	// Add some Vect3
	static add() {
		var N = arguments.length;
		var x = 0.0;
		var y = 0.0;
		var z = 0.0;
		for(var i = 0; i < N; i++) {
			x += arguments[i].x;
			y += arguments[i].y;
			z += arguments[i].z;
		}
		var p = new Vect3(x, y, z);
		return p;
	}
	
	// Substract two Vect3
	static sub() {
		var x = arguments[0].x - arguments[1].x;
		var y = arguments[0].y - arguments[1].y;
		var z = arguments[0].z - arguments[1].z;
		var p = new Vect3(x, y, z);
		return p;
	}
	
	// Multiply Vect3 with scalar or vice versa
	static mul() {
		var a = arguments[0];
		var b = arguments[1];
		var x, y, z;
		if(a instanceof Vect3) {
			x = a.x * b;
			y = a.y * b;
			z = a.z * b;
		} else if(b instanceof Vect3) {
			x = a * b.x;
			y = a * b.y;
			z = a * b.z;
		}
		var p = new Vect3(x, y, z);
		return p;
	}
	
	// Divide Vect3 with scalar
	static div() {
		var a = arguments[0];
		var b = arguments[1];
		var	x = a.x / b;
		var	y = a.y / b;
		var	z = a.z / b;
		var p = new Vect3(x, y, z);
		return p;
	}
	
	// Dot two Vect3
	static dot() {
		var a = arguments[0];
		var b = arguments[1];
		var	xx = a.x * b.x;
		var	yy = a.y * b.y;
		var	zz = a.z * b.z;
		var d = xx + yy + zz;
		return d;
	}
	
	// Cross two Vect3
	static cross() {
		var a = arguments[0];
		var b = arguments[1];
		var	x = a.y * b.z - a.z * b.y;
		var	y = a.z * b.x - a.x * b.z;
		var	z = a.x * b.y - a.y * b.x;
		var p = new Vect3(x, y, z)
		return p;
	}
	
	// Get length of a Vect3
	len() {
		var l = Math.sqrt(Vect3.dot(this, this));
		return l;
	}
	
	// Get unit vector of a Vect3
	unit() {
		var l = this.len();
		var p = new Vect3;
		if(l > 0) {
			p = Vect3.div(this, l);
		}
		return p;
	}
	
	// Get negative of a vector
	neg() {
		var xx = -this.x;
		var yy = -this.y;
		var zz = -this.z;
		var rr = new Vect3(xx, yy, zz);
		return rr;
	}
}



/*
	grain.js
	Library of grain as granular particle
	Sparisoma Viridi | dudung@gmail.com
	Dimas Praja Purwa Aji | dmspraja2105@gmail.com
	Ismi Yasifa | yasifa.ismi@gmail.com
	
	20170214
	Create this library consists of only Grain class.
	20170216
	Add field for particle ID with type of integer.
	20180303
	Add argument A for age of grain particles.
	Add argument k for child of grain particles.
	Add argument M for mother of grain particles.
	20180403
	Correct arguments.length 9 --> 10.
	20180413
	Add angular variable.
	20180527
	Use node.js and webpack to wrap it to butiran.js library.
	20180602
	Fix dependency to Vect3 class.
	Future note for setting m, D --> rho, D, rho --> m.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Grain
function Grain() {
	if(arguments.length == 13) {
		this.i = arguments[0];
		this.m = arguments[1];
		this.D = arguments[2];
		this.q = arguments[3];
		this.c = arguments[4];
		this.r = arguments[5];
		this.v = arguments[6];
		this.A = arguments[7];
		this.k = arguments[8];
		this.M = arguments[9];
		this.I = arguments[10];
		this.the = arguments[11];
		this.w = arguments[12];
	} else if(arguments.length == 1) {
		this.i = arguments[0].i;
		this.m = arguments[0].m;
		this.D = arguments[0].D;
		this.q = arguments[0].q;
		this.c = arguments[0].c;
		this.r = arguments[0].r;
		this.v = arguments[0].v;
		this.A = arguments[0].A;
		this.k = arguments[0].k;
		this.M = arguments[0].M;
		this.I = arguments[0].I;
		this.the = arguments[0].the;
		this.w = arguments[0].w;
	} else {
		this.i = 0;
		this.m = 1.0;
		this.D = 1.0;
		this.q = 1.0;
		this.c = "#000";
		this.r = new Vect3;
		this.v = new Vect3;
		this.A = 0;
		this.k = new Array;
		this.M = 0;
		this.I = 10.0;
		this.the = 0;
		this.w = 0;
	}
	this.strval = function() {
		var str = "("
		str += this.i + ", ";
		str += this.m + ", ";
		str += this.D + ", ";
		str += this.q + ", ";
		str += this.c + ", ";
		str += this.r.strval() + ", ";
		str += this.v.strval() + ", ";
		str += this.A + ", ";
		str += this.k + ", ";
		str += this.M + ", ";
		str += this.I + ", ";
		str += this.the + ", ";
		str += this.w + ")";
		return str;
	}
}



/*
	style.js
	Create style, get attribute, change attribute
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180614
	Create this library of functions by moving it from gstd.js
	application.
	Move it from lib/css to lib since it is only one.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

class Style {
	// Get attribute value of a style
	static getStyleAttribute(style, attr) {
		var N = document.styleSheets.length;
		var styles = document.styleSheets;
		var value;
		for(var i = 0; i < N; i++)
		{
			if(styles[i].rules[0].selectorText == style)
			value = styles[i].rules[0].style[attr];
		}
		return value;
	}

	// Change style attribute with value
	static changeStyleAttribute(style, attr, value) {
		// dudung, "Modify previously defined style in JS"
		// https://stackoverflow.com/q/50847689/9475509
		var N = document.styleSheets.length;
		var styles = document.styleSheets;
		for(var i = 0; i < N; i++)
		{
			if(styles[i].rules[0].selectorText == style)
			styles[i].rules[0].style[attr] = value;
		}
	}

	// Create a style
	static createStyle(css) {
		// Christoph, TomFuertes, answer of "How to create
		// a <style> tag with Javascript"
		// https://stackoverflow.com/a/524721/9475509
		var head = document.head ||
			document.getElementsByTagName("head")[0];
		var style = document.createElement("style");
		style.type = "text/css";
		if(style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			var textNode = document.createTextNode(css);
			style.append(textNode);
		}
		head.append(style);
	}
} 



/*
	rgb.js
	Conversion from and to RBG color format
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180107
	Create this library of functions.
	20180520
	Add module.export for ES module support, tested and ok.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

class RGB {
// Convert integer to RGB color format
	static int2rgb(r, g, b) {
		var B = (b).toString(16);
		var G = (g).toString(16);
		var R = (r).toString(16);
		if(B.length < 2) B = "0" + B;
		if(G.length < 2) G = "0" + G;
		if(R.length < 2) R = "0" + R;
		var hexColor = "#" + R + G + B;
		return hexColor;
	}

	// Convert double to RGB color format
	static double2rgb(r, g, b) {
		var B = Math.round(b * 255);
		var G = Math.round(g * 255);
		var R = Math.round(r * 255);
		var hexColor = RGB.int2rgb(R, G, B);
		return hexColor;
	}
}



/*
	resistor.js
	An object for storing resistance value
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180520
	Create this object as part of components in butiran.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Resistor
class Resistor {
	
	// Define constructor
	constructor() {
		// Define default periodic values in one period
		this.value = 0;
		this.type = "";
		
		// Change default value if given as arguments
		if(arguments.length == 1) {
			this.type = "constant";
			this.value = arguments[0];
		} else if(arguments.length == 2) {
			this.type = "variable";
			this.Rmax = arguments[0];
			this.pos = arguments[1];
			this.value = this.Rmax * this.pos;
		} else if(arguments.length == 3) {
			this.type = "time-dependent";
			this.Rmin = arguments[0];
			this.Rmax = arguments[1];
			this.tau = arguments[2];
			this.value = this.Rmin;
			this.V = 0;
		}
	}
	
	// Get value of resistor
	ping() {
		if(this.type == "constant") {
			this.value = this.value;
		} else if(this.type == "variable") {
			this.pos = arguments[0];
			this.value = this.Rmax * this.pos;
		} else if(this.type == "time-dependent") {
			var dt = arguments[0];
			var V = arguments[1];
			var R = this.value;
			//var dV = (V - this.V);
			var dR = 0;
			if(V > 0) {
				dR = (this.Rmax - R) * dt / this.tau;
			} else {
				dR = (this.Rmin - R) * dt / this.tau;
			}
			R += dR;
			//this.V = V;
			this.value = R;
		}
		return this.value;
	}
}



/*
	buoyant.js
	Buoyant force
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180602
	Create this library from previous force.js library.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Buoyant
class Buoyant {
	// Create constructor
	constructor() {
		// Set default fluid to water
		this.rho = 1000; // kg m^-3
		
		// Set default gravity
		this.g = new Vect3(0, 0, -10); // kg m s^-2
	}
	
	// Set fluid density
	setFluidDensity(rho) {
		this.rho = rho;
	}
	
	// Set gravity
	setGravity(g) {
		this.g = g;
	}
	
	// Calculate buoyant force due to immersed volume V
	force(V) {
		var rho = this.rho;
		var g = this.g;
		var f = Vect3.mul(g.neg(), rho * V);
		return f;
	}
}



/*
	drag.js
	Drag force
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180602
	Create this library from previous force.js and viscous.js
	library.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Drag
class Drag {
	// Create constructor
	constructor() {
		// Set default constants
		this.c0 = 0; // N
		this.c1 = 0; // N s m^-1
		this.c2 = 0; // N s^2 m^-2
		
		// Set default fluid velocity
		this.vf = new Vect3;
	}
	
	// Set constants
	setConstant(c0, c1, c2) {
		this.c0 = c0;
		this.c1 = c1;
		this.c2 = c2;
	}
	
	// Set fluid velocity 'field'
	setField(vf) {
		this.vf = vf;
	}
	
	// Calculate drag force
	force() {
		var f = new Vect3;
		if(arguments[0] instanceof Grain) {
			var c0 = this.c0;
			var c1 = this.c1;
			var c2 = this.c2;
			var vf = this.vf;
			var v = arguments[0].v;
			var v12 = Vect3.sub(v, vf);
			var u12 = v12.unit();
			var s12 = v12.len();
			var mag = c0 + c1 * s12 + c2 * (s12 * s12);
			var f = Vect3.mul(mag, u12.neg());
		}
		return f;
	}
}



/*
	electrostatic.js
	Electrostatic force
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180603
	Create this library from previous force.js and
	gravitation.js libraries.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Electrostatic
class Electrostatic {
	// Create constructor
	constructor() {
		// Set Coulomb's constant
		this.k = 8.987551787E9; // N m^2 C^-2 
		
		// Set default electrostatic field
		this.E = new Vect3(1, 0, 0); // N C^-1
	}
	
	// Set electrostatic field
	setField(E) {
		this.E = E;
		delete this.k;
	}
	
	// Set Coulomb's constant
	setConstant(k) {
		this.k = k;
		delete this.E;
	}
	
	// Calculate gravitational force
	force() {
		// Set default value to (0, 0, 0)
		var f = new Vect3;
		if(this.E != undefined) {
			if(arguments[0] instanceof Grain) {
				var q = arguments[0].q;
				var E = this.E;
				f = Vect3.mul(q, E);				
			}
		} if(this.k != undefined) {
			if(arguments[0] instanceof Grain &&
				arguments[1] instanceof Grain) {
				var q1 = arguments[0].q;
				var q2 = arguments[1].q;
				var r1 = arguments[0].r;
				var r2 = arguments[1].r;
				var r12 = Vect3.sub(r1, r2);
				var u12 = r12.unit();
				var l12 = r12.len();
				var k = this.k;
				f = Vect3.mul(k * q1 * q2 / (l12 * l12), u12);
			}
		}
		
		// Note that (0, 0, 0) value could be due to error
		return f;
	}
}



/*
	gravitational.js
	Gravitational force
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180602
	Create this library from previous force.js and buoyant.js
	libraries.
	20180603
	Rename from gravitation to gravitational.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Gravitational
class Gravitational {
	// Create constructor
	constructor() {
		// Set gravitational constant
		this.G = 6.67408E-11; // m^3 kg^-1 s^-2 
		
		// Set default gravitational field
		this.g = new Vect3(0, 0, -9.80665); // m s^-1
	}
	
	// Set gravity
	setField(g) {
		this.g = g;
		delete this.G;
	}
	
	// Set gravitational constant
	setConstant(G) {
		this.G = G;
		delete this.g;
	}
	
	// Calculate gravitational force
	force() {
		// Set default value to (0, 0, 0)
		var f = new Vect3;
		if(this.g != undefined) {
			if(arguments[0] instanceof Grain) {
				var m = arguments[0].m;
				var g = this.g;
				f = Vect3.mul(m, g);				
			}
		} if(this.G != undefined) {
			if(arguments[0] instanceof Grain &&
				arguments[1] instanceof Grain) {
				var m1 = arguments[0].m;
				var m2 = arguments[1].m;
				var r1 = arguments[0].r;
				var r2 = arguments[1].r;
				var r12 = Vect3.sub(r1, r2);
				var u12 = r12.unit();
				var l12 = r12.len();
				var G = this.G;
				f = Vect3.mul(-G * m1 * m2 / (l12 * l12), u12);
			}
		}
		
		// Note that (0, 0, 0) value could be due to error
		return f;
	}
}



/*
	magnetic.js
	Magnetic force
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180603
	Create this library from previous force.js and
	electrostatic.js libraries.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Magnetic
class Magnetic {
	// Create constructor
	constructor() {
		// Set magnetic constant
		// with mu0 = 1.25663706E-6; // m kg s^-2 A^-2
		// and k = mu0 / 4 pi
		this.k = 1E-7; // T m A^-1
				
		// Set default magnetic field
		this.B = new Vect3(1, 0, 0); // T
	}
	
	// Set magnetic field
	setField(B) {
		this.B = B;
		delete this.k;
	}
	
	// Set magnetic constant
	setConstant(k) {
		this.k = k;
		delete this.B;
	}
	
	// Calculate magnetic force
	force() {
		// Set default value to (0, 0, 0)
		var f = new Vect3;
		if(this.B != undefined) {
			if(arguments[0] instanceof Grain) {
				var q = arguments[0].q;
				var v = arguments[0].v;
				var B = this.B;
				f = Vect3.mul(q, Vect3.cross(v, B));				
			}
		} if(this.k != undefined) {
			if(arguments[0] instanceof Grain &&
				arguments[1] instanceof Grain) {
				var q1 = arguments[0].q;
				var q2 = arguments[1].q;
				var r1 = arguments[0].r;
				var r2 = arguments[1].r;
				var r12 = Vect3.sub(r1, r2);
				var l12 = r12.len();
				var v1 = arguments[0].v;
				var v2 = arguments[1].v;
				var k = this.k;
				var v1v2r12 = Vect3.cross(v1, Vect3.cross(v2, r12))
				f = Vect3.mul(k * q1 * q2 / (l12 * l12), v1v2r12);
			}
		}
		
		// Note that (0, 0, 0) value could be due to error
		return f;
	}
}


/*
	normal.js
	Normal force for linear spring-dashpot model
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180603
	Create this library from previous force.js and
	gravitation.js libraries.
	Value of gamma and its implementation is still a subject
	for discussion.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Normal
class Normal {
	// Create constructor
	constructor() {
		// Set default spring constant
		this.k = 10000; // N m^-1 
		
		// Set default damping constant
		this.gamma = 10; // N s m^-1
	}
	
	// Set constants
	setConstant(k, gamma) {
		this.k = k;
		this.gamma = gamma;
	}
	
	// Calculate normal force
	force() {
		// Set default value to (0, 0, 0)
		var f = new Vect3;
		if(arguments[0] instanceof Grain &&
			arguments[1] instanceof Grain) {
			var D1 = arguments[0].D;
			var D2 = arguments[1].D;
			var r1 = arguments[0].r;
			var r2 = arguments[1].r;
			var r12 = Vect3.sub(r1, r2);
			var u12 = r12.unit();
			var l12 = r12.len();
			var v1 = arguments[0].v;
			var v2 = arguments[1].v;
			var v12 = Vect3.sub(v1, v2);
			var k = this.k;
			var gamma = this.gamma;
			var R12 = 0.5 * (D1 + D2);
			var ksi = Math.max(0, R12 - l12);
			var ksidot = v12.len();
			
			f = Vect3.mul(k * ksi - gamma * ksidot, u12);
		}
		
		// Note that (0, 0, 0) value could be due to error
		return f;
	}
}



/*
	spring.js
	Spring force
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180603
	Create this library from previous force.js and
	normal.js libraries.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Spring
class Spring {
	// Create constructor
	constructor() {
		// Set default spring constant
		this.k = 1; // N m^-1 
		
		// Set default spring uncompressed length
		this.l = 1; // m
		
		// Set default damping constant
		this.gamma = 1; // N s m^-1
		
		// Set default origin
		this.o = new Vect3;
	}
	
	// Set constants
	setConstant(k, gamma) {
		this.k = k;
		this.gamma = gamma;
	}
	
	// Set uncompressed length
	setUncompressedLength(l) {
		this.l = l;
	}
	
	// Set origin
	setOrigin(o) {
		this.o = o;
	}
	
	// Calculate normal force
	force() {
		// Set default value to (0, 0, 0)
		var f = new Vect3;
		if(arguments.length == 1) {
			if(arguments[0] instanceof Grain) {
				var r1 = arguments[0].r;
				var r2 = this.o;
				var r12 = Vect3.sub(r1, r2);
				var u12 = r12.unit();
				var l12 = r12.len();
				var l = this.l;
				var v1 = arguments[0].v;
				var v2 = new Vect3;
				var v12 = Vect3.sub(v1, v2);
				var k = this.k;
				var gamma = this.gamma;
				var ksi = l12 - l;
				var ksidot = v12.len();
				
				f = Vect3.mul(-k * ksi - gamma * ksidot, u12);
			}
		} else if(arguments.length == 2) {
			if(arguments[0] instanceof Grain &&
				arguments[1] instanceof Grain) {
				var r1 = arguments[0].r;
				var r2 = arguments[1].r;
				var r12 = Vect3.sub(r1, r2);
				var u12 = r12.unit();
				var l12 = r12.len();
				var l = this.l;
				var v1 = arguments[0].v;
				var v2 = arguments[1].v;
				var v12 = Vect3.sub(v1, v2);
				var k = this.k;
				var gamma = this.gamma;
				var ksi = l12 - l;
				var ksidot = v12.len();
				
				f = Vect3.mul(-k * ksi - gamma * ksidot, u12);
			}
		}
		
		// Note that (0, 0, 0) value could be due to error
		return f;
	}
}



/*
	generator.js
	An object for generate something
	
	Sparisoma Viridi | dudung@gmail.com
	Tatang Suheri | tatangpl@yahoo.com
	
	20180301
	Start this library and setRandomInt, setSeries, and
	setPolynom are ok. setFunction is not implemented.
	It is triggered by the need for industry framework
	simulation.
	20180520
	Change from framework to butiran/lib with the same name
	but different imlementation, and create this object for
	generating periodic signal in butiran, which requires
	class of Sequence.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Generator
class Generator {
	
	// Define constructor
	constructor(dt, seq, amp) {
		// Define default attributes and their initial value
		this.t = 0;
		this.dt = 0.001;
		this.sequence = [];
		this.amplitude = [];
		
		// Change default value if given as arguments
		if(arguments.length == 3) {
			this.dt = dt;
			this.sequence = seq;
			this.amplitude = amp;
		}
	}
	
	// Restart generator
	restart() {
		this.t = 0;
		var N = this.sequence.length;
		for(var i = 0; i < N; i++) {
			this.sequence[i].pos = 0;
		}
	}
		
	// Get value for all sources
	ping() {
		
		// Define output variable
		var output = [];
		
		// Add time data
		output.push(this.t);
		this.t += this.dt;
		
		// Add value from all sequences
		var N = this.sequence.length;
		for(var i = 0; i < N; i++) {
			var out = this.sequence[i].ping();
			out *= this.amplitude[i];
			output.push(out);
		}
		
		return output;
	}
	
	// Define test function -- 20180520.1649 ok
	static test() {
		// Define time step
		var dt = 0.001; // s

		// Define pattern for sequence as voltage source
		var ptn1 = [
			0, 0, 0, 0, 0,
			1, 1, 1, 1, 1,
		];
		var ptn2 = [
			0, 0,
			1, 1
		];
		
		// Define sequences
		var seq1 = new Sequence(ptn1);
		var seq2 = new Sequence(ptn2);

		// Define signal amplitudo
		var amp1 = 8; // V
		var amp2 = 10; // V
		
		// Define generator
		var gen = new Generator(dt, [seq1, seq2], [amp1, amp2]);
		
		var N = 15;
		for(var i = 0; i < N; i++) {
			var signal = gen.ping();
			console.log(signal);
		}
		
	}
}



/*
	sequence.js
	An object for storing sequence of periodic values
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180519
	Create this object as part of function generator
	in butiran.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Sequence
class Sequence {
	
	// Define constructor
	constructor() {
		// Define default periodic values in one period
		this.name = "Sequence";
		this.value = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
		this.pos = 0;
		
		// Change default value if given as arguments
		if(arguments.length == 1) {
			this.value = arguments[0];
		}
		
		// Calculate length of sequence
		this.end = this.value.length;
	}
	
	// Get value and increase pos by one
	ping() {
		var value = this.value[this.pos];
		this.pos++;
		if(this.pos == this.end) {
			this.pos = 0;
		}
		return value;
	}
	
	// Define test function -- 20180519.1925 ok
	static test() {
		var seq = new Sequence();
		var N = 16;
		for(var i = 0; i < N; i++) {
			console.log(seq.ping());
		}
	}
}



/*
	timer.js
	Generate timing event using setInterval and clearInterval
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180302
	Start this library.
	20180520
	Add module.export for ES module support.
	20180619
	Add ts.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Timer
class Timer {
	
	// Define constructor
	constructor(func, period) {
		this.func = func;
		this.period = period;
		this.ticking = false;
		this.uid = 0;
	}
	
	start() {
		if(!this.ticking) {
			this.ticking = true;
			this.uid = setInterval(this.func, this.period);
		}
	}
	
	stop() {
		if(this.ticking) {
			this.ticking = false;
			clearInterval(this.uid);
		}
	}

	static ts() {
		var d = new Date;
		var hh = ("00" + d.getHours()).slice(-2);
		var mm = ("00" + d.getMinutes()).slice(-2);
		var ss = ("00" + d.getSeconds()).slice(-2);
		var ts = "" + hh + mm + ss;
		return ts;	
	}
}



/*
	sample.js
	Sample data from calculated one
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180619
	Start this library.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Sample
class Sample {
	
	// Define constructor
	constructor(period, dt) {
		this.period = period;
		this.dt = dt;
		this.maxCount = parseInt(period / dt);
		this.count = this.maxCount;
	}
	
	sampling() {
		var state = false;
		if(this.count >= this.maxCount) {
			this.count = 0;
			state = true;
		}
		this.count++;
		return state;
	}
}



/*
	tablet.js
	Grid based tablet
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180612
	Start this application gstd.js by creating functions
	createBlockTablet, setMaxValue, stepDissolve, and move
	them to grid/tablet.js library. And also tested in HTML.
	Create this library of functions from gstd.js with
	functions createBlockTablet, setMaxValue, stepDissolve.
	20180620
	Create getRemains, createEllipsoidTablet,
	createCylinderTablet, getProjectionOf, getMaxProjection,
	normalizeProjection, normalizeProjectionInitial,
	createHollowCylinderTablet. Add eight new functions.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

class Tablet {
	// Create three dimension hollow cylinder tablet
	static createHollowCylinderTablet(Nx, Ny, Nz, Nxh, Nyh) {
		var tab = [];
		
		var Rx = Nx / 2;
		var Ry = Ny / 2;
		var Rxh = Nxh / 2;
		var Ryh = Nyh / 2;

		var xo = 0.5 * (0 + Nx - 1);
		var yo = 0.5 * (0 + Ny - 1);
		
		for(var z = 0; z < Nz; z++) {
			var row = [];
			for(var y = 0; y < Ny; y++) {
				var col = [];
				for(var x = 0; x < Nx; x++) {
					var rx2 = 1.0 * (x - xo) * (x - xo) / (Rx * Rx);
					var ry2 = 1.0 * (y - yo) * (y - yo) / (Ry * Ry);
					var rr2 = rx2 + ry2;
					
					var rx2h = 1.0 * (x - xo) * (x - xo) / (Rxh * Rxh);
					var ry2h = 1.0 * (y - yo) * (y - yo) / (Ryh * Ryh);
					var rr2h = rx2h + ry2h;
									
					var val = ((1 < rr2h) && (rr2 < 1)) ? 1 : 0;
					
					var empx = (x == 0 || x == Nx - 1);
					var empy = (y == 0 || y == Ny - 1);
					var empz = (z == 0 || z == Nz - 1);
					val = (empx || empy || empz) ? 0 : val;
					
					col.push(val);
				}
				row.push(col);
			}
			tab.push(row);
		}
		return tab;
	}

	// Normalize projection matrix with initial value
	static normalizeProjectionInitial(proj, max) {
		var row = proj.length;
		var col = proj[0].length;
		for(var r = 0; r < row; r++) {
			for(var c = 0; c < col; c++) {
				proj[r][c] /= max;
			}
		}
	}

	// Normalize projection matrix
	static normalizeProjection(proj) {
		var row = proj.length;
		var col = proj[0].length;
		var max = getMaxProjection(proj);
		for(var r = 0; r < row; r++) {
			for(var c = 0; c < col; c++) {
				procj[r][c] /= max;
			}
		}
	}

	// Get maximum value from projection matrix
	static getMaxProjection(proj) {
		var row = proj.length;
		var col = proj[0].length;
		var max = 0;
		for(var r = 0; r < row; r++) {
			for(var c = 0; c < col; c++) {
				max = (proj[r][c] > max) ? proj[r][c] : max;
			}
		}
		return max;
	}

	// Get projection of tablet on certain plane (xy, yz, xz)
	static getProjectionOf(tab) {
		var Nz = tab.length;
		var Ny = tab[0].length;
		var Nx = tab[0][0].length;
		var projection = {
			onPlane: function(plane) {
				var mat;
				if(plane == "xy") {
					var rows = [];
					for(var y = 0; y < Ny; y++) {
						var cols = [];
						for(var x = 0; x < Nx; x++) {
							var sum = 0;
							for(var z = 0; z < Nz; z++) {
								sum += tab[z][y][x];
							}
							cols.push(sum);
						}
						rows.push(cols);
					}
					mat = rows;
				} else if(plane == "yz") {
					var rows = [];
					for(var z = 0; z < Nz; z++) {
						var cols = [];
						for(var y = 0; y < Ny; y++) {
							var sum = 0;
							for(var x = 0; x < Nx; x++) {
								sum += tab[z][y][x];
							}
							cols.push(sum);
						}
						rows.push(cols);
					}
					mat = rows;
				} else if(plane == "xz") {
					var rows = [];
					for(var z = 0; z < Nz; z++) {
						var cols = [];
						for(var x = 0; x < Nx; x++) {
							var sum = 0;
							for(var y = 0; y < Ny; y++) {
								sum += tab[z][y][x];
							}
							cols.push(sum);
						}
						rows.push(cols);
					}
					mat = rows;
				}
				return mat;
			}
		};
		return projection;
	}

	// Create three dimension cylinder tablet -- 0641 ok
	static createCylinderTablet(Nx, Ny, Nz) {
		var tab = [];
		
		var Rx = Nx / 2;
		var Ry = Ny / 2;

		var xo = 0.5 * (0 + Nx - 1);
		var yo = 0.5 * (0 + Ny - 1);
		
		for(var z = 0; z < Nz; z++) {
			var row = [];
			for(var y = 0; y < Ny; y++) {
				var col = [];
				for(var x = 0; x < Nx; x++) {
					var rx2 = 1.0 * (x - xo) * (x - xo) / (Rx * Rx);
					var ry2 = 1.0 * (y - yo) * (y - yo) / (Ry * Ry);
					var rr2 = rx2 + ry2;
					var val = (rr2 < 1) ? 1 : 0;
					
					var empx = (x == 0 || x == Nx - 1);
					var empy = (y == 0 || y == Ny - 1);
					var empz = (z == 0 || z == Nz - 1);
					val = (empx || empy || empz) ? 0 : val;
					
					col.push(val);
				}
				row.push(col);
			}
			tab.push(row);
		}
		return tab;
	}

	// Create three dimension ellipsoid tablet -- 0637 ok
	static createEllipsoidTablet(Nx, Ny, Nz) {
		var tab = [];
		
		var Rx = Nx / 2;
		var Ry = Ny / 2;
		var Rz = Nz / 2;

		var xo = 0.5 * (0 + Nx - 1);
		var yo = 0.5 * (0 + Ny - 1);
		var zo = 0.5 * (0 + Nz - 1);
		
		for(var z = 0; z < Nz; z++) {
			var row = [];
			for(var y = 0; y < Ny; y++) {
				var col = [];
				for(var x = 0; x < Nx; x++) {
					var rx2 = 1.0 * (x - xo) * (x - xo) / (Rx * Rx);
					var ry2 = 1.0 * (y - yo) * (y - yo) / (Ry * Ry);
					var rz2 = 1.0 * (z - zo) * (z - zo) / (Rz * Rz);
					var rr2 = rx2 + ry2 + rz2;
					var val = (rr2 < 1) ? 1 : 0;
					
					var empx = (x == 0 || x == Nx - 1);
					var empy = (y == 0 || y == Ny - 1);
					var empz = (z == 0 || z == Nz - 1);
					val = (empx || empy || empz) ? 0 : val;
					
					col.push(val);
				}
				row.push(col);
			}
			tab.push(row);
		}
		return tab;
	}

	// Get tablet remains -- 0458 ok
	static getRemains(tab) {
		var Nz = tab.length;
		var Ny = tab[0].length;
		var Nx = tab[0][0].length;
		var remains = 0;
		for(var z = 0; z < Nz; z++) {
			for(var y = 0; y < Ny; y++) {
				for(var x = 0; x < Nx; x++) {
					remains += tab[z][y][x];
				}
			}
		}
		return remains;
	}

	// Dissolve tablet in one step -- 1702 ok
	static stepDissolve(tab) {
		var Nz = tab.length;
		var Ny = tab[0].length;
		var Nx = tab[0][0].length;
		for(var z = 0; z < Nz; z++) {
			for(var y = 0; y < Ny; y++) {
				for(var x = 0; x < Nx; x++) {
					var tabx = (0 < x && x < Nx - 1);
					var taby = (0 < y && y < Ny - 1);
					var tabz = (0 < z && z < Nz - 1);
					if(tabx && taby && tabz) {
						var val = tab[z][y][x];
						var dval = 0;
						if(tab[z][y][x-1] == 0) dval++;
						if(tab[z][y][x+1] == 0) dval++;
						if(tab[z][y-1][x] == 0) dval++;
						if(tab[z][y+1][x] == 0) dval++;
						if(tab[z-1][y][x] == 0) dval++;
						if(tab[z+1][y][x] == 0) dval++;
						val -= dval;
						if(val < 0) val = 0;
						tab[z][y][x] = val;
					}
				}
			}
		}
	}

	// Set maximum value -- 1613 ok
	static setMaxValue(tab, val) {
		var Nz = tab.length;
		var Ny = tab[0].length;
		var Nx = tab[0][0].length;
		for(var z = 0; z < Nz; z++) {
			for(var y = 0; y < Ny; y++) {
				for(var x = 0; x < Nx; x++) {
					tab[z][y][x] *= val;
				}
			}
		}
	}

	// Create three dimension block tablet -- 1536 ok
	static createBlockTablet(Nx, Ny, Nz) {
		var tab = [];
		for(var z = 0; z < Nz; z++) {
			var row = [];
			for(var y = 0; y < Ny; y++) {
				var col = [];
				for(var x = 0; x < Nx; x++) {
					var empx = (x == 0 || x == Nx - 1);
					var empy = (y == 0 || y == Ny - 1);
					var empz = (z == 0 || z == Nz - 1);
					var val = (empx || empy || empz) ? 0 : 1;
					col.push(val);
				}
				row.push(col);
			}
			tab.push(row);
		}
		return tab;
	}
}



/*
	pile.js
	Class of granular pile based on grid model
	
	Sparisoma Viridi | dudung@gmail.compile
	
	20180625
	Start this class during visiting Osaka Univesity and
	staying in room 113 at RCNP.
	20180627
	Add to butiran.js library.
	Add value of to be filled.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

class Pile {
	// Constructor of 1-D, 2-D, 3-D of empty room
	constructor() {
		var D = arguments.length;
		var value = [];
		if(D == 0) {
			var msg = "Pile requires at least one dimension size";
			throw new Error(msg);
		} else if(D == 1) {
			this.Nx = arguments[0];
			for(var ix = 0; ix < this.Nx; ix++) {
				var x = 0;
				value.push(x);
			}
		} else if(D == 2) {
			this.Nx = arguments[0];
			this.Ny = arguments[1];
			for(var iy = 0; iy < this.Ny; iy++) {
				var y = [];
				for(var ix = 0; ix < this.Nx; ix++) {
					var x = 0;
					y.push(x);
				}
				value.push(y);
			}
		} else if(D == 3) {
			this.Nx = arguments[0];
			this.Ny = arguments[1];
			this.Nz = arguments[2];
			for(var iz = 0; iz < this.Nz; iz++) {
				var z = [];
				for(var iy = 0; iy < this.Ny; iy++) {
					var y = [];
					for(var ix = 0; ix < this.Nx; ix++) {
						var x = 0;
						y.push(x);
					}
					z.push(y);
				}
				value.push(z);
			}
		}
		this.value = value;
		this.dimension = D;
	}
	
	// Adjust filler
	setFill(type) {
		this.fillType = type;
	}
	
	// Create pile
	fillGrid() {
		var D = arguments.length;
		if(D == 0) {
			var msg = "Pile is empty";
			throw new Error(msg);
		} else if(D != this.dimension) {
			var msg = "Dimension mismatch";
			throw new Error(msg);
		} else if(D == 1) {
			var xmin = arguments[0][0];
			var xmax = arguments[0][1];
			for(var ix = xmin; ix <= xmax; ix++) {
				if(this.fillType == undefined) {
					this.value[ix] = 1;
				} else {
					this.value[ix] = this.fillType;
				}
			}
		} else if(D == 2) {
			var xmin = arguments[0][0];
			var xmax = arguments[0][1];
			var ymin = arguments[1][0];
			var ymax = arguments[1][1];
			for(var iy = ymin; iy <= ymax; iy++) {
				for(var ix = xmin; ix <= xmax; ix++) {
					if(this.fillType == undefined) {
						this.value[iy][ix] = 1;
					} else {
						this.value[iy][ix] = this.fillType;
					}
				}
			}
		} else if(D == 3) {
			var xmin = arguments[0][0];
			var xmax = arguments[0][1];
			var ymin = arguments[1][0];
			var ymax = arguments[1][1];
			var zmin = arguments[2][0];
			var zmax = arguments[2][1];
			for(var iz = zmin; iz <= zmax; iz++) {
				for(var iy = ymin; iy <= ymax; iy++) {
					for(var ix = xmin; ix <= xmax; ix++) {
						if(this.fillType == undefined) {
							this.value[iz][iy][ix] = 1;
						} else {
							this.value[iz][iy][ix] = this.fillType;
						}
					}
				}
			}
		}
	}
}



/*
	integration.js
	Simple numerical integration
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180303
	Create this library of functions.
	20180520
	Add module.export for ES module support to about 14
	functions.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Integrate using Milne's rule until some error
function integMilneError(func, xbeg, xend, error) {
	var N = 1;
	var Aold = integMilneN(func, xbeg, xend, N);
	var dA = 1;
	while(dA > error) {
		N *= 2;
		var A = integMilneN(func, xbeg, xend, N);
		dA = Math.abs(A - Aold);
		Aold = A;
	}
	return Aold;
}

// Integrate a function using Milne's rule
function integMilneN(func, xbeg, xend, N) {
	var dx = (xend - xbeg) / N;
	var A = 0;
	var x = xbeg;
	for(var i = 0; i < N; i++) {
		var Ai = 2 * func(x) - func(x + dx / 2);
		Ai += 2 * func(x + dx);
		Ai *= dx / 3;
		A += Ai;
		x += dx;
	}
	return A;
}

// Integrate using Boole's rule until some error
function integBooleError(func, xbeg, xend, error) {
	var N = 1;
	var Aold = integBooleN(func, xbeg, xend, N);
	var dA = 1;
	while(dA > error) {
		N *= 2;
		var A = integBooleN(func, xbeg, xend, N);
		dA = Math.abs(A - Aold);
		Aold = A;
	}
	return Aold;
}

// Integrate a function using Boole's rule
function integBooleN(func, xbeg, xend, N) {
	var dx = (xend - xbeg) / N;
	var A = 0;
	var x = xbeg;
	for(var i = 0; i < N; i++) {
		var Ai = 7 * func(x) + 32 * func(x + dx / 4);
		Ai += 12 * func(x + 2 * dx / 4);
		Ai += 32 * func(x + 3 * dx / 4) + 7 * func(x + dx);
		Ai *= dx / 90;
		A += Ai;
		x += dx;
	}
	return A;
}

// Integrate using Simpson's 3/8 rule until some error
function integSimps38Error(func, xbeg, xend, error) {
	var N = 1;
	var Aold = integSimps38N(func, xbeg, xend, N);
	var dA = 1;
	while(dA > error) {
		N *= 2;
		var A = integSimps38N(func, xbeg, xend, N);
		dA = Math.abs(A - Aold);
		Aold = A;
	}
	return Aold;
}

// Integrate a function using Simpson's 3/8 rule
function integSimps38N(func, xbeg, xend, N) {
	var dx = (xend - xbeg) / N;
	var A = 0;
	var x = xbeg;
	for(var i = 0; i < N; i++) {
		var Ai = func(x) + 3 * func(x + dx / 3);
		Ai += 3 * func(x + 2 * dx / 3) + func(x + dx);
		Ai *= dx / 8;
		A += Ai;
		x += dx;
	}
	return A;
}

// Integrate using Simpson's rule until some error
function integSimpsError(func, xbeg, xend, error) {
	var N = 1;
	var Aold = integSimpsN(func, xbeg, xend, N);
	var dA = 1;
	while(dA > error) {
		N *= 2;
		var A = integSimpsN(func, xbeg, xend, N);
		dA = Math.abs(A - Aold);
		Aold = A;
	}
	return Aold;
}

// Integrate a function using Simpson's rule
function integSimpsN(func, xbeg, xend, N) {
	var dx = (xend - xbeg) / N;
	var A = 0;
	var x = xbeg;
	for(var i = 0; i < N; i++) {
		var Ai = func(x) + 4 * func(x + dx / 2) + func(x + dx);
		Ai *= dx / 6;
		A += Ai;
		x += dx;
	}
	return A;
}

// Integrate using trapezium rule until some error
function integTrapezError(func, xbeg, xend, error) {
	var N = 1;
	var Aold = integTrapezN(func, xbeg, xend, N);
	var dA = 1;
	while(dA > error) {
		N *= 2;
		var A = integRectNMid(func, xbeg, xend, N);
		dA = Math.abs(A - Aold);
		Aold = A;
	}
	return Aold;
}

// Integrate a function using trapezium rule
function integTrapezN(func, xbeg, xend, N) {
	var dx = (xend - xbeg) / N;
	var A = 0;
	var x = xbeg;
	for(var i = 0; i < N; i++) {
		var Ai = (func(x) + func(x + dx)) * dx / 2;
		A += Ai;
		x += dx;
	}
	return A;
}

// Integrate using rectangle rule until some error
function integRectError(func, xbeg, xend, error) {
	var N = 1;
	var Aold = integRectNMid(func, xbeg, xend, N);
	var dA = 1;
	while(dA > error) {
		N *= 2;
		var A = integRectNMid(func, xbeg, xend, N);
		dA = Math.abs(A - Aold);
		Aold = A;
	}
	return Aold;
}

// Integrate a function using rectangle rule (begin value)
function integRectNBeg(func, xbeg, xend, N) {
	var dx = (xend - xbeg) / N;
	var A = 0;
	var x = xbeg;
	for(var i = 0; i < N; i++) {
		var Ai = func(x) * dx;
		A += Ai;
		x += dx;
	}
	return A;
}

// Integrate a function using rectangle rule (mid value)
function integRectNMid(func, xbeg, xend, N) {
	var dx = (xend - xbeg) / N;
	var A = 0;
	var x = xbeg + dx / 2;
	for(var i = 0; i < N; i++) {
		var Ai = func(x) * dx;
		A += Ai;
		x += dx;
	}
	return A;
}

// Integrate a function using rectangle rule (end value)
function integRectNEnd(func, xbeg, xend, N) {
	var dx = (xend - xbeg) / N;
	var A = 0;
	var x = xbeg + dx;
	for(var i = 0; i < N;i ++) {
		var Ai = func(x) * dx;
		A += Ai;
		x += dx;
	}
	return A;
}



/*
	transformation.js
	Simple coordinates transformation
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180221
	Create as a part of Chart2 class.
	20180618
	Move to this separate file for more broader use.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

class Transformation {
	// Transform linearly coordinate from real to screen
	static linearTransform(x, src, dest) {
		// Get range of src and dest coordinates
		var xmin = src[0];
		var xmax = src[1];
		var XMIN = dest[0];
		var XMAX = dest[1];
		
		// Perform transformation
		var M = (XMAX - XMIN) / (xmax - xmin);
		var X = (x - xmin) * M + XMIN;
		
		return X;
	}
}



/*
	tabtext.js
	Tabs of textarea for input and output in simulation using
	butiran.js library.
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180613
	Start it from lib/grid/table.js in butiran.js libraries and
	functions.
	Constructing createAndSetLayoutElements, createStyle.
	20180614
	Continue creating this application, with functions
	createIODiv, createAllStyles, changeStyleAttribute, openTA.
	Rename createIODiv to createIOTabText.
	Add pop and push.
	Two or more instance will still sharing same elementId.
	It is still a bug.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Reserver id of textareas
var taIds = [];
var taId;

// Create IO division based on several divs and a textarea
function createTabTextIO(menu, parent, dimension) {
	// Set style of the tab
	Style.createStyle(`
	.tab {
		overflow: hidden;
		width: 200px;
		height: 300px;
		background: #f1f1f1;
		border: 1px solid #ccc;
		float: left;
	}
	`);

	// Set style of the buttons inside the tab
	Style.createStyle(`
	.tab button {
		background: #ddd;
		float: left;
		outline: none;
		border: none;
		padding: 6px 6px;
		width: 60px;
		height: 28px;
		cursor: pointer;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	`);

	// Set style of the buttons inside the tab on mouse hover
	Style.createStyle(`
	.tab button:hover {
		background: #e7e7e7;
		color: #000;
	}
	`);

	// Set style of current active button
	Style.createStyle(`
	.tab button.active {
		background: #f1f1f1;
		color: #000;
	}
	`);
	
	// Set style of div content, parent of textarea
	Style.createStyle(`
	.divcontent {
		clear: both;
		padding: 4px 4px;
		background: inherit;
	}
	`);
	
	// Set style of tab content, which is a textarea
	Style.createStyle(`
	.tabcontent {
		width: 182px;
		display: none;
		padding: 4px 6px;
		overflow-Y: scroll;
		border: 1px solid #aaa;
	}
	`);
	
	// Get IODiv dimension
	width = dimension.width;
	height = dimension.height;
	
	// Get number of menu item
	var N = menu.length;

	// Adjust IODiv dimension
	var div = document.createElement("div");
	div.className = "tab";
	Style.changeStyleAttribute(".tab", "width", width);
	Style.changeStyleAttribute(".tab", "height", height);
	parent.append(div);
	
	// Adjust button width	
	var btnWidth = Math.floor(parseInt(dimension.width) / N) +
		"px";
	Style.changeStyleAttribute(".tab button", "width",
		btnWidth);
	
	for(var i = 0; i < N; i++) {
		var btnMenu = document.createElement("button");
		btnMenu.id = "btn" + menu[i];
		btnMenu.innerHTML = menu[i];
		btnMenu.className = "tablinks";
		btnMenu.addEventListener("click", openTabText);
		div.append(btnMenu);
	}
	
	var divMenu = document.createElement("div");
	divMenu.className = "divcontent";
	divMenu.id = "divMenu";
	for(var i = 0; i < N; i++) {
		var taMenu = document.createElement("textarea");
		taMenu.id = "ta" + menu[i];
		taIds.push(taMenu.id);
		taMenu.innerHTML = menu[i];
		taMenu.className = "tabcontent";
		divMenu.append(taMenu);
	}
	div.append(divMenu);
	
	// Get dimension of elements and set its children's
	var btnPadTop =
		Style.getStyleAttribute(".tab button", "paddingTop");
	var btnPadBtm =
		Style.getStyleAttribute(".tab button", "paddingBottom");
	var btnHeight =
		Style.getStyleAttribute(".tab button", "height");
	var divHeight = (parseInt(height) - parseInt(btnHeight)
		- parseInt(btnPadTop) - parseInt(btnPadBtm)) + "px";
	Style.changeStyleAttribute(".divcontent", "height",
		divHeight);
	
	var divPadTop =
		Style.getStyleAttribute(".divcontent", "paddingTop");
	var divPadBtm =
		Style.getStyleAttribute(".divcontent", "paddingBottom");
	var tabCoB =
		Style.getStyleAttribute(".tabcontent", "borderWidth");
	var tabCoH = (parseInt(divHeight) - parseInt(divPadTop)
		- parseInt(divPadBtm) + 2 * parseInt(tabCoB)) + "px";
	Style.changeStyleAttribute(".tabcontent", "height",
		tabCoH);
	
	var tabCoPL = 
		Style.getStyleAttribute(".tabcontent", "paddingLeft");
	var tabCoPR = 
		Style.getStyleAttribute(".tabcontent", "paddingRight");
	var scrollBarWidth = 10; // Not known
	var tabCoW = (parseInt(width) - parseInt(tabCoPL)
		- parseInt(tabCoPR) - scrollBarWidth) + "px";
	Style.changeStyleAttribute(".tabcontent", "width", tabCoW);
	
	/*
	20180614.1301 There are still some problems with dimension,
	and child - parent size relations in width and height.
	*/
	
	// Call initial active button and textarea
	openTabText(0);
	
	return taIds;
}

// Open a textarea
function openTabText(event) {
	// Remove active from all button
	var tablinks = document.getElementsByClassName("tablinks");
	var N = tablinks.length;
	for(var i = 0; i < N; i++) {
		var className = tablinks[i].className;
		var newClassName = className.replace("active", "");
		tablinks[i].className = newClassName;
	}
	
	// Hide all tabcontent
	var tabcont = document.getElementsByClassName("tabcontent");
	var N = tabcont.length;
	for(var i = 0; i < N; i++) {
		tabcont[i].style.display = "none";
	}
	
	// Set active to current button and show related content
	var target = event.target;
	if(target != undefined) {
		target.className += " active";
		var id = "ta" + target.id.substring(3);
		var ta = document.getElementById(id);
		ta.style.display = "block";
	} else {
		var id = event;
		tablinks[0].className += " active";
		tabcont[0].style.display = "block";
	}
}

// Set id
function setId(id) {
	taId = taIds[id];
}

// Pop last line from textarea
function pop(id) {
	var ta = document.getElementById(taId);
	var val = ta.value;
	var lines = val.split("\n");
	var last = lines.pop();
	val = lines.join("\n");
	ta.value = val;
	return last;
}

// Push to textarea
function push(line) {
	var ta = document.getElementById(taId);
	var val = ta.value;
	var lines = val.split("\n");
	lines.push(line);
	val = lines.join("\n");
	ta.value = val;
}



/*
	tabcanvas.js
	Tabs of canvas for input and output in simulation using
	butiran.js library.
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180614
	Start by modifying lib/ui/tabcanvas.js libraries and
	functions.
	Two or more instance will still sharing same elementId.
	It is still a bug.
*/

// Reserver id of textareas
var canIds = [];
var canId;

// Create IO division based on several divs and a textarea
function createTabCanvasIO(menu, parent, dimension) {
	// Set style of the tab
	Style.createStyle(`
	.tabcan {
		overflow: hidden;
		width: 200px;
		height: 300px;
		background: #f1f1f1;
		border: 1px solid #ccc;
		float: left;
	}
	`);

	// Set style of the buttons inside the tab
	Style.createStyle(`
	.tabcan button {
		background: #ddd;
		float: left;
		outline: none;
		border: none;
		padding: 6px 6px;
		width: 60px;
		height: 28px;
		cursor: pointer;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	`);

	// Set style of the buttons inside the tab on mouse hover
	Style.createStyle(`
	.tabcan button:hover {
		background: #e7e7e7;
		color: #000;
	}
	`);

	// Set style of current active button
	Style.createStyle(`
	.tabcan button.active {
		background: #f1f1f1;
		color: #000;
	}
	`);
	
	// Set style of div content, parent of textarea
	Style.createStyle(`
	.divcontentcan {
		clear: both;
		padding: 4px 4px;
		background: inherit;
	}
	`);
	
	// Set style of tab content, which is a textarea
	Style.createStyle(`
	.tabcontentcan {
		width: 182px;
		display: none;
		padding: 4px 6px;
		overflow-Y: scroll;
		border: 1px solid #aaa;
	}
	`);
	
	// Get IODiv dimension
	width = dimension.width;
	height = dimension.height;
	
	// Get number of menu item
	var N = menu.length;

	// Adjust IODiv dimension
	var div = document.createElement("div");
	div.className = "tabcan";
	Style.changeStyleAttribute(".tabcan", "width", width);
	Style.changeStyleAttribute(".tabcan", "height", height);
	parent.append(div);
	
	// Adjust button width	
	var btnWidth = Math.floor(parseInt(dimension.width) / N) +
		"px";
	Style.changeStyleAttribute(".tabcan button", "width",
		btnWidth);
	
	for(var i = 0; i < N; i++) {
		var btnMenu = document.createElement("button");
		btnMenu.id = "btc" + menu[i];
		btnMenu.innerHTML = menu[i];
		btnMenu.className = "tablinkscan";
		btnMenu.addEventListener("click", openTabCanvas);
		div.append(btnMenu);
	}
	
	var divMenu = document.createElement("div");
	divMenu.className = "divcontentcan";
	divMenu.id = "divMenuCan";
	for(var i = 0; i < N; i++) {
		var taMenu = document.createElement("textarea");
		taMenu.id = "can" + menu[i];
		canIds.push(taMenu.id);
		taMenu.innerHTML = menu[i];
		taMenu.className = "tabcontentcan";
		divMenu.append(taMenu);
	}
	div.append(divMenu);
	
	// Get dimension of elements and set its children's
	var btnPadTop =
		Style.getStyleAttribute(".tabcan button", "paddingTop");
	var btnPadBtm =
		Style.getStyleAttribute(".tabcan button", "paddingBottom");
	var btnHeight =
		Style.getStyleAttribute(".tabcan button", "height");
	var divHeight = (parseInt(height) - parseInt(btnHeight)
		- parseInt(btnPadTop) - parseInt(btnPadBtm)) + "px";
	Style.changeStyleAttribute(".divcontent", "height",
		divHeight);
	
	var divPadTop =
		Style.getStyleAttribute(".divcontentcan", "paddingTop");
	var divPadBtm =
		Style.getStyleAttribute(".divcontentcan", "paddingBottom");
	var tabCoB =
		Style.getStyleAttribute(".tabcontentcan", "borderWidth");
	var tabCoH = (parseInt(divHeight) - parseInt(divPadTop)
		- parseInt(divPadBtm) + 2 * parseInt(tabCoB)) + "px";
	Style.changeStyleAttribute(".tabcontentcan", "height",
		tabCoH);
	
	var tabCoPL = 
		Style.getStyleAttribute(".tabcontentcan", "paddingLeft");
	var tabCoPR = 
		Style.getStyleAttribute(".tabcontentcan", "paddingRight");
	var scrollBarWidth = 10; // Not known
	var tabCoW = (parseInt(width) - parseInt(tabCoPL)
		- parseInt(tabCoPR) - scrollBarWidth) + "px";
	Style.changeStyleAttribute(".tabcontentcan", "width", tabCoW);
	
	/*
	20180614.1301 There are still some problems with dimension,
	and child - parent size relations in width and height.
	*/
	
	// Call initial active button and textarea
	openTabCanvas(0);
	
	return canIds;
}

// Open a canvas
function openTabCanvas(event) {
	// Remove active from all button
	var tablinks = document.getElementsByClassName("tablinkscan");
	var N = tablinks.length;
	for(var i = 0; i < N; i++) {
		var className = tablinks[i].className;
		var newClassName = className.replace("active", "");
		tablinks[i].className = newClassName;
	}
	
	// Hide all tabcontent
	var tabcont = document.getElementsByClassName("tabcontentcan");
	var N = tabcont.length;
	for(var i = 0; i < N; i++) {
		tabcont[i].style.display = "none";
	}
	
	// Set active to current button and show related content
	var target = event.target;
	if(target != undefined) {
		target.className += " active";
		var id = "can" + target.id.substring(3);
		var ta = document.getElementById(id);
		ta.style.display = "block";
	} else {
		var id = event;
		tablinks[0].className += " active";
		tabcont[0].style.display = "block";
	}
}

// Set id
function setId(id) {
	canId = canIds[id];
}

// Pop last line from textarea
function pop(id) {
	var ta = document.getElementById(taId);
	var val = ta.value;
	var lines = val.split("\n");
	var last = lines.pop();
	val = lines.join("\n");
	ta.value = val;
	return last;
}

// Push to textarea
function push(line) {
	var ta = document.getElementById(taId);
	var val = ta.value;
	var lines = val.split("\n");
	lines.push(line);
	val = lines.join("\n");
	ta.value = val;
}



/*
	parse.js
	Parse key and value pair
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180618
	Create this library of functions.
	20180619
	Get column from multiline text.
	20180627
	Add new function for handling 4 parameters in a line.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
	20180930
	Add valueBetween function.
*/

class Parse {
	// Get value of related key from multi line text with '\n'
	static getFrom(text) {
		var par = {
			valueOf: function(key) {
				var lines = text.split('\n');
				var N = lines.length;
				var val;
				for(var i = 0; i < N; i++) {
					var j = lines[i].indexOf(key);
					if(j != -1) {
						var cols = lines[i].split(' ');
						var M = cols.length;
						if(M == 2) {
							val = parseFloat(cols[1]);
						} else if(M == 4) {
							var x = parseFloat(cols[1]);
							var y = parseFloat(cols[2]);
							var z = parseFloat(cols[3]);
							val = new Vect3(x, y, z)
						} else if(M == 5) {
							val = [
								parseFloat(cols[1]),
								parseFloat(cols[2]),
								parseFloat(cols[3]),
								parseFloat(cols[4])
							];
						}
					}
				}
				return val;
			},
			column: function(jcol) {
				var lines = text.split('\n');
				var N = lines.length;
				var val = [];
				for(var i = 0; i < N; i++) {
					var cols = lines[i].split(" ");
					val.push(parseFloat(cols[jcol]));
				}
				return val;
			},
			valueBetween: function(beg, end) {
				var lines = text.split('\n');
				var N = lines.length;
				var val;
				var ibeg = -1;
				var iend = -1;
				for(var i = 0; i < N; i++) {
					var jbeg = lines[i].indexOf(beg);
					if(jbeg != -1) {
						ibeg = i;
					}
					var jend = lines[i].indexOf(end);
					if(jend != -1) {
						iend = i;
					}
				}
				var pattern = "";
				for(var i = ibeg + 1; i < iend; i++) {
					var line = lines[i];
					if(i > ibeg + 1) {
						pattern += " " + line;
					} else {
						pattern += line;
					}
				}
				return pattern.split(" ").map(Number);
			},
		};
		return par;
	}
}



/*
	tabs.js
	A GUI based on div element for containing visual elements,
	e.g. textarea and canvas, which can be hidden and shown
	using appropriate button
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180615
	Create this class in order to overcome problem of not
	unique ID of elements as TabText and TabCanvas functions
	are used.
	20180616
	Continue creating this class. Class style tablinks must
	also be labeled with id.
	20180617
	Fix referencing to this in event handler.
	Fix size of canvas.
	Canvas and textarea can be accessed through text(label)
	graphic(label).
	20180618
	Add element(label) for alternative to textarea(label) and
	canvas(label).
	20180714
	Remove a line in arch outputting to console.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Tabs
class Tabs {
	// Create constructor
	constructor() {
		// Set rules for number of arguments
		if(arguments.length == 0) {
			var msg = "Tabs requires id (and parentId) as "
				+ "arguments";
			throw new Error(msg);
		} else if(arguments.length == 1){
			this.id = arguments[0];
			this.parentId = "document.body";
			var msg = "Tabs " + this.id + " assumes that parent is"
				+ " document.body";
			console.warn(msg);
		} else {
			this.id = arguments[0];
			this.parentId = arguments[1]
		}
		
		// Check whether id already exists
		var el = document.getElementById(this.id);
		var idExist = (el != undefined)
		if(idExist) {
			var msg = this.id + " exists";
			throw new Error(msg)
		}
		
		// Create style
		this.createAllStyle(this.id);
		this.tabcs = "tab" + this.id;
		this.tabbtncs = "tab" + this.id + " button";
		this.tablinkscs =  "tablinks" + this.id;
		this.divcontcs =  "divcontent" + this.id;
		this.tabcontcs =  "tabcontent" + this.id;
		
		// Try not so good workaround
		localStorage.setItem(this.tablinkscs, this.tablinkscs);
		localStorage.setItem(this.tabcontcs, this.tabcontcs);
		
		// Define visual container
		var tab  = document.createElement("div");
		tab.id = this.id;
		tab.className = this.tabcs;
		this.tab = tab;
		
		// Set parent of Tabs instance
		if(this.parentId == "document.body") {
			document.body.append(this.tab);
		} else {
			var el = document.getElementById(this.parentId);
			el.append(this.tab);
		}
		
		// Define array for storing tab button information
		this.tabs = [];
		this.tabsType = [];
	}
	
	// Set background color
	setBackground(color) {
		Style.changeStyleAttribute('.' + this.tabcs,
			"background", color);
	}
	
	// Set width
	setWidth(width) {
		Style.changeStyleAttribute('.' + this.tabcs,
			"width", width);		
	}
	
	// Set hight
	setHeight(height) {
		Style.changeStyleAttribute('.' + this.tabcs,
			"height", height);		
	}
	
	// Ada label for tab button
	addTab(label, type) {
		// Erase div
		var divid = this.id + "div";
		var div = document.getElementById(divid);
		if(div != undefined) {
			div.remove();
		}
		
		// Avoid same tab label
		var ilabel = this.tabs.indexOf(label);
		if(ilabel < 0) {
			this.tabs.push(label);
			this.tabsType.push(type);
		} else {
			var msg = "Duplicate label " + label + " is igonered";
			console.warn(msg);
		}
		
		// Create tab buttons
		var N = this.tabs.length;
		for(var i = 0; i < N; i++) {
			var id = this.id + this.tabs[i];
			var btn = document.getElementById(id);
			if(btn == undefined) {
				var btn = document.createElement("button");
				btn.id = id;
				btn.className = this.tablinkscs;
				btn.innerHTML = this.tabs[i];
				btn.addEventListener("click", this.toggleContent)
				this.tab.append(btn);
			}
		}
		
		// Recreate div -- without following line act differently
		// when number of tab buttons is odd or even
		div = document.getElementById(divid);
		if(div == undefined) {
			var div = document.createElement("div");
			div.id = divid;
			div.className = this.divcontcs;
			this.tab.append(div);
		}
		
		// Adjust textarea or canvas width
		var width = parseInt(Style.getStyleAttribute('.' +
			this.tabcs, "width"));
		var pl = parseInt(Style.getStyleAttribute('.' +
			this.divcontcs, "paddingLeft"));
		var pr = parseInt(Style.getStyleAttribute('.' +
			this.divcontcs, "paddingRight"));
		var dh = 14;
		var tcwidth = (width - pl - pr - dh) + "px";
		Style.changeStyleAttribute('.' + this.tabcontcs,
			"width", tcwidth);
		
		var height = parseInt(Style.getStyleAttribute('.' +
			this.tabcs, "height"));
		var pt = parseInt(Style.getStyleAttribute('.' +
			this.divcontcs, "paddingTop"));
		var pb = parseInt(Style.getStyleAttribute('.' +
			this.divcontcs, "paddingBottom"));
		var dv = 38;
		var tcheight = (height - pt - pb - dv) + "px";
		Style.changeStyleAttribute('.' + this.tabcontcs,
			"height", tcheight);

		// Create content of div
		for(var i = 0; i < N; i++) {
			var id = this.id + this.tabs[i] + "content";
			var el = document.getElementById(id);
			if(el == undefined) {
				var el;
				if(this.tabsType[i] == 0) {
					el = document.createElement("textarea");
					el.className = this.tabcontcs;
					el.innerHTML = this.tabs[i];
				} else if(this.tabsType[i] == 1) {
					el = document.createElement("canvas");
					el.className = this.tabcontcs;
					el.width = parseInt(tcwidth);
					el.height = parseInt(tcheight);
					el.getContext("2d").font = "12px Courier";
					el.getContext("2d").fillText(this.tabs[i], 2, 10);
					el.getContext("2d").beginPath();
					el.getContext("2d")
						.arc(45, 45, 20, 0, 2 * Math.PI);
					el.getContext("2d").stroke();
					el.getContext("2d").beginPath();
					el.getContext("2d")
						.arc(55, 25, 10, 0, 2 * Math.PI);
					el.getContext("2d").stroke();
				}
				el.id = id;
				div.append(el);
			}
		}
		
		// Adjust width according to number of tab buttons
		this.updateTabButtonsWidth();
		
		// Initiate visible tab -- 20180617.0918
		this.toggleContent(0);
	}
	
	// Remove label for tab button
	removeTab(label) {
		// 20180616.0445
		// Tom Wadley, Beau Smith
		// https://stackoverflow.com/a/5767357/9475509
		var i = this.tabs.indexOf(label);
		var remE = this.tabs.splice(i, 1);
		this.tabsType.splice(i, 1);
		
		// Warn only for unexisting label for removing
		if(i < 0) {
			var msg = "Unexisting label " + label + " for removing "
				+ "is igonered";
			console.warn(msg);
		}
		
		// 20180616.1612
		// Catalin Rosu
		// https://catalin.red/removing-an-element-with
		// -plain-javascript-remove-method/
		
		// Remove tab button
		var id = this.id + remE;
		var btn = document.getElementById(id);
		btn.remove();
		this.updateTabButtonsWidth();
		
		// Remove element related to tab button
		var id2 = this.id + remE + "content";
		var el = document.getElementById(id2);
		el.remove();
		
		// Initiate visible tab after remove a tab button
		// -- 20180617.1031
		this.toggleContent(0);
	}
	
	// Check and update tab buttons
	updateTabButtonsWidth() {
		var N = this.tabs.length;
		var M = document.getElementsByClassName(this.tablinkscs)
			.length;
		// Make sure that label and tabbutton have the same size
		if(M == N) {
			var width =
				Style.getStyleAttribute('.' + this.tabcs, "width");
			var btnWidth = parseInt(width) / N + "px";
			Style.changeStyleAttribute('.' + this.tabbtncs,
				"width", btnWidth);
		}
	}
	
	// Get class name -- problem by event also not work
	getStyleClassName() {
		var scn = [];
		scn.push(this.tabcs);
		scn.push(this.tabbtncs);
		scn.push(this.tablinkscs);
		scn.push(this.tabcontcs);
		return scn;
	}
		
	// Toggle tab content when button clicked
	toggleContent() {
		// The idea using styles is from
		// https://www.w3schools.com/howto/howto_js_tabs.asp
		
		if(event != undefined) {
			// Get style name with workaround using localStorage
			var parent = event.target.parentElement;
			var tlcs = localStorage
				.getItem("tablinks" + parent.id);
			var tccs = localStorage
				.getItem("tabcontent" + parent.id);

			// Remove active from all button
			var tablinks = document.getElementsByClassName(tlcs);
			var N = tablinks.length;
			for(var i = 0; i < N; i++) {
				var className = tablinks[i].className;
				var newClassName = className.replace("active", "");
				tablinks[i].className = newClassName;
			}
			
			// Hide all tabcontent
			var tabcont = document.getElementsByClassName(tccs);
			var N = tabcont.length;
			for(var i = 0; i < N; i++) {
				tabcont[i].style.display = "none";
			}
			
			// Set active to current button and show related content
			var target = event.target;
			target.className += " active";
			var id = target.id + "content";
			var el = document.getElementById(id);
			el.style.display = "block";
		} else {
			var i = arguments[0];
			var id = this.id;
			var tlcs = localStorage.getItem("tablinks" + id);
			var tccs = localStorage.getItem("tabcontent" + id);
			var tablinks = document.getElementsByClassName(tlcs);
			var tabcont = document.getElementsByClassName(tccs);
			
			// Fixed -- 20180617.0918 for undefined
			// -- 1020 for multiple active
			if(tablinks.length > 0 && tabcont.length > 0) {
				var className = tablinks[i].className;
				var newClassName = className.replace("active", "");
				tablinks[i].className = newClassName;
				tablinks[i].className += " active";
				tabcont[i].style.display = "block";
			}
		}
	}
	
	// Create default style for this class
	createAllStyle(id) {
		// Set style of the tab
		Style.createStyle(
		'.tab' + id + ` {
			overflow: hidden;
			width: 240px;
			height: 200px;
			background: #f1f1f1;
			border: 1px solid #ccc;
			float: left;
		}
		`);

		// Set style of the buttons inside the tab
		Style.createStyle(
		'.tab' + id +  ` button {
			background: #ddd;
			float: left;
			outline: none;
			border: none;
			padding: 6px 6px;
			width: 60px;
			height: 28px;
			cursor: pointer;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		`);

		// Set style of the buttons inside the tab on mouse hover
		Style.createStyle(
		'.tab' + id + ` button:hover {
			background: #e7e7e7;
			color: #000;
		}
		`);

		// Set style of current active button
		Style.createStyle(
		'.tab' + id + ` button.active {
			background: #f1f1f1;
			color: #000;
		}
		`);
		
		// Set style of div content, parent of textarea
		Style.createStyle(
		'.divcontent' + id + ` {
			clear: both;
			padding: 4px 4px;
			background: inherit;
		}
		`);
		
		// Set style of tab content, which is a textarea
		Style.createStyle(
		'.tabcontent' + id + ` {
			width: 182px;
			display: none;
			padding: 4px 6px;
			overflow-Y: scroll;
			border: 1px solid #aaa;
			background: #fff;
			margin: 0px;
		}
		`);
	}
	
	// Get access to textarea of tab with name
	textarea(label) {
		var i = this.tabs.indexOf(label);
		var id = this.id + this.tabs[i] + "content";
		var el = document.getElementById(id);
		var nottextarea = !(el instanceof HTMLTextAreaElement);
		if(nottextarea) {
			var msg = "Tabs " + this.id + " " + label +
				" is not as a textarea";
			throw new Error(msg);
		} else {
			return el;
		}
	}
	
	// Get access to canvas of tab with name
	canvas(label) {
		var i = this.tabs.indexOf(label);
		var id = this.id + this.tabs[i] + "content";
		var el = document.getElementById(id);
		var notcanvas = !(el instanceof HTMLCanvasElement);
		if(notcanvas) {
			var msg = "Tabs " + this.id + " " + label +
				" is not as a canvas";
			throw new Error(msg);
		} else {
			return el;
		}
	}
	
	// Get element
	element(label) {
		var i = this.tabs.indexOf(label);
		var id = this.id + this.tabs[i] + "content";
		var el = document.getElementById(id);
		return el;
	}
	
	// Manipulate directly tab content of type text
	text(label) {
		var i = this.tabs.indexOf(label);
		var id = this.id + this.tabs[i] + "content";
		var el = document.getElementById(id);
		var textarea = (el instanceof HTMLTextAreaElement);
		
		// Handle content as textarea
		if(textarea) {
			var lines = el.value.split("\n");
			var tav = {
				push: function(line) {
					// Avoid first empty line after clear textarea
					if(lines.length == 1 && lines[0].length == 0) {
						lines[0] = line;
					} else {
						lines.push(line);
					}
					var val = lines.join("\n");
					el.value = val;
				},
				pop: function() {
					var pl = lines.pop();
					var val = lines.join("\n");
					el.value = val;
					return pl;
				},
				popAll: function() {
					el.value;
					return lines;
				},
				clear: function() {
					el.value = "";
				},
			}
			return tav;
		} else {
			var msg = this.id + " " + this.tabs[i] +
				" is not a textarea";
			throw new Error(msg);
		}
	}

	// Manipulate directly tab content of type graphic
	graphic(label) {
		var i = this.tabs.indexOf(label);
		var id = this.id + this.tabs[i] + "content";
		var el = document.getElementById(id);
		var canvas = (el instanceof HTMLCanvasElement);
		var ctx = el.getContext("2d");
		
		// Handle content as canvas
		if(canvas) {
			// Define COORD
			el.RANGE = [0, el.height, el.width, 0];
			
			// Define object for handling drawing process
			var can = {
				setCoord: function(range) {
					el.range = range;
				},
				getCoord: function() {
					return el.range;
				},
				getCOORD: function() {
					return el.RANGE;
				},
				setLineColor: function(color) {
					ctx.strokeStyle = color;
				},
				setFillColor: function(color) {
					ctx.fillStyle = color;
				},
				trect: function(x, y, width, height) {
					var xx = Transformation.linearTransform(
						x,
						[el.range[0], el.range[2]], 
						[el.RANGE[0], el.RANGE[2]]
					);
					var yy = Transformation.linearTransform(
						y,
						[el.range[1], el.range[3]], 
						[el.RANGE[1], el.RANGE[3]]
					);
					var xxdx = Transformation.linearTransform(
						x + width,
						[el.range[0], el.range[2]], 
						[el.RANGE[0], el.RANGE[2]]
					);
					var yydy = Transformation.linearTransform(
						y + height,
						[el.range[1], el.range[3]], 
						[el.RANGE[1], el.RANGE[3]]
					);
					var ww = xxdx - xx;
					var hh = yydy - yy;
					return [xx, yy, ww, hh];
				},
				rect: function(x, y, width, height) {
					var tc = this.trect(x, y, width, height);
					ctx.rect(tc[0], tc[1], tc[2], tc[3]);
				},
				strokeRect: function(x, y, width, height) {
					var tc = this.trect(x, y, width, height);
					ctx.strokeRect(tc[0], tc[1], tc[2], tc[3]);
				},
				fillRect: function(x, y, width, height) {
					var tc = this.trect(x, y, width, height);
					ctx.fillRect(tc[0], tc[1], tc[2], tc[3]);
				},
				arc: function(x, y, r, sAngle, eAngle) {
					var tc = this.trect(x, y, r, r);
					ctx.beginPath();
					ctx.arc(tc[0], tc[1], tc[2], sAngle, eAngle);
					ctx.stroke();
				},
				strokeCircle: function(x, y, r) {
					this.arc(x, y, r, 0, 2 * Math.PI);
				},
				fillCircle: function(x, y, r) {
					this.arc(x, y, r, 0, 2 * Math.PI);
					ctx.fill();
				},
				setPointType: function(pointType) {
					el.pointType = pointType;
				},
				setPointSize: function(pointSize) {
					el.pointSize = pointSize;
				},
				point: function(x, y) {
					var r = el.pointSize;
					var t = el.pointType;
					if(t == "circle") {
						var tc = this.trect(x, y, r, r);
						ctx.beginPath();
						ctx.arc(tc[0], tc[1], 0.5 * r, 0, 2 * Math.PI);
						ctx.stroke();
					} else if(t == "box") {
						var tc = this.trect(x, y, r, r);
						var dr = 0.5 * r;
						ctx.strokeRect(tc[0] - dr, tc[1] - dr, r, r);
					}
				},
				points: function(x, y) {
					var Nx = x.length;
					var Ny = y.length;
					var N = Math.min(Nx, Ny);
					for(var i = 0; i < N; i++) {
						this.point(x[i], y[i]);
					}
				},
				lines: function(x, y) {
					var Nx = x.length;
					var Ny = y.length;
					var N = Math.min(Nx, Ny);
					ctx.beginPath();
					for(var i = 0; i < N; i++) {
						var xi = x[i];
						var yi = y[i];
						var tc = this.trect(xi, yi, 0, 0);
						if(i == 0) {
							ctx.moveTo(tc[0], tc[1]);
						} else {
							ctx.lineTo(tc[0], tc[1]);
						}
					}
					ctx.stroke();
				},
				clear: function() {
					ctx.clearRect(0, 0, el.width, el.height);
				},
			}
			return can;
		} else {
			var msg = this.id + " " + this.tabs[i] +
				" is not a canvas";
			throw new Error(msg);
		}
	}
}



/*
	bgroup.js
	A GUI based on div element for containing buttons
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180619
	Create this based on Tabs.
	Add enable, disable, setCaption.
	20180929
	Integrate it manually to butiran.js the new single file
	library.
*/

// Define class of Bgroup
class Bgroup {
	// Create constructor
	constructor() {
		// Set rules for number of arguments
		if(arguments.length == 0) {
			var msg = "Bgroup requires id (and parentId) as "
				+ "arguments";
			throw new Error(msg);
		} else if(arguments.length == 1){
			this.id = arguments[0];
			this.parentId = "document.body";
			var msg = "Bgroup " + this.id + " assumes that " + 
				"parent is document.body";
			console.warn(msg);
		} else {
			this.id = arguments[0];
			this.parentId = arguments[1]
		}
		
		// Check whether id already exists
		var el = document.getElementById(this.id);
		var idExist = (el != undefined)
		if(idExist) {
			var msg = this.id + " exists";
			throw new Error(msg)
		}
		
		// Create style
		this.createAllStyle(this.id);
		this.bgroupcs = "bgroup" + this.id;
		this.buttoncs = "button" + this.id;
		
		// Define visual container
		var bgroup  = document.createElement("div");
		bgroup.id = this.id;
		bgroup.className = this.bgroupcs;
		this.bgroup = bgroup;
		
		// Set parent of Tabs instance
		if(this.parentId == "document.body") {
			document.body.append(this.bgroup);
		} else {
			var el = document.getElementById(this.parentId);
			el.append(this.bgroup);
		}
		
		// Define array for storing tab button information
		this.buttons = [];
		this.funcs = [];
	}
	
	// Set background color
	setBackground(color) {
		Style.changeStyleAttribute('.' + this.bgroupcs,
			"background", color);
	}
	
	// Set width
	setWidth(width) {
		Style.changeStyleAttribute('.' + this.bgroupcs,
			"width", width);		
	}
	
	// Set hight
	setHeight(height) {
		Style.changeStyleAttribute('.' + this.bgroupcs,
			"height", height);		
	}
	
	// Ada button
	addButton(label, func) {
		// Avoid same button
		var ibutton = this.buttons.indexOf(label);
		if(ibutton < 0) {
			this.buttons.push(label);
		} else {
			var msg = "Duplicate label " + label + " is igonered";
			console.warn(msg);
		}
		
		// Create tab buttons
		var N = this.buttons.length;
		for(var i = 0; i < N; i++) {
			var id = this.id + this.buttons[i];
			var btn = document.getElementById(id);
			if(btn == undefined) {
				var btn = document.createElement("button");
				btn.id = id;
				btn.className = this.buttoncs;
				btn.innerHTML = this.buttons[i];
				btn.addEventListener("click", buttonClick)
				this.bgroup.append(btn);
			}
		}
	}
	
	// Remove label for tab button
	removeButton(label) {
		// 20180616.0445
		// Tom Wadley, Beau Smith
		// https://stackoverflow.com/a/5767357/9475509
		var i = this.buttons.indexOf(label);
		var remE = this.buttons.splice(i, 1);
		
		// Warn only for unexisting label for removing
		if(i < 0) {
			var msg = "Unexisting label " + label + " for removing "
				+ "is igonered";
			console.warn(msg);
		}
		
		// Remove tab button
		var id = this.id + remE;
		var btn = document.getElementById(id);
		btn.remove();
		this.updateTabButtonsWidth();
		
		// Initiate visible tab after remove a tab button
		// -- 20180617.1031
		//this.toggleContent(0);
	}
	
	// Enable button with certain label
	disable(label) {
		var i = this.buttons.indexOf(label);
		if(i < 0) {
			var msg = "Disable button " + label
				+ " of unexisting is igonered";
			console.warn(msg);
		} else {
			var id = this.id + this.buttons[i];
			var btn = document.getElementById(id);
			btn.disabled = true;
		}
	}
	
	// Disable button with certain label
	enable(label) {
		var i = this.buttons.indexOf(label);
		if(i < 0) {
			var msg = "Enable button " + label
				+ " of unexisting is igonered";
			console.warn(msg);
		} else {
			var id = this.id + this.buttons[i];
			var btn = document.getElementById(id);
			btn.disabled = false;
		}
	}

	// Set button caption
	setCaption(label) {
		var i = this.buttons.indexOf(label);
		var id = this.id + this.buttons[i];
		if(i < 0) {
			var msg = "Set button caption " + label
				+ " of unexisting is igonered";
			console.warn(msg);
		} else {
			var bt = {
				to: function(caption) {
					var btn = document.getElementById(id);
					btn.innerHTML = caption;
				}
			}
			return bt;
		}
	}
	
	// Create default style for this class
	createAllStyle(id) {
		// Set style of the tab
		Style.createStyle(
		'.bgroup' + id + ` {
			overflow: hidden;
			width: 150px;
			height: 100px;
			background: #f1f1f1;
			border: 1px solid #ccc;
			padding: 4px 4px;
			float: left;
		}
		`);

		// Set style of the buttons inside the tab
		Style.createStyle(
		'.button' + id +  ` {
			background: #ddd;
			float: left;
			width: 60px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		`);
	}
}
