"use strict";

let dolphinVid;
let playing = false;


function setup() {
  dolphinVid = createVideo(['assets/dolphins_0.mp4', 'assets/dolphins_0.webm']);;
  dolphinVid.size(400, 300);
}

function draw() {

}

function mousePressed() {
    if (playing == false) {
      dolphinVid.loop();
      playing = true;
    } else if (playing == true) {
      dolphinVid.pause();
      playing = false;
    }
  }
