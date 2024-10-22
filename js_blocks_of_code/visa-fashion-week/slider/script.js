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

const swiperDesigner01 = new Swiper('.swiper-designer-01', {
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

    on: {
        init: function () {
            // Display the total number of slides
            document.getElementById('total-slides__designer-01').textContent = this.slides.length;
            // Display the current slide (starts at 1)
            document.getElementById('current-slide__designer-01').textContent = this.activeIndex + 1;
        },
        slideChange: function () {
            // Update the current slide number whenever the slide changes
            document.getElementById('current-slide__designer-01').textContent = this.activeIndex + 1;
        }
    }
});


const swiperDesigner02 = new Swiper('.swiper-designer-02', {
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

    on: {
        init: function () {
            // Display the total number of slides
            document.getElementById('total-slides__designer-02').textContent = this.slides.length;
            // Display the current slide (starts at 1)
            document.getElementById('current-slide__designer-02').textContent = this.activeIndex + 1;
        },
        slideChange: function () {
            // Update the current slide number whenever the slide changes
            document.getElementById('current-slide__designer-02').textContent = this.activeIndex + 1;
        }
    }
});


const swiperDesigner03 = new Swiper('.swiper-designer-03', {
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

    on: {
        init: function () {
            // Display the total number of slides
            document.getElementById('total-slides__designer-03').textContent = this.slides.length;
            // Display the current slide (starts at 1)
            document.getElementById('current-slide__designer-03').textContent = this.activeIndex + 1;
        },
        slideChange: function () {
            // Update the current slide number whenever the slide changes
            document.getElementById('current-slide__designer-03').textContent = this.activeIndex + 1;
        }
    }
});



const swiperDesigner04 = new Swiper('.swiper-designer-04', {
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

    on: {
        init: function () {
            // Display the total number of slides
            document.getElementById('total-slides__designer-04').textContent = this.slides.length;
            // Display the current slide (starts at 1)
            document.getElementById('current-slide__designer-04').textContent = this.activeIndex + 1;
        },
        slideChange: function () {
            // Update the current slide number whenever the slide changes
            document.getElementById('current-slide__designer-04').textContent = this.activeIndex + 1;
        }
    }
});



const swiperDesigner05 = new Swiper('.swiper-designer-05', {
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

    on: {
        init: function () {
            // Display the total number of slides
            document.getElementById('total-slides__designer-05').textContent = this.slides.length;
            // Display the current slide (starts at 1)
            document.getElementById('current-slide__designer-05').textContent = this.activeIndex + 1;
        },
        slideChange: function () {
            // Update the current slide number whenever the slide changes
            document.getElementById('current-slide__designer-05').textContent = this.activeIndex + 1;
        }
    }
});

