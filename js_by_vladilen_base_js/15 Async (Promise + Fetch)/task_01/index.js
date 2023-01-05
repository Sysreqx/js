let url = "https://jsonplaceholder.typicode.com/users";

let dataContainer = document.querySelector("#data-container");

let createTodoElement = (text) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.innerText = text;
    li.append(a);

    return li;
}

let promise = fetch(url, {
    method: "GET"
});

promise
    .then(response => {
        if (!response.ok)
            throw new Error("Ошибка запроса");

        return response.json();
    })
    .then(async (todos) => {
        setTimeout(() => {
            todos.forEach((todo) => {
                // console.log(todo);
                const innerHTML = createTodoElement(todo.name);
                dataContainer.append(innerHTML);
            });

            document.querySelector("#loader").style.display = "none";
        }, 1000);
    })
    .catch(error => {
        console.log("error", error)
    })
    .finally(() => {
        toggleLoader();
    });

