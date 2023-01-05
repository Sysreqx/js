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

let getUsersByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${url}/${id}`));

    Promise.all(requests)
        .then((responses) => {
            const results = responses.map((response) => response.json());
            return Promise.all(results);
        })
        .then(users => {
            users.forEach(u => {
                let li = createTodoElement(u.name);
                dataContainer.append(li);
            });
        })
        .catch(e => {
            console.log(e);
        })
        .finally(() => {
            let loader = document.querySelector("#loader").style.display = "none";
        });

};

getUsersByIds([5, 6, 2, 1]);


