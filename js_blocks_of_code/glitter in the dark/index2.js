document.addEventListener("scroll", (event) => {
    const axisY = window.scrollY;
    // console.log(axisY);

    let divHeight = document.querySelector(".box-1").clientHeight;

    // lh = h - 33%; lh / 5 = 13.2 %
    let breakPointStep = divHeight * 0.07;
    let breakPoint1 = breakPointStep;
    let breakPoint2 = breakPoint1 + breakPointStep;
    let breakPoint3 = breakPoint2 + breakPointStep;

    let div = document.querySelector(".box-1");

    if (axisY < breakPoint1) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/first-01.png")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/first-01.png")';
    } else if (axisY >= breakPoint1 && axisY < breakPoint2) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/first-02.jpg")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/first-02.jpg")';
    } else if (axisY >= breakPoint2 && axisY < breakPoint3) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/first-03.png")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/first-03.png")';
    } else if (axisY >= breakPoint3) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/first-03.png")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/first-03.png")';
    }

    breakPointStep = document.querySelector(".box-2").clientHeight * 0.132;
    let breakPoint4 = divHeight + breakPointStep;
    let breakPoint5 = breakPoint4 + breakPointStep;
    let breakPoint6 = breakPoint5 + breakPointStep;
    let breakPoint7 = breakPoint6 + breakPointStep;

    let secondImg = document.querySelector(".second_img");
    // elementor creates additional img inside
    secondImg = secondImg.querySelector("img");

    if (axisY < breakPoint4) {
        if (secondImg.src !== 'https://esquire.kz/wp-content/uploads/2016/12/021a0205v1.jpg')
            secondImg.src = 'https://esquire.kz/wp-content/uploads/2016/12/021a0205v1.jpg';
    } else if (axisY >= breakPoint4 && axisY < breakPoint5) {
        if (secondImg.src !== 'https://esquire.kz/wp-content/uploads/2016/12/second-02.jpg')
            secondImg.src = 'https://esquire.kz/wp-content/uploads/2016/12/second-02.jpg';
    } else if (axisY >= breakPoint5 && axisY < breakPoint6) {
        if (secondImg.src !== 'https://esquire.kz/wp-content/uploads/2016/12/second-03.jpg')
            secondImg.src = 'https://esquire.kz/wp-content/uploads/2016/12/second-03.jpg';
    } else if (axisY >= breakPoint6 && axisY < breakPoint7) {
        if (secondImg.src !== 'https://esquire.kz/wp-content/uploads/2016/12/second-04.jpg')
            secondImg.src = 'https://esquire.kz/wp-content/uploads/2016/12/second-04.jpg';
    } else if (axisY >= breakPoint7) {
        if (secondImg.src !== 'https://esquire.kz/wp-content/uploads/2016/12/second-05.jpg')
            secondImg.src = 'https://esquire.kz/wp-content/uploads/2016/12/second-05.jpg';
    }
    //
    // console.log(secondImg);
    // console.log(axisY);

});
