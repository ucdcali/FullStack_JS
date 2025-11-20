// Step 1 – Make sure your script is loaded
console.log("Like Counter script loaded!");

// Step 2 – Grab the DOM elements
// You will need to access:
// The like button
// The heart icon
// The like count
// The status message
const likeButton = document.getElementById("like-button");
const heartIcon = document.getElementById("heart-icon");
const likeCountSpan = document.getElementById("like-count");
const statusMessage = document.getElementById("status-message");

// Step 3 – Track the like state
// 
// ✅ Checkpoint:
// You have isLiked and likeCount defined at the top of your script.
let isLiked = false;
let likeCount = 0;

// Step 4 – Add a click event listener
// Test it:
// Click the heart in the browser.
// Confirm you see Like button was clicked! in the console.
likeButton.addEventListener("click", () => {
  // Flip the liked state
  isLiked = !isLiked;

  // Update likeCount based on new state
  if (isLiked) {
    likeCount = likeCount + 1;
  } else {
    likeCount = likeCount - 1;
  }

  // Update the UI
  updateHeart();
  updateLikeCount();
  updateStatusMessage();
});
// ✅ Checkpoint:
// Your click handler runs when the button is clicked.

// Step 5 – Toggle the liked state
// Inside the click handler, you will:
// 1) Flip isLiked (false → true, true → false)
// 2) Update the likeCount
// 3) Update the heart’s appearance
// 4) Update the text on the page

// Step 6 – Write helper functions to update the DOM
//   A. Update the heart icon
//   We want to:
//     1 )Add/remove the .liked CSS class
//     2 )Switch between ♡ (unliked) and ♥ (liked)
//   B. Update the like count text
//   C. Update the status message
function updateHeart() {
  if (isLiked) {
    heartIcon.classList.add("liked");
    heartIcon.textContent = "♥";
  } else {
    heartIcon.classList.remove("liked");
    heartIcon.textContent = "♡";
  }
}

function updateLikeCount() {
  likeCountSpan.textContent = likeCount;
}
  

function updateStatusMessage() {
  if (isLiked) {
    statusMessage.textContent = "You liked this post. 💖";
  } else {
    statusMessage.textContent = "Click the heart to like this post.";
  }
}
// Final Checkpoints:
//   1) Clicking the heart toggles between ♡ and ♥
//   2) The like count goes up when you like, down when you unlike
//   3) The status message updates appropriately


// Stretch Challenges (Optional)
// If you want to challenge yourself, try one or more of these:
// 1) Double-tap to like
//    Add a dblclick event on the whole card (.post-card) to like the post.
// 2) Allow multiple likes and unlikes
//    Make sure the like count never goes below 0.
// 3) Animation flair
//    Add a CSS animation (e.g., a quick scale up) when the user likes the post.
// 4) Multiple posts
//    Copy the card HTML twice and see if you can generalize your JS to handle both using querySelectorAll and loops.