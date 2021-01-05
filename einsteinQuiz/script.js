// Start
const start_Container = document.getElementById("start-container");
const startButton = document.getElementById("startQuiz");
// Info
const info_Container = document.getElementById("info-container");
const exitButton = document.getElementById("exit-button");
// Quiz
const continueButton = document.getElementById("continue-button");
const questionNumber_Container = document.getElementById("number-question");
const timer_Container = document.getElementById("timer");
const question_Container = document.getElementById("question");
const quiz_Container = document.getElementById("quiz-container");
const option_Container = document.getElementById("choose-list");
const nextQuestion = document.getElementById("next-question");
const countDown = document.getElementById("timerShow");
let score = 0;
let questionNumber = 1;
let timer;
let questionIndex = 0;
let isAnswered = false;
// Result
const result_Container = document.getElementById("result-container");
const judgementMessage = document.getElementById("messageScore");
const scoreResult = document.getElementById("scoreResult");
const quitButton = document.getElementById("quitQuiz");
const replayButton = document.getElementById("replayQuiz");
const quizh3_Tag = document.querySelector(".quiz-text h3");
const quizp_Tag = document.querySelector(".quiz-text p");
const crown_Icon = document.querySelector(".crown");

// Timer
let startTimer = function (max_time, element) {
  timer = setInterval(() => {
    element.innerHTML = max_time--;
    if (max_time == -1) {
      //Code here if the timer is finish
      timeLost();
      clearInterval(timer);
    }
  }, 1000);
};

// When you're run out of time
let timeLost = () => {
  result_Container.classList.add("resultShow");
  quiz_Container.classList.remove("quizShow");
  timer_Container.classList.remove("timerShow");
  crown_Icon.innerHTML = "<i class='fas fa-clock'></i>";
  quizh3_Tag.textContent = "You run out of time";
  quizp_Tag.textContent = "Better luck next time";
};

//Reusable on game function
let ongame = () => {
  score = 0;
  info_Container.classList.remove("infoShow");
  quiz_Container.classList.add("quizShow");
  timer_Container.classList.add("timerShow");
  startTimer(30, countDown);
};

// Start Button
startButton.onclick = () => {
  info_Container.classList.add("infoShow");
};

// Info
exitButton.onclick = () => {
  info_Container.classList.remove("infoShow");
};
continueButton.onclick = () => {
  ongame();
};
let shuffleArray = (arr) => {
  return arr.sort(() => 0.5 - Math.random());
};

// When next button was been clicked
let questions_shuffle = shuffleArray(dataList);
nextQuestion.onclick = () => {
  if (questionIndex < dataList.length - 1) {
    if (isAnswered) {
      questionIndex++;
      questionNumber++;
      showQuestion(questionIndex);
      questionCounter(questionNumber);
    }

    if (questionNumber === 5) {
      isAnswered = false;
      nextQuestion.innerHTML = "Finish";
    } else {
      isAnswered = false;
      nextQuestion.innerHTML = "Next";
    }
  } else if (isAnswered) {
    resultShow();
  }
};

// Result
let resultShow = () => {
  questionIndex = 0;
  questionNumber = 1;
  result_Container.classList.add("resultShow");
  quiz_Container.classList.remove("quizShow");
  timer_Container.classList.remove("timerShow");
  scoreResult.innerHTML = score;
  clearInterval(timer);
  countDown.innerHTML = "30";
  if (questionNumber === 5) {
    nextQuestion.innerHTML = "Finish";
  } else {
    nextQuestion.innerHTML = "Next";
  }
  allQuiz(questionNumber, questionIndex);
};

// Replay Button
replayButton.onclick = () => {
  result_Container.classList.remove("resultShow");
  isAnswered = false;
  ongame();
};

// Quit Button
quitButton.onclick = () => {
  if (questionNumber === 5) {
    nextQuestion.innerHTML = "Finish";
  } else {
    nextQuestion.innerHTML = "Next";
  }
  result_Container.classList.remove("resultShow");
};

// The cycle of questions show
let showQuestion = (questionIndex) => {
  let options_shuffle = shuffleArray(dataList[questionIndex].options);
  const options_Text =
    "<div class='options'>" +
    options_shuffle[0] +
    "</div>" +
    "<div class='options'>" +
    options_shuffle[1] +
    "</div>" +
    "<div class='options'>" +
    options_shuffle[2] +
    "</div>";
  question_Container.innerHTML =
    "<h2>" +
    (questionIndex + 1) +
    ". " +
    questions_shuffle[questionIndex].question +
    "</h2>";
  option_Container.innerHTML = options_Text;
  document.querySelectorAll(".options").forEach((allOptions) => {
    allOptions.setAttribute("onclick", "optionSelected(this)");
  });
};

// When the user select the answer
let optionSelected = (answer) => {
  isAnswered = true;
  const userAnswer = answer.textContent;
  const correctAnswer = dataList[questionIndex].answer;
  const getAllOptions = option_Container.children.length;
  if (userAnswer == correctAnswer) {
    score++;
    answer.classList.add("correctAnswer");
  } else {
    answer.classList.add("wrongAnswer");
    for (let index = 0; index < getAllOptions; index++) {
      if (option_Container.children[index].textContent == correctAnswer) {
        option_Container.children[index].setAttribute(
          "class",
          "options correctAnswer"
        );
      }
    }
  }
  for (let c = 0; c < getAllOptions; c++) {
    option_Container.children[c].classList.add("disabled");
  }
};

// It shows on where number you are
let questionCounter = (questionNumber) => {
  questionNumber_Container.innerHTML =
    "<p>" + questionNumber + " out of " + dataList.length + "</p>";
};

// It gets all the functions of quiz
let allQuiz = (questionNumber, questionIndex) => {
  questionCounter(questionNumber);
  showQuestion(questionIndex);
};

// It runs all the functions of quiz
allQuiz(questionNumber, questionIndex);
