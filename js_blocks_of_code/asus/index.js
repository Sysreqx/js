let mouse = document.querySelector(".mouse");
let mousePopUp = document.querySelector(".mouse__popup");

document.addEventListener("click", (event) => {
    let {target} = event;

    if (target.parentElement.parentElement.classList.contains("mouse") ||
        target.parentElement.parentElement.classList.contains("mouse__popup" ||
        target.parentElement.classList.contains("mouse__popup") ||
        target.classList.contains("mouse__popup") )
    ) {

    } else {
        mousePopUp.classList.add("dnO");
    }
});

mouse.addEventListener("mouseover", (event) => {
    let {target} = event;

    // console.log(target);

    if (target.parentElement.parentElement.classList.contains("mouse")) {
        mousePopUp.classList.remove("dnO");
    }
});

mouse.addEventListener("click", (event) => {
    let {target} = event;

    if (target.parentElement.parentElement.classList.contains("mouse")) {
        mousePopUp.classList.toggle("dnO");
    }
});
