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
    const tasksList = document.querySelector(".tasks-list").querySelectorAll(".task-item__text");


    if (value && !messageBlockFromDOM) {
        tasksList.forEach((task, idx) => {
            if (task.innerText === value) {
                let errorMessageBlock = document.createElement("span");
                errorMessageBlock.className = "error-message-block";
                errorMessageBlock.innerText = "Название задачи не должно быть пустым";
                createTaskBlock.append(errorMessageBlock);
            }
        });
    }

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
    const tasksList = document.querySelector(".tasks-list").querySelectorAll(".task-item__text");

    let flag = true;

    tasksList.forEach((task, idx) => {
        if (task.innerText === inputValue) {
            flag = false;
        }
    });

    if (inputValue && flag) {
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
});


const createModalWindow = () => {
    let deleteModalCancelButton = document.createElement("button");
    deleteModalCancelButton.classList.add("delete-modal__button", "delete-modal__cancel-button");
    deleteModalCancelButton.innerText = "Отмена";

    let deleteModalConfirmButton = document.createElement("button");
    deleteModalConfirmButton.classList.add("delete-modal__button", "delete-modal__confirm-button");
    deleteModalConfirmButton.innerText = "Удалить";

    let deleteModalButtons = document.createElement("div");
    deleteModalButtons.className = "delete-modal__buttons";
    deleteModalButtons.append(deleteModalCancelButton);
    deleteModalButtons.append(deleteModalConfirmButton);

    let deleteModalQuestion = document.createElement("h3");
    deleteModalQuestion.className = "delete-modal__question";
    deleteModalQuestion.innerText = "Вы действительно хотите удалить эту задачу ?";

    let deleteModal = document.createElement("div");
    deleteModal.className = "delete-modal";
    deleteModal.append(deleteModalQuestion);
    deleteModal.append(deleteModalButtons);

    let modalOverlay = document.createElement("div");
    // modalOverlay.classList.add("modal-overlay", "modal-overlay_hidden");
    modalOverlay.classList.add("modal-overlay");
    modalOverlay.append(deleteModal);

    return modalOverlay;
}


const deleteTask = () => {
    // const tasksList = document.querySelector(".tasks-list");
    let itemToDel;
    document.addEventListener("click", (event) => {
        let {target} = event;

        if (target.classList.contains("task-item__delete-button")) {
            // const itemToDelId = target.closest(".task-item").dataset.taskId;
            itemToDel = target.closest(".task-item");
            document.body.append(createModalWindow());
        }

        if (target.classList.contains("delete-modal__button")) {
            let modalOverlay = document.querySelector(".modal-overlay");

            if (target.classList.contains("delete-modal__confirm-button")) {
                itemToDel.remove();
            }
            modalOverlay.remove();
        }

    });
};

deleteTask();


document.addEventListener("keydown", (event) => {
    const {key} = event;
    // console.log(key);
    if (key === "Tab") {
        let body = document.body;
        let taskItems = document.querySelectorAll(".task-item");
        let btns = document.querySelectorAll("button");

        if (body.style.background === "initial") {
            body.style.background = "#24292E";

            taskItems.forEach((elem) => {
                elem.style.color = "#FFFFFF"
            });

            btns.forEach((btn) => {
               btn.style.border = "1px solid #FFFFFF";
            });
        }
        else {
            body.style.background = "initial";

            taskItems.forEach((elem) => {
                elem.style.color = "initial"
            });

            btns.forEach((btn) => {
                btn.style.border = "none";
            });
        }
    }
});
