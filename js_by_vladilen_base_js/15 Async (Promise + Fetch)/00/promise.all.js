// Promise.all([
//     new Promise(), // fulfilled
//     new Promise(), // rejected // stopped here
//     new Promise()
// ]);

// fulfilled = if all (then branch)
// rejected = if one (catch branch)

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const todosIds = [4,10, 23, 55, 103];
const dataContainer = document.querySelector("#data-container");

const createTodoElement = (text) => {
    const todoElement = document.createElement("li");
    const todoElementAnchor = document.createElement("a");
    todoElementAnchor.href = "#";
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);

    return todoElement;
}

const getTodosByIds = (ids) => {
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));

  Promise.all(requests)
      .then((responses) => {
          const dataResults = responses.map((response) => response.json());
          return Promise.all(dataResults);
      })
      .then((todos) => {
          todos.forEach((todo) => {
              console.log(todo);
              const todoHtml = createTodoElement(todo.title);
              dataContainer.append(todoHtml);
          })
      })
      .catch((error) => {
          console.log(error);
      })
};

getTodosByIds(todosIds);