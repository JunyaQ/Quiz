var question = document.getElementById("quesiton");
//var clickoption = document.getElementById("choice1","choice2","choice3","choice0");
var currentquestion = '';
var score = parseInt(document.getElementById("timer").innerHTML);//score == timer
var questioncounter =0;
const totalquestion = 5;
const addscore = 10;
var correctanswer ='';
var chooseanswer = '';

/*question list with answers*/ 
var questionlist =[
    {
     question:"Which type of JavaScript language ?",
     answer:  "2. Object-Based",
     options:["1. Object-Oriented","2. Object-Based","3. Assembly-language","4. High-level"] 
    },

    {
        question:"Which one of the following also known as Conditional Expression:",
        answer:  "4. immediate if",
        options:["1. Alternative to if-else","2. Switch statement","3. If-then-else statement","4. immediate if"] 
       },

    {
        question:"In JavaScript, what is a block of statement?",
        answer:  "2. block that combines a number of statements into a single compound statement",
        options:["1. Conditional block","2. block that combines a number of statements into a single compound statement","3. both conditional block and a single statement","4. block that contains a single statement"] 
    },

    {
        question:"When interpreter encounters an empty statements, what it will do:",
        answer:  "4. Ignores the statements",
        options:["1. Shows a warning","2. Prompts to complete the statement","3. Throws an error","4. Ignores the statements"] 
       },

       {
        question:" Which of the following variables takes precedence over the others if the names are the same?",
        answer:  "2. The local element",
        options:["1. Global variable","2. The local element","3. The two of the above","4. None of the above"] 
       },

       {
           question:"Which one of the following is the correct way for calling the JavaScript code?",
           answer:"4. Function/Method",
           options:["1. Preprocessor","2. Triggering Event","3. RMI","4. Function/Method"]
       },

       {
           question:"Which of the following type of a variable is volatile?",
           answer:"1. Mutable variable",
           options:["1. Mutable variable","2. Dynamic variable","3. Volatile variable","4. Immutable variable"]
       }

]
/** show the question and answer to the page*/
function getquestionchoices(){
    currentquestion = questionlist[questioncounter];
    questioncounter++;
    questiontext.innerText = currentquestion.question;
    //console.log(currentquestion.question);
    //console.log(currentquestion.options[1]);
    choice0.innerText = currentquestion.options[0];
    choice1.innerText = currentquestion.options[1];
    choice2.innerText = currentquestion.options[2];
    choice3.innerText = currentquestion.options[3];
    correctanswer = currentquestion.answer;
    //console.log(correctanswer);
}

