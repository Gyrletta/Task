{
    let tasks = [];
    let hideDoneTasks = false;

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            {
                ...tasks[taskIndex],
                done: !tasks[taskIndex].done,
            },
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const addNewTask = (newTaskContent) => {
        tasks = [...tasks, { content: newTaskContent, done: false }];
        render();
    };

    const markAllTasksDone = () => {
        tasks = tasks.map(task => ({ ...task, done: true }));
        render();
    };

    const toggleHideDoneTasks = () => {
        hideDoneTasks = !hideDoneTasks;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");
        
        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

    };

    

    const render = () => {
        let htmlString = "";

        for(const task of tasks) {
            if (hideDoneTasks && task.done) continue;

            htmlString += `
            <li${task.done ? " style=\"text-decoration: line-through\"" : ""}>
                ${task.content}
                <button class="js-done"> ✅</button>
                <button class="js-remove">🗑️</button>
            </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;


        const buttonsContainer = document.querySelector(".js-buttons-container");
        const allTasksDone = tasks.every(task => task.done);

        if (tasks.length > 0) {
            buttonsContainer.style.display = "block"; 
            document.querySelector(".js-mark-all-done").style.display = allTasksDone ? "none" : "inline-block";
        } else {
            buttonsContainer.style.display = "none"; 
        };

        bindEvents();
    };

    
    const onFormSubmit = (event) => {
        event.preventDefault();
    
        const newTaskInput = document.querySelector(".js-newTask");
        const newTaskContent = newTaskInput.value.trim();
    
        if (newTaskContent === "") {
            newTaskInput.classList.add("input-error"); 
            return;
        };
    
        newTaskInput.classList.remove("input-error"); 
        addNewTask(newTaskContent);
        newTaskInput.value = "";
        newTaskInput.focus();
    };


    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

        document.querySelector(".js-hide-done").addEventListener("click", toggleHideDoneTasks);
        document.querySelector(".js-mark-all-done").addEventListener("click", markAllTasksDone);
    };

    init();
};