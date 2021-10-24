// expose.js

const jsConfetti = new JSConfetti()

var selectedHornImage = document.getElementById("horn-select");
selectedHornImage.addEventListener("change", setImgSnd);

var img = document.querySelector("img");
var sound = document.querySelector("audio");

var click = document.querySelector("button")
click.addEventListener("click", playSound);

var slider = document.getElementById("volume");
slider.addEventListener("change", setVol);

var volumeSelector = document.getElementById("volume-controls");
var volume = volumeSelector.querySelector("input");
var volIcon = volumeSelector.querySelector("img");

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}

function playSound(){
    sound.play();
    if(selectedHornImage.value == "party-horn" && volume.value != 0){
      jsConfetti.addConfetti();
    }
}

function setImgSnd(){
  if (selectedHornImage.value == "air-horn"){
    //set image
    img.src = "./assets/images/air-horn.svg";
    //set sound file
    sound.src = "./assets/audio/air-horn.mp3";
  }
  else if (selectedHornImage.value == "car-horn"){
    // Set image
    img.src = "./assets/images/car-horn.svg";
    // Set sound file
    sound.src = "./assets/audio/car-horn.mp3";
  }
  else if (selectedHornImage.value == "party-horn"){
    // Set image
    img.src = "./assets/images/party-horn.svg";
    // Set sound file
    sound.src = "./assets/audio/party-horn.mp3";
  }
}

function setVol(){
  if (volume.value == 0){
    volIcon.src = "./assets/icons/volume-level-0.svg";
    volIcon.alt = "Volume 0";
  }
  else if (volume.value > 1 && volume.value < 33){
    volIcon.src = "./assets/icons/volume-level-1.svg";
    volIcon.alt = "Volume 1";
  }
  else if (volume.value >= 33 && volume.value < 67){
    volIcon.src = "./assets/icons/volume-level-2.svg";
    volIcon.alt = "Volume 2";
  }
  else{
    volIcon.src = "./assets/icons/volume-level-3.svg";
    volIcon.alt = "Volume 3";
  }
  sound.volume = volume.value/100;
}

