    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var teamNames = ['celtics', 'raptors', 'suns', 'nets', 'cavaliers',
        'bucks', 'pacers','bulls','pistons','wizards','hawks','heat',
        'hornets','mavericks','jazz','thunders','nuggets','warriors','clippers',
        'grizzles','timberwovles','pelicans','knicks','spurs','lakers'];
    
    console.log(teamNames.length);
      var wins=0;
      var word;
      var correctWord = [];
      var guess;
      var guessStored=[];
      var guessStoredWord;
      var usedLetter = [];
      var isOver=0;
      var space;
      var lives = 7;
      var showlives = document.getElementById("livesLeft");
      var usedHolder = document.getElementById("guessedLetter");
      var winsTotal = document.getElementById("wins");
      var wordHolder = document.getElementById('hold');


    initialDisplay = function(){
      isOver = false;
      lives = 7;
      usedLetter = "";
      //select a random word
      word = teamNames[Math.floor(Math.random() * teamNames.length)];
      console.log(word);
       for(var i=0; i<word.length; i++){
          
           correctWord[i] = word[i];
          
        }
      console.log(correctWord);
      //display the remaining of guessing:
      showlives.innerHTML = "# of guessing remaining: " + lives;
      guessStoredWord = "";
      guessStored=[];
      console.log("word: " + word);
      console.log("guessStoredWord: " + guessStoredWord);
      for (var i = 0; i < word.length; i++) {
        guessStored.push('_ ');
      }
      guessStoredWord = guessStored.join("");
      wordHolder.innerHTML = guessStoredWord;
      usedHolder.innerHTML = usedLetter;
    }


    // define function to show the progress of the game: # of guess, used letters and word. 
    comments = function(){
      showlives.innerHTML = "# of guessing remaining: " + lives;
      usedHolder.innerHTML = usedLetter;
      if(lives < 1){
        showlives.innerHTML = "Game over!";
        //document.onkeyup = "";
      }

      if(lives > 0 && isOver){
        showlives.innerHTML = "# of guessing remaining: " + lives + "! ~~You win!~~"; 
        wins += 1;
        //document.onkeyup = "";

      }

      winsTotal.innerHTML = wins;
    }

   


    //set the initial status
    initialDisplay();

    document.onkeyup = function(event) {

        // Determines which key was pressed
        var userGuess = event.key;
        var guessWord;
    

        if(alphabet.indexOf(userGuess)  === -1){
          alert("please only press alphabet letter keys!");
        }else if(correctWord.indexOf(userGuess) === -1){
            lives -= 1;
        }
        console.log("lives:" + lives)
        console.log(correctWord);


        if(alphabet.indexOf(userGuess) > -1){

            for(var i=0; i<word.length; i++){  //"_ _ _ "
              if(userGuess === word[i]){
                    guessStored[i] = word[i];
              }
            }

            guessStoredWord = guessStored.join("");
            wordHolder.innerHTML = guessStoredWord;
            console.log("guess word is " + guessStored);

            guessWord = guessStored.join("");
            console.log(guessWord);
            if(guessWord === word)
            {
              isOver = true;
            }
          
            //store the used letter and display them
            if(usedLetter.indexOf(userGuess.toUpperCase()) === -1)
            {
              userGuess = userGuess.toUpperCase();
              usedLetter = usedLetter + " " + userGuess;
              //usedLetter.push(userGuess);
            }

        }

        comments();

        if(isOver || lives < 1){

        if(lives < 1){
          wins = 0;
          winsTotal.innerHTML = wins;
          showlives.innerHTML = "Game over!";
        }

        console.log("reset the isOver value to be: " + isOver)
        initialDisplay();
        console.log("after win, new word:" + word);
        console.log("after win, reset:" + guessStoredWord);
      }
  }
