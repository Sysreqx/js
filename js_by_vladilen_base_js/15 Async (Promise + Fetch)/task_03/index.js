let url = "https://jsonplaceholder.typicode.com/photos";

let dataContainer = document.querySelector("#data-container");

let createPhotoItem = (photoObj) => {
    let li = document.createElement("li");
    li.classList.add("photo-item");

    let img = document.createElement("img");
    img.classList.add("photo-item__image");
    img.src = photoObj.url;

    let h3 = document.createElement("h3");
    h3.classList.add("photo-item__title");
    h3.innerText = photoObj.title;

    li.appendChild(img);
    li.appendChild(h3);

    console.log(li);
    return li;
}

let getFastestLoadedPhoto = (ids) => {
    const promises = ids.map(id => fetch(`${url}/${id}`));
    Promise.race(promises)
        .then(response => {
            return response.json();
        })
        .then(obj => {
            let photoItem = createPhotoItem(obj);
            dataContainer.appendChild(photoItem);
        })
        .catch(e => {
            console.log(e);
        })
        .finally(() => {
            // console.log("finally block");
        });
};

getFastestLoadedPhoto([60, 12, 55]);
