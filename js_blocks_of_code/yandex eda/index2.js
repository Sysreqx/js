document.addEventListener("scroll", (event) => {
    const axisY = window.scrollY;
    // console.log(axisY);

    let divHeight = document.querySelector(".box-1").clientHeight;

    // lh = h - 33%; lh / 5 = 13.2 %
    let breakPointStep = divHeight * 0.09;
    let breakPoint1 = breakPointStep;
    let breakPoint2 = breakPoint1 + breakPointStep;
    let breakPoint3 = breakPoint2 + breakPointStep;
    let breakPoint4 = breakPoint3 + breakPointStep;
    let breakPoint5 = breakPoint4 + breakPointStep;

    let div = document.querySelector(".box-1");

    if (axisY < breakPoint1) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/cover-01.jpg")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/cover-01.jpg")';
    } else if (axisY >= breakPoint1 && axisY < breakPoint2) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/cover-02.jpg")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/cover-02.jpg")';
    } else if (axisY >= breakPoint2 && axisY < breakPoint3) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/cover-03.jpg")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/cover-03.jpg")';
    } else if (axisY >= breakPoint3 && axisY < breakPoint4) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/cover-06.jpg")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/cover-06.jpg")';
    } else if (axisY >= breakPoint4 && axisY < breakPoint5) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/cover-08.jpg")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/cover-08.jpg")';
    } else if (axisY >= breakPoint5) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/cover-11.jpg")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/cover-11.jpg")';
    }

});