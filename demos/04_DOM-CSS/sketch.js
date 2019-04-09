'use strict'

//sounds
let bearSound;
let camelSound;
let otterSound;

//buttons
let bearButton;
let camelButton;
let otterButton;
let stopButton;


function preload() {
  bearSound = loadSound('animals/blackBear.mp3');
  camelSound = loadSound('animals/camel.mp3');
  otterSound = loadSound('animals/otterChirp.mp3');
}

function setup() {
  bearButton = select('#bear');
  otterButton = select('#otter');
  camelButton = select('#camel');

  bearButton.mousePressed(playBear);
  otterButton.mousePressed(playOtter);
  camelButton.mousePressed(playCamel);

  stopButton = createButton('stop');
  stopButton.parent('#buttonDiv');
  stopButton.style('background-color', '#ff2222')
  stopButton.mousePressed(stopSounds);
}

function draw() {
}

function playBear() {
  bearSound.play();
}

function playOtter() {
  otterSound.play();
}

function playCamel() {
  camelSound.play();
}

function stopSounds() {
  bearSound.stop();
  otterSound.stop();
  camelSound.stop();
}



// let bearSound;
// let camelSound;
// let otterSound;
//
//
// function preload() {
//   bearSound = loadSound('../assets/animals/blackBear.mp3');
//   camelSound = loadSound('../assets/animals/camel.mp3');
//   otterSound = loadSound('../assets/animals/otterChirp.mp3');
// }
//
// function setup() {
// }
//
// function draw() {
// }
//
