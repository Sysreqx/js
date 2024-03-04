let ageRestrictionBlock = document.querySelector(".ageRestrictionBlock");
let firstPage = document.querySelector(".firstPage");


document.addEventListener("click", (event) => {
    let {target} = event;

    // console.log(target);

    if (target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("ageBtn") ||
        target.parentElement.parentElement.parentElement.classList.contains("ageBtn")) {
        ageRestrictionBlock.classList.add("dn");
        firstPage.scrollIntoView();
    }
});

function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
    document.documentElement.scrollLeft -= (delta * scrollSpeed);
    document.body.scrollLeft -= (delta * scrollSpeed);
    document.body.scrollLeft -= (delta * scrollSpeed);
    e.preventDefault();
}

if (window.addEventListener) {
    // IE9, Chrome, Safari, Opera
    window.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
    // IE 6/7/8
    window.attachEvent("onmousewheel", scrollHorizontally);
}

function replaceVerticalScrollByHorizontal( event ) {
    if ( event.deltaY !== 0 ) {
        window.scroll(window.scrollX + event.deltaY * 2, window.scrollY );
        event.preventDefault();
    }
}

window.addEventListener( 'wheel', replaceVerticalScrollByHorizontal );

const mediaQuery = window.matchMedia( '(min-width: 1023)' );

let container = document.querySelector('.container');
let scrollLine = document.querySelector('.scroll');

let divLength = document.querySelector('.firstPage').offsetWidth;
// console.log(divLength);

if ( window.innerWidth > 1024 ) {
    container.addEventListener('wheel', (e)=> {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
        scrollLine.style.width = container.scrollLeft / 4 + 'px';
    })

    document.addEventListener("click", (event) => {
        let {target} = event;

        // console.log(target);

        if (target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("firstBtnCls") ||
            target.parentElement.parentElement.parentElement.classList.contains("firstBtnCls")) {
            container.scrollLeft = divLength;
            scrollLine.style.width = container.scrollLeft / 4 + 'px';
        }

        if (target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("secondBtnCls") ||
            target.parentElement.parentElement.parentElement.classList.contains("secondBtnCls")) {
            container.scrollLeft = divLength * 2;
            scrollLine.style.width = container.scrollLeft / 4 + 'px';
        }

        if (target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("thirdBtnCls") ||
            target.parentElement.parentElement.parentElement.classList.contains("thirdBtnCls")) {
            container.scrollLeft = divLength * 3;
            scrollLine.style.width = container.scrollLeft / 4 + 'px';
        }


    });
}



