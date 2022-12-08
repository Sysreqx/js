let detectOverlap = (a, b) => {

    function getPositions(elem) {
        let pos = elem.getBoundingClientRect();
        return [pos.top, pos.bottom];
    }

    // function getHeight(elem) {
    //     return elem.clientHeight;
    // }
    //
    // let pos2Height = getHeight(b);

    let pos1 = getPositions(a),
        pos2 = getPositions(b);

    console.log(pos1);
    console.log(pos2);

    // 1st if = scroll to bottom
    // 2nd if = scroll to top
    if (pos1[1] >= pos2[0] && pos1[1] <= pos2[1] ||
        pos1[0] <= pos2[1] && pos1[0] >= pos2[0]) {
        return true;
    }
};

let stickyBox = document.querySelector(".sticky");

document.addEventListener("scroll", (event) => {
    let ee = document.querySelector(".relative");

    if (detectOverlap(stickyBox, ee)) {
        stickyBox.innerText = "EEEEEEEE";
    } else {
        stickyBox.innerText = "WWWWWWWW";
    }
});





