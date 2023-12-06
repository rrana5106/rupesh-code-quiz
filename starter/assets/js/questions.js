// Get references to HTML elements
const startButton = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const questionId = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choicesOption = document.getElementById("choices");
const feedbackForAns = document.getElementById("feedback");
const timeElement = document.getElementById("time");

// Array of questions with options and correct answers
const questionToUser = [
  {
    question: "Which programming language is used for web development?",
    options: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Counter Strike: Source",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets"
  }
];

// Initialize variables
let currentQuestionIndex = 0;
let timeLeft = 60; // Set the initial time

// Event listener for the "Start Quiz" button
startButton.addEventListener("click", startQuiz);

// Function to start the quiz
function startQuiz() {
  // Hide the start screen and show the first question
  startScreen.classList.add("hide");
  questionId.classList.remove("hide");
  showQuestion();
  startTimer();
}

// Function to display a question and its options
function showQuestion() {
  const currentQuestion = questionToUser[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.question;

  // Clear previous options
  while (choicesOption.firstChild) {
    choicesOption.removeChild(choicesOption.firstChild);
  }

  // Create buttons for each option and add event listeners
  currentQuestion.options.forEach(function (option) {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = option;

    buttonElement.addEventListener("click", function () {
      checkAnswer(option, currentQuestion.correctAnswer);
    });

    choicesOption.appendChild(buttonElement);
  });
}

// Function to check the selected answer and update feedback
function checkAnswer(selectedOption, correctAnswer) {
  feedbackForAns.classList.remove("hide");
  if (selectedOption === correctAnswer) {
    feedbackForAns.textContent = "Correct!";
    // You can perform additional actions for a correct answer here
  } else {
    feedbackForAns.textContent = "Incorrect!";
    timeLeft -= 10; // Subtract 10 seconds for an incorrect answer
    // You can perform other actions for an incorrect answer
    
  }

  currentQuestionIndex++;

  // Check if there are more questions or end the quiz
  if (currentQuestionIndex < questionToUser.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

// Function to start the timer
function startTimer() {
  const timerInterval = setInterval(function () {
    timeElement.textContent = timeLeft;
    timeLeft--;

    // Check if time is up and end the quiz
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// Function to end the quiz and display the final score
function endQuiz() {
  questionId.classList.add("hide");
  feedbackForAns.classList.remove("hide");
  feedbackForAns.textContent = "Quiz ended! Your final score is: " + timeLeft + " seconds";
}
