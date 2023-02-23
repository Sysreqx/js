let playBackstage = document.querySelector("#play-backstage");
let interviewBtn = document.querySelector("#interview-el");
let playBackstageMobile = document.querySelector(".backstage-mobile");
let interviewBtnMobile = document.querySelector(".read-interview-mobile");
playBackstage.addEventListener("click", (event) => {
    showSecondScreen();
});

playBackstageMobile.addEventListener("click", (event) => {
    showBackstageMobile();
});

interviewBtn.addEventListener("click", (event) => {
    showInterviewScreen();
});

interviewBtnMobile.addEventListener("click", (event) => {
    showInterviewMobile();
});

function changeVisibilityOnMobile(x) {
    let woman = document.querySelector("#woman");
    let mintOval = document.querySelector("#mint-oval");

    let tickTackBox = document.querySelector("#tictac-box");

    let sliderMobile = document.querySelector(".slider-mobile");

    if (x.matches) { // If media query matches
        woman.style.display = "none";
        mintOval.style.display = "none";

        tickTackBox.style.width = "11.5em";
        tickTackBox.style.top = "unset";
        tickTackBox.style.bottom = "6em";
        tickTackBox.style.right = "5.1em";

        sliderMobile.style.display = "flex";

    } else {
        woman.style.display = "unset";
        mintOval.style.display = "unset";
    }
}

let x = window.matchMedia("(max-width: 767px)")
// changeVisibilityOnMobile(x) // Call listener function at run time
// x.addListener(changeVisibilityOnMobile) // Attach listener function on state changes

function showBackstageMobile() {
    let sliderMobile = document.querySelector(".slider-mobile");
    sliderMobile.classList.remove("display-none");

    let interviewsMobile = document.querySelector(".interviews-mobile");
    interviewsMobile.classList.add("display-none");

    let joinMobile = document.querySelector(".join-mobile");
    joinMobile.style.width = "17em";
    joinMobile.style.bottom = "3.5em";
    joinMobile.style.right = "unset";
    joinMobile.style.top = "unset";

    let youtubeLogo = document.querySelector("#youtube-notmain");
    youtubeLogo.classList.remove("display-none");
    let youtubeLogoImg = document.querySelector("img");
    youtubeLogoImg.style.width = "85%";

    let logoMobile = document.querySelector(".logo-mobile");
    logoMobile.style.left = "50%";
    logoMobile.style.bottom = "9.5em";

    let videoHeader = document.querySelector(".video-header2-mobile");
    videoHeader.classList.add("display-none");

    let videoMobile = document.querySelector("#video-class-mobile");
    videoMobile.classList.add("display-none");

    let mintOval = document.querySelector(".mint-oval-mobile");
    mintOval.classList.add("display-none");

    let womanMobile = document.querySelector(".woman-mobile");
    womanMobile.classList.add("display-none");
}

function showSecondScreen() {
    let video = document.querySelector("#video-class");
    // let videoText1 = document.querySelector("#video-header1");
    let videoText2 = document.querySelector("#video-header2");

    let slider = document.querySelector("#snd-bg--slider");
    let sliderHeader = document.querySelector("#snd-bg--video-header");
    let joinYenlik = document.querySelector(".join-yenliktictac");

    let interviews = document.querySelector("#interviews");

    video.style.transform = "translateX(-100vw)";
    // videoText1.style.transform = "translateX(-100vw)";
    // videoText2.style.transform = "translateX(-100vw)";
    videoText2.style.display = "none";
    joinYenlik.style.left = "37em";
    joinYenlik.style.top = "34em";

    interviews.style.transform = "translateX(-300vw)";

    slider.style.transform = "translateX(0)";
    // sliderHeader.style.transform = "translateX(0)";
    sliderHeader.style.display = "none";

    // changeVisibilityOnMobile(x);
}

