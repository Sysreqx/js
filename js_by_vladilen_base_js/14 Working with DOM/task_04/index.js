const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

for (let i = 0; i < tasks.length; i++) {

    // checkbox form
    let input = document.createElement("input");
    input.className = "checkbox-form__checkbox";
    input.type = "checkbox";
    input.id = `task-${tasks[i].id}`;

    let label = document.createElement("label");
    label.htmlFor = `task-${tasks[i].id}`;

    let checkboxForm = document.createElement("form");
    checkboxForm.className = "checkbox-form";
    checkboxForm.append(input);
    checkboxForm.append(label);


    let taskItemText = document.createElement("span");
    taskItemText.className = "task-item__text";
    taskItemText.innerText = tasks[i].text;


    let taskItemMainContent = document.createElement("div");
    taskItemMainContent.className = "task-item__main-content";
    taskItemMainContent.append(checkboxForm);
    taskItemMainContent.append(taskItemText);


    let taskItemDeleteButton = document.createElement("button");
    taskItemDeleteButton.classList.add("task-item__delete-button", "default-button", "delete-button");
    taskItemDeleteButton.dataset.deleteTaskId = tasks[i].id;
    taskItemDeleteButton.innerText = "Удалить";


    let taskItemMainContainer = document.createElement("div");
    taskItemMainContainer.className = "task-item__main-container";
    taskItemMainContainer.append(taskItemMainContent);
    taskItemMainContainer.append(taskItemDeleteButton);


    let taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.dataset.taskId = tasks[i].id;
    taskItem.append(taskItemMainContainer);

    let tasksList = document.querySelector(".tasks-list");
    tasksList.append(taskItem);
}

const createTaskBlock = document.querySelector(".create-task-block");
const taskNameInput = document.querySelector(".create-task-block__input");

taskNameInput.addEventListener("input", (event) => {
    const {target} = event;
    const {value} = target;
    const messageBlockFromDOM = document.querySelector('.error-message-block');

    if (!value) {
        let errorMessageBlock = document.createElement("span");
        errorMessageBlock.className = "error-message-block";
        errorMessageBlock.innerText = "Название задачи не должно быть пустым";
        createTaskBlock.append(errorMessageBlock);
    } else if (value && messageBlockFromDOM) {
        messageBlockFromDOM.remove();
    }
});

createTaskBlock.addEventListener("submit", (event) => {
    event.preventDefault();
    const {target} = event;
    const taskNameInput = target.taskName;
    const inputValue = taskNameInput.value;

    if (inputValue) {
        let taskId = Date.now();

        // checkbox form
        let input = document.createElement("input");
        input.className = "checkbox-form__checkbox";
        input.type = "checkbox";
        input.id = `task-${taskId}`;

        let label = document.createElement("label");
        label.htmlFor = `task-${taskId}`;

        let checkboxForm = document.createElement("form");
        checkboxForm.className = "checkbox-form";
        checkboxForm.append(input);
        checkboxForm.append(label);


        let taskItemText = document.createElement("span");
        taskItemText.className = "task-item__text";
        taskItemText.innerText = inputValue;


        let taskItemMainContent = document.createElement("div");
        taskItemMainContent.className = "task-item__main-content";
        taskItemMainContent.append(checkboxForm);
        taskItemMainContent.append(taskItemText);


        let taskItemDeleteButton = document.createElement("button");
        taskItemDeleteButton.classList.add("task-item__delete-button", "default-button", "delete-button");
        taskItemDeleteButton.dataset.deleteTaskId = taskId;
        taskItemDeleteButton.innerText = "Удалить";


        let taskItemMainContainer = document.createElement("div");
        taskItemMainContainer.className = "task-item__main-container";
        taskItemMainContainer.append(taskItemMainContent);
        taskItemMainContainer.append(taskItemDeleteButton);


        let taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.dataset.taskId = `${inputValue}`;
        taskItem.append(taskItemMainContainer);

        let tasksList = document.querySelector(".tasks-list");
        tasksList.append(taskItem);
    }
})