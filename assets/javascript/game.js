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
var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)]

// Alerts the key the user pressed (userGuess).
alert("User guess: " + userGuess);

// Alerts the Computer's guess.
alert("Computer guess: " + computerGuess);

//Win,lose,tie options

if ((userGuess === "r") || (userGuess === "p" ) || (userGuess === "s")){


    if ((userGuess === "r" ) && (computerGuess === "p")){
      loses++
    }
    else if((userGuess === "r") && (computerGuess === "s")){
      wins++
    }
    else if ((userGuess === "p") && (computerGuess === "r")){
      wins++
    }
    else if((userGuess === "p") && (computerGuess === "s")){
      loses++
    }
    else if ((userGuess === "s") && (computerGuess == "r")){
      loses++
    }
    else if ((userGuess === "s") && (computerGuess === "p")){
          wins++
      }
     else if (userGuess === computerGuess){
        ties++
      }
      }

      //Alert totals

    alert("Scoreboard: Wins:" + wins + " Loses: " + loses + " Ties: " + ties);
    }