function changeVisibilityOnMobileInterview(x) {
    let woman = document.querySelector("#woman");
    let mintOval = document.querySelector("#mint-oval");

    let tickTackBox = document.querySelector("#tictac-box");

    let sliderMobile = document.querySelector(".slider-mobile");
    let interviews = document.querySelector("#interviews");

    if (x.matches) { // If media query matches
        woman.style.display = "none";
        mintOval.style.display = "none";

        tickTackBox.style.width = "11.5em";
        tickTackBox.style.top = "unset";
        tickTackBox.style.bottom = "6em";
        tickTackBox.style.right = "5.1em";

        sliderMobile.style.display = "none";
        interviews.style.transform = "translateX(-50%)";

    } else {
        woman.style.display = "unset";
        mintOval.style.display = "unset";
    }
}
// showInterviewScreen();
function showInterviewScreen() {
    let video = document.querySelector("#video-class");
    // let videoText1 = document.querySelector("#video-header1");
    let videoText2 = document.querySelector("#video-header2");

    let slider = document.querySelector("#snd-bg--slider");
    let sliderHeader = document.querySelector("#snd-bg--video-header");

    let interviews = document.querySelector("#interviews");

    let joinYenlik = document.querySelector(".join-yenliktictac");

    video.style.transform = "translateX(-100vw)";
    // videoText1.style.transform = "translateX(-100vw)";
    // videoText2.style.transform = "translateX(-100vw)";
    videoText2.style.display = "none";

    slider.style.transform = "translateX(-200vw)";
    // sliderHeader.style.transform = "translateX(-200vw)";
    sliderHeader.style.display = "none";

    joinYenlik.style.top = "37em";

    // interviews.style.transform = "translateX(-50%)"; // mobile
    interviews.style.transform = "translateX(0)"; // desk

    // changeVisibilityOnMobileInterview(x);
}

function showInterviewMobile() {
    let sliderMobile = document.querySelector(".slider-mobile");
    sliderMobile.classList.add("display-none");

    let interviewsMobile = document.querySelector(".interviews-mobile");
    interviewsMobile.classList.remove("display-none");

    let joinMobile = document.querySelector(".join-mobile");
    joinMobile.style.width = "17em";
    joinMobile.style.bottom = "3.5em";
    joinMobile.style.right = "unset";
    joinMobile.style.top = "unset";

    let logoMobile = document.querySelector(".logo-mobile");
    logoMobile.style.left = "50%";

    let youtubeLogo = document.querySelector(".youtube-notmain");
    youtubeLogo.classList.remove("display-none");
    let youtubeLogoImg = document.querySelector("img");
    youtubeLogoImg.style.width = "75%";

    let videoHeader = document.querySelector(".video-header2-mobile");
    videoHeader.classList.add("display-none");

    let videoMobile = document.querySelector("#video-class-mobile");
    videoMobile.classList.add("display-none");

    let mintOval = document.querySelector(".mint-oval-mobile");
    mintOval.classList.add("display-none");

    let womanMobile = document.querySelector(".woman-mobile");
    womanMobile.classList.add("display-none");
}

slideElements1();
slideElements2();
slideElements3();

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeInactiveDown1() {
    let slider1 = document.querySelector(".slider1");
    let slider1Items = slider1.querySelectorAll(".slider1-item");

    for (let j = 0; j < slider1Items.length; j++) {
        if (slider1Items[j].classList.contains("slide-inactive-down")) {
            slider1Items[j].classList.remove("slide-inactive-down"); // remove
            slider1Items[j].classList.add("slide-inactive"); // add
        }
    }
}

function removeInactiveDown2() {
    let slider2 = document.querySelector(".slider2");
    let slider2Items = slider2.querySelectorAll(".slider2-item");

    for (let j = 0; j < slider2Items.length; j++) {
        if (slider2Items[j].classList.contains("slide-inactive-down")) {
            slider2Items[j].classList.remove("slide-inactive-down"); // remove
            slider2Items[j].classList.add("slide-inactive"); // add
        }
    }
}

