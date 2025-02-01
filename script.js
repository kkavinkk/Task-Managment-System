// Add tasks
    const inputTask = document.querySelector(".add-task input")
    const taskBttn = document.querySelector(".add-task button")
    const tasks = document.querySelector("#taskList")
    // type in a task in the input box
    function addTask(newTask) { 
        const taskText = inputTask.value.trim();//get input value and delete extra space

        if (taskText === "") return; // stops from adding a task with nothing

        const label = document.createElement("label");
        label.classList.add("container");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = false; // Default unckecked

        const checkmark = document.createElement("div");
        checkmark.classList.add("checkmark");

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("tasks");
        taskDiv.textContent = taskText;

        label.appendChild(checkbox);
        label.appendChild(checkmark);
        label.appendChild(taskDiv);
        taskList.appendChild(label);

        inputTask.value = "";
        
    //Press the button to make the task show up below
    }
    taskBttn.addEventListener("click", addTask)
// Once a task is checked make it go away(another clear button?, Or a switch we finna find out)

// Make the Clear button clear everything