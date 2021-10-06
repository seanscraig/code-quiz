var $startScreenDiv = document.getElementById("start-screen");
var $questionsDiv = document.getElementById("questions");
var $endScreenDiv = document.getElementById("end-screen");
var $choicesDiv = document.getElementById("choices");
var $resultsDiv = document.getElementById("result");
var $timerEl = document.getElementById("time");
var $questionTitle = document.getElementById("question-title");

var $finalScoreEl = document.getElementById("final-score");
var $initialsEl = document.getElementById("initials");

var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");

var currentQuestionIndex = 0;
var score = 0;
var secondsLeft = 40;

var timeInterval;

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
    answer: "quotes"
  }
];

function startQuiz() {
  // Hide the screen screen
  $startScreenDiv.className = "hide";

  // Show the questions div
  $questionsDiv.className = "questions";

  // Start the timer
  $timerEl.textContent = secondsLeft;
  timeInterval = setInterval(clockTick, 1000);
  
  // Get the first question
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
  $resultsDiv.innerHTML = "";
  if (choice.textContent === questionsArr[currentQuestionIndex].answer){
    var $correctEl = document.createElement("h2");
    $correctEl.textContent = "Correct!";
    $correctEl.style.color = "green";
    $resultsDiv.appendChild($correctEl);
  }
  else {
    secondsLeft -= 10;
    var $wrongEl = document.createElement("h2");
    $wrongEl.textContent = "Wrong!";
    $wrongEl.style.color = "red";
    $resultsDiv.appendChild($wrongEl);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex > questionsArr.length - 1){
    gameOver();
  } else {
    getQuestion();
  }
}

function gameOver(){
  $questionsDiv.className = "hide";
  $endScreenDiv.className = "end-screen";
  score = secondsLeft;
  $finalScoreEl.textContent = score;
  clearInterval(timeInterval);
}

function clockTick() {
  secondsLeft--;
  $timerEl.textContent = secondsLeft;
  if (secondsLeft <= 0){
    gameOver();
  }
}

function submitHighScore() {
  var user = {
    initials: $initialsEl.value,
    score: score
  }
  if (initials === "") {
    alert("Please enter your initials");
    return;
  } else {
    alert("Success!");
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "highscores.html";
  }
}

submitBtn.onclick = submitHighScore;

startBtn.onclick = startQuiz;