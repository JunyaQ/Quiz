var questoin = document.getElementById("quesiton");
var currentquestion = '';
var score = 0;
var timer = 60;
var questioncounter =0;
const addscore = 10;


/*question list with answers*/ 
let questionlist =[
    {
     number: 1,
     question:"AAAA",
     answer:  "1",
     options:["a","b","c","d"] 
    },

    {
        number: 2,
        question:"BBBB",
        answer:  "2",
        options:["a","b","c","d"] 
       },

    {
        number: 3,
        question:"CCCC",
        answer:  "3",
        options:["a","b","c","d"] 
    },

    {
        number: 4,
        question:"BBBB",
        answer:  "2",
        options:["a","b","c","d"] 
       },

       {
        number: 5,
        question:"DDDD",
        answer:  "4",
        options:["a","b","c","d"] 
       }

]
function getquestionchoices(){
    var currentquestion = '';
    questioncounter =0;
    currentquestion = questionlist[questioncounter];
    questioncounter++;
    question.innerText = currentquestion.question;
    console.log(currentquestion.question);
    console.log(currentquestion.options[1]);
    choice0.innerText = currentquestion.options[0];
    choice1.innerText = currentquestion.options[1];
    choice2.innerText = currentquestion.options[2];
    choice3.innerText = currentquestion.options[3];
}

function start(){
    score =0;
    getquestionchoices();

}
start();