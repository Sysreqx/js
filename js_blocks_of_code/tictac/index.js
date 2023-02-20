let playBackstage = document.querySelector("#play-backstage");
playBackstage.addEventListener("click", (event) => {
    let {target} = event;
    showSecondScreen();
})

function showSecondScreen() {
    let video = document.querySelector("#video-class");
    let videoText1 = document.querySelector("#video-header1");
    let videoText2 = document.querySelector("#video-header2");

    let slider = document.querySelector("#snd-bg--slider");
    let sliderHeader = document.querySelector("#snd-bg--video-header");

    video.style.transform = "translateX(-100vw)";
    videoText1.style.transform = "translateX(-100vw)";
    videoText2.style.transform = "translateX(-100vw)";

    slider.style.transform = "translateX(0)";
    slider.style.transform = "translateX(0)";
}

slideElements1();
slideElements2();
slideElements3();

function slideElements1() {
    let slider1 = document.querySelector(".slider1");

    let slider1Items = slider1.querySelectorAll(".slider1-item");
    // console.log(slider1Items.length);

    for (let i = 0; i < slider1Items.length; i++) {
        if (slider1Items[i].classList.contains("slide-inactive-down")) {
            slider1Items[i].classList.remove("slide-inactive-down"); // remove
            slider1Items[i].classList.add("slide-inactive"); // add
        }

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
                break;
            }

            slider1Items[i + 1].style.zIndex = "97";
            slider1Items[i + 1].classList.add("slide-active"); // add
            slider1Items[i + 1].classList.remove("slide-inactive"); //remove
            // console.log(`next ${i + 1}`);
            break;
        }
    }
    setTimeout(slideElements1, 3000);
}

function slideElements2() {
    let slider2 = document.querySelector(".slider2");

    let slider2Items = slider2.querySelectorAll(".slider2-item");

    for (let i = 0; i < slider2Items.length; i++) {
        if (slider2Items[i].classList.contains("slide-active")) {
            // console.log(`current ${i}`);
            slider2Items[i].classList.remove("slide-active");
            slider2Items[i].style.zIndex = "91";
            slider2Items[i].classList.add("slide-inactive");
            if (i >= slider2Items.length - 1) {
                slider2Items[0].style.zIndex = "97";
                slider2Items[0].classList.add("slide-active");
                slider2Items[0].classList.remove("slide-inactive");
                // console.log(`next 0`);
                break;
            }
            slider2Items[i + 1].style.zIndex = "97";
            slider2Items[i + 1].classList.add("slide-active");
            slider2Items[i + 1].classList.remove("slide-inactive");
            // console.log(`next ${i + 1}`);
            break;
        }
    }
    setTimeout(slideElements2, 4000);
}

function slideElements3() {
    let slider3 = document.querySelector(".slider3");

    let slider3Items = slider3.querySelectorAll(".slider3-item");
    // // console.log(slider3Items.length);

    for (let i = 0; i < slider3Items.length; i++) {
        if (slider3Items[i].classList.contains("slide-active")) {
            // console.log(`current ${i}`);
            slider3Items[i].classList.remove("slide-active");
            slider3Items[i].style.zIndex = "91";
            slider3Items[i].classList.add("slide-inactive");
            if (i >= slider3Items.length - 1) {
                slider3Items[0].style.zIndex = "97";
                slider3Items[0].classList.add("slide-active");
                slider3Items[0].classList.remove("slide-inactive");
                // console.log(`next 0`);
                break;
            }
            slider3Items[i + 1].style.zIndex = "97";
            slider3Items[i + 1].classList.add("slide-active");
            slider3Items[i + 1].classList.remove("slide-inactive");
            // console.log(`next ${i + 1}`);
            break;
        }
    }
    setTimeout(slideElements3, 5000);
}