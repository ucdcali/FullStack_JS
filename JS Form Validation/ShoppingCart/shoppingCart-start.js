// Your job is to build a working mini shopping cart app where users can add items,
// prices, AND quantities — but only if the input is valid.
//
// You will validate:
// 1) Item name must not be empty
// 2) Price must be:
//    a) A number
//    b) Greater than 0
// 3) Quantity must be:
//    a) A whole number
//    b) At least 1
// 4) Cart can contain max 10 items
//
// You should:
// Show error messages under each input
// Update total price live (price * quantity)
// Use preventDefault() to stop form submission if invalid

// Step 1 — Make sure your script loads

// Step 2 — Select all DOM elements
// You need to grab:
// 1) form
// 2) name + price + quantity inputs
// 3) error message <small> elements
// 4) cart list
// 5) total price
// 6) add button
// 7) cart message


// Step 3 — Build state for your cart


// Step 4 — Write validation helper functions


// Step 5 — Update total
// Now we need to multiply price * quantity for each item.


// Step 6 — Add item to DOM


// Step 7 — Disable button when cart is full


// Step 8 — Handle form submission using e.preventDefault()
//
// e.preventDefault() stops the browser from doing what it normally does
// when a form is submitted (like refreshing the page).
// This allows us to run our own JavaScript code instead
// so we can validate the form and update the page without reloading.
//
// form.reset() clears the fields after a successful submission
// so the user can enter a new item without manually deleting text.

// Step 9: Initialize cart state on first load

