const carousel = document.querySelector('.ornament.swiper')

if (carousel) {
    const swiper = new Swiper(carousel, {
        slidesPerView: 1.5,
        speed: 1500,
        loop: true,
        watchSlidesProgress: true,

        autoplay: {
            delay: 1500,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            500: {
                slidesPerView: 4.25,
            }
        },
    })
}

const carousel2 = document.querySelector('.swiper-2.swiper')

if (carousel2) {
    const swiper2 = new Swiper(carousel2, {
        slidesPerView: 2,
        speed: 1500,
        loop: true,
        watchSlidesProgress: true,
        centeredSlides: true,
        initialSlide: 2,

        autoplay: false,
        spaceBetween: 20,


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            500: {
                slidesPerView: 2,
            }
        },
    })
}