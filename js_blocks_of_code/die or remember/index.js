let loader = document.querySelector(".loader");

window.addEventListener("load", function() {
    loader.style.display = "none";
    let firstScreen = document.querySelector(".first-screen");
    firstScreen.classList.remove("display-me");
});


let lottie1 = document.querySelector(".lottie-click-me");
lottie1.addEventListener("click", () => {

    // setTimeout(function() { scrollToDiv(); }, 3000);

    let header = document.querySelector("#blockNav");
    let footer = document.querySelector("footer");

    let firstScreen = document.querySelector(".first-screen");
    let secondScreen = document.querySelector(".second-screen");
    let thirdScreen = document.querySelector(".third-screen");

    setTimeout(function() {
        firstScreen.style.display = "none";
        secondScreen.classList.remove("display-me");
        thirdScreen.classList.remove("display-me");

        header.style.display = "block";
        footer.style.display = "block";

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, 3500);
});

// let firstScreen = document.querySelector(".first-screen");
// let firstScreenHeight =  firstScreen.clientHeight;
//
//
// document.addEventListener("scroll", (event) => {
//     const axisY = window.scrollY;
//     if (axisY > 0 && axisY < 10800) {
//         window.scrollTo({
//             top: 10800,
//             left: 0,
//             behavior: 'auto'
//         });
//     }
// });

// function scrollToDiv() {
//     let firstScreen = document.querySelector(".first-screen");
//     let firstScreenHeight =  firstScreen.clientHeight;
//     window.scrollTo({
//         top: firstScreenHeight,
//         left: 0,
//         behavior: 'smooth'
//     });
// }