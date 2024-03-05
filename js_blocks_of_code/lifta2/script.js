const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: false,
    updateOnWindowResize: true,
    touchEventsTarget: 'container',
});

let popUp = document.querySelector(".popUp");
let closeBtn = document.querySelector(".closeButton");
let enrollBtns = document.querySelectorAll(".enrollBtn");

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

enrollBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        let {target} = event;

        // console.log(target);

        if (target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("enrollBtn")) {
            popUp.classList.toggle("dnO");
        }
        if (target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("enrollBtn")) {
            popUp.classList.toggle("dnO");
        }
        if (target.parentElement.parentElement.parentElement.parentElement.classList.contains("enrollBtn")) {
            popUp.classList.toggle("dnO");
        }
        if (target.parentElement.parentElement.parentElement.classList.contains("enrollBtn")) {
            popUp.classList.toggle("dnO");
        }
    });
});
