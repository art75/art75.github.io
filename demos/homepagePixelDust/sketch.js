"use strict";


let pixelArray = [];
let numOfPixels = 69;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('bgCanvas');

  frameRate(30);


  // pixel animation
  for (let i = 0; i < numOfPixels; i++) {
    pixelArray.push(new Pixel());
  }

  // media query event handler
  if (matchMedia) {
    const mq = window.matchMedia("(min-width: 500px) and (min-height: 500px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

}

function draw() {
  clear();
  noStroke();

  for (let i = 0; i < numOfPixels; i++) {
    pixelArray[i].drawPixel();

    pixelArray[i].movePixel();

    pixelArray[i].checkBounds();
  }

}


function WidthChange(mq) {

  if (mq.matches) {
    // window width is at least 500px = browser

  } else {
    // mobile phone

  }
}


class Pixel {
  constructor() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
    // this.y = random(windowHeight + 50, windowHeight * 2);
    this.speedX = 0;
    this.speedY = 0;
    this.accelX = 0;
    this.accelY = random(-0.0020, -0.0010);
    this.diam = random(1, 6);
    this.c = color(random(255), random(255), random(255));
  }

  drawPixel() {
    noStroke();
    fill(this.c);
    rect(this.x, this.y, this.diam, this.diam);
  }

  movePixel() {
    this.y = this.y + this.speedY;
    this.speedY = this.speedY + this.accelY;

    this.x = this.x + this.speedX;
    this.speedX = this.speedX + this.accelX;

    // Select a random amount to change the accelX.
    // This will produce a gentle wiggle effect.
    this.accelX += random(-0.00005, 0.00005);

    this.diam = this.diam + 0.01;
  }

  checkBounds() {
    if (this.y < -50) {
      this.y = random(windowHeight + 10, windowHeight + 200);
      this.speedY = 0;
      this.x = random(0, windowWidth);
      this.diam = random(1, 3);
      this.speedX = 0;
      this.accelX = 0;
      this.c = color(random(255), random(255), random(255));
    }
  }
}
