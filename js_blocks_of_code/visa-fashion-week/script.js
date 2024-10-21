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


//bg changer
// Получаем основной див
const mainDiv = document.getElementById('main-div');

// Получаем все дивы с классом hover-div
const hoverDivs = document.querySelectorAll('.hover-div');

hoverDivs.forEach(div => {
    // Добавляем событие mouseenter для изменения фона основного дива
    div.addEventListener('mouseenter', function() {
        const bg = this.getAttribute('data-bg');
        mainDiv.style.backgroundImage = bg;
    });
});
//bg changer