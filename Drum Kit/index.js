// LoopingMethod1-------------------------------------------------------------------------------
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//     alert("i got clicked");
//   });
// }

// LoopingMethod2-------------------------------------------------------------------------------
// THIS IS THE BUTTON DETECTING CODE
var i = 0;
while (i < document.querySelectorAll(".drum").length) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed);
    buttonAnimation(buttonPressed);
    // console.log(i);
  });
  i++;
}
// ---------------------------------------------------------------------------------------------

// THIS IS THE KEYBOARD PRESS DETECTING CODE
document.addEventListener('keydown', function(e) {
  // console.log(e);
  makeSound(e.key)
  buttonAnimation(e.key);
});

// THIS FUNTION IS TO MAKE SOUND WITH THE TARGETTED PARAMETER PRESS (BUTTON / KEYBOARD PRESS)
function makeSound(key) {

  switch (key) {
    case "s":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var hihat = new Audio("sounds/hihat.mp3");
      hihat.play();
      break;
    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "spc":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case " ":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "h":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "k":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var ride = new Audio("sounds/ride.mp3");
      ride.play();
      break;

    default:
      alert(key + ' <-- got pressed');
      // console.log(buttonPressed + " got pressed");

  }
}

// THIS FUNCTION IS FOR ANIMATION WHEN THE BUTTON IS PRESSED
function buttonAnimation(currentKey) {
  var activeButton;
  if (currentKey == " ") {
    activeButton = document.querySelector('.spc');
  } else {
    activeButton = document.querySelector('.' + currentKey);
  }
  // console.log(activeButton);
  activeButton.classList.add('pressed');

  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100);

}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
