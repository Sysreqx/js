const swiper = new Swiper('.swiper-main-01', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: "fade",
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    updateOnWindowResize: true,
    touchEventsTarget: 'container'
});

const swiper02 = new Swiper('.swiper-main-02', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 500,
    effect: "fade",

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: true,
    updateOnWindowResize: true,
    touchEventsTarget: 'container',

    // loop true
    // on: {
    //     init: function () {
    //         // Показываем общее количество слайдов (без учёта дубликатов)
    //         const realSlidesCount = this.slides.length - this.loopedSlides * 2; // Вычитаем дубликаты
    //         document.getElementById('total-slides').textContent = realSlidesCount + 2;
    //
    //         // Показываем текущий слайд (начинаем с 1)
    //         document.getElementById('current-slide').textContent = this.realIndex + 1;
    //     },
    //     slideChange: function () {
    //         // Обновляем текущий номер слайда (учитывая реальный индекс при лупе)
    //         document.getElementById('current-slide').textContent = this.realIndex + 1;
    //     }
    // }

    on: {
        init: function () {
            // Display the total number of slides
            document.getElementById('total-slides').textContent = this.slides.length;
            // Display the current slide (starts at 1)
            document.getElementById('current-slide').textContent = this.activeIndex + 1;
        },
        slideChange: function () {
            // Update the current slide number whenever the slide changes
            document.getElementById('current-slide').textContent = this.activeIndex + 1;
        }
    }
});

