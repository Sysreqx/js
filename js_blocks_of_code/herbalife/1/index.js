// you only need this function
function sticky(elem){
    console.log(elem);

    elem.parentElement.addEventListener("scroll", () => {
        console.log(elem.parentElement.scrollTop);
        elem.style.transform = "translateY("+elem.parentElement.scrollTop+"px)";
    });
}

function stickY(elem){
    console.log(elem);

    elem.parentElement.parentElement.addEventListener("scroll", () => {
        elem.style.transform = "translateY(-"+elem.parentElement.parentElement.scrollTop+"px)";
    });
}


// how to make it work:
// get the element you want to be sticky
let el = document.querySelector(".text");
// give the element as argument, done.
let ee = document.querySelector(".text_inner_right");
sticky(el);
stickY(ee);