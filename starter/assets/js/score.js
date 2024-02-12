// Function to get highscores from local storage
function getHighscores() {
    const highscoresJSON = localStorage.getItem("highscores");
    if (highscoresJSON) {
      return JSON.parse(highscoresJSON);
    } else {
      return [];
    }
  }
  
  // Function to render highscores
  function renderHighscores() {
    const highscores = getHighscores();
  
    // Clear the highscores list
    const highscoresList = document.getElementById("highscores");
    highscoresList.innerHTML = "";
  
    // Populate the highscores list
    highscores.forEach((score, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${score.name}: ${score.score}`;
      highscoresList.appendChild(li);
    });
  }
  
  // Function to save highscore
  function saveHighscore(name, score) {
    const highscores = getHighscores();
    highscores.push({ name, score });
    highscores.sort((a, b) => b.score - a.score); // Sort highscores by score
    localStorage.setItem("highscores", JSON.stringify(highscores));
    renderHighscores();
  }
  
  // Function to clear highscores
  function clearHighscores() {
    localStorage.removeItem("highscores");
    renderHighscores();
  }
  
  // Event listener for clear highscores button
  document.getElementById("clear").addEventListener("click", clearHighscores);
  
  // Render highscores when the page loads
  document.addEventListener("DOMContentLoaded", renderHighscores);
  