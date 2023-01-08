document.addEventListener("scroll", (event) => {
    const axisY = window.scrollY;
    // console.log(axisY);

    let divHeight = document.querySelector(".box-1").clientHeight;

    // lh = h - 33%; lh / 5 = 13.2 %
    // let breakPointStep = divHeight * 0.132;
    let breakPointStep = divHeight * 0.07;
    let breakPoint1 = breakPointStep;
    let breakPoint2 = breakPoint1 + breakPointStep;
    let breakPoint3 = breakPoint2 + breakPointStep;

    let div = document.querySelector(".box-1");

    if (axisY < breakPoint1) {
        if (div.style.backgroundImage !== 'url("a-01.jpg")')
            div.style.backgroundImage = 'url("a-01.jpg")';
    } else if (axisY >= breakPoint1 && axisY < breakPoint2) {
        if (div.style.backgroundImage !== 'url("a-02.jpg")')
            div.style.backgroundImage = 'url("a-02.jpg")';
    } else if (axisY >= breakPoint2 && axisY < breakPoint3) {
        if (div.style.backgroundImage !== 'url("a-03.jpg")')
            div.style.backgroundImage = 'url("a-03.jpg")';
    } else if (axisY >= breakPoint3) {
        if (div.style.backgroundImage !== 'url("a-04.jpg")')
            div.style.backgroundImage = 'url("a-04.jpg")';
    }

    breakPointStep = document.querySelector(".box-2").clientHeight * 0.132;
    let breakPoint4 = divHeight + breakPointStep;
    let breakPoint5 = breakPoint4 + breakPointStep;
    let breakPoint6 = breakPoint5 + breakPointStep;
    let breakPoint7 = breakPoint6 + breakPointStep;

    let secondImg = document.querySelector(".second_img");

    if (axisY < breakPoint4) {
        if (secondImg.src !== 'a-01.jpg')
            secondImg.src = 'a-01.jpg';
    } else if (axisY >= breakPoint4 && axisY < breakPoint5) {
        if (secondImg.src !== 'a-02.jpg')
            secondImg.src = 'a-02.jpg';
    } else if (axisY >= breakPoint5 && axisY < breakPoint6) {
        if (secondImg.src !== 'a-03.jpg')
            secondImg.src = 'a-03.jpg';
    } else if (axisY >= breakPoint6 && axisY < breakPoint7) {
        if (secondImg.src !== 'a-04.jpg')
            secondImg.src = 'a-04.jpg';
    } else if (axisY >= breakPoint7) {
        if (secondImg.src !== 'a-05.jpg')
            secondImg.src = 'a-05.jpg';
    }

    breakPointStep = document.querySelector(".box-3").clientHeight * 0.20;
    let div2height = document.querySelector(".box-2").clientHeight;
    let breakPoint8 = divHeight + div2height + breakPointStep;
    let breakPoint9 = breakPoint8 + breakPointStep;
    let breakPoint10 = breakPoint9 + breakPointStep;

    let div3 = document.querySelector(".box-3");

    if (axisY < breakPoint8) {
        if (div3.style.backgroundImage !== 'url("cover-01.jpg")')
            div3.style.backgroundImage = 'url("cover-01.jpg")';
    } else if (axisY >= breakPoint8 && axisY < breakPoint9) {
        if (div3.style.backgroundImage !== 'url("cover-02.jpg")')
            div3.style.backgroundImage = 'url("cover-02.jpg")';
    } else if (axisY >= breakPoint9) {
        if (div3.style.backgroundImage !== 'url("cover-03.jpg")')
            div3.style.backgroundImage = 'url("cover-03.jpg")';
    }

    // let box3 = document.querySelector(".box-3");
    // let box3Text = box3.querySelector(".width-50perc");
    // let addTranslateYBreakPoint = divHeight + div2height + box3.clientHeight * 0.70 - box3Text * 0.7 ;
    //
    // if (axisY > addTranslateYBreakPoint) {
    //     if (box3Text.style.transform !== 'translate(0, -30%)')
    //         box3Text.style.transform = 'translate(0, -30%)';
    // }
    // else
    //     box3Text.style.transform = 'translate(0, 0)';

    //
    // let addTranslateYBreakPoint = divHeight * 0.4 + div2height;
    // let addTranslateYBreakPoint2 = divHeight + div2height;
    // if (axisY >= addTranslateYBreakPoint && axisY <= addTranslateYBreakPoint2 + box3.clientHeight) {
    //     console.log(addTranslateYBreakPoint);
    //     console.log(axisY);
    //     box3Text.style.transform = `translate(0, ${addTranslateYBreakPoint - axisY}px)`;
    // }
    // else
    //     box3Text.style.transform = 'translate(0, 0)';

});
