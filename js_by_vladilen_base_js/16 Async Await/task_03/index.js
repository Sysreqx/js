const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

const renderAlbums = async () => {
    try {
        const albums = await (await fetch(ALBUMS_URL)).json();

        let ul = document.querySelector(".data-container");

        // console.log(albums);

        albums.forEach(a => {
        let li = document.createElement("li");
            li.innerText = a.title;
            ul.appendChild(li);
        });

    } catch (e) {
        console.log(e, "Произошла ошибка в получении данных об альбомах...");
    } finally {
        let loadingSpan = document.querySelector(".loading-span");
        loadingSpan.style.display = "none";
    }
}
renderAlbums();