if (performance.navigation.type == 1) {
  console.info("This page is reloaded");

  // Dice Rolls
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
  // ----------------------------------------------------------------------------------------------------------------------------------------------

  // Win Scenario
  if (randomNumber1 == randomNumber2) {
    document.querySelector("body h1").innerHTML = "🏆 DRAW ! 🏆"
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("body h1").innerHTML = "🏆PLAYER 1 WINS"
  } else {
    document.querySelector("body h1").innerHTML = "PLAYER 2 WINS🏆"
  }
  // ----------------------------------------------------------------------------------------------------------------------------------------------
  document.querySelector('footer .remove').style.visibility = 'hidden';
}
