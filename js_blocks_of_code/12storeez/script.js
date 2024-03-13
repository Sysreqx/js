const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // speed: 500,
    // effect: "fade",
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2000,
    },
    updateOnWindowResize: true,
    touchEventsTarget: 'container'
});


/*slider*/
function slide1(){
    let slideValue = document.getElementById("slider-1").value;
    document.getElementById("my-img-1").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}

function slide2(){
    let slideValue = document.getElementById("slider-2").value;
    document.getElementById("my-img-2").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}

let list = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
list.forEach(function(element) {
    element.setAttribute('href', 'https://harpersbazaar.kz/wp-content/uploads/2018/12/favicon.ico');
});