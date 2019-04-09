'use strict'


let buttonSound;
let buttons;
let volumeSlider;

function preload() {
  buttonSound = loadSound('sfx/cameraClick.mp3');

}

function setup() {
  buttonSound.setVolume(.3);

  buttons = selectAll('button');
  console.log(buttons);


  for (var i = 0; i < buttons.length; i++) {
    buttons[i].mousePressed(playSound);
  }
}

function draw() {
}

function playSound() {
  buttonSound.play();
}
