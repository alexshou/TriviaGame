var questions = ["Which major sports team you could not find in Cleveland?", 
                   "What year did LeBron James enter NBA?",
                   "How many titles have the Cavaliers have won?",
                   "Which team selected LeBron James as the top pick in the NBA draft?",
                   "What is the most recent year did Indians play the world-series?",
                   "Which # of jersey dis big-Z wear for Cavaliers?"
                   ];
var answerChoice = [["Basketball", "Hockey", "Baseball", "Football"],
                    ["2000", "2001", "2002", "2003"],
                    ["none", "1", "2", "3"],
                    ["Bulls", "Celtics", "Cavaliers", "Heat"],
                    ["1997", "2003","2008", "2016"],
                    ["0", "7", "11", "22"]
                    ];

var answer = ["Hockey", "2003", "1", "Cavaliers", "2016", "11"];




$(document).ready(function(){

  // display the question and choices to the screen

  var pickedQ = [];
  var correctAnswer;
  var randPick;
  var totalQuestions = questions.length;

  var assignQuestion = function(question, answer){

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
    pickedQ.push(randPick);
    console.log(pickedQ);
    correctAnswer = answerChoice[randPick].indexOf(answer[randPick]);
    console.log(answerChoice[randPick]);
    console.log(correctAnswer);
  }
  
  pickQuestion();
  assignQuestion(questions[randPick], answerChoice[randPick]);
  

  //initilize the question & answers


  $(".choice-1").on("click", function(event) {
      console.log($(this).text());

      if(correctAnswer === 0){
        alert($(this).text());

      }
      else
      {
        alert("wrong!");
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

