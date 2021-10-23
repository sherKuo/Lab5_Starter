// explore.js
window.addEventListener('DOMContentLoaded', init);

var inText = document.querySelector("textarea").value;
var voiceSelector = document.querySelector()

var synth = window.speechSynthesis;

var click = document.querySelector("button")
click.addEventListener("click", init);

function init() {
  // TODO
  let utterance = new SpeechSynthesisUtterance(inText);
  speechSynthesis.speak(utterance);
}

function populateVoices() {
  voices = synth.getVoices();

  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}