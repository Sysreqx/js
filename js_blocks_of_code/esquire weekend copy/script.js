document.addEventListener("DOMContentLoaded", function() {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // autoplay: false,
        autoplay: {
            delay: 5000,
        },
        updateOnWindowResize: true,
        touchEventsTarget: 'container'
    });


    const swiper1 = new Swiper('.swiper-1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10000,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        allowTouchMove: false,
        // allowSlidePrev: false,
        // allowSlideNext: false,
        updateOnWindowResize: true,
        touchEventsTarget: 'container'
    });


    const swiper2 = new Swiper('.swiper-2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 1000,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // autoplay: false,
        autoplay: {
            delay: 5000,
        },
        updateOnWindowResize: true,
        touchEventsTarget: 'container'
    });

    // let swiper1Elem = document.querySelector(".swiper-1");
    // console.log(swiper1Elem);
    let swiperBtns = document.querySelector(".swiper-1").querySelectorAll(".swiper-pagination-bullet");

    let pavilion1 = document.querySelector(".pavilion-1");
    let pavilion2 = document.querySelector(".pavilion-2");
    let pavilion3 = document.querySelector(".pavilion-3");

    let pavilionLineLeft = document.querySelector(".pavilion_line_left");
    let pavilionLineCenter = document.querySelector(".pavilion_line_center");
    let pavilionLineRight = document.querySelector(".pavilion_line_right");

    // mob
    let pavilionMob1 = document.querySelector(".pavilion-mob-1");
    let pavilionMob2 = document.querySelector(".pavilion-mob-2");
    let pavilionMob3 = document.querySelector(".pavilion-mob-3");

    pavilion1.addEventListener('click',() => {
        swiperBtns[0].click();
        pavilion2.style.color = "#000000";
        pavilion3.style.color = "#000000";
        pavilion1.style.color = "#FFFFFF";

        pavilionLineLeft.style.display = "initial";
        pavilionLineCenter.style.display = "none";
        pavilionLineRight.style.display = "none";
    });

    pavilion2.addEventListener('click',() => {
        swiperBtns[1].click();
        pavilion1.style.color = "#000000";
        pavilion3.style.color = "#000000";
        pavilion2.style.color = "#FFFFFF";

        pavilionLineLeft.style.display = "none";
        pavilionLineCenter.style.display = "initial";
        pavilionLineRight.style.display = "none";
    });

    pavilion3.addEventListener('click',() => {
        swiperBtns[2].click();
        pavilion1.style.color = "#000000";
        pavilion2.style.color = "#000000";
        pavilion3.style.color = "#FFFFFF";

        pavilionLineLeft.style.display = "none";
        pavilionLineCenter.style.display = "none";
        pavilionLineRight.style.display = "initial";
    });


    pavilionMob1.addEventListener('click',() => {
        swiperBtns[0].click();

        pavilionMob2.style.color = "#FFFFFF";
        pavilionMob3.style.color = "#FFFFFF";
        pavilionMob1.style.color = "#000000";

        pavilionMob2.style.background = "#000000";
        pavilionMob3.style.background = "#000000";
        pavilionMob1.style.background = "#FFFFFF";
    });
    pavilionMob2.addEventListener('click',() => {
        swiperBtns[1].click();

        pavilionMob1.style.color = "#FFFFFF";
        pavilionMob3.style.color = "#FFFFFF";
        pavilionMob2.style.color = "#000000";

        pavilionMob1.style.background = "#000000";
        pavilionMob3.style.background = "#000000";
        pavilionMob2.style.background = "#FFFFFF";
    });
    pavilionMob3.addEventListener('click',() => {
        swiperBtns[2].click();

        pavilionMob1.style.color = "#FFFFFF";
        pavilionMob2.style.color = "#FFFFFF";
        pavilionMob3.style.color = "#000000";

        pavilionMob1.style.background = "#000000";
        pavilionMob2.style.background = "#000000";
        pavilionMob3.style.background = "#FFFFFF";
    });


});

