let flipBoxes = document.querySelector(".flip-boxes");

flipBoxes.addEventListener("click", (event) => {
    let {target} = event;

    // console.log(target);

    // front
    if (target.parentElement.parentElement.parentElement.classList.contains("flip-box-inner")) {
        target.parentElement.parentElement.parentElement.classList.add("flip-box-inner-rotated");
    } else

    if (target.parentElement.parentElement.parentElement.parentElement.classList.contains("flip-box-inner")) {
        target.parentElement.parentElement.parentElement.parentElement.classList.add("flip-box-inner-rotated");
    } else

    if (target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("flip-box-inner")) {
        target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("flip-box-inner-rotated");
    } else

    if (target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("flip-box-inner")) {
        target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("flip-box-inner-rotated");
    } else

    // back
    if (target.parentElement.parentElement.classList.contains("flip-box-inner-rotated")) {
        target.parentElement.parentElement.classList.remove("flip-box-inner-rotated");
    }

    // second @@if needed, because it blocks first one with 5 parents
    if (target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("flip-box-inner-rotated") &&
        target.parentElement.parentElement.parentElement.parentElement.classList.contains("flip-box-back")) {
        target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("flip-box-inner-rotated");
    }

});

//
// let flipBoxInner1 = document.querySelector(".flip-box-inner");
// let flipBoxFront1 = document.querySelector(".flip-box-front");
// let flipBoxBack1 = document.querySelector(".flip-box-back");

// <img decoding="async" src="https://harpersbazaar.kz/wp-content/uploads/2016/04/rectangle-28-1.png" title="SISLEY" alt="SISLEY" loading="lazy">
// ------------------------------->4
//
// <div className="e-con-inner">
//     <div className="elementor-element elementor-element-5842f10 readmore1 elementor-widget elementor-widget-heading"
//          data-id="5842f10" data-element_type="widget" data-widget_type="heading.default">
//         <div className="elementor-widget-container">
//             <div className="elementor-heading-title elementor-size-default">Подробнее</div>
//         </div>
//     </div>
// </div>
// ------------------------------->3
//
// <div className="elementor-widget-container">
//     <div className="elementor-heading-title elementor-size-default">Подробнее</div>
// </div>
// ------------------------------->5
//
// <div className="elementor-heading-title elementor-size-default">Подробнее</div>
// ------------------------------->6


// when rotated
// ------------------------------->2 / 5
