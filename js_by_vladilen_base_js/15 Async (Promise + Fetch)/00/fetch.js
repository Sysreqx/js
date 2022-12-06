const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const createTodoElement = (text) => {
    const todoElement = document.createElement("li");
    const todoElementAnchor = document.createElement("a");
    todoElementAnchor.href = "#";
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);

    return todoElement;
}

const toggleElement = () => {
    const loaderHTML = document.querySelector("#loader");
    const isHidden = loaderHTML.hasAttribute("hidden");
    if (isHidden) {
        loaderHTML.removeAttribute("hiddenn");
    } else {
        loaderHTML.setAttribute("hidden", "");
    }
}

const dataContainer = document.querySelector("#data-container");

const getAllTodos = () => {
    const result = fetch(TODOS_URL, {
        method: "GET",
    });
    console.log(result);

    result
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка запроса");
            }
            return response.json();
        })
        .then(todos => {
            todos.forEach((todo) => {
                const todoHTML = createTodoElement(todo.title);
                dataContainer.append(todoHTML);
            })
        })
        .catch(error => {
            console.log("error", error);
        });
}

getAllTodos();