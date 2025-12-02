// Task Manager with LocalStorage & CRUD Operations

console.log("Task Manager script loaded!");

// DOM elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// State (data stored in the browser)
let tasks = [];

// 1️⃣ Load tasks from localStorage when page loads
loadTasksFromStorage();
renderTaskList();

// 2️⃣ Listen for form submission (Create)
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = taskInput.value.trim();
  if (text === "") return;

  const newTask = {
    id: Date.now(), // unique id
    text: text,
    completed: false
  };

  tasks.push(newTask);
  saveTasksToStorage();
  renderTaskList();

  taskInput.value = "";
});

// 3️⃣ Function to display tasks on the page (Read)
function renderTaskList() {
  taskList.innerHTML = ""; // Clear current display

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Checkbox for completing tasks (Update)
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.classList.add("form-check-input", "me-2");
    checkbox.addEventListener("change", () => toggleTaskCompletion(task.id));

    const textSpan = document.createElement("span");
    textSpan.textContent = task.text;
    if (task.completed) {
      textSpan.classList.add("completed");
    }

    // Delete button (Delete)
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-danger ms-3";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Update completion state
function toggleTaskCompletion(taskId) {
  const task = tasks.find(t => t.id === taskId);
  task.completed = !task.completed;
  saveTasksToStorage();
  renderTaskList();
}

// Delete a task
function deleteTask(taskId) {
  tasks = tasks.filter(t => t.id !== taskId);
  saveTasksToStorage();
  renderTaskList();
}

// 🔐 LocalStorage helper functions

// Convert tasks array → JSON → save
function saveTasksToStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load from storage → convert JSON → JS array
function loadTasksFromStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}
