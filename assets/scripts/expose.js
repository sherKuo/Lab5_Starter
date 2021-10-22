// expose.js

var selectedHornImage = document.getElementById("horn-select");
selectedHornImage.addEventListener("change", setImage);
var sound = document.querySelector("audio");
var img = document.querySelector("img");

var slider = document.getElementById("volume");
slider.addEventListener("change", setVol);

var volumeSelector = document.getElementById("volume-controls");
var volume = volumeSelector.querySelector("input");
var volIcon = volumeSelector.querySelector("img");



window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}

function setImage(){
// TODO
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
  console.log(volume.value);
  if (volume.value == 0){
    volIcon.src = "./assets/icons/volume-level-0.svg";
    volIcon.alt = "Volume 0";
    slider.value = 0;
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
}