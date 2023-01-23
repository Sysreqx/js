document.addEventListener("scroll", (event) => {
    const axisY = window.scrollY;
    // console.log(axisY);

    // header fixed / absolute
    let breakPoint1 = 60;

    let header = document.querySelector(".page-header");

    if (axisY < breakPoint1) {
        if (header.style.position !== 'absolute")') {
            header.classList.remove("header-on-scroll");
            // header.style.transition = "all, 50s, ease-in";
        }
    } else if (axisY >= breakPoint1) {
        if (header.style.position !== 'fixed")') {
            header.classList.add("header-on-scroll");
            // header.style.transition = "all, 50s, ease-in";
        }
    }
    // header-on-scroll

    // header nav indicate
    let breakPoint2 = document.querySelector(".screen-1").clientHeight - 60;
    let breakPoint3 = document.querySelector(".screen-2").clientHeight +
        document.querySelector(".screen-3").clientHeight +
        document.querySelector(".screen-4").clientHeight +
        breakPoint2;
    let breakPoint4 = document.querySelector(".screen-5").clientHeight +
        document.querySelector(".screen-6").clientHeight +
        breakPoint3;
    let breakPoint5 = document.querySelector(".screen-7").clientHeight +
        document.querySelector(".screen-8").clientHeight +
        document.querySelector(".screen-9").clientHeight +
        breakPoint4;

    let navs = document.querySelectorAll(".nav-item");

    if (axisY < breakPoint2) {
        navs.forEach(n => {
            n.classList.remove("nav-border");
        });
    }
    else if (axisY >= breakPoint2 && axisY < breakPoint3) {
        navs.forEach(n => {
            n.classList.remove("nav-border");
        });
        setTimeout('', 100);
        navs[0].classList.add("nav-border");
    } else if (axisY >= breakPoint3 && axisY < breakPoint4) {
        navs.forEach(n => {
            n.classList.remove("nav-border");
        });
        setTimeout('', 100);
        navs[1].classList.add("nav-border");
    } else if (axisY >= breakPoint4 && axisY < breakPoint5) {
        navs.forEach(n => {
            n.classList.remove("nav-border");
        });
        setTimeout('', 100);
        navs[2].classList.add("nav-border");
    } else if (axisY >= breakPoint5) {
        navs.forEach(n => {
            n.classList.remove("nav-border");
        });
        setTimeout('', 100);
        navs[3].classList.add("nav-border");
    }

});


const showMoreInformationDivs = () => {
    let moreDivs = document.querySelectorAll(".more");
    let moreTexts = document.querySelectorAll(".more-text");
    let moreCloseBtns = document.querySelectorAll(".more-close");

    for (let i = 0; i < moreDivs.length; i++) {
        moreDivs[i].addEventListener("click", (event) => {
            let {target} = event;

            // console.log(target);
            if (target.parentElement.parentElement.classList.contains("more-1")) {
                moreTexts[0].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-2")) {
                moreTexts[1].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-3")) {
                moreTexts[2].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-4")) {
                moreTexts[3].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-5")) {
                moreTexts[4].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-6")) {
                moreTexts[5].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-7")) {
                moreTexts[6].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-8")) {
                moreTexts[7].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-9")) {
                moreTexts[8].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-10")) {
                moreTexts[9].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-11")) {
                moreTexts[10].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-12")) {
                moreTexts[11].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-13")) {
                moreTexts[12].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-14")) {
                moreTexts[13].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-15")) {
                moreTexts[14].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-16")) {
                moreTexts[15].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-17")) {
                moreTexts[16].style.display = "flex";
            }
            if (target.parentElement.parentElement.classList.contains("more-18")) {
                moreTexts[17].style.display = "flex";
            }
        })
    }

    moreCloseBtns.forEach(el => {
        el.addEventListener("click", () => {
            moreTexts.forEach(el => {
                el.style.display = "none";
            })
        })
    })
};
showMoreInformationDivs();

// const addBorderToNavItem = () => {
//     let navs = document.querySelectorAll(".nav-item");
//     navs.forEach(n => {
//         n.addEventListener("click", (event) => {
//             let {target} = event;
//             if (target.tagName.toLowerCase() === "a") {
//                 navs.forEach(el => {
//                     el.classList.remove("nav-border");
//                 });
//                 setTimeout('', 5000);
//                 // console.log(target.parentElement.parentElement.parentElement);
//                 target.parentElement.parentElement.parentElement.classList.add("nav-border");
//             }
//         })
//     })
// }
// addBorderToNavItem();