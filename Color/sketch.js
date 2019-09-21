function setup(){
	createCanvas(400,400);
}

// background(R, G, B) - set a background for the canvas
// stroke(R, G, B) - outside of a shape
// fill(R, G, B) - inside of shape
// 

function draw(){
	background(255);
	ellipseMode(CENTER)
	rectMode(CENTER);
	
	//Body
	fill(0, 0, 255);
	rect(240, 145, 20, 100);

	//Head
	ellipse(240, 115, 60, 60);

	//Eyes
	ellipse(221, 115, 16, 32);
	ellipse(259, 115, 16, 32);

	//Legs
	line(230, 195, 220, 205);
	line(230, 195, 260, 205);

}
