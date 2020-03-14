var userClickedPattern = []; //to check the user clicks

var gamePattern = []; //the random game pattern generator

var buttonColors = ["red", "blue", "green", "yellow"];

var started = false; //to check if the game has started yet

var level = 0; // start level

function nextSequence() {
  userClickedPattern = [];
  level++; // to increase the level
  $('#level-title').text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $('#' + randomChosenColor).fadeOut(75).fadeIn(75).fadeOut(75).fadeIn(75); // For Blinking Animation
  // For Sound
  playSound(randomChosenColor);
};

function checkAnswer(lastColor) {
  if (gamePattern[lastColor] === userClickedPattern[lastColor]) { //to check the matching color inside both arrays
    // console.log("success");
    if (userClickedPattern.length === gamePattern.length) { //when the console = success, and the length of both arrays are the same
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else { //when the user gets wrong, game over
    // console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $('#level-title').text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

// to make it startover all over again
function startOver() {
  started = false;
  level = 0;
  userClickedPattern = [];
  gamePattern = [];
  $('.clueBox').css("visibility", "visible");
}

// Listener for button pressed
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id"); //button that got clicked
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor); // console.log(userClickedPattern);
  $('#' + userChosenColor).fadeOut(75).fadeIn(75).fadeOut(75).fadeIn(75); // For Blinking Animation
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1); //To check after the new input of this listener so it's subtracted by 1
});

// Listener for keyboard press to start the game
$(document).keydown(function() {
  if (!started) { //for checking if the game has started yet
    $('#level-title').text("Level " + level);
    nextSequence();
    $('.clueBox').css("visibility", "hidden");
    started = true;
  }
});

// For Sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

// animate gray color when pressed
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
