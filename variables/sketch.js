function setup(){
	createCanvas(680,430);	
	background(250, 250, 100);
}

function draw(){
	//background(200, 150, 0);
	noStroke()
	fill(250, 200, 100);
	ellipse(mouseX, mouseY, 100,100);

	//rectangle
	fill(200, 250, 200);
	rect(400, 100, 50, 50);

}


function mousePressed(){
	background(250, 250, 100);
}
