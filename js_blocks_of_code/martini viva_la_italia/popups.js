document.addEventListener("DOMContentLoaded", function () {


// 1
    let popupTrigger1 = document.querySelectorAll(".popup-trigger1");
    let popupContainer1 = document.getElementById("popupContainer1");

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


    // 06
    let popupTrigger06 = document.querySelectorAll(".popup-trigger06");
    let popupContainer06 = document.getElementById("popupContainer06");

    popupTrigger06.forEach(p => {
        p.addEventListener("click", function () {
            popupContainer06.style.display = "block";
        });
    });


    let closeBtn06 = document.querySelector(".close-btn06");

    closeBtn06.addEventListener("click", function () {
        closePopup06();
    });

    function closePopup06() {
        popupContainer06.classList.add("hide-with-fade");

        setTimeout(function () {
            popupContainer06.style.display = "none";
            popupContainer06.classList.remove("hide-with-fade");
        }, 500);
    }

    // 07
    let popupTrigger07 = document.querySelectorAll(".popup-trigger07");
    let popupContainer07 = document.getElementById("popupContainer07");

    popupTrigger07.forEach(p => {
        p.addEventListener("click", function () {
            popupContainer07.style.display = "block";
        });
    });


    let closeBtn07 = document.querySelector(".close-btn07");

    closeBtn07.addEventListener("click", function () {
        closePopup07();
    });

    function closePopup07() {
        popupContainer07.classList.add("hide-with-fade");

        setTimeout(function () {
            popupContainer07.style.display = "none";
            popupContainer07.classList.remove("hide-with-fade");
        }, 500);
    }

    // 08
    let popupTrigger08 = document.querySelectorAll(".popup-trigger08");
    let popupContainer08 = document.getElementById("popupContainer08");

    popupTrigger08.forEach(p => {
        p.addEventListener("click", function () {
            popupContainer08.style.display = "block";
        });
    });


    let closeBtn08 = document.querySelector(".close-btn08");

    closeBtn08.addEventListener("click", function () {
        closePopup08();
    });

    function closePopup08() {
        popupContainer08.classList.add("hide-with-fade");

        setTimeout(function () {
            popupContainer08.style.display = "none";
            popupContainer08.classList.remove("hide-with-fade");
        }, 500);
    }

    // 09
    let popupTrigger09 = document.querySelectorAll(".popup-trigger09");
    let popupContainer09 = document.getElementById("popupContainer09");

    popupTrigger09.forEach(p => {
        p.addEventListener("click", function () {
            popupContainer09.style.display = "block";
        });
    });


    let closeBtn09 = document.querySelector(".close-btn09");

    closeBtn09.addEventListener("click", function () {
        closePopup09();
    });

    function closePopup09() {
        popupContainer09.classList.add("hide-with-fade");

        setTimeout(function () {
            popupContainer09.style.display = "none";
            popupContainer09.classList.remove("hide-with-fade");
        }, 500);
    }

});

