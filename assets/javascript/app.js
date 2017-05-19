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

window.onload = function() {

  //  Click events are done for us:
//  $(".choice-1").click();
  //$(".choice-2").click();
  //$(".choice-3").click();
  //$(".choice-4").click();
};



$(document).ready(function(){

  var pickedQ = [];
  var correctAnswer;
  var randPick;
  var totalQuestions = questions.length;
  var correctCount = 0;
  var inCorrectCount = 0;

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

  }

  var assignQuestion = function(question, answer){

    $(".start").remove();
    $(".question").append(question);
    var answerTemp = $("<button>");
    answerTemp.addClass("answer").text(answer[0]).appendTo($(".choice-1"));
    var answerTemp = $("<button>");
    answerTemp.addClass("answer").text(answer[1]).appendTo($(".choice-2"));
    var answerTemp = $("<button>");
    answerTemp.addClass("answer").text(answer[2]).appendTo($(".choice-3"));
    var answerTemp = $("<button>");
    answerTemp.addClass("answer").text(answer[3]).appendTo($(".choice-4"));

  }

  var pickQuestion = function(){
    randPick = Math.floor(Math.random()*totalQuestions);
    while (pickedQ.indexOf[randPick] > -1){
      pickedQ.push(randPick);
    }  
  
    pickedQ.push(randPick);
    console.log(pickedQ);
    correctAnswer = answerChoice[randPick].indexOf(answer[randPick]);
    console.log(answerChoice[randPick]);
    console.log(correctAnswer);
  }
  start(); 
  $(".start").on("click", function(){
    console.log("123");
    pickQuestion();
    assignQuestion(questions[randPick], answerChoice[randPick]);
  })



  //pickQuestion();
  //assignQuestion(questions[randPick], answerChoice[randPick]);
  

  //initilize the question & answers


  $(".choice-1").on("click", function(event) {
      console.log($(this).text());

      if(correctAnswer === 0){
        alert("You're correct! Congratulations!");
        correctCount++;

      }
      else
      {
        alert("You picked the wrong option!");
        inCorrectCount++;
      }

    });

  $(".choice-2").on("click", function(event) {
      console.log($(this).text());
      if(correctAnswer === 1) {
        alert($(this).text());
      }
      else
      {
        alert("wrong!");
      }

    });

   $(".choice-3").on("click", function(event) {
      console.log($(this).text());
      if(correctAnswer === 2){
        alert($(this).text());
      }
      else
      {
        alert("wrong!");
      }

    });

    $(".choice-4").on("click", function(event) {
      console.log($(this).text());
      if(correctAnswer === 3) {
        alert($(this).text());
      }
      else
      {
        alert("wrong!");
      }

    });



});

