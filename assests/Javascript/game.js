<script type="text/javascript">
    
    var options = ["a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
  var losses = 0;
  var guessLeft = 10;
  var guesses = []
  document.onkeyup = function(event) {
    var userGuess = event.key;
    alert(userGuess);
    var computerWord = options[Math.floor(Math.random() * options.length)];
    //alert(computerWord);
  if (userGuess === computerWord) {
    wins++;
    alert("You Win!");
  } else if (userGuess != computerWord) {
    guessLeft--;
  }
  if (guessLeft === 0) {
    losses++;
    alert("You Lose!")
  }
  var updateWins = "<p>Wins: " + wins + "</p>";
var updateLosses = "<p>Losese: " + losses + "</p>";
var updateGuessleft = "<p>Guess Left: " + guessLeft + "</p>";
var updateGuess = "<p>Your Guess So Far: " + gusses + "</p>";
var gameDiv = document.getElementById("game")
  gameDiv.innerHTML = updateWins + updateLosses + updateGuessleft + updateGuess;
  };
</script>