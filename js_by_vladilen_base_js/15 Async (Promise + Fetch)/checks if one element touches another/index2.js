let detectOverlap = (a, b) => {

    function getPositions(elem) {
        let pos = elem.getBoundingClientRect();
        return [pos.top, pos.bottom];
    }

    let pos1 = getPositions(a),
        pos2 = getPositions(b);

    // 1st if = scroll to bottom
    // 2nd if = scroll to top
    if (pos1[1] >= pos2[0] && pos1[1] <= pos2[1] ||
        pos1[0] <= pos2[1] && pos1[0] >= pos2[0]) {
        return true;
    }
};

let stickyBox = document.querySelector(".generation_slider");

document.addEventListener("scroll", (event) => {
    let genXArr = document.querySelectorAll(".gen-x");
    let genYArr = document.querySelectorAll(".gen-y");

    let genText = stickyBox.querySelector(".elementor-heading-title");

    for (let i = 0; i < genXArr.length; i++) {
        if (detectOverlap(stickyBox, genXArr[i])) {
            if (genText.innerText !== "Поколение X")
                genText.innerText = "Поколение X";
        }
    }

    for (let i = 0; i < genYArr.length; i++) {
        if (detectOverlap(stickyBox, genYArr[i])) {
            if (genText.innerText !== "Поколение Y")
                genText.innerText = "Поколение Y";
        }
    }
});
