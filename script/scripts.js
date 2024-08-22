// script.js
document.getElementById("add-task-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");

    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // Create task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create task buttons (complete and delete)
    const taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";

    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.textContent = "Done";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    // Add event listeners to buttons
    completeBtn.addEventListener("click", () => {
      taskItem.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    // Append buttons to the container
    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(deleteBtn);

    // Append text and buttons to the task item
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(taskButtons);

    // Append the task item to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  }
}
