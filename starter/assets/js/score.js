// Function to end the quiz and display the final score
function endQuiz() {
    questionId.classList.add("hide");
    feedbackForAns.classList.remove("hide");
    feedbackForAns.textContent = "Quiz ended! Your final score is: " + timeLeft + " seconds";
  }