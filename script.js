var questoin = document.getElementById("quesiton");
//var clickoption = document.getElementById("choice1","choice2","choice3","choice0");
var currentquestion = '';
var score = 0;
var timer = 60;
var questioncounter =0;
const addscore = 10;
var correctanswer ='';
var chooseanswer = '';
var correct = false;


/*question list with answers*/ 
var questionlist =[
    {
     number: 1,
     question:"AAAA",
     answer:  "a",
     options:["a","b","c","d"] 
    },

    {
        number: 2,
        question:"BBBB",
        answer:  "b",
        options:["a","b","c","d"] 
       },

    {
        number: 3,
        question:"CCCC",
        answer:  "c",
        options:["a","b","c","d"] 
    },

    {
        number: 4,
        question:"BBBB",
        answer:  "b",
        options:["a","b","c","d"] 
       },

       {
        number: 5,
        question:"DDDD",
        answer:  "d",
        options:["a","b","c","d"] 
       }

]
/** show the question and answer to the page*/
function getquestionchoices(){
   
    currentquestion = questionlist[questioncounter];
    questioncounter++;
    question.innerText = currentquestion.question;
    //console.log(currentquestion.question);
    //console.log(currentquestion.options[1]);
    choice0.innerText = currentquestion.options[0];
    choice1.innerText = currentquestion.options[1];
    choice2.innerText = currentquestion.options[2];
    choice3.innerText = currentquestion.options[3];
    correctanswer = currentquestion.answer;
    //console.log(correctanswer);
}

/**compare function, compare correct answer to the clicked answer -- compare, return result, turn to the next question or ++*/
function compare0(){
    console.log("this is 0");
    chooseanswer = currentquestion.options[0];
    if(chooseanswer == correctanswer){
        alert("correct");
        return true;
    }
    else if(chooseanswer!=correctanswer){
        alert("wrong");
        return false;
    }
}
function compare1(){
    console.log("this is 1");
    chooseanswer = currentquestion.options[1];
    if(chooseanswer == correctanswer){
        alert("correct");
        return true;
    }
    else if(chooseanswer!=correctanswer){
        alert("wrong");
        return false;
    }
}
function compare2(){
    console.log("this is 2");
    chooseanswer = currentquestion.options[2];
    if(chooseanswer == correctanswer){
        alert("correct");
        return true;
    }
    else if(chooseanswer!=correctanswer){
        alert("wrong");
        return false;
    }
}
function compare3(){
    console.log("this is 3");
    chooseanswer = currentquestion.options[3];
    if(chooseanswer == correctanswer){
        alert("correct");
        return true;
    }
    else if(chooseanswer!=correctanswer){
        alert("wrong");
        return false;
    }
}


function check(){
    var choice0 = document.getElementById("choice0");//get answer0
    var choice1 = document.getElementById("choice1");
    var choice2 = document.getElementById("choice2");
    var choice3 = document.getElementById("choice3");
    choice0.addEventListener("click",compare0);
    choice1.addEventListener("click",compare1);
    choice2.addEventListener("click",compare2);
    choice3.addEventListener("click",compare3);
     
}

function start(){
    score =0;
    getquestionchoices();
    check();

}
start();
//clickoption.addEventListener("click", check);