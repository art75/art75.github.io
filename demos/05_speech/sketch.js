'use strict'

// speech library documentation: http://ability.nyu.edu/p5.js-speech/
// example source code: https://github.com/IDMNYU/p5.js-speech/blob/master/examples/01simple.html



let talkButton;
let voice = new p5.Speech();
let speechInput;


function setup() {
  talkButton = select('#talk');
  talkButton.mousePressed(startVoice);

  speechInput = select('#speechInput');


  voice.listVoices();
  voice.setVoice("Karen");
  voice.setPitch(.6);
  voice.setRate(1.2);
}

function draw() {

}

function startVoice() {
  if (speechInput.value()) {
    voice.speak(speechInput.value());
  } else {
  voice.speak('Hello. What do you want me to say?');
  }
}
