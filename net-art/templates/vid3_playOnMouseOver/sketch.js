"use strict";

let dolphinVid;
let playing = false;
let documentActive = false; // we need to make sure they engage with page before it can auto play


function setup() {
  dolphinVid = createVideo(['assets/dolphins_0.mp4', 'assets/dolphins_0.webm']);;
  dolphinVid.size(300, 250);

  dolphinVid.mouseOver(playVid);
  dolphinVid.mouseOut(pauseVid);
}

function draw() {}

function playVid() {
  if (documentActive) {
    dolphinVid.loop();
    playing = true;
  }
}

function pauseVid() {
  dolphinVid.pause();
  playing = false;
}

function mousePressed() {
  documentActive = true; // since they have clicked, now we can play
}
