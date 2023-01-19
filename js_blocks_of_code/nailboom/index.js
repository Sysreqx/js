document.addEventListener("scroll", (event) => {
    const axisY = window.scrollY;
    // console.log(axisY);

    let breakPoint1 = 60;

    let header = document.querySelector(".page-header");

    if (axisY < breakPoint1) {
        if (header.style.position !== 'absolute")') {
            header.style.position = 'absolute';
            header.style.background = "none";
            header.style.boxShadow = "none";
        }
    } else if (axisY >= breakPoint1) {
        if (header.style.position !== 'fixed")') {
            header.style.position = 'fixed';
            header.style.background = "#ffffff";
            header.style.boxShadow = "0 4px 2px -2px rgba(0, 0, 0, 0.1)";
        }
    }
});
