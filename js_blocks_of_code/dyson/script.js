document.addEventListener("DOMContentLoaded", function () {
    var image = document.getElementById("image");
    var content = document.getElementById("content");

    // Initial image rotation
    var isRotated = false;

    // Rotate image on hover only if content is hidden
    image.addEventListener("mouseenter", function () {
        if (!content.classList.contains("hidden")) return;
        this.style.transform = "rotate(135deg)";
    });

    image.addEventListener("mouseleave", function () {
        if (!content.classList.contains("hidden")) return;
        if (!isRotated) {
            this.style.transform = "rotate(0deg)";
        }
    });

    // Rotate image and show content on click
    image.addEventListener("click", function () {
        if (content.classList.contains("hidden")) {
            this.style.transform = "rotate(135deg)";
            content.classList.remove("hidden");
            content.classList.add("visible"); // Add visible class for smooth transition
            isRotated = true;
        } else {
            this.style.transform = "rotate(0deg)";
            content.classList.remove("visible"); // Remove visible class for smooth transition
            setTimeout(function () {
                content.classList.add("hidden");
            }, 300); // Delay hiding content for smooth transition
            isRotated = false;
        }
    });
});
