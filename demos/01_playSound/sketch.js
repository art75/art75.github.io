'use strict'

// p5 documentation
// https://p5js.org/examples/sound-load-and-play-sound.html

// coding train playlist
// https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW


let song;

function preload() {
  song = loadSound('music/astronomy-self-texture.mp3');
}

function setup() {
  // song.play()
}

function draw() {

}

function mousePressed (){
  song.setVolume(.3);
  // song.play();
  song.loop();
}
