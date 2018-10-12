
// declare variables here
let birds = 0;

function setup() {
  // put setup code here --> this runs once upon launch
  createCanvas(600, 500);

}


function draw() {

  birds -= 5;

  console.log("there are " + birds + " birds")

  // set background color in grayscale:
  background(150, 0, 150);

  // drawing a green ellipse at the right of the screen
  fill(random(0, 255));
  strokeWeight(0);
  ellipse(400, 200, 200, 80);


  // drawing a blue rect that follows mouse
  fill(224, mouseX, 7);
  stroke(255);
  strokeWeight(10);
  rectMode(CENTER);
  rect(mouseX, mouseY, 80, mouseY);


}



// write custom functions here
