var eyes=20;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background("#2899CD"); //an RGB color for the canvas' background
  //circle
  fill("#6C4D40");
  stroke(185,130,64); // an RGB color for the circle's border
  strokeWeight(7);
  ellipse(mouseX+75,mouseY+75,90,90);
  fill(203,203,51); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,eyes,eyes); // center of canvas, 20px dia
  textSize(20);
  textFont("Helvetica");
  text("Raccoon",20,20);
}

function mousePressed(){
	eyes=eyes+5;
}

debug()


