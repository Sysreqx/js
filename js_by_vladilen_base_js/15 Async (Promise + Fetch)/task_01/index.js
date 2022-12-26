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

// let toggleLoader = () => {
//      let loader = document.querySelector("#loader");
//      if (loader)
// }

let promise = fetch(url, {
    method: "GET"
});

promise
    .then(response => {
        if (!response.ok)
            throw new Error("Ошибка запроса");

        return response.json();
    })
    .then(todos => {
        todos.forEach((todo) => {
            // console.log(todo);
            const innerHTML = createTodoElement(todo.name);
            dataContainer.append(innerHTML);
        })
    })
    .catch(error => {
        console.log("error", error)
    })
    .finally(() => {
        toggleLoader();
    });

