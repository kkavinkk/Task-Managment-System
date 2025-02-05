// Add tasks
const inputTask = document.querySelector(".add-task input")
const taskBttn = document.querySelector(".add-task button")
const tasks = document.querySelector("#taskList")
const clearBttn = document.querySelector("#terminate-tasks")
const clearAllBttn =  document.querySelector("#clear_all_tasks")

// emptys set for cleared tasks
const checkedTasks = new Set();

// type in a task in the input box
function addTask() { 
    const taskText = inputTask.value.trim();//get input value and delete extra space
    if (taskText === "") return; // stops from adding a task with nothing

    const label = document.createElement("label");
    label.classList.add("container"); // Mannually adds container of tasks

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // adds the check box
    checkbox.checked = false; // Default unckecked

    const checkmark = document.createElement("div");
    checkmark.classList.add("checkmark"); // Adds check mark

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("tasks"); // Adds the task itself
    taskDiv.textContent = taskText; // puts the input content in it

        // Now we must call all of them to add
    label.appendChild(checkbox);
    label.appendChild(checkmark);
    label.appendChild(taskDiv);
    taskList.appendChild(label);

    // Listen for if task is completed
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            checkedTasks.add(label); // Adding to set when done
        } else {
            checkedTasks.delete(label); // Remove from set when unchecked
        }
    });

    inputTask.value = ""; // resets task input to blank
}
//Press the button to make the task show up below
taskBttn.addEventListener("click", addTask) // when the button is pressed but it down below
inputTask.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
// Function to grey checked tasks and move to the bottom
function updateTaskList() {
    const taskcontainer = document.querySelector("#task-list")
    const tasks = Array.from(taskcontainer.children);

    tasks.forEach(task => {
        const checkbox = task.querySelector("input[type='checkbox']");
        const taskText = task.querySelector(".tasks");

        if (checkbox.checked) {
            taskText.style.color = "gray";
            taskText.style.textDecoration = "line-through"
        } else {
            taskText.style.color = "";
            taskText.style.textDecoration = "";
        }
    });
    tasks.sort((a, b) => {
        const aChecked = a.querySelector("input[type='checkbox']").checked;
        const bChecked = b.querySelector("input[type='checkbox']").checked;
        return aChecked - bChecked; // Moves checked tasks to bottom
    });

    tasks.forEach(task => taskcontainer.appendChild(task));
}

// Attach event listener to checkboxes
document.addEventListener("change", function(event) {
    if (event.target.matches("input[type='checkbox']")) {
        updateTaskList();
    }
});


// Once a task is checked make it go away(another clear button?, Or a switch we finna find out)
function clearTasks() {
    checkedTasks.forEach(task => task.remove()); // remove checed tasks
    checkedTasks.clear(); // clear the set
}

clearBttn.addEventListener("click", clearTasks);
// Make the Clear button clear everything
function clearAll() {
    tasks.innerHTML = "";
    tasks.clear();
}

clearAllBttn.addEventListener("click", clearAll);