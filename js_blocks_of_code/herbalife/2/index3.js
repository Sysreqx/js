document.addEventListener("scroll", (event) => {
    const axisY = window.scrollY;
    // console.log(axisY);

    let section1 = document.querySelector(".section1").clientHeight;
    let section2 = document.querySelector(".section2").clientHeight;
    // 250 vh, 3 images .. 100 % / 5 = 20 % (0.2)
    let breakPointStep = section2 * 0.2;
    let breakPoint1 = section1 + breakPointStep;
    let breakPoint2 = breakPoint1 + breakPointStep;

    let div = document.querySelector(".section2BG");

    let showMe1 = document.querySelectorAll(".showMe1");
    let showMe2 = document.querySelectorAll(".showMe2");
    let showMe3 = document.querySelectorAll(".showMe3");

    if (axisY < breakPoint1) {
        if (div.style.backgroundImage !== 'url("https://harpersbazaar.kz/wp-content/uploads/2016/01/third1.jpg")')
            div.style.backgroundImage = 'url("https://harpersbazaar.kz/wp-content/uploads/2016/01/third1.jpg")';

        for (let i = 0; i < showMe1.length; i++) {
            if (showMe1[i].style.display !== "flex") {
                showMe2[i].style.display = "none";
                showMe3[i].style.display = "none";
                showMe1[i].style.display = "flex";
            }
        }

    } else if (axisY >= breakPoint1 && axisY < breakPoint2) {
        if (div.style.backgroundImage !== 'url("https://harpersbazaar.kz/wp-content/uploads/2016/01/third2.jpg")')
            div.style.backgroundImage = 'url("https://harpersbazaar.kz/wp-content/uploads/2016/01/third2.jpg")';

        for (let i = 0; i < showMe2.length; i++) {
            if (showMe2[i].style.display !== "flex") {
                showMe1[i].style.display = "none";
                showMe3[i].style.display = "none";
                showMe2[i].style.display = "flex";
            }
        }

    } else if (axisY >= breakPoint2) {
        if (div.style.backgroundImage !== 'url("https://harpersbazaar.kz/wp-content/uploads/2016/01/third3.jpg")')
            div.style.backgroundImage = 'url("https://harpersbazaar.kz/wp-content/uploads/2016/01/third3.jpg")';
        for (let i = 0; i < showMe3.length; i++) {
            if (showMe3[i].style.display !== "flex") {
                showMe2[i].style.display = "none";
                showMe1[i].style.display = "none";
                showMe3[i].style.display = "flex";
            }
        }
    }

});


// css
// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         document.querySelector(".section1Block1GreenBG").style.backgroundPosition = "-280% -50%";
//         document.querySelector(".section1Block1HumansBG").style.backgroundPosition = "100% 0";
//         document.querySelector(".section1Block1Header").style.fontSize = "90px";
//     } else {
//         document.querySelector(".section1Block1GreenBG").style.backgroundPosition = "-50% -50%";
//         document.querySelector(".section1Block1HumansBG").style.backgroundPosition = "100% 114%";
//         document.querySelector(".section1Block1Header").style.fontSize = "120px";
//     }
// }

// let x = window.matchMedia("(max-width: 1520px)")
// x.addEventListener("change", () => {
//     if (x.matches) { // If media query matches
//         document.querySelector(".section1Block1GreenBG").style.backgroundPosition = "-280% -50%";
//         document.querySelector(".section1Block1HumansBG").style.backgroundPosition = "100% 0";
//         document.querySelector(".section1Block1Header").style.fontSize = "90px";
//         document.querySelector(".section2LeftText").style.fontSize = "90px";
//     } else {
//         document.querySelector(".section1Block1GreenBG").style.backgroundPosition = "-50% -50%";
//         document.querySelector(".section1Block1HumansBG").style.backgroundPosition = "100% 114%";
//         document.querySelector(".section1Block1Header").style.fontSize = "120px";
//     }
// });


// /*/////////*/
// .section2LeftText .elementor-heading-title {
//     font-size: 90px;
// }
//
// .greenCircle {
//     max-height: 130px;
//     max-width: 130px;
//     height: 130px;
// }
//
// .greenCircle .showMe1 .elementor-heading-title {
//     font-size: 100px;
// }
//
// .section2RightText .showMe1Header > .elementor-heading-title,
// .section2RightText .showMe2Header > .elementor-heading-title,
// .section2RightText .showMe3Header > .elementor-heading-title {
//     font-size: 35px;
// }
//
// .section2RightText .showMe1Text .elementor-heading-title,
// .section2RightText .showMe2Text .elementor-heading-title,
// .section2RightText .showMe3Text .elementor-heading-title {
//     font-size: 21px;
// }
//
//
// /*/////////*/
// .section3Block1PurpleBG {
//     background-position: 1050px 42% !important;
// }
//
// .section3Block1WomanBG {
//     background-position: -8% 0 !important;
// }
//
// .section3Block1CircleQuart {
//     background-image: initial !important;
// }
//
// .section3Block1TextWrapper {
//     width: 70%;
// }
//
// .section3Block1TextWrapper .section3Block1Text .elementor-heading-title {
//     font-size: 21px;
// }
//
// .section3Block1ImgWrapper .elementor-heading-title {
//     width: 30%;
// }