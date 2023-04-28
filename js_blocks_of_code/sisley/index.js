let ladies = document.querySelectorAll(".lady");
let sliderBullets = document.querySelectorAll(".button");
let sliderImages = document.querySelectorAll(".image");

// slider buttons click
for (let i = 0; i < sliderBullets.length; i++) {
    sliderBullets[i].addEventListener("click", (event) => {
        let {target} = event;

        // console.log(target.ariaLabel);
        if (target.classList.contains("button-1")) {
            if (target.classList.contains("button-active")) {

            } else {
                ladies.forEach(l => {
                    l.classList.add("display-none");
                    ladies[0].classList.remove("display-none");

                    sliderBullets.forEach(b => {
                        b.classList.remove("button-active");
                    })
                    target.classList.add("button-active");

                    sliderImages.forEach(el => {
                        el.classList.add("display-none");
                    })
                    sliderImages[0].classList.remove("display-none");
                })
            }
        }
        if (target.classList.contains("button-2")) {
            if (target.classList.contains("button-active")) {

            } else {
                ladies.forEach(l => {
                    l.classList.add("display-none");
                    ladies[1].classList.remove("display-none");

                    sliderBullets.forEach(b => {
                        b.classList.remove("button-active");
                    })
                    target.classList.add("button-active");


                    sliderImages.forEach(el => {
                        el.classList.add("display-none");
                    })
                    sliderImages[1].classList.remove("display-none");
                })
            }
        }
        if (target.classList.contains("button-3")) {
            if (target.classList.contains("button-active")) {

            } else {
                ladies.forEach(l => {
                    l.classList.add("display-none");
                    ladies[2].classList.remove("display-none");

                    sliderBullets.forEach(b => {
                        b.classList.remove("button-active");
                    })
                    target.classList.add("button-active");


                    sliderImages.forEach(el => {
                        el.classList.add("display-none");
                    })
                    sliderImages[2].classList.remove("display-none");
                })
            }
        }
        if (target.classList.contains("button-4")) {
            if (target.classList.contains("button-active")) {

            } else {
                ladies.forEach(l => {
                    l.classList.add("display-none");
                    ladies[3].classList.remove("display-none");

                    sliderBullets.forEach(b => {
                        b.classList.remove("button-active");
                    })
                    target.classList.add("button-active");


                    sliderImages.forEach(el => {
                        el.classList.add("display-none");
                    })
                    sliderImages[3].classList.remove("display-none");
                })
            }
        }
        if (target.classList.contains("button-5")) {
            if (target.classList.contains("button-active")) {

            } else {
                ladies.forEach(l => {
                    l.classList.add("display-none");
                    ladies[4].classList.remove("display-none");

                    sliderBullets.forEach(b => {
                        b.classList.remove("button-active");
                    })
                    target.classList.add("button-active");


                    sliderImages.forEach(el => {
                        el.classList.add("display-none");
                    })
                    sliderImages[4].classList.remove("display-none");
                })
            }
        }
    })

}

//girls images click

let sliderLadies = document.querySelectorAll(".slider-lady");

for (let i = 0; i < sliderLadies.length; i++) {
    sliderLadies[i].addEventListener("click", (event) => {
        let {target} = event;
        if (target.classList.contains("slider-lady-1") ||
            target.parentElement.classList.contains("slider-lady-1") ||
            target.parentElement.parentElement.classList.contains("slider-lady-1") ||
            target.parentElement.parentElement.parentElement.classList.contains("slider-lady-1")||
            target.parentElement.parentElement.parentElement.parentElement.classList.contains("slider-lady-1")) {
                sliderBullets[0].click();
        }

        if (target.classList.contains("slider-lady-2") ||
            target.parentElement.classList.contains("slider-lady-2") ||
            target.parentElement.parentElement.classList.contains("slider-lady-2") ||
            target.parentElement.parentElement.parentElement.classList.contains("slider-lady-2")||
            target.parentElement.parentElement.parentElement.parentElement.classList.contains("slider-lady-2")) {
                sliderBullets[1].click();
        }

        if (target.classList.contains("slider-lady-3") ||
            target.parentElement.classList.contains("slider-lady-3") ||
            target.parentElement.parentElement.classList.contains("slider-lady-3") ||
            target.parentElement.parentElement.parentElement.classList.contains("slider-lady-3")||
            target.parentElement.parentElement.parentElement.parentElement.classList.contains("slider-lady-3")) {
                sliderBullets[2].click();
        }

        if (target.classList.contains("slider-lady-4") ||
            target.parentElement.classList.contains("slider-lady-4") ||
            target.parentElement.parentElement.classList.contains("slider-lady-4") ||
            target.parentElement.parentElement.parentElement.classList.contains("slider-lady-4")||
            target.parentElement.parentElement.parentElement.parentElement.classList.contains("slider-lady-4")) {
                sliderBullets[3].click();
        }

        if (target.classList.contains("slider-lady-5") ||
            target.parentElement.classList.contains("slider-lady-5") ||
            target.parentElement.parentElement.classList.contains("slider-lady-5") ||
            target.parentElement.parentElement.parentElement.classList.contains("slider-lady-5")||
            target.parentElement.parentElement.parentElement.parentElement.classList.contains("slider-lady-5")) {
                sliderBullets[4].click();
        }
    })
}

// next, prev buttons
// let nextBtn = document.querySelector(".button-next");
// let prevBtn = document.querySelector(".button-prev");
//
// nextBtn.addEventListener("click", (event) => {
//     let {target} = event;
//     // console.log(target);
//
//     if (target.classList.contains("button-next") ||
//         target.parentElement.parentElement.parentElement.classList.contains("button-next")) {
//         sliderBullets.forEach(s => {
//             if (s.classList.contains("button-active") && s.classList.contains("button-1")) {
//
//             }
//         })
//     }
// })
