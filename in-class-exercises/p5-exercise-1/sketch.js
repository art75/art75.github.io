
// declare variables here
let xPos = -100;

function setup() {
  // put setup code here --> this runs once upon launch
  createCanvas(600, 500);

}


function draw() {

  // set background color
  background(150, 0, 150);

  // drawing a green ellipse that moves from left to right of the screen
  fill(0, 255, 0);
  strokeWeight(0);
  ellipse(xPos, 200, 200, 80);
  xPos++;


  // drawing a blue rect that follows mouse
  fill(224, mouseX, 7);
  stroke(255);
  strokeWeight(10);
  rectMode(CENTER);
  rect(mouseX, mouseY, 80, mouseY);


}



// write custom functions here
