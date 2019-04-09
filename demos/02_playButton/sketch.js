'use strict'

let song;
let playButton;
let volumeSlider;

function preload() {
  song = loadSound('music/astronomy-self-texture.mp3');
}

function setup() {
  playButton = select('#playButton');
  playButton.mousePressed(playSong);
  volumeSlider = select('#volumeSlider');
}

function draw() {
  song.setVolume(volumeSlider.value() / 10);
}

function playSong() {
  if (song.isPlaying()) {
    song.stop();
    playButton.html('PLAY')
  } else {
    song.play();
    playButton.html('STOP');
  }
}


// let song;
//
// function preload() {
//   song = loadSound('../assets/music/astronomy-self-texture.mp3');
// }
//
// function setup() {
// }
//
// function draw() {
//
// }
