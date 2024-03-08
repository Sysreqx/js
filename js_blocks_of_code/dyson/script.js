document.addEventListener("DOMContentLoaded", function () {
    let img1 = document.getElementById("rotableImage");
    let img2 = document.getElementById("rotableImage2");

    let imgs = [];
    imgs.push(img1, img2);

    let content = document.getElementById("creditsContent");

    // Initial image rotation
    let isRotated = false;

    // Rotate image on hover only if content is hidden
    imgs.forEach(i => {
        i.addEventListener("mouseenter", function () {
            if (!content.classList.contains("hiddenElem")) return;
            img1.style.transform = "rotate(135deg)";
        });
    });


    imgs.forEach(i => {
        i.addEventListener("mouseleave", function () {
            if (!content.classList.contains("hiddenElem")) return;
            if (!isRotated) {
                img1.style.transform = "rotate(0deg)";
            }
        });
    });


    // Rotate image and show content on click
    imgs.forEach(i => {
       i.addEventListener("click", function () {
           if (content.classList.contains("hiddenElem")) {
               img1.style.transform = "rotate(135deg)";
               content.classList.remove("hiddenElem");
               content.classList.add("visible"); // Add visible class for smooth transition
               isRotated = true;
           } else {
               img1.style.transform = "rotate(0deg)";
               content.classList.remove("visible"); // Remove visible class for smooth transition
               setTimeout(function () {
                   content.classList.add("hiddenElem");
               }, 300); // Delay hiding content for smooth transition
               isRotated = false;
           }
       });
    });
});
