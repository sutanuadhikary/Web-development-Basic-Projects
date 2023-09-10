// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Event listener for adding a new task
addTaskButton.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);

        taskInput.value = ""; // Clear the input field

        // Add event listener for deleting a task
        li.querySelector(".delete").addEventListener("click", deleteTask);
        // Add event listener for marking a task as complete
        li.querySelector("span").addEventListener("click", toggleComplete);
    }
}

// Function to delete a task
function deleteTask(event) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
}

// Function to mark a task as complete
function toggleComplete(event) {
    const taskText = event.target;
    taskText.classList.toggle("completed");
}

// Event listener for adding a new task on Enter key press
taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
