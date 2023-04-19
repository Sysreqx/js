let buttons = document.querySelectorAll(".flip-box-button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        let {target} = event;

        // console.log(target);
        if (target.classList.contains("elementor-heading-title")) {
            target.parentElement.parentElement.parentElement.parentElement.classList.toggle("flip-box-inner-rotated");
        } else if (target.classList.contains("elementor-widget-container")) {
            target.parentElement.parentElement.parentElement.classList.toggle("flip-box-inner-rotated");
        }
    });
}

//slider