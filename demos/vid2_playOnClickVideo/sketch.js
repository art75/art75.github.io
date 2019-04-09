"use strict";

let dolphinVid;
let playing = false;


function setup() {
  dolphinVid = createVideo(['assets/dolphins_0.mp4', 'assets/dolphins_0.webm']);;
  dolphinVid.size(600, 400);

  dolphinVid.mousePressed(togglePlayVid)
}

function draw() {

}

function togglePlayVid() {
    if (playing == false) {
      dolphinVid.loop();
      playing = true;
    } else if (playing == true) {
      dolphinVid.pause();
      playing = false;
    }
  }
