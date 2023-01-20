document.addEventListener("scroll", (event) => {
    const axisY = window.scrollY;
    // console.log(axisY);

    // header fixed / absolute
    let breakPoint1 = 60;

    let header = document.querySelector(".page-header");

    if (axisY < breakPoint1) {
        if (header.style.position !== 'absolute")') {
            header.style.position = 'absolute';
            header.style.background = "none";
            header.style.boxShadow = "none";
            // header.style.transition = "all, 50s, ease-in";
        }
    } else if (axisY >= breakPoint1) {
        if (header.style.position !== 'fixed")') {
            header.style.position = 'fixed';
            header.style.background = "#ffffff";
            header.style.boxShadow = "0 4px 2px -2px rgba(0, 0, 0, 0.1)";
            // header.style.transition = "all, 50s, ease-in";
        }
    }

    // header nav indicate

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

const addBorderToNavItem = () => {
    let navs = document.querySelectorAll(".nav-item");
    navs.forEach(n => {
        n.addEventListener("click", (event) => {
            let {target} = event;
            if (target.tagName.toLowerCase() === "a") {
                navs.forEach(el => {
                    el.classList.remove("nav-border");
                });
                // console.log(target.parentElement.parentElement.parentElement);
                target.parentElement.parentElement.parentElement.classList.add("nav-border");
            }
        })
    })
}
addBorderToNavItem();