function removeInactiveDown3() {
    let slider3 = document.querySelector(".slider3");
    let slider3Items = slider3.querySelectorAll(".slider3-item");

    for (let j = 0; j < slider3Items.length; j++) {
        if (slider3Items[j].classList.contains("slide-inactive-down")) {
            slider3Items[j].classList.remove("slide-inactive-down"); // remove
            slider3Items[j].classList.add("slide-inactive"); // add
        }
    }
}
function slideElements1() {
    let slider1 = document.querySelector(".slider1");

    let slider1Items = slider1.querySelectorAll(".slider1-item");
    // console.log(slider1Items.length);

    for (let i = 0; i < slider1Items.length; i++) {

        if (slider1Items[i].classList.contains("slide-active")) {
            // console.log(`current ${i}`);
            slider1Items[i].classList.remove("slide-active"); // remove
            slider1Items[i].style.zIndex = "91";
            slider1Items[i].classList.add("slide-inactive-down"); // add

            if (i >= slider1Items.length - 1) {
                slider1Items[0].style.zIndex = "97";
                slider1Items[0].classList.add("slide-active"); // add
                slider1Items[0].classList.remove("slide-inactive"); //remove
                // console.log(`next 0`);

                setTimeout(removeInactiveDown1, 2000);

                break;
            }

            slider1Items[i + 1].style.zIndex = "97";
            slider1Items[i + 1].classList.add("slide-active"); // add
            slider1Items[i + 1].classList.remove("slide-inactive"); //remove
            // console.log(`next ${i + 1}`);


            setTimeout(removeInactiveDown1, 2000);

            break;
        }
    }
    let timeout = random(4000, 7000);
    setTimeout(slideElements1, timeout);
}

function slideElements2() {
    let slider2 = document.querySelector(".slider2");

    let slider2Items = slider2.querySelectorAll(".slider2-item");
    // console.log(slider2Items.length);

    for (let i = 0; i < slider2Items.length; i++) {

        if (slider2Items[i].classList.contains("slide-active")) {
            // console.log(`current ${i}`);
            slider2Items[i].classList.remove("slide-active"); // remove
            slider2Items[i].style.zIndex = "91";
            slider2Items[i].classList.add("slide-inactive-down"); // add

            if (i >= slider2Items.length - 1) {
                slider2Items[0].style.zIndex = "97";
                slider2Items[0].classList.add("slide-active"); // add
                slider2Items[0].classList.remove("slide-inactive"); //remove
                // console.log(`next 0`);

                setTimeout(removeInactiveDown2, 2000);

                break;
            }

            slider2Items[i + 1].style.zIndex = "97";
            slider2Items[i + 1].classList.add("slide-active"); // add
            slider2Items[i + 1].classList.remove("slide-inactive"); //remove
            // console.log(`next ${i + 1}`);


            setTimeout(removeInactiveDown2, 2000);

            break;
        }
    }
    let timeout = random(4000, 7000);
    setTimeout(slideElements2, timeout);
}

function slideElements3() {
    let slider3 = document.querySelector(".slider3");

    let slider3Items = slider3.querySelectorAll(".slider3-item");
    // console.log(slider3Items.length);

    for (let i = 0; i < slider3Items.length; i++) {

        if (slider3Items[i].classList.contains("slide-active")) {
            // console.log(`current ${i}`);
            slider3Items[i].classList.remove("slide-active"); // remove
            slider3Items[i].style.zIndex = "91";
            slider3Items[i].classList.add("slide-inactive-down"); // add

            if (i >= slider3Items.length - 1) {
                slider3Items[0].style.zIndex = "97";
                slider3Items[0].classList.add("slide-active"); // add
                slider3Items[0].classList.remove("slide-inactive"); //remove
                // console.log(`next 0`);

                setTimeout(removeInactiveDown3, 2000);

                break;
            }

            slider3Items[i + 1].style.zIndex = "97";
            slider3Items[i + 1].classList.add("slide-active"); // add
            slider3Items[i + 1].classList.remove("slide-inactive"); //remove
            // console.log(`next ${i + 1}`);


            setTimeout(removeInactiveDown3, 2000);

            break;
        }
    }
    let timeout = random(4000, 7000);
    setTimeout(slideElements3, timeout);
}

