var $highScoresList = document.getElementById("high-score-list");
var backBtn = document.getElementById("backBtn");
var clearBtn = document.getElementById("clearBtn");

// var storedHighScores = [];

function goBack(){
    window.location.href = "index.html";
}

function clearScores(){
    localStorage.clear();
    location.reload();
}

function renderScores() {
    console.log("render");
    var storedHighScores = JSON.parse(localStorage.getItem("user"));
    for (var i = 0; i < storedHighScores.length; i++){
        console.log("in for");
        var currentHighScore = storedHighScores[i];
        console.log(currentHighScore);
        var $highScoreLi = document.createElement("li");
        $highScoreLi.textContent = todo
        
        $highScoresList.appendChild($highScoreLi);
    }
}

function init(){
    
    // console.log(storedHighScores);

    // if (storedHighScores !== null) {
        // highScores = storedHighScores;
    // }

    renderScores();
}

init();

backBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clearScores);