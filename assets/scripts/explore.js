// explore.js
window.addEventListener('DOMContentLoaded', init);

var text = document.querySelector("textarea");
var 


var click = document.querySelector("button")
click.addEventListener("click", speakText);

function init() {
  // TODO
  let utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function speakText(){
  //similar to sound.play but for this version. 
}