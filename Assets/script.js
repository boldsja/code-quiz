//var question = document.getElementById('question');
var startButton = document.getElementById('startButton');
var nextButton = document.getElementById('nextButton').style.display="none";
var timer = 60;
var trueButton = document.getElementById('true').style.visibility="hidden";
var falseButton = document.getElementById('false').style.visibility="hidden";

startButton.addEventListener("click", startQuiz)
//nextButton.addEventListener('click', nextQuestion)

//Questions for quiz
var questionbank = [
    {
        prompt:'CSS stands for Cascading Style Sheet',
        answer: 'true',
},
    {
        prompt: 'Local storage can store objects',
        answer: 'false',
},
    {
        prompt: 'JSON.stringify can convert an object to a string',
        answer: 'true',
}
]



//start the quiz function, show questions, start timer
function startQuiz(){
    document.getElementById('startButton').style.display = "none";
    document.getElementById('nextButton').style.visibility = "visible";
    //var questions = questionbank[questionbank.index[0]];

    document.getElementById('true').style.visibility="visible";
    document.getElementById('false').style.visibility="visible";
    
    
    //startTimer();


//console.log(startQuiz);
};


//Timer function
function startTimer(){
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft;
      
          if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
          }
      
        }, 1000);
      }