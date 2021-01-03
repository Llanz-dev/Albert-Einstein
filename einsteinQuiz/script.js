const score_Container = document.getElementById("score");
const question_Container = document.getElementById("question");
const option_Container = document.getElementById("choose-list");
const questionNumber_Container = document.querySelector("footer");
const nextButton = document.querySelector("button");
const countDown = document.getElementById("timerShow");
let txt_score = document.getElementById("txt-score");
let score = 0;
let questionNumber = 1;
let questionIndex = 0;

let shuffleArray = (arr) => {
  return arr.sort(() => 0.5 - Math.random())
}

let questions_shuffle = shuffleArray(dataList)


let startTimer = function (max_time, element){
  let timer = setInterval(() => {
    element.innerHTML = max_time--;
    if(max_time == -1){
      
      //Code here if the timer is finish
      alert("Lose")
      clearInterval(timer)
    }
  },1000)
}

window.onload = () => {
  startTimer(30, countDown);
}

nextButton.onclick = () => {
  if (questionIndex < dataList.length - 1) {
    questionIndex++;
    questionNumber++;
    showQuestion(questionIndex);
    questionCounter(questionNumber);
   
  } else {
    console.log("Quiz completed");
  }
};


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

let optionSelected = (answer) => {
  const userAnswer = answer.textContent;
  const correctAnswer = dataList[questionIndex].answer;
  const getAllOptions = option_Container.children.length;
  if (userAnswer == correctAnswer) {
    score++;
    txt_score.innerHTML = score;
    console.log(userAnswer + " is correct");
    answer.classList.add("correctAnswer");
  } else {
    answer.classList.add("wrongAnswer");
    console.log(userAnswer + " is wrong");
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
let questionCounter = (questionNumber) => {
  questionNumber_Container.innerHTML =
    "<p>" + questionNumber + " out of " + dataList.length + "</p>";
};

questionCounter(questionNumber);
showQuestion(questionIndex);
