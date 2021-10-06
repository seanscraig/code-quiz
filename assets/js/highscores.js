var $highScoresList = document.getElementById("high-score-list");
var backBtn = document.getElementById("backBtn");
var clearBtn = document.getElementById("clearBtn");

var scores = [];

function goBack() {
  window.location.href = "index.html";
}

function clearScores() {
  localStorage.clear();
  $highScoresList.innerHTML = "";
}

function renderScores() {
  var $highScoreLi = document.createElement("li");
  $highScoreLi.textContent = scores.initials+": "+scores.score;
  $highScoresList.appendChild($highScoreLi);
}

function init() {
  var storedScores = JSON.parse(localStorage.getItem("user"));
  if (storedScores != null) {
    scores = storedScores;
    renderScores();
  }
}

init();
backBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clearScores);
