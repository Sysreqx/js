let ladies = document.querySelectorAll(".lady");
let sliderBullets = document.querySelectorAll(".swiper-pagination-bullet");

// slider buttons click
for (let i = 0; i < sliderBullets.length; i++) {
    sliderBullets[i].addEventListener("click", (event) => {
        let {target} = event;

        // console.log(target.ariaLabel);
        if (target.ariaLabel === "Go to slide 1") {
            if (target.classList.contains("swiper-pagination-bullet-active")) {

            } else {
                ladies.forEach(l => {
                    l.classList.add("display-none");
                    ladies[0].classList.remove("display-none");
                })
            }
        }
        if (target.ariaLabel === "Go to slide 2") {
            if (target.classList.contains("swiper-pagination-bullet-active")) {

            } else {
                ladies.forEach(l => {
                    l.classList.add("display-none");
                    ladies[1].classList.remove("display-none");
                })
            }
        }
        if (target.ariaLabel === "Go to slide 3") {
            if (target.classList.contains("swiper-pagination-bullet-active")) {

            } else {
                ladies.forEach(l => {
                    l.classList.add("display-none");
                    ladies[2].classList.remove("display-none");
                })
            }
        }
        if (target.ariaLabel === "Go to slide 4") {
            if (target.classList.contains("swiper-pagination-bullet-active")) {

            } else {
                ladies.forEach(l => {
                    l.classList.add("display-none");
                    ladies[3].classList.remove("display-none");
                })
            }
        }
        if (target.ariaLabel === "Go to slide 5") {
            if (target.classList.contains("swiper-pagination-bullet-active")) {

            } else {
                ladies.forEach(l => {
                    l.classList.add("display-none");
                    ladies[4].classList.remove("display-none");
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
