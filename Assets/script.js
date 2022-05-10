//var question = document.getElementById('question');
var startButton = document.getElementById('startButton');
var submitButton = document.getElementById("submitBtn");
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var quizBody = document.getElementById("quizBody");
var timeEl = document.getElementById("time");
var timer = 60;
var questionIndex = 0;
var correct = 0;
var timerId;

startButton.addEventListener("click", startQuiz)
//nextButton.addEventListener('click', nextQuestion)

//Questions for quiz
var questionbank = [
  {
    prompt: 'What does CSS stand for?',
    choices: ["Cascade Sheet Style", "Compact Style Syntax", "Code Standard Style", "Cascading Style Sheet"],
    answer: "Cascading Style Sheet"
  },
  {
    prompt: 'Can you store objects in localStorage?',
    choices: ["Yes", "No", "Maybe", "Sometimes"],
    answer: 'Yes',
  },
  {
    prompt: 'What does JSON.stringify() do?',
    choices: ["Makes the text JSON format", "Makes the text a string", "Makes the text JavaScript", "Makes a JavaScript object into a string"],
    answer: 'Makes a JavaScript object into a string',
  }
]


//start the quiz function, show questions, start timer
function startQuiz() {
  startScreen.setAttribute("class", "hide");
  quizBody.removeAttribute("class");
  //var questions = questionbank[questionbank.index[0]];

  timerId = setInterval(startTimer, 1000);
  showQuestions();


  //console.log(startQuiz);
};


//Timer function
function startTimer() {
  // Sets interval in variable
  timer--
  timeEl.textContent = timer;


}

function showQuestions() {

  var currentQuestion = questionbank[questionIndex];
  var questionTitleEl = document.getElementById("question-title");
  var choicesEl = document.getElementById("choices")

  questionTitleEl.textContent = currentQuestion.prompt;

  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach((choice) => {

    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice)

    choiceBtn.textContent = choice;

    choiceBtn.onclick = handleClick;

    choicesEl.append(choiceBtn)

  })

}

function handleClick() {

  if (this.value === questionbank[questionIndex].answer) {
    correct++
  } else {
    timer -= 10

    if (timer <= 0) {
      endQuiz()
      timer = 0;
    }
  }

  questionIndex++;

  if (questionIndex === questionbank.length) {
    endQuiz()
  } else {
    showQuestions()
  }
}

let finalScore;

function endQuiz() {
  clearInterval(timerId)

  quizBody.setAttribute("class", "hide");
  endScreen.removeAttribute("class");

  let initialScore = (correct / questionbank.length).toFixed(2);
  let splitScore = initialScore.split("0.")[1]
  finalScore = splitScore + "%"

  if (correct === questionbank.length) {
    finalScore = "100%"
  }

  var finalScoreEl = document.getElementById("finalScore")
  finalScoreEl.textContent = finalScore

}

submitButton.onclick = saveScore;

function saveScore() {

  var initials = document.getElementById("initials-input").value.trim();

  let newScore = {
    initials: initials,
    score: finalScore
  }
  
  if (initials !== "") {

    let highScore = JSON.parse(localStorage.getItem("highscore")) || [];

    highScore.push(newScore);

    localStorage.setItem("highscore", JSON.stringify(highScore));
  }
}
