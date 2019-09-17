var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var user = 
{
 wins: 0,
 losses: 0,
 guessesLeft:  9,
 currentGuesses: []

}
console.log('working')
// var myLetter = letters[Math.floor(Math.random()*letters.length)]

var userWins = document.getElementById('wins')
var userLosses = document.getElementById('losses')
var guesses = document.getElementById('guess-count')
var letterGuess = document.getElementById('guesses')



// document.onkeyup = function(event) {

    // var userGuess = event.key;

    function update () {
        user.currentGuesses = [];
        letterGuess.innerHTML = user.currentGuesses;
        user.guessesLeft = 9;
        guesses.innerHTML = user.guessesLeft;
        computerChoice = letters[Math.floor(Math.random() * letters.length)];
    };
    
    // Randomly picks a letter from the letters array. This is the computer's choice.
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];
    
    // This function is run whenever the user takes a guess.
    document.onkeypress = function (event) {
        // Determines which letter the user picked and stores it in a variable.
        
        var userGuess = event.key.toLowerCase();
        if (!user.currentGuesses.includes(userGuess)&& letters.includes(userGuess)){
        // displays user's choices on screen
        user.currentGuesses.push(userGuess);
        letterGuess.innerHTML = user.currentGuesses;
    
        // compare user's choice to computer's choice
        // if wrong, decrease guesses left by 1, and adds letter to current guesses
        if (userGuess !== computerChoice) {
           user.guessesLeft--;
            guesses.innerHTML = user.guessesLeft;
        }
    
        // if correct, alert "Correct! Picking a new letter.", increment Wins by 1, current guesses is reset, and computer picks new letter
        if (userGuess === computerChoice) {
            alert("Correct! The letter was " + computerChoice + "!");
            alert("Picking a new letter!");
            user.wins++;
            userWins.innerHTML = user.wins;
            update();
        }
    
        // // if out of guesses, alert "Game Over!", increases Losses by 1, current guesses is reset, and computer picks new letter
        if (user.guessesLeft === 0) {
            alert('Out of guesses! The letter was ' + computerChoice + '!')
            alert('Picking a new letter!')
            user.losses++;
            userLosses.innerHTML = user.losses;
            update();
        }
    }}

