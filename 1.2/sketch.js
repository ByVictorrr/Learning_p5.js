function setup(){
	createCanvas(400, 400);
	console.log("setup function");
}

function draw(){
	background(255,0,0);
	ellipse(200, 200, 50, 50);
	console.log("draw function");
	console.log("frame count" + frameCount);
}
