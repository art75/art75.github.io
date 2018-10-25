"use strict";

let vid;
let playing = false;





function setup() {

  vid = createVideo(['assets/wavesOnSand.mp4', 'assets/wavesOnSand.webm']);;
  vid.size(400, 300);

  vid.mousePressed(function(){console.log("hi")})
}

function draw() {

}

function mousePressed() {
    if (playing == false) {
      vid.play();
      playing = true;
    } else if (playing == true) {
      vid.pause();
      playing = false;
    }
  }
