const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: false,
    updateOnWindowResize: true,
    touchEventsTarget: 'container',
});

let popUp = document.querySelector(".popUp");
let closeBtn = document.querySelector(".closeButton");
let enrollBtn = document.querySelector(".enrollBtn");

closeBtn.addEventListener("click", (event) => {
    let {target} = event;

    // console.log(target);

    if (target.parentElement.parentElement.classList.contains("closeButton")) {
        popUp.classList.toggle("dnO");
    }
    if (target.parentElement.classList.contains("closeButton")) {
        popUp.classList.toggle("dnO");
    }
});

enrollBtn.addEventListener("click", (event) => {
    let {target} = event;

    // console.log(target);

    if (target.parentElement.parentElement.classList.contains("closeButton")) {
        popUp.classList.toggle("dnO");
    }
    if (target.parentElement.classList.contains("closeButton")) {
        popUp.classList.toggle("dnO");
    }
});