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


// Step 3 — Build state for your scores
// Each score will be stored as an object:
// { id: number, player: string, game: string, score: number, favorite: boolean }


// Step 4 — Load any saved scores from localStorage when the page loads


// Step 5 — Write validation helper functions


// Step 6 — Save and load functions for localStorage
// localStorage only stores strings, so we convert our scores array
// to JSON using JSON.stringify(), and parse it back with JSON.parse().


// Step 7 — Render the list of scores (Read)


// Step 8 — Create new score (Create)
// Use e.preventDefault() so the form doesn't reload the page.



// Step 9 — Update a score (Update)
// In this app, "Update" means toggling the favorite flag.


// Step 10 — Delete a single score (Delete)


// Step 11 — Clear all scores (Delete all)


// Step 12 — Initialize UI on first load

