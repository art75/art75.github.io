"use strict";


let vid_0;
let vid_0_playing = false;
let vid_1;
let vid_1_playing = false;
let documentActive = false; // we need to make sure they engage with page before it can auto play


function setup() {
  // dophin vid 1!
  vid_0 = createVideo(['assets/dolphins_0.mp4', 'assets/dolphins_0.webm']);

  vid_0.mouseOver(playVid_0);
  vid_0.mouseOut(pauseVid_0);

  // dophin vid 2!
  vid_1 = createVideo(['assets/dolphins_1.mp4', 'assets/dolphins_1.webm']);;
  vid_1.size(400, 250);

  // use style function to add css to the video and position it on top the other one
  vid_1.style('position', 'absolute');
  vid_1.style('top', '133px');
  vid_1.style('left', '33px');

  // a more concise way to do this is to create a CSS class, then assign the video to that class:
  vid_1.class('dottedBorder');


  vid_1.mouseOver(playVid_1);
  vid_1.mouseOut(pauseVid_1);
}

function draw() {}

function playVid_0() {
  if (documentActive) {
    vid_0.loop();
    vid_0_playing = true;
  }
}

function pauseVid_0() {
  vid_0.pause();
  vid_0_playing = false;
}

function playVid_1() {
  if (documentActive) {
    vid_1.loop();
    vid_1_playing = true;
  }
}

function pauseVid_1() {
  vid_1.pause();
  vid_1_playing = false;
}

function mousePressed() {
  documentActive = true; // since they have clicked, now we can play
}
