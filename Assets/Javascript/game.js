//Array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
//var computerGuess = [];
var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter

// References to HTML 
var winsHTML = document.getElementById("wins");
var lossesHTML = document.getElementById("losses");
var guessesLeftHTML = document.getElementById("guesses-left");
var guessesSoFarHTML = document.getElementById("guesses-so-far");
//console.log(winsHTML)
//Game
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase(); //taking in user guess
    lettersGuessed.push(userGuess); //pushing user guess to guesses so far
    console.log(userGuess)
	if (userGuess === computerGuess) {
        wins++;
        alert('Amazing Guess you are Correct');
        guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
        lettersGuessed = []; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
    } else if (guessesLeft === 0){
        losses++;
        alert('Bad Guess, Try Again');
        guessesLeft = 9;
        lettersGuessed = [];
    } else if (userGuess != computerGuess){
        guessesLeft--; //decrementing the guesses left
    }  

	winsHTML.innerHTML = "Wins: " + wins; 
	lossesHTML.innerHTML = "Losses: " + losses;
	guessesLeftHTML.innerHTML = "Guesses Left: " + guessesLeft;
	guessesSoFarHTML.innerHTML = "Guesses So Far: " + lettersGuessed;

	}

