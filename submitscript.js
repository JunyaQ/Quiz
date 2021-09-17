var submit = document.getElementById("submitbutton");
var name = document.getElementById("nameinitial");
var score = document.getElementById("score");

var highscore = localStorage.getItem(score);
console.log("highscore "+highscore);
function submitscore(){
    alert("submit score to the localstorage");
    console.log("click to submit score");
    
}
submit.addEventListener("click", submitscore);

