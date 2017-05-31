var options = ["a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessLeft = 10;
//store guesses
var guesses = [];
    document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    alert(userGuess);
    var computerWord = options[Math.floor(Math.random() * options.length)];
    //alert(computerWord);
    if (guesses.indexOf(userGuess) < 0 && options.indexOf(userGuess) >= 0) {
        guesses[guesses.length]=userGuess;
        // if it is a new letter then decrease remaining guesses by 1
    }

    if (userGuess === computerWord) {
        wins++;
        guessLeft = 10;
        guesses = [];
        alert("You Win!");
        } 
    else if (userGuess != computerWord) {
        guessLeft--;
        }
    if (guessLeft === 0) {
        losses++;
        guessLeft = 10;
        guesses = [];
        guesses.push(userGuess);
        alert("You Lose!")
        }


var updateWins = "<p>Wins: " + wins + "</p>";
var updateLosses = "<p>Losese: " + losses + "</p>";
var updateGuessleft = "<p>Guess Left: " + guessLeft + "</p>";
var updateGuess = "<p>Your Guess So Far: " + guesses + "</p>";
var gameDiv = document.getElementById("game")
gameDiv.innerHTML = updateWins + updateLosses + updateGuessleft + updateGuess;
};