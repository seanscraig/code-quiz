var mainEl = document.querySelector(".main");
var welcomeDiv = document.querySelector(".welcome");
var quizDiv = document.querySelector(".quiz");

var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");

var secondsLeft = 10;

function loadPage() {
  timerEl.textContent = secondsLeft;
  quizDiv.style.display = "none";
}

startBtn.addEventListener("click", function () {
  // Start timer
  var timeInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      //gameOver();
    }
  }, 1000);

  // Hide the welcome div
  welcomeDiv.style.display = "none";

  // Show the first question
  startQuiz();
});

function startQuiz() {
  quizDiv.style.display = "block";
  // var answerA = document.forms["question"]["choiceA"];
  // var answerB = document.forms["question"]["choiceB"];

  // var submitAnswerBtn = document.getElementById("submitBtn");
  // submitAnswerBtn.addEventListener("click", function(){
  //   if (answerA){
  //     console.log("yay!");
  //   } else {
  //     console.log("booo");
  //   }
  // });
}

function gameOver() {
  var gameOverDiv = document.createElement("div");
  var gameOverTitle = document.createElement("h1");
  var gameOverText = document.createElement("h2");
  var submitScoreBtn = document.createElement("button");

  gameOverTitle.textContent = "All done!";
  gameOverText.textContent = "Your final score is: ";
  submitScoreBtn.textContent = "Submit";

  mainEl.appendChild(gameOverDiv);
  gameOverDiv.appendChild(gameOverTitle);
  gameOverDiv.appendChild(gameOverText);
  gameOverDiv.appendChild(submitBtn);

  submitScoreBtn.addEventListener("click", function(){
    window.location.href = "highscores.html";
  })
}

loadPage();
