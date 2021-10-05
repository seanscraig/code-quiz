var $mainEl = document.querySelector(".main");

var $startScreenDiv = document.getElementById("start-screen");
var $questionsDiv = document.getElementById("questions");
var $endScreenDiv = document.getElementById("end-screen");
var $timerEl = document.getElementById("time");
var $questionTitle = document.getElementById("question-title");
var $choicesDiv = document.getElementById("choices");
// var $choicesList = document.getElementById("choicesList");

var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");

var questionsArr = [
  {
    title: "Commonly used data types DO NOT include: ",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "Arrays is JavaScript can be used to store _______",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within ______ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "parentheses"
  }

];
var currentQuestionIndex = 0;
var secondsLeft = 10;

function startQuiz() {
  // console.log("call startQuiz");
  $startScreenDiv.className = "hide";
  $questionsDiv.className = "questions";
  
  getQuestion();
}

function getQuestion() {
  // Get questions and stuff
  $questionTitle.textContent = questionsArr[currentQuestionIndex].title;
  $choicesDiv.innerHTML = "";
  for (var i = 0; i < 4; i++){
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = questionsArr[currentQuestionIndex].choices[i];
    $choicesDiv.appendChild(choiceBtn);
    $choicesDiv.appendChild(document.createElement("br"));
    choiceBtn.addEventListener("click", questionClick);
  }
}

function questionClick(event) {
  // Capture the input 
  // Validate it
  var choice = event.target;

  if (choice.textContent === questionsArr[currentQuestionIndex].answer){
    console.log("correct");
  }
  else {
    console.log("wrong");
  }

  currentQuestionIndex++;

  // if (currentQuestionIndex > questionsArr.length){
  //   gameOver();
  // } else {
    getQuestion();
  // }
}

function gameOver(){
  $questionsDiv.className = "hide";
  $endScreenDiv.className = "end-screen";
}

function clockTick() {

}

function submitHighScore() {

}

startBtn.addEventListener("click", function () {
  // Start timer
  var timeInterval = setInterval(function () {
    secondsLeft--;
    $timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      // gameOver();
    }
  }, 1000);

  
  startQuiz();
});

submitBtn.onclick = submitHighScore;

// startBtn.onclick = startQuiz;