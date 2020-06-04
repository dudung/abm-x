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
	can.style.border = "1px solid #eee";
	document.body.append(can);
	
	var m = new Matrix(50, 50, 0);
	m.setCol(0).to(1);
	m.setRow(0).to(2);
	m.setCol(49).to(3);
	m.setRow(49).to(4);
	m.setRows(20, 30).cols(20, 30).to(5);
	paintMatrix(m).onCanvas(canId);
}