// Rythm sound button
showMediaButtons();
function showMediaButtons() {
    // let button1 = document.querySelector("#button1-mobile");
    // let buttons = document.querySelector("#buttons-mobile-inner");
    // button1.addEventListener("click", e => {
    //     buttons.classList.toggle("display-none");
    //     button1.classList.toggle("right-zero");
    //     console.log("button1");
    // });

    let buttonMobileClick = document.querySelector(".buttons--mobile");
    let Overlay = document.querySelector(".buttons-mobile-overlay");
    let buttonCloseOverlay = document.querySelector(".button-close-overlay");

    buttonMobileClick.addEventListener("click", e => {
        Overlay.classList.remove("display-none");
    });

    buttonCloseOverlay.addEventListener("click", e => {
        Overlay.classList.add("display-none");
    });

    let button1Desktop = document.querySelector("#button1");
    let button2 = document.querySelector("#button2");
    let button3 = document.querySelector("#button3");
    let button4 = document.querySelector("#button4");
    let button5 = document.querySelector("#button5");

    button1Desktop.addEventListener("click", e => {
        button2.classList.toggle("display-none");
        button3.classList.toggle("display-none");
        button4.classList.toggle("display-none");
        button5.classList.toggle("display-none");
    });
}

// mobile slider
const leftArrow = document.querySelector(".left-arrow"),
    rightArrow = document.querySelector(".right-arrow"),
    slider = document.querySelector(".slider-mobile--inner");

/**
 * @brief Scroll to the right
 */
function scrollRight() {
    if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft) {
        slider.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else {
        slider.scrollBy({
            left: window.innerWidth,
            behavior: "smooth"
        });
    }
}

/**
 * @brief Scroll to the left
 */
function scrollLeft() {
    slider.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth"
    });
}

// Auto slider
let timerId = setInterval(scrollRight, 7000);

/**
 * @brief Reset timer for scrolling right
 */
function resetTimer() {
    clearInterval(timerId);
    timerId = setInterval(scrollRight, 7000);
}

// Scroll Events
leftArrow.addEventListener("click", function (ev) {
        scrollLeft();
        resetTimer();
});

rightArrow.addEventListener("click", function (ev) {
        scrollRight();
        resetTimer();
});

// slider interview
// const sliderInterview = document.querySelector(".interviews");
//
// function scrollRightOnScrollY() {
//     if (sliderInterview.scrollWidth - sliderInterview.clientWidth === sliderInterview.scrollLeft) {
//         sliderInterview.scrollTo({
//             left: 0,
//             behavior: "smooth"
//         });
//     } else {
//         sliderInterview.scrollBy({
//             left: window.innerWidth,
//             behavior: "smooth"
//         });
//     }
// }
//
// /**
//  * @brief Scroll to the left On scroll
//  */
// function scrollLeftOnScrollY() {
//     sliderInterview.scrollBy({
//         left: -window.innerWidth,
//         behavior: "smooth"
//     });
// }


// колесико мышки
// document.onwheel = wheelMeFunc;
//
// function wheelMeFunc(event) {
//     event.preventDefault();
//
//     // Up wheel
//     if (event.deltaY < 0) {
//         slideInterview();
//     }
//
//     // Down wheel
//     else {
//         slideInterview();
//     }
// }

