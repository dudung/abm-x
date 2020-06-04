/*
	display.js
	Display matrix in abm-odm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200604
	1927 Create this.
	2012 Paint a matrix on a canvas.
	2022 Draw grid over the painted matrix.
	
	References
	1. 
*/

// Define matrix pixel size
var matrixPixelSize = 10;


// Define colors for matrix painting
var matrixColor = [
	"#fff", // Empty space
	"#ccc", // Wall
	"#ccf", // Agent type 1
	"#cfc", // Agent type 2
	"#fcc", // Agent type 3
	"#ffc", // Agent type 4
];


// Display Matrix class by painting it in canvas
function paintMatrix() {
	var x = arguments[0];
	var m = x.m;
	var rows = x.rows;
	var cols = x.cols;

	var o = {
		onCanvas: function() {
			var id = arguments[0];
			var can = document.getElementById(id);
			var cx = can.getContext("2d");
			
			var dx = matrixPixelSize;
			var dy = matrixPixelSize;
			
			for(var r = 0; r < rows; r++) {
				for(var c = 0; c < cols; c++) {
					
					var x = c * dx;
					var y = r * dy;
					var cval = m[r][c];
					var color = matrixColor[cval];
					cx.fillStyle = color;
					cx.beginPath();
					cx.fillRect(x, y, x + dx, y + dy);
					cx.fill();
					
					cx.strokeStyle = "#fff";
					cx.lineWidth = 0.2;
					cx.beginPath();
					cx.rect(x, y, x + dx, y + dy);
					cx.stroke();
				}
			}			
		}
	};
	
	return o;
}

