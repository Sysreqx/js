$('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    vertical:true,
    verticalHeight:295,
    vThumbWidth:50,
    loop:true,
    slideMargin: 0,
    thumbMargin:4,
    thumbItem: 6
});


//bg changer
// Получаем основной див
const mainDiv = document.getElementById('main-div');

// Получаем все дивы с классом hover-div
const hoverDivs = document.querySelectorAll('.hover-div');

hoverDivs.forEach(div => {
    // Добавляем событие mouseenter для изменения фона основного дива
    div.addEventListener('mouseenter', function() {
        mainDiv.style.backgroundImage = this.getAttribute('data-bg');

        hoverDivs.forEach(d => {
            d.style.border = "0px solid #fff";
        })
        div.style.border = "2px solid #fff";
    });
});

const mainDiv02 = document.getElementById('main-div-02');

// Получаем все дивы с классом hover-div
const hoverDivs02 = document.querySelectorAll('.hover-div-02');

hoverDivs02.forEach(div => {
    // Добавляем событие mouseenter для изменения фона основного дива
    div.addEventListener('mouseenter', function() {
        mainDiv02.style.backgroundImage = this.getAttribute('data-bg');

        hoverDivs02.forEach(d => {
            d.style.border = "0px solid #fff";
        })
        div.style.border = "2px solid #fff";
    });
});
//bg changer



//popups
// 1
let popupTrigger1 = document.querySelectorAll(".popup-trigger01");
let popupContainer1 = document.getElementById("popupContainer01");

popupTrigger1.forEach(p => {
    p.addEventListener("click", function () {
        popupContainer1.style.display = "block";
    });
});


let closeBtn1 = document.querySelector(".close-btn1");

closeBtn1.addEventListener("click", function () {
    closePopup1();
});

function closePopup1() {
    // Add the "hide-with-fade" class for smooth fade-out
    popupContainer1.classList.add("hide-with-fade");

    // Set a timeout to hide the popup after the animation completes
    setTimeout(function () {
        popupContainer1.style.display = "none";
        // Remove the "hide-with-fade" class for future openings
        popupContainer1.classList.remove("hide-with-fade");
    }, 500); // 500 milliseconds, should match the animation duration
}

// 1

// 02
let popupTrigger02 = document.querySelectorAll(".popup-trigger02");
let popupContainer02 = document.getElementById("popupContainer02");

popupTrigger02.forEach(p => {
    p.addEventListener("click", function () {
        popupContainer02.style.display = "block";
    });
});


let closeBtn02 = document.querySelector(".close-btn02");

closeBtn02.addEventListener("click", function () {
    closePopup02();
});

function closePopup02() {
    popupContainer02.classList.add("hide-with-fade");

    setTimeout(function () {
        popupContainer02.style.display = "none";
        popupContainer02.classList.remove("hide-with-fade");
    }, 500);
}


// 03
let popupTrigger03 = document.querySelectorAll(".popup-trigger03");
let popupContainer03 = document.getElementById("popupContainer03");

popupTrigger03.forEach(p => {
    p.addEventListener("click", function () {
        popupContainer03.style.display = "block";
    });
});


let closeBtn03 = document.querySelector(".close-btn03");

closeBtn03.addEventListener("click", function () {
    closePopup03();
});

function closePopup03() {
    popupContainer03.classList.add("hide-with-fade");

    setTimeout(function () {
        popupContainer03.style.display = "none";
        popupContainer03.classList.remove("hide-with-fade");
    }, 500);
}

// 04
let popupTrigger04 = document.querySelectorAll(".popup-trigger04");
let popupContainer04 = document.getElementById("popupContainer04");

popupTrigger04.forEach(p => {
    p.addEventListener("click", function () {
        popupContainer04.style.display = "block";
    });
});


let closeBtn04 = document.querySelector(".close-btn04");

closeBtn04.addEventListener("click", function () {
    closePopup04();
});

function closePopup04() {
    popupContainer04.classList.add("hide-with-fade");

    setTimeout(function () {
        popupContainer04.style.display = "none";
        popupContainer04.classList.remove("hide-with-fade");
    }, 500);
}


// 05
let popupTrigger05 = document.querySelectorAll(".popup-trigger05");
let popupContainer05 = document.getElementById("popupContainer05");

popupTrigger05.forEach(p => {
    p.addEventListener("click", function () {
        popupContainer05.style.display = "block";
    });
});


let closeBtn05 = document.querySelector(".close-btn05");

closeBtn05.addEventListener("click", function () {
    closePopup05();
});

function closePopup05() {
    popupContainer05.classList.add("hide-with-fade");

    setTimeout(function () {
        popupContainer05.style.display = "none";
        popupContainer05.classList.remove("hide-with-fade");
    }, 500);
}
// popups


// designers hover
let designer01 = document.querySelectorAll(".designer-bg-01");
let designer02 = document.querySelectorAll(".designer-bg-02");
let designer03 = document.querySelectorAll(".designer-bg-03");
let designer04 = document.querySelectorAll(".designer-bg-04");
let designer05 = document.querySelectorAll(".designer-bg-05");

// left: -2.5%;        left: -0.5%;
// top: -1%;           top: -0.1%;
popupTrigger1.forEach(trigger => {
    trigger.addEventListener("mouseover", () => {
        designer01.forEach(designer => {
            designer.style.left = "-2.5%"; //
            designer.style.top = "-1%"; //
        });
    });

    trigger.addEventListener("mouseout", () => {
        designer01.forEach(designer => {
            designer.style.left = "-0.5%"; //
            designer.style.top = "-0.1%"; //
        });
    });
});


popupTrigger02.forEach(trigger => {
    trigger.addEventListener("mouseover", () => {
        designer02.forEach(designer => {
            designer.style.left = "-2.5%"; //
            designer.style.top = "-1%"; //
        });
    });

    trigger.addEventListener("mouseout", () => {
        designer02.forEach(designer => {
            designer.style.left = "-0.5%"; //
            designer.style.top = "-0.1%"; //
        });
    });
});


popupTrigger03.forEach(trigger => {
    trigger.addEventListener("mouseover", () => {
        designer03.forEach(designer => {
            designer.style.left = "-2.5%"; //
            designer.style.top = "-1%"; //
        });
    });

    trigger.addEventListener("mouseout", () => {
        designer03.forEach(designer => {
            designer.style.left = "-0.5%"; //
            designer.style.top = "-0.1%"; //
        });
    });
});


popupTrigger04.forEach(trigger => {
    trigger.addEventListener("mouseover", () => {
        designer04.forEach(designer => {
            designer.style.left = "-2.5%"; //
            designer.style.top = "-1%"; //
        });
    });

    trigger.addEventListener("mouseout", () => {
        designer04.forEach(designer => {
            designer.style.left = "-0.5%"; //
            designer.style.top = "-0.1%"; //
        });
    });
});


popupTrigger05.forEach(trigger => {
    trigger.addEventListener("mouseover", () => {
        designer05.forEach(designer => {
            designer.style.left = "-2.5%"; //
            designer.style.top = "-1%"; //
        });
    });

    trigger.addEventListener("mouseout", () => {
        designer05.forEach(designer => {
            designer.style.left = "-0.5%"; //
            designer.style.top = "-0.1%"; //
        });
    });
});



// designers hover