// A simple swipe detection on vanilla js
// let touchstartX = 0;
// let touchstartY = 0;
// let touchendX = 0;
// let touchendY = 0;
//
// const gestureZone = document.querySelector('.first-screen-bg-mobile');
//
// gestureZone.addEventListener('touchstart', function(event) {
//     touchstartX = event.changedTouches[0].screenX;
//     touchstartY = event.changedTouches[0].screenY;
// }, false);
//
// gestureZone.addEventListener('touchend', function(event) {
//     touchendX = event.changedTouches[0].screenX;
//     touchendY = event.changedTouches[0].screenY;
//     handleGesture();
// }, false);
//
// function handleGesture() {
//     if (touchendX < touchstartX) {
//         // console.log('Swiped left');
//     }
//
//     if (touchendX > touchstartX) {
//         // console.log('Swiped right');
//     }
//
//     if (touchendY < touchstartY) {
//         console.log('Swiped up');
//
//         slideInterviewMobile();
//     }
//
//     if (touchendY > touchstartY) {
//         console.log('Swiped down');
//
//         slideInterviewMobile();
//     }
//
//     if (touchendY === touchstartY) {
//         // console.log('Tap');
//     }
// }
// // A simple swipe detection on vanilla js
//
// function slideInterview() {
//     let sliderInterview = document.querySelector("#interviews");
//     // console.log(sliderInterview);
//     let interview = sliderInterview.querySelectorAll(".interview");
//     // console.log(interview.length);
//
//     for (let i = 0; i < interview.length; i++) {
//
//         if (interview[i].classList.contains("interview-active")) {
//             // console.log(`current ${i}`);
//             interview[i].classList.remove("interview-active"); // remove
//             interview[i].classList.add("interview-inactive"); // add
//             interview[i].style.zIndex = "91";
//             // interview[i].classList.add("slide-inactive-down"); // add
//
//             if (i >= interview.length - 1) {
//                 interview[0].style.zIndex = "97";
//                 interview[0].classList.add("interview-active"); // add
//                 interview[0].classList.remove("interview-inactive"); //remove
//                 // console.log(`next 0`);
//
//                 // setTimeout(removeInactiveDown1, 2000);
//
//                 break;
//             }
//
//             interview[i + 1].style.zIndex = "97";
//             interview[i + 1].classList.add("interview-active"); // add
//             interview[i + 1].classList.remove("interview-inactive"); //remove
//             // console.log(`next ${i + 1}`);
//
//
//             // setTimeout(removeInactiveDown1, 2000);
//
//             break;
//         }
//     }
//     // let timeout = random(4000, 7000);
//     // setTimeout(slideElements1, timeout);
// }
//
// function slideInterviewMobile() {
//     let sliderInterview = document.querySelector(".interviews-mobile");
//     // console.log(sliderInterview);
//     let interview = sliderInterview.querySelectorAll(".interview-mobile");
//     // console.log(interview.length);
//
//     for (let i = 0; i < interview.length; i++) {
//
//         if (interview[i].classList.contains("interview-active-mobile")) {
//             console.log(`current ${i}`);
//             interview[i].classList.remove("interview-active-mobile"); // remove
//             interview[i].classList.add("interview-inactive-mobile"); // add
//             interview[i].style.zIndex = "91";
//             // interview[i].classList.add("slide-inactive-down"); // add
//
//             if (i >= interview.length - 1) {
//                 interview[0].style.zIndex = "97";
//                 interview[0].classList.add("interview-active-mobile"); // add
//                 interview[0].classList.remove("interview-inactive-mobile"); //remove
//                 console.log(`next 0`);
//
//                 // setTimeout(removeInactiveDown1, 2000);
//
//                 break;
//             }
//
//             interview[i + 1].style.zIndex = "97";
//             interview[i + 1].classList.add("interview-active-mobile"); // add
//             interview[i + 1].classList.remove("interview-inactive-mobile"); //remove
//             console.log(`next ${i + 1}`);
//
//
//             // setTimeout(removeInactiveDown1, 2000);
//
//             break;
//         }
//     }
//     // let timeout = random(4000, 7000);
//     // setTimeout(slideElements1, timeout);
// }



