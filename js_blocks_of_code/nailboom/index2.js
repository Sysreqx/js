let header = document.querySelector(".sticky-menu");
header.style.zIndex = "1000";


document.addEventListener("scroll", (event) => {
    const axisY = window.scrollY;
    // console.log(axisY);

    let box1 = document.querySelector(".box-1").clientHeight;
    let topDiv1 = document.querySelector(".topDiv1").clientHeight;
    let topDiv2 = document.querySelector(".topDiv2").clientHeight;

    // lh = h - 33%; lh / 5 = 13.2 %
    let breakPointStep = box1 * 0.1;
    let breakPoint1 = breakPointStep + topDiv1 + topDiv2;
    let breakPoint2 = breakPoint1 + breakPointStep;
    let breakPoint3 = breakPoint2 + breakPointStep;

    let div = document.querySelector(".box-1");

    if (axisY < breakPoint1) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/dana-5-1.png")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/dana-5-1.png")';
    } else if (axisY >= breakPoint1 && axisY < breakPoint2) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/dana-6.png")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/dana-6.png")';
    } else if (axisY >= breakPoint2 && axisY < breakPoint3) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/dana-1-1.png")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/dana-1-1.png")';
    } else if (axisY >= breakPoint3) {
        if (div.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/dana-1-1.png")')
            div.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/dana-1-1.png")';
    }

    breakPointStep = document.querySelector(".box-2").clientHeight * 0.132;
    let breakPoint4 = box1 + breakPointStep + topDiv1 + topDiv2;
    let breakPoint5 = breakPoint4 + breakPointStep;
    let breakPoint6 = breakPoint5 + breakPointStep;
    let breakPoint7 = breakPoint6 + breakPointStep;

    let secondImg = document.querySelector(".second_img");
    // elementor creates additional img inside
    secondImg = secondImg.querySelector("img");

    if (axisY < breakPoint4) {
        if (secondImg.src !== 'https://esquire.kz/wp-content/uploads/2016/12/dana-2.png')
            secondImg.src = 'https://esquire.kz/wp-content/uploads/2016/12/dana-2.png';
    } else if (axisY >= breakPoint4 && axisY < breakPoint5) {
        if (secondImg.src !== 'https://esquire.kz/wp-content/uploads/2016/12/dana-3.png')
            secondImg.src = 'https://esquire.kz/wp-content/uploads/2016/12/dana-3.png';
    } else if (axisY >= breakPoint5 && axisY < breakPoint6) {
        if (secondImg.src !== 'https://esquire.kz/wp-content/uploads/2016/12/dana-3.png')
            secondImg.src = 'https://esquire.kz/wp-content/uploads/2016/12/dana-3.png';
    } else if (axisY >= breakPoint6 && axisY < breakPoint7) {
        if (secondImg.src !== 'https://esquire.kz/wp-content/uploads/2016/12/dana-4.png')
            secondImg.src = 'https://esquire.kz/wp-content/uploads/2016/12/dana-4.png';
    }
    // else if (axisY >= breakPoint7) {
    //     if (secondImg.src !== 'https://esquire.kz/wp-content/uploads/2016/12/second-05.jpg')
    //         secondImg.src = 'https://esquire.kz/wp-content/uploads/2016/12/second-05.jpg';
    // }

    breakPointStep = document.querySelector(".box-3").clientHeight * 0.10;
    let box2 = document.querySelector(".box-2").clientHeight;
    let breakPoint8 = box1 + box2 + breakPointStep + topDiv1 + topDiv2;
    let breakPoint9 = breakPoint8 + breakPointStep;
    let breakPoint10 = breakPoint9 + breakPointStep;
    let breakPoint11 = breakPoint10 + breakPointStep;
    let breakPoint12 = breakPoint11 + breakPointStep;
    // let breakPoint10 = box1 * 2 + box2 + document.querySelector(".box-3").clientHeight * 0.10;

    let box3 = document.querySelector(".box-3");
    let alinaText1 = document.querySelector(".t1");
    let alinaText2 = document.querySelector(".t2");
    let alinaText3 = document.querySelector(".t3");



    if (axisY < breakPoint8) {
        if (box3.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/alina-2.png")')
            box3.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/alina-2.png")';
        alinaText2.style.display = "none";
        alinaText3.style.display = "none";
        alinaText1.style.display = "block";
    } else if (axisY >= breakPoint8 && axisY < breakPoint9) {
        if (box3.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/alina-3.png")')
            box3.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/alina-3.png")';
    } else if (axisY >= breakPoint9 && axisY < breakPoint10) {
        if (box3.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/alina-4.png")')
            box3.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/alina-4.png")';
        alinaText1.style.display = "none";
        alinaText3.style.display = "none";
        alinaText2.style.display = "block";
    }else if (axisY >= breakPoint10 && axisY < breakPoint11) {
        if (box3.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/alina-5.png")')
            box3.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/alina-5.png")';
    } else if (axisY >= breakPoint11 && axisY < breakPoint12) {
        if (box3.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/alina-6.png")')
            box3.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/alina-6.png")';
        alinaText1.style.display = "none";
        alinaText2.style.display = "none";
        alinaText3.style.display = "block";
    } else if (axisY >= breakPoint12) {
        if (box3.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/alina-1.png")')
            box3.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/alina-1.png")';
    }

    let box4 = document.querySelector(".box-4");
    breakPointStep = box4.clientHeight * 0.10;
    let breakPoint13 = box1 + box2 + box3.clientHeight + breakPointStep + topDiv1 + topDiv2;

    if (axisY < breakPoint13) {
        if (box4.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/alexand-3.png")')
            box4.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/alexand-3.png")';
    } else if (axisY >= breakPoint13) {
        if (box4.style.backgroundImage !== 'url("https://esquire.kz/wp-content/uploads/2016/12/alexand-1.png")')
            box4.style.backgroundImage = 'url("https://esquire.kz/wp-content/uploads/2016/12/alexand-1.png")';
    }

});
