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

    const renderTasks = () => {
        const taskList = document.querySelector(".tasks");
        taskList.innerHTML = tasks
            .filter(task => !(hideDoneTasks && task.done))
            .map((task, index) => `
                <li>
                    <span class="task-content" ${task.done ? 'style="text-decoration: line-through;"' : ""}>
                        ${task.content}
                    </span>
                    <button class="done" data-index="${index}">${task.done ? "✔" : ""}</button>
                    <button class="remove" data-index="${index}">🗑️</button>
                </li>
            `)
            .join("");
    };
    
    const bindEvents = () => {
        document.querySelectorAll(".remove").forEach(button => {
            button.addEventListener("click", () => removeTask(button.dataset.index));
        });
    
        document.querySelectorAll(".done").forEach(button => {
            button.addEventListener("click", () => toggleTaskDone(button.dataset.index));
        });
    };
    
    const renderButtons = () => {
        const buttonsContainer = document.querySelector(".buttons-container");
        const allTasksDone = tasks.every(task => task.done);
        
        if (tasks.length > 0) {
            buttonsContainer.style.display = "block";
            document.querySelector(".mark-all-done").style.display = allTasksDone 
            ? "none" : "inline-block";
        } else {
            buttonsContainer.style.display = "none";
        }
    };
    
    const render = () => {
        renderTasks();
        renderButtons();
        bindEvents();
    };

    
    const onFormSubmit = (event) => {
        event.preventDefault();
    
        const newTaskInput = document.querySelector(".newTask");
        const newTaskContent = newTaskInput.value.trim();
    
        if (newTaskContent === "") {
            newTaskInput.classList.add("input-error");
            return;
        }
    
        newTaskInput.classList.remove("input-error");
        addNewTask(newTaskContent);
        newTaskInput.value = "";
        newTaskInput.focus();
    };


    const init = () => {
        render();
    
        const form = document.querySelector(".form");
        form.addEventListener("submit", onFormSubmit);
    
        document.querySelector(".hide-done").addEventListener("click", toggleHideDoneTasks);
        document.querySelector(".mark-all-done").addEventListener("click", markAllTasksDone);
    };

    init();
};