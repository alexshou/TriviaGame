var questions = ["Which major sports team you could not find in Cleveland?", 
                   "What year did LeBron James enter NBA?",
                   "How many titles have the Cavaliers have won?",
                   "Which team selected LeBron James as the top pick in the NBA draft?",
                   "What is the most recent year did Indians play the world-series?",
                   "Which # of jersey dis big-Z wear for Cavaliers?",
                   "How many No. 1 overall picks did Browns get since 1999?",
                   "How many first round picks did Browns have for 2017 NFL draft?"
                   ];
var answerChoice = [["Basketball", "Hockey", "Baseball", "Football"],
                    ["2000", "2001", "2002", "2003"],
                    ["none", "1", "2", "3"],
                    ["Bulls", "Celtics", "Cavaliers", "Heat"],
                    ["1997", "2003","2008", "2016"],
                    ["0", "7", "11", "22"],
                    ["0", "1", "2", "3"],
                    ["1","2","3", "4"]
                    ];

var answer = ["Hockey", "2003", "1", "Cavaliers", "2016", "11", "2", "3"];

var images = ["assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg", 
             "assets/images/5.jpg", "assets/images/6.jpg", "assets/images/7.jpg", "assets/images/8.jpg"];




window.onload = function() {

};



$(document).ready(function(){

  var pickedQ = [];
  var correctAnswer;
  var randPick;
  var totalQuestions = questions.length;
  var correctCount = 0;
  var inCorrectCount = 0;
  var unAnsweredCount = 0;
  var number = 5;
  var delayToStart = 1500;
  var intervalId;
  var questionCount;

  // display the question and choices to the screen

    var start = function(){
      var startBtn = $("<button>");
          startBtn
          .addClass("start")
          .text("START!")
          .appendTo($(".question"));
      pickedQ = [];
      correctCount = 0;
      inCorrectCount = 0;
      unAnsweredCount = 0;

  }

var replay = function(){
  $(".replay").html("Restart game!");
      pickedQ = [];
      correctCount = 0;
      inCorrectCount = 0;
      unAnsweredCount = 0;
  }
  start();

  var pickQuestion = function(){

    $(".game-over").empty();
    $(".replay").empty();
    randPick = Math.floor(Math.random()*totalQuestions);
    // randomly pick a question
    while (pickedQ.indexOf(randPick) > -1 && pickedQ.length < totalQuestions){
      randPick = Math.floor(Math.random()*totalQuestions);
      console.log("The random picked # is: " + pickedQ.indexOf(randPick));
    } 
    pickedQ.push(randPick);
    console.log(pickedQ);
    console.log(pickedQ.length);
    console.log(totalQuestions);
    if(pickedQ.length > totalQuestions){
      gameover();
    }
    else
    {
      run();//start the stopwatch when a question is displayed
      console.log(pickedQ);
      correctAnswer = answerChoice[randPick].indexOf(answer[randPick]);
      console.log(answerChoice[randPick]);
      console.log(correctAnswer);
      $(".start").empty();
      $(".question").html(questions[randPick]);
      var tempAnswer = answerChoice[randPick];
      var answerTemp = $("<button>");
      answerTemp.addClass("answer").text(tempAnswer[0]);
      $(".choice-1").html(answerTemp);

      var answerTemp = $("<button>");
      answerTemp.addClass("answer").text(tempAnswer[1]);
      $(".choice-2").html(answerTemp);

      var answerTemp = $("<button>");
      answerTemp.addClass("answer").text(tempAnswer[2]);
      $(".choice-3").html(answerTemp);

      var answerTemp = $("<button>");
      answerTemp.addClass("answer").text(tempAnswer[3]);
       $(".choice-4").html(answerTemp);

       console.log("numbers of questions played: " + pickedQ.length)
    }
  }

  var showCorrectAnswer = function(){

      $(".answer").empty();
      $(".correct-answer").html("The correct answer is: " + answer[randPick]);
      
  }

  function displayImage() {
    $(".image-holder").html("<img src=" + images[randPick] + " width='400px'>");
  }

  var displayCongrats = function(){

      $(".answer").empty();
      $(".correct-answer").html("Congratulations, you are correct!");
      
  }

  function removeCorrect(){
        $(".correct-answer").empty();
        $(".image-holder").empty();
  }

  function stop() {
      clearInterval(intervalId);
      //show the correct answer
      showCorrectAnswer();
      displayImage();
      setTimeout(removeCorrect, delayToStart);
      setTimeout(pickQuestion, delayToStart+10);

    }

  function next(){
      clearInterval(intervalId);
      displayCongrats();
      displayImage();
      setTimeout(removeCorrect, delayToStart);
      setTimeout(pickQuestion, delayToStart+10);
  }

  $(".start").on("click", function(){
    console.log("123");
    pickQuestion();
 //   assignQuestion(questions[randPick], answerChoice[randPick]);
  })

   $(".replay").on("click", function(){
    console.log("play again!");
    console.log("replay");
    pickQuestion();
 //   assignQuestion(questions[randPick], answerChoice[randPick]);
  })

  function run() {
    number = 5;
    intervalId = setInterval(decrement, 1000);
  }

    //  The decrement function.
  function decrement() {

      //  Decrease number by one.
      number--;
      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>" + "Time remaining: " + number + " seconds" + "</h2>");

     //  Once number hits zero...
      if (number === 0) {
        stop();
        unAnsweredCount++;
      }
  }

  function gameover(){
      clearInterval(intervalId);
      $(".question").empty();
      $(".correct-answer").empty();
      $(".image-holder").empty();
      $("#timer").empty();
      var displayResults = "Total correct: " + correctCount + "<br>"; 
      displayResults += "Total incorrect: " + inCorrectCount + "<br>"; 
      displayResults += "Total unanswered: " + unAnsweredCount + "<br>";
      $(".game-over").html(displayResults);
      replay();
  }
  

  //initilize the question & answers


  $(".choice-1").on("click", function(event) {

      if(correctAnswer === 0){
        correctCount++;
        next();
      }
      else
      {
        inCorrectCount++;
        stop();
      }

    });

  $(".choice-2").on("click", function(event) {
 
      if(correctAnswer === 1) {
        correctCount++;
        next();
      }
      else
      {
        inCorrectCount++;
        stop();
      }

    });

   $(".choice-3").on("click", function(event) {
 
      if(correctAnswer === 2){
        correctCount++;
        next();
      }
      else
      {
        inCorrectCount++;
        stop();
      }

    });

    $(".choice-4").on("click", function(event) {
 
      if(correctAnswer === 3) {
        correctCount++;
        next();
      }
      else
      {
        inCorrectCount++;
        stop();
      }

    });



});

