    // Score
    var wins = 0;
    var ties = 0;
    var loses = 0;
    //computer choice options
    var computerOptions = ["r", "p", "s"];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]


if ((userGuess === "r") || (userGuess === "p" ) || (userGuess === "s")){


if ((userGuess === "r" ) && (computerGuess === "p")){
  lose++
}
else if((userGuess === "r") && (computerGuess === "s")){
  win++
}
else if ((userGuess === "p") && (computerGuess === "r")){
  win++
}
else if((userGuess === "p") && (computerGuess === "s")){
  lose++
}
else if ((userGuess === "s") && (computerGuess == "r")){
  lose++
}
  else if ((userGuess === "s") && (computerGuess === "p")){
      win++
  }
  else if (userGuess === computerGuess){
    ties++
  }
  }
}
