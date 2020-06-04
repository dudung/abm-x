/*
	abm-odm.js
	Create origin-destination matrix (ODM)
	using agent-based model (ABM)
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	Tatang Suheri | https://repository.unikom.ac.id/54572 
	
	20200603
	0812 Start this app.
	0913 Put a ref [1].
	
	References
	1. Martin L. Hazelton, "Some comments on origin–destination
	   matrix estimation", Transportation Research Part A: Policy
		 and Practice [Transport. Res. A-Pol.], vol. 37, no. 10,
		 pp. 811-822, Dec 2003, url
		 https://doi.org/10.1016/S0965-8564(03)00044-2
*/

// Define world
m = new Matrix(50, 50, 1);


// Call main function
main();


// Define main function
function main() {
	var canId = "can0";
	
	var can = document.createElement("canvas");
	can.id = canId;
	can.width = 500;
	can.height = 500;
	can.style.width = can.width + "px";
	can.style.height = can.height + "px";
	can.style.border = "1px solid #444";
	document.body.append(can);
	
	// Define border -- actually not necessary
	m.setCol(0).to(1);
	m.setRow(0).to(1);
	m.setCol(49).to(1);
	m.setRow(49).to(1);
	
	// Define NW city
	m.setRows(01, 10).cols(01, 10).to(2);
	
	// Define NE city
	m.setRows(01, 10).cols(42, 48).to(3);
	
	// Define SW city
	m.setRows(43, 48).cols(01, 10).to(4);
	
	// Define SE city
	m.setRows(43, 48).cols(42, 48).to(5);
	
	// Define NW -- NE two ways
	m.setRows(01, 02).cols(11, 41).to(0);
	m.setRows(04, 05).cols(11, 41).to(0);
	
	// Define SW -- SE two ways
	m.setRows(48, 48).cols(11, 41).to(0);
	m.setRows(45, 45).cols(11, 41).to(0);

	// Define NW -- SW two ways
	m.setRows(11, 42).cols(01, 02).to(0);
	m.setRows(11, 42).cols(04, 05).to(0);
	
	// Define NE -- SE two ways
	m.setRows(11, 42).cols(47, 48).to(0);
	m.setRows(11, 42).cols(44, 45).to(0);
	
	// Define NW -- SE two ways
	m.drawLine(10, 11, 41, 42).withColor(0);
	m.drawLine(11, 11, 42, 42).withColor(0);
	m.drawLine(07, 11, 40, 44).withColor(0);
	m.drawLine(08, 11, 41, 44).withColor(0);
	
	// Paint the matrix on canvas
	paintMatrix(m).onCanvas(canId);
	
	can.addEventListener("click", function() {
		var e = arguments[0];
		var t = e.target;
		var x = e.offsetX;
		var y = e.offsetY;
		
		var dx = matrixPixelSize;
		var dy = matrixPixelSize;
		
		var c = Math.floor(x / dx);
		var r = Math.floor(y / dy);
		if(m != undefined) {
			m.m[r][c] = 0;
		}
		
		console.log(r, c);
		paintMatrix(m).onCanvas(canId);
	});

}

