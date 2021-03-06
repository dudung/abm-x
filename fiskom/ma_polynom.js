/*
	ma_polynom.js
	Example how to use Polynomial class
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180929
	Change name according to new naming convention.
	CDN https://rawgit.com/dudung/butiran/master/app
	/ma_polynom.html
	20181120
	Change to JS called from HTML.
*/

function main() {
	
	var p1 = new Polynomial([0, 6, -5, 1]);
	console.log(p1.coefs);

	var p2 = Polynomial.dif(p1);
	console.log(p2.coefs);

	var p3 = Polynomial.int(p2)
	console.log(p3.coefs);

	var p4 = Polynomial.mul(p3, 2)
	console.log(p4.coefs);

	var p5 = Polynomial.div(p4, 2)
	console.log(p5.coefs);

	var p6 = Polynomial.add(p1, p2);
	console.log(p6.coefs);

	var p7 = Polynomial.sub(p2, p1);
	console.log(p7.coefs);

	var pa = new Polynomial([2, 3, 1]);
	var pb = new Polynomial([-1, 1]);
	var pc = Polynomial.mul(pa, pb);
	console.log(pa.coefs);
	console.log(pb.coefs);
	console.log(pc.coefs);

	console.log(p1.val(1));
}

main();