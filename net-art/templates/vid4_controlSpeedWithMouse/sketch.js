"use strict";

let dolphinVid;
let documentActive = false; // we need to make sure they engage with page before it can auto play


function setup() {
  dolphinVid = createVideo(['assets/dolphins_0.mp4', 'assets/dolphins_0.webm']);;
  // with no specified size, video is full size
  //dolphinVid.size(600, 400);

}

function draw() {
  if (documentActive) {
    dolphinVid.loop();
    dolphinVid.speed(Math.abs(Math.floor(10 * (mouseX / windowWidth)) / 10));
    // Math.floor rounds the ratio of the mouse position on the screen to tenths (.1, .2, etc).
    // Math.abs takes the absolute value so that we don't accidently get a negative number
    // to see this math in action, uncomment the next line and watch the console in dev tools...
    // console.log('speed is: ' + Math.abs(Math.floor(10 * (mouseX / windowWidth)) / 10));
  }
}


function mousePressed() {
  documentActive = true; // since they have clicked, now we can play
}


// ****************************************************

// Code below combines mouse over with speed change!
// Video will only play if mouse is over the video, AND mouseX position determines speed

// let dolphinVid;
// let playing = false;
// let documentActive = false; // we need to make sure they engage with page before it can auto play
//
//
// function setup() {
//   dolphinVid = createVideo(['assets/dolphins_0.mp4', 'assets/dolphins_0.webm']);;
//   // with no specified size, video is full size
//   //dolphinVid.size(600, 400);
//
//   dolphinVid.mouseOver(playVid);
//   dolphinVid.mouseOut(pauseVid);
// }
//
// function draw() {
//   if (playing) {
//     dolphinVid.speed(Math.abs(Math.floor(10 * (mouseX / windowWidth)) / 10));
//     // Math.floor rounds the ratio of the mouse position on the screen to tenths (.1, .2, etc).
//     // Math.abs takes the absolute value so that we don't accidently get a negative number
//     // to see this math in action, uncomment the next line and watch the console in dev tools...
//     // console.log('speed is: ' + Math.abs(Math.floor(10 * (mouseX / windowWidth)) / 10));
//   }
// }
//
// function playVid() {
//   if (documentActive) {
//     dolphinVid.loop();
//     playing = true;
//   }
// }
//
// function pauseVid() {
//   dolphinVid.pause();
//   playing = false;
// }
//
// function mousePressed() {
//   documentActive = true; // since they have clicked, now we can play
// }
