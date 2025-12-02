// Your job is to build a working High Score Tracker app where users can add
// scores for different players and games — and keep them saved in localStorage.
//
// You will use localStorage to:
// 1) Load existing scores when the page loads
// 2) Save new scores when they are added
// 3) Update scores when a score is marked as a "favorite"
// 4) Delete individual scores or clear all scores
//
// You will implement full CRUD with:
// C - Create: Add a new high score
// R - Read: Display all stored high scores from localStorage
// U - Update: Toggle a "favorite" flag on a score
// D - Delete: Remove a single score or clear all scores
//
// You should:
// Show error messages under each input when invalid
// Keep the list sorted by score (highest first)
// Use preventDefault() to stop form submission if invalid
// Use JSON.stringify() and JSON.parse() to talk to localStorage

// Step 1 — Make sure your script loads
console.log("High Score Tracker script loaded!");

// Step 2 — Select all DOM elements
// You need to grab:
// 1) form
// 2) input fields (player name, game name, score value)
// 3) error <small> elements
// 4) score list (ul)
// 5) clear-all button
// 6) form message area
const scoreForm = document.getElementById("score-form");
const playerNameInput = document.getElementById("player-name");
const gameNameInput = document.getElementById("game-name");
const scoreValueInput = document.getElementById("score-value");

const nameError = document.getElementById("name-error");
const gameError = document.getElementById("game-error");
const scoreError = document.getElementById("score-error");

const scoreList = document.getElementById("score-list");
const clearAllBtn = document.getElementById("clear-all-btn");
const formMessage = document.getElementById("form-message");

// Step 3 — Build state for your scores
// Each score will be stored as an object:
// { id: number, player: string, game: string, score: number, favorite: boolean }
let scores = [];

// Step 4 — Load any saved scores from localStorage when the page loads
loadScoresFromStorage();
renderScoreList();

// Step 5 — Write validation helper functions
function isValidPlayerName() {
  if (playerNameInput.value.trim() === "") {
    nameError.textContent = "Player name is required.";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function isValidGameName() {
  if (gameNameInput.value.trim() === "") {
    gameError.textContent = "Game name is required.";
    return false;
  }
  gameError.textContent = "";
  return true;
}

function isValidScoreValue() {
  const score = parseInt(scoreValueInput.value, 10);

  if (isNaN(score)) {
    scoreError.textContent = "Score is required.";
    return false;
  }

  if (score < 0) {
    scoreError.textContent = "Score cannot be negative.";
    return false;
  }

  scoreError.textContent = "";
  return true;
}

// Step 6 — Save and load functions for localStorage
// localStorage only stores strings, so we convert our scores array
// to JSON using JSON.stringify(), and parse it back with JSON.parse().
function saveScoresToStorage() {
  localStorage.setItem("highScores", JSON.stringify(scores));
}

function loadScoresFromStorage() {
  const stored = localStorage.getItem("highScores");
  if (stored) {
    scores = JSON.parse(stored);
  } else {
    scores = [];
  }
}

// Step 7 — Render the list of scores (Read)
function renderScoreList() {
  // Clear current list
  scoreList.innerHTML = "";

  // Sort scores by score value (highest first)
  const sortedScores = [...scores].sort((a, b) => b.score - a.score);

  if (sortedScores.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "list-group-item text-muted";
    emptyItem.textContent = "No scores yet. Add the first one!";
    scoreList.appendChild(emptyItem);
    return;
  }

  sortedScores.forEach(scoreObj => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    if (scoreObj.favorite) {
      li.classList.add("favorite-score");
    }

    const leftDiv = document.createElement("div");

    const titleSpan = document.createElement("span");
    titleSpan.textContent = `${scoreObj.player} — ${scoreObj.game}`;
    leftDiv.appendChild(titleSpan);

    if (scoreObj.favorite) {
      const favBadge = document.createElement("span");
      favBadge.className = "favorite-badge";
      favBadge.textContent = "★ Favorite";
      leftDiv.appendChild(favBadge);
    }

    const rightDiv = document.createElement("div");

    const scoreSpan = document.createElement("span");
    scoreSpan.className = "fw-bold me-3";
    scoreSpan.textContent = scoreObj.score;

    const favoriteBtn = document.createElement("button");
    favoriteBtn.className = "btn btn-sm btn-outline-warning me-2";
    favoriteBtn.textContent = scoreObj.favorite ? "Unfavorite" : "Favorite";
    favoriteBtn.addEventListener("click", () => toggleFavorite(scoreObj.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-outline-danger";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteScore(scoreObj.id));

    rightDiv.appendChild(scoreSpan);
    rightDiv.appendChild(favoriteBtn);
    rightDiv.appendChild(deleteBtn);

    li.appendChild(leftDiv);
    li.appendChild(rightDiv);
    scoreList.appendChild(li);
  });
}

// Step 8 — Create new score (Create)
// Use e.preventDefault() so the form doesn't reload the page.
scoreForm.addEventListener("submit", (e) => {
  // e.preventDefault() stops the browser from doing what it normally does
  // when a form is submitted (like refreshing the page).
  // This allows us to run our own JavaScript code instead
  // so we can validate the form and update the page without reloading.
  e.preventDefault();

  const nameOk = isValidPlayerName();
  const gameOk = isValidGameName();
  const scoreOk = isValidScoreValue();

  if (!nameOk || !gameOk || !scoreOk) {
    formMessage.textContent = "Please fix the errors above before submitting.";
    return;
  }

  const newScore = {
    id: Date.now(),
    player: playerNameInput.value.trim(),
    game: gameNameInput.value.trim(),
    score: parseInt(scoreValueInput.value, 10),
    favorite: false,
  };

  scores.push(newScore);
  saveScoresToStorage();
  renderScoreList();

  formMessage.textContent = "High score added! 🏆";

  // form.reset() clears the fields after a successful submission
  // so the user can enter a new score without manually deleting text.
  scoreForm.reset();
});

// Step 9 — Update a score (Update)
// In this app, "Update" means toggling the favorite flag.
function toggleFavorite(id) {
  const scoreObj = scores.find(s => s.id === id);
  if (!scoreObj) return;

  scoreObj.favorite = !scoreObj.favorite;
  saveScoresToStorage();
  renderScoreList();
}

// Step 10 — Delete a single score (Delete)
function deleteScore(id) {
  scores = scores.filter(s => s.id !== id);
  saveScoresToStorage();
  renderScoreList();
  formMessage.textContent = "Score deleted.";
}

// Step 11 — Clear all scores (Delete all)
clearAllBtn.addEventListener("click", () => {
  scores = [];
  saveScoresToStorage();
  renderScoreList();
  formMessage.textContent = "All scores cleared.";
});

// Step 12 — Initialize UI on first load
renderScoreList();
formMessage.textContent = "";