/**compare function, compare correct answer to the clicked answer -- compare, return result, turn to the next question and score*/
function compare0(){
    //var submitpage = document.getElementById("nameinitial");
    console.log("score "+score);
    console.log("this is 0");
    chooseanswer = currentquestion.options[0];
    if(chooseanswer == correctanswer){
        //alert("correct");
        result.innerText = "Correct";
        if(score>=0 && questioncounter<totalquestion){
        getquestionchoices();
        }
        else{
            timer.innerText=score;
            finalscore = score;
            stop();
            //name and storage
            localStorage.setItem("finalscore",score);
            window.open('./submit.html');
        }
    }
    else if(chooseanswer!=correctanswer){
        //alert("wrong");
        result.innerText = "Wrong";
        score = score-10;
        
        if(score>=0 && questioncounter<totalquestion){
            timer.innerText=score;
            getquestionchoices();
            }
            else if(score <0 && questioncounter<totalquestion){
                score =0;
                timer.innerText = 0;
                finalscore = 0;
                stop();
                questioncounter++;
                localStorage.setItem("finalscore",score);
                window.open('./submit.html');

            }
            else{
                timer.innerText=score;
                finalscore = score;
                stop();
                //alert("name and highest score");
                //var nameinital = prompt("name");
                //name and storage
                localStorage.setItem("finalscore",score);
                window.open('./submit.html');
            }
    }
}
function compare1(){
    console.log("score "+score);
    console.log("this is 1");
    chooseanswer = currentquestion.options[1];
    if(chooseanswer == correctanswer){
        //alert("correct");
        result.innerText = "Correct";
        if(score>=0 && questioncounter<totalquestion){
            getquestionchoices();
            }
            else{
                timer.innerText=score;
                finalscore = score;
                stop();
                //alert("name and highest score");
                questioncounter++;
                //var nameinital = prompt("name");
                //name and storage
                localStorage.setItem("finalscore",score);
                window.open('./submit.html');
            }
    }
    else if(chooseanswer!=correctanswer){
        //alert("wrong");
        result.innerText = "Wrong";
        score = score-10;
        
        if(score>=0 && questioncounter<totalquestion){
            timer.innerText=score;
            getquestionchoices();
            }
            else if(score <0 && questioncounter<totalquestion){
                score =0;
                timer.innerText = 0;
                finalscore = 0;
                stop();
                questioncounter++;
                localStorage.setItem("finalscore",score);
                window.open('./submit.html');

            }
            else{
                timer.innerText=score;
                finalscore = score;
                stop();
               // alert("name and highest score");
                questioncounter++;
               // var nameinital = prompt("name");
               //name and storage
              localStorage.setItem("finalscore",score);
              window.open('./submit.html');
            }
    }
}
function compare2(){
    console.log("score "+score);
    console.log("this is 2");
    chooseanswer = currentquestion.options[2];
    if(chooseanswer == correctanswer){
        //alert("correct");
        result.innerText = "Correct";
        if(score>=0 && questioncounter<totalquestion){
            getquestionchoices();
            }
            else{
                timer.innerText=score;
                finalscore = score;
                stop();
                //alert("name and highest score");
                questioncounter++;
                //name and storage
                localStorage.setItem("finalscore",score);
                window.open('./submit.html');
            }
    }
    else if(chooseanswer!=correctanswer){
       // alert("wrong");
       result.innerText = "Wrong";
        score = score -10;
        if(score>=0 && questioncounter<totalquestion){
            timer.innerText=score;
            getquestionchoices();
            }
            else if(score <0 && questioncounter<totalquestion){
                score =0;
                timer.innerText = 0;
                finalscore = 0;
                stop();
                questioncounter++;
                localStorage.setItem("finalscore",score);
                window.open('./submit.html');

            }
            else{
                timer.innerText=score;
                finalscore = score;
                stop();
                //alert("name and highest score");
                questioncounter++;
                //name and storage
                localStorage.setItem("finalscore",score);
                window.open('./submit.html');
            }
    }
}
function compare3(){
    console.log("score "+score);
    console.log("this is 3");
    chooseanswer = currentquestion.options[3];
    if(chooseanswer == correctanswer){
        //alert("correct");
        result.innerText = "Correct";
        if(score>=0 && questioncounter<totalquestion){
            getquestionchoices();
            }
            else{
                timer.innerText=score;
                finalscore = score;
                stop();
                //alert("name and highest score");
                questioncounter++;
                //name and storage
                localStorage.setItem("finalscore",score);
                window.open('./submit.html');
            }
    }
    else if(chooseanswer!=correctanswer){
        //alert("wrong");
        result.innerText = "Wrong";
        score = score -10;
        if(score>=0 && questioncounter<totalquestion){
            timer.innerText=score;
            getquestionchoices();
            }
            else if(score <0 && questioncounter<totalquestion){
                score =0;
                timer.innerText = 0;
                finalscore = 0;
                stop();
                questioncounter++;
                localStorage.setItem("finalscore",score);
                window.open('./submit.html');

            }
            else{
                timer.innerText=score;
                finalscore = score;
                stop();
                //alert("name and highest score");
                questioncounter++;
                //name and storage
                localStorage.setItem("finalscore",score);
                window.open('./submit.html');
            }
    }
}
//check if the answer correct
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

//timer countdown
function countdown(){
    var starter = true;
if(score >0 && questioncounter <=totalquestion && starter==true){
    var space;
    timer.innerText = score;
    score = score -1;
    space = setTimeout(countdown,1000);
    }
else{
    clearTimeout(space);
    starter == false;
    timer.innerText=score;
    finalscore = score;
    stop();
    localStorage.setItem("finalscore",score);
    window.open( './submit.html');
    }

}
//stop 
function stop(){
    document.getElementById("choice0").style.pointerEvents ='none';
    document.getElementById("choice1").style.pointerEvents ='none';
    document.getElementById("choice2").style.pointerEvents ='none';
    document.getElementById("choice3").style.pointerEvents ='none';

}


function start(){
    countdown();
    getquestionchoices();
    check();

    console.log("start"+score);
    console.log(typeof(score));
    console.log("score "+score);
    
}
start();
//clickoption.addEventListener("click", check);