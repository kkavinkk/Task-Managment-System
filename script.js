// Add tasks
    const inputTask = document.querySelector(".add-task input")
    const taskBttn = document.querySelector(".add-task button")
    const tasks = document.querySelector("#taskList")
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
                checkedTasks.add(label);
            }
        });



        inputTask.value = ""; // resets task input to blank
    }
    //Press the button to make the task show up below
    taskBttn.addEventListener("click", addTask) // when the button is pressed but it down below
// Once a task is checked make it go away(another clear button?, Or a switch we finna find out)
    function clearTasks(checkbox) {
        if (checkbox = false){
            doneTasks
        }
    }
// Make the Clear button clear everything