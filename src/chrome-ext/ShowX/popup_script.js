document.addEventListener("DOMContentLoaded", drawRandom);

function drawRandom() {
	var c = document.createElement("canvas");
	document.body.append(c);
	c.width = "200";
	c.height = "200";
	c.style.width = c.width + "px";
	c.style.height = c.height + "px";
	c.style.background = "#fff";
	
	var cx = c.getContext("2d");
	
	var lx = parseInt(c.width);
	var ly = parseInt(c.height);
	var lr = 0.05 * Math.sqrt(lx * ly);
	
	var color = [
		"#aaa", "#aaf", "#afa", "#aff",
		"#faa", "#faf", "#ffa", "#fff",
		"#888", "#88f", "#8f8", "#8ff",
		"#f88", "#f8f", "#ff8", "#888",
	]
	
	var N = 100;
	for(var i = 0; i < N; i++) {
		var x = Math.random() * (lx - 20) + 10;
		var y = Math.random() * (ly - 20) + 10;
		var r = Math.random() * lr;
		
		var c = parseInt(Math.random() * 16);
		cx.fillStyle = color[c];
		
		cx.beginPath();
		cx.arc(x, y, r, 0, 2 * Math.PI);
		cx.fill();
	}
}