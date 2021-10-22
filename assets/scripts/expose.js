// expose.js
var selectedHornImage = document.getElementById("horn-select");
var


//window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var expr = document.getElementById("horn-select");
  switch (expr) {
    case 'air-horn':
      expr.src = "assets/images/air-horn.svg";
      console
      break;
    case 'car-horn':
    case 'party-horn':
      console.log('Mangoes and papayas are $2.79 a pound.');
      // expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }

}