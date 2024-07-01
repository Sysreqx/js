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
        fixedBtn.classList.remove("dnO");
        fixedBtnMob.classList.remove("dnO");
        fixedBtnContainer.classList.remove("dnO");
    }
    if (target.parentElement.classList.contains("closeButton")) {
        popUp.classList.toggle("dnO");
        fixedBtn.classList.remove("dnO");
        fixedBtnMob.classList.remove("dnO");
        fixedBtnContainer.classList.remove("dnO");
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

let fixedBtn = document.querySelector(".fixedBtn");
let fixedBtnMob = document.querySelector(".fixedBtnMob");
let fixedBtnContainer = document.querySelector(".fixedBtnContainer");
fixedBtn.addEventListener("click", (event) => {
    let {target} = event;

    // console.log(target);

    popUp.classList.toggle("dnO");
    fixedBtn.classList.add("dnO");
    fixedBtnContainer.classList.add("dnO");
});

fixedBtnMob.addEventListener("click", (event) => {
    let {target} = event;

    // console.log(target);

    popUp.classList.toggle("dnO");
    fixedBtnMob.classList.add("dnO");
    fixedBtnContainer.classList.add("dnO");
});




// let zapisDiv = document.querySelector(".zapis_div");
// let firstSection = document.querySelector(".first_section");
// let secondSection = document.getElementById("section2");
// let thirdSection = document.getElementById("section3");
// let fourthSection = document.getElementById("section4");
// let fifthSection = document.getElementById("section5");
// let lastSection = document.querySelector(".last_section");


// document.addEventListener("scroll", (event) => {
//     const axisY = window.scrollY;
//
//     if (firstSection.clientHeight + secondSection.clientHeight + thirdSection.clientHeight + fourthSection.clientHeight + fifthSection.clientHeight + lastSection.clientHeight / 2 < axisY) {
//         zapisDiv.style.display = "none";
//     }
// });
