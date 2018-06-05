
            // VARIABLES
            // =========================================================================
           // Define letters the computer can pick from 
            var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
            "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            // We start the game with 0 Wins.
            var wins = 0;
            // We start the game with 0 Losses.
            var losses = 0; 
            // User Gueesses left.
            var guessesLeft = 8;
            // User Guesses so far.
            var guessesSoFar = [];
            //User Guess defined by key press
            var userGuess = null;
            // Comp guess random letter
            var compGuess = letters[Math.floor(Math.random() * letters.length)];
            console.log("Wins: " + wins + " Losses: " + losses + " Guess: " + guessesLeft + " Guesses: " + guessesSoFar + " Computer picked: " + compGuess);
        //     // FUNCTIONS
        //     // ==============================================================================
        //     // Function for computer to generate random letter
        //     //     function input() {
        //     //     var letters = ["a", "b", "c", "d", "e", " ", "g", "h", "i", "j", "k", "l", 
        //     //     "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        //     //     var letter = letters[Math.floor(Math.random() * letters.length)];
        //     //     return letter;
        //     //     return input();
        //     //     }
        //     //     console.log(compText); 
    
        //     // function renderQuestion() {
        //     // // If there are still more questions, render the next one.
        //     // if (questionIndex <= (questions.length - 1)) {
        //     //     document.querySelector("#question").innerHTML = questions[questionIndex].q;
        //     // }
        //     // // If there aren't, render the end game screen.
        //     // else {
        //     //     document.querySelector("#question").innerHTML = "Game Over!";
        //     //     document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
        //     // }
        //     // }

        //     // Function that updates the score...
        //     // <!-- Wins
            function updateWins() {
            document.querySelector("#Wins").innerHTML = "Wins:" + wins++;
                }

            // //Losses
            function updateLosses() {
            document.querySelector("#Losses").innerHTML = "Losses:" + losses++;
                }

            // //Guesses
            function updateGuess() {
            document.querySelector("#Guess").innerHTML = "guessesLeft:" + guessesLeft--;
                }


        //     // // MAIN PROCESS
        //     // // ==============================================================================

        //     // // Calling functions to start the game.
            
        //         // input();
                updateWins();
                updateGuess();
                updateLosses();

            // When the user presses a key, it will run the following function...
                document.onkeyup = function(event) {

            // // Determine which key was pressed, and set it to the userText variable.
                // var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
                var userGuess = String.fromCharCode(event.keyCode)
                // document.getElementById("user-text");
                // userGuess.textContent = event.key;
                }
            if (guessesSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
                guessesSoFar[guessesSoFar.length]=userGuess;
                // if it is a new letter then decrease remaining guesses by 1
                guessesLeft--;
                }
            
            // if letterToBeGuessed is same as userGuess then record it as a win
            // and then reset guessesLeft to 9, and empty the guessesSoFar array
            // also have the computer make a new random pick
            if (compGuess == userGuess) {
                wins++;
                console.log("You won!");
                guessesLeft = 9;
                guessSoFar = [];
                compGuess = letters[Math.floor(Math.random() * letters.length)];
                console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + compGuess);
            }

            // if guessesLeft gets to 0 then record it as a loss
            // and then reset guessesLeft to 9, and empty the guessesSoFar array
            // also have the computer make a new random pick
            if (guessesLeft == 0) {
                losses++;
                console.log("You lost!");
                guessesLeft = 9;
                guessSoFar = [];
                compGuess = letters[Math.floor(Math.random() * letters.length)];
                console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + compGuess);
            }

            // Displaying progress to HTML
            var html = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Your guesses so far: " + guessesSoFar + "</p>";
            // place html into the game ID
            document.querySelector("#game").innerHTML = html;
            
        //     // if (userGuess === compGuess) {
        //     //     alert("You Win");}
        //     //     // updateWins()
                
        //     //     else {
        //     //     alert("Try Again");
        //         // updateGuess()
                
        //         // return;
            
        //     // // Only run this code if "t" or "f" were pressed.
        //     // if (userInput === "t" || userInput === "f") {

        //     //     // If they guess the correct answer, increase and update score, alert them they got it right.
        //     //     if (userInput === questions[questionIndex].a) {
        //     //     alert("Correct!");
        //     //     score++;
        //     //     updateScore();
        //     //     }
        //     //     // If wrong, alert them they are wrong.
        //     //     else {
        //     //     alert("Wrong!");
        //     //     }

                
        //         // <!-- Text Comparison (UserText vs CompText)-->
                              
        //         // <!-- Text Comparison END-->
        //             // String everything together to have the computer randomly generate a 
        //             // random letter and compare to the User Text when the button up event occurs
                

        //              // End Decision Code
        //         //  <!--Coding to generate stats-->
        //         //     

        //         //Guessleft
        //         //         Your Guesses So Far
        //         //         Page Refresh on win/loss-->
        //         // <!-- Stats  END-->