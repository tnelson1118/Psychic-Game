// waits for DOM to load before running script
window.onload = function () {


    // variable set at start of game.
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesRemaining = 10;
    var guesses = "";

    // setting the random choice computer makes.
    var randomLetter;

    // function to chose random letter.
    function startGame() {
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
    }

    // function to update guesses remaining.
    function updateGuessRemain() {
        document.querySelector("#guesses-remaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
    }
    // function to update losses
    function updateLosses() {
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
    }
    // function to update wins
    function updateWins() {
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
    }

    // function to update guesses.
    function updateGuesses() {
        document.querySelector("#guesses").innerHTML = "Guesses: " + guesses;
    }

    // call start game function
    startGame();
    updateGuessRemain();
    updateLosses();
    updateWins();
    updateGuesses();

    // capture key stroke
    document.onkeyup = function(event) {
        // assigns key stroke to variable
        var userInput = event.key.toLowerCase();

        // compares userinput to random letter.
        if (userInput === randomLetter) {
            wins++;
            guessesRemaining = 10;
            guesses = "";
            updateWins();
            updateGuessRemain();
            updateGuesses();
            startGame();
        }

        // if user input is not equal to random letter, update guesses remaining, create a div and append user input to it.
        else {
            guessesRemaining--;
            var div = document.createElement("div");
            div.innerHTML = userInput;
            document.querySelector("#guesses").appendChild(div);
            updateGuessRemain();
        }

        if (guessesRemaining === 0) {
            losses++;
            guessesRemaining = 10;
            guesses = "";
            updateLosses();
            updateGuessRemain();
            updateGuesses();
            startGame();
        }



    }



};


