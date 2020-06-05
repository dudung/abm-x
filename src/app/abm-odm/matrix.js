/*
	matrix.js
	Create and manipulate matrix for abm-odm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200603
	0923 Start this library.
	0953 Create functions of makeZero and createZeroMatrix.
	101x Create Matrix class.
	1022 Override toString functions [1].
	1028 Move old functions to oldFunctions function.
	1029 Create beOne for matrix of one [2].
	1049 Test setRow.to and setCol.to functions and ok.
	1101 Test setRows.to and setCols.to functions and ok.
	1118 Test setRows.cols.to and ok.
	1127 Break a while after modify README for this.
	20200605
	0413 Draw a line in marix, still not work.
	0437 Can draw line but not so good, at least it works.
	0516 Fix draw line for y2 < y1 (canvas coordinate).
	
	References
	1. url https://developer.mozilla.org/en-US/docs/Web
	   /JavaScript/Reference/Global_Objects/Object/toString
		 [20200603].
	2. url https://en.wikipedia.org/w/index.php?oldid=921798892
*/

// Define Matrix class
class Matrix {
	constructor() {
		var val = 0;
		this.rows = 1;
		this.cols = 1;
		if(arguments.length < 2) {
			this.rows = arguments[0];
		} else if(arguments.length < 3) {
			this.rows = arguments[0];
			this.cols = arguments[1];
		} else {
			this.rows = arguments[0];
			this.cols = arguments[1];
			val = arguments[2];
		}
		
		this.m = [];
		for(var r = 0; r < this.rows; r++) {
			var row = [];
			for(var c = 0; c < this.cols; c++) {
				var col = val;
				row.push(col);
			}
			this.m.push(row);
		}
	}
	
	toString() {
		var str = "";
		for(var r = 0; r < this.rows; r++) {
			for(var c = 0; c < this.cols; c++) {
				var val = this.m[r][c];
				str += val;
				if(c < this.cols - 1) {
					str += "\t";
				}
			}
			if(r < this.rows - 1) {
				str += "\n";
			}
		}
		return str;
	}
	
	beZero() {
		for(var r = 0; r < this.rows; r++) {
			for(var c = 0; c < this.cols; c++) {
				this.m[r][c] = 0;
			}
		}
	}
	
	beOne() {
		for(var r = 0; r < this.rows; r++) {
			for(var c = 0; c < this.cols; c++) {
				this.m[r][c] = 1;
			}
		}
	}
	
	setRow() {
		var r = arguments[0];
		var m = this.m;
		var cols = this.cols;
		var o = {
			to: function() {
				var val = arguments[0];
				for(var c = 0; c < cols; c++) {
					m[r][c] = val;
				}
			}
		}
		return o;
	}
	
	set() {
		var r = arguments[0];
		var c = arguments[1];
		var m = this.m;
		var o = {
			to: function() {
				var val = arguments[0];
				m[r][c] = val;
			}
		}
		return o;
	}
	
	get() {
		var r = arguments[0];
		var c = arguments[1];
		return this.m[r][c];
	}
	
	setRows() {
		var ri = arguments[0];
		var rf = arguments[1];
		var m = this.m;
		var cols = this.cols;
		var o = {
			to: function() {
				var val = arguments[0];
				for(var r = ri; r <= rf; r++) {
					for(var c = 0; c < cols; c++) {
						m[r][c] = val;
					}
				}
			},
			
			cols: function() {
				var ci = arguments[0];
				var cf = arguments[1];
				var o2 = {
					to: function() {
						var val = arguments[0];
						for(var r = ri; r <= rf; r++) {
							for(var c = ci; c <= cf; c++) {
								m[r][c] = val;
							}
						}
					}
				}
				return o2;
			}
		}
		return o;
	}
	
	setCol() {
		var c = arguments[0];
		var m = this.m;
		var rows = this.rows;
		var o = {
			to: function() {
				var val = arguments[0];
				for(var r = 0; r < rows; r++) {
					m[r][c] = val;
				}
			}
		}
		return o;
	}
	
	setCols() {
		var ci = arguments[0];
		var cf = arguments[1];
		var m = this.m;
		var rows = this.rows;
		var o = {
			to: function() {
				var val = arguments[0];
				for(var r = 0; r < rows; r++) {
					for(var c = ci; c <= cf; c++) {
						m[r][c] = val;
					}
				}
			}
		};
		return o;
	}
	
	drawLine() {
		var x1 = arguments[0];
		var y1 = arguments[1];
		var x2 = arguments[2];
		var y2 = arguments[3];
		var m = this.m;
		
		var o = {
			withColor: function() {
				var color = arguments[0];
				
				var Nx = x2 - x1 + 1;
				var Ny = y2 - y1 + 1;
				if(y2 < y1) Ny = y2 - y1 - 1
				var dydx = Ny / Nx; 
				
				for(var x = x1; x <= x2; x++) {
					var y = Math.round(y1 + (x - x1) * dydx);
					m[y][x] = color;
				}
			}
		};
		return o;
	}
	
}


// Deactivate old functions
function oldFuctions() {
	// Make a matrix zero
	function makeZero() {
		var m = arguments[0];
		var rows = m.length;
		var cols = m[0].length;
		for(var r = 0; r < rows; r++) {
			for(var c = 0; c < cols; c++) {
				m[r][c] = 0;
			}
		}
	}

	// Create zero matrix with dimension rows x cols
	function createZeroMatrix() {
		var rows = arguments[0];
		var cols = arguments[1];
		var m = [];
		for(var r = 0; r < rows; r++) {
			var row = [];
			for(var c = 0; c < cols; c++) {
				var col = 0;
				row.push(col);
			}
			m.push(row);
		}
		return m;
	}
}
