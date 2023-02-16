let gid = document.querySelector(".gid");

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

// let topPx = getOffset(gid).top;
//
// for (let i = topPx; i > 84; i--) {
//     if (i < 85) break;
//     gid.style.top = `${i}px`;
//     console.log(i);
//
// }
function huyak(wws) {
    let start = Date.now(); // запомнить время начала

    let timer = setInterval(function () {
        // сколько времени прошло с начала анимации?
        let timePassed = Date.now() - start;

        if (timePassed >= 500) {
            clearInterval(timer); // закончить анимацию через 2 секунды
            return;
        }

        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        draw(timePassed);

    }, 20);

// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
    function draw(timePassed) {
        // if (gid.style.top < 85) {
        //     timePassed = 2000;
        //     return;
        // }
        gid.style.top = wws - timePassed / 5 + 'px';
        console.log(wws - timePassed / 5);
    }

}

let wws = gid.style.top;
huyak(wws);

@media only screen and (max-width: 1439px) {
    selector {
        height: 100%;
    }
}




selector {

}

@media only screen and (max-width: 1439px) {
    selector {

    }
}

@media only screen and (max-width: 1536px) {
    selector {

    }
}

@media only screen and (max-width: 1370px) {
    selector {

    }
}


@media only screen and (max-width: 1024px) {
    selector {

    }
}



@media only screen and (max-width: 767px) {
    selector {

    }
}


let hattaTop = document.querySelector(".hatta-top");
let hattaBottom = document.querySelector(".hatta-bottom");

let windowHeight = window.innerHeight;

let hattaBottomHeight = hattaBottom.clientHeight;
hattaTop.style.minHeight = windowHeight - hattaBottomHeight + "px";

// hattaTop = document.querySelector(".hatta-top");
// hattaTopHeight = hattaTop.clientHeight;
// console.log(hattaTopHeight);








