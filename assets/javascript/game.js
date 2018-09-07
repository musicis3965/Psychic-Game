// initial variables
var wins = 0;
var lost = 0;
var guesses = 9;
var lettersUsed = [];
var computerLetter;

// We are given an array that holds all of the drinks available
var computerChoices = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
      "u", "v", "w", "x", "y", "z"
      ];



// we are creating a function here for the computer to randomly generate a letter
function elComputerGuess() {
       computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
       console.log(computerLetter);

}

// here we are causing a keypress (becoming the var playerguess) 
// to have the effect of various options---
document.onkeyup = function (event) {
            var playerGuess = event.key;

            // if var playerGuess equals var computerLetter, have wins increase, guesses reset,
            // letters used reset
            if (playerGuess === computerLetter) {
                  wins++;
                  guesses = 9;
                  lettersUsed = [];
            }
            // running our named function from earlier, if var playerguess does NOT
            // equal var computerLetter, guesses decrease by 1
            elComputerGuess();
            if (playerGuess !== computerLetter) {
                  guesses--;
            }

            // another if statement, if guesses finally equal 0, lost increases by 1,
            // lettersUsed resets, and guesses goes back to a value of 9
            if (guesses === 0) {
                  lost++;
                  lettersUsed = []
                  guesses = 9;
            }

            // if else statement, allowling the lettersUsed variable to store,
            // and display on the HTML, to the Id 'playerGuess' as defined earlier.
            if (lettersUsed.indexOf(playerGuess) >= 0) {

            } else {
                  
                  lettersUsed.push(playerGuess);
                  document.getElementById('playerGuess').innerHTML = " " + lettersUsed + " ";
                  

            }
      // writes to the html file, with the variables 'guesses', 'wins' and 'lost'
      // adjusting accordingly
      document.getElementById('guesses').innerHTML = guesses;
      document.getElementById('wins').innerHTML = "You've won: " + wins + " time(s)";
      document.getElementById('lost').innerHTML = "You've lost: " + lost + " time(s)";
      }
            
      

