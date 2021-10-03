var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");

function goBack(){
    window.location.href = "index.html";
}

function clearScores(){

}

backBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clearScores);