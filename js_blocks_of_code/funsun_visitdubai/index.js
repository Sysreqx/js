let map = document.querySelector(".map");
let mapPhotos = document.querySelectorAll(".map_photo");

let mapPhotos1 = document.querySelectorAll(".map_photo_1");
let mapPhoto1_1 = document.querySelector(".map_photo_1_1");
let mapPhoto1_3 = document.querySelector(".map_photo_1_3");
let mapPhoto1_5 = document.querySelector(".map_photo_1_5");
let mapPhoto1_7 = document.querySelector(".map_photo_1_7");
let mapPhoto1_8 = document.querySelector(".map_photo_1_8");

let mapPhotos2 = document.querySelectorAll(".map_photo_2");
let mapPhoto2_1 = document.querySelector(".map_photo_2_1");
let mapPhoto2_2 = document.querySelector(".map_photo_2_2");
let mapPhoto2_3 = document.querySelector(".map_photo_2_3");
let mapPhoto2_4 = document.querySelector(".map_photo_2_4");

let mapPhotos3 = document.querySelectorAll(".map_photo_3");
let mapPhoto3_1 = document.querySelector(".map_photo_3_1");
let mapPhoto3_3 = document.querySelector(".map_photo_3_3");
let mapPhoto3_4 = document.querySelector(".map_photo_3_4");
let mapPhoto3_5 = document.querySelector(".map_photo_3_5");
let mapPhoto3_6 = document.querySelector(".map_photo_3_6");
let mapPhoto3_7 = document.querySelector(".map_photo_3_7");

let mapIcons = document.querySelectorAll(".map_icon");
let mapIcon1 = document.querySelector(".map_icon_1_1");
let mapIcon2 = document.querySelector(".map_icon_2_4");
let mapIcon3 = document.querySelector(".map_icon_3_7");

let mapLines = document.querySelectorAll(".map_line");
let mapLine1 = document.querySelector(".map_line_1");
let mapLine2 = document.querySelector(".map_line_2");
let mapLine3 = document.querySelector(".map_line_3");

const addTransparencyToAll = () => {
    mapPhotos.forEach(el => {
        el.classList.add("transparent-obj");
    });
    mapLines.forEach(el => {
        el.classList.add("transparent-obj");
    });
}

const removeTransparencyFromAll = () => {
    mapPhotos.forEach(el => {
        el.classList.remove("transparent-obj");
    });
    mapLines.forEach(el => {
        el.classList.remove("transparent-obj");
    });
}

map.addEventListener("mouseover", (event) => {
    let {target} = event;

    // console.log(target);
    // transparent-obj

    // ||
    //         target.parentElement.parentElement.parentElement.parentElement.classList.contains("map_photo_1")
    if (target.classList.contains("map_photo_1")) {

        addTransparencyToAll();

        mapIcons.forEach(el => {
            el.classList.remove("blink");
        })
        // mapLine1.classList.add("blink");

        mapPhotos1.forEach(el => {
            el.classList.remove("transparent-obj");
        })
        mapLine1.classList.remove("transparent-obj");

        //icon
        // mapIcons.forEach(el => {
        //     // el.classList.remove("color-icon-1");
        //     el.classList.remove("color-icon-2");
        // })
        //
        // mapIcon1.classList.remove("color-icon-1");
        // mapIcon1.classList.add("color-icon-2");

        // 1, 3, 5, 7, 8

        //
        mapPhotos1.forEach(el => {
            el.classList.remove("border-map");
        })
        if (target.classList.contains("map_photo_1_1")) {

            // mapPhoto1_1.classList.add("border-map");
        } else if (target.classList.contains("map_photo_1_3")) {
            mapPhoto1_3.classList.add("border-map");
        } else if (target.classList.contains("map_photo_1_5")) {
            mapPhoto1_5.classList.add("border-map");
        } else if (target.classList.contains("map_photo_1_7")) {
            mapPhoto1_7.classList.add("border-map");
        } else if (target.classList.contains("map_photo_1_8")) {
            mapPhoto1_8.classList.add("border-map");
        }


    } else if (target.classList.contains("map_photo_2")) {


        addTransparencyToAll();

        mapIcons.forEach(el => {
            el.classList.remove("blink");
        })
        // mapLine2.classList.add("blink");

        mapPhotos2.forEach(el => {
            el.classList.remove("transparent-obj");
        })
        mapLine2.classList.remove("transparent-obj");

        // icon
        // mapIcons.forEach(el => {
        //     // el.classList.remove("color-icon-1");
        //     el.classList.remove("color-icon-2");
        // })
        //
        // mapIcon2.classList.remove("color-icon-1");
        // mapIcon2.classList.add("color-icon-2");

        // 1 ... 4

        // border
        mapPhotos2.forEach(el => {
            el.classList.remove("border-map");
        })
        if (target.classList.contains("map_photo_2_4")) {
            // mapIcons.forEach(el => {
            //     el.classList.remove("color-icon");
            // })
            //
            // mapIcon2.classList.add("color-icon");
            // mapPhoto2_4.classList.add("border-map");
        } else if (target.classList.contains("map_photo_2_1")) {
            mapPhoto2_1.classList.add("border-map");
        } else if (target.classList.contains("map_photo_2_2")) {
            mapPhoto2_2.classList.add("border-map");
        } else if (target.classList.contains("map_photo_2_3")) {
            mapPhoto2_3.classList.add("border-map");
        }


    } else if (target.classList.contains("map_photo_3")) {


        addTransparencyToAll();

        mapIcons.forEach(el => {
            el.classList.remove("blink");
        })
        // mapLine3.classList.add("blink");

        mapPhotos3.forEach(el => {
            el.classList.remove("transparent-obj");
        })
        mapLine3.classList.remove("transparent-obj");

        // icon
        // mapIcons.forEach(el => {
        //     // el.classList.remove("color-icon-1");
        //     el.classList.remove("color-icon-2");
        // })
        //
        // mapIcon3.classList.remove("color-icon-1");
        // mapIcon3.classList.add("color-icon-2");

        // 1, 3 ... 7

        // icon
        mapPhotos3.forEach(el => {
            el.classList.remove("border-map");
        })
        if (target.classList.contains("map_photo_3_7")) {

            // mapIcons.forEach(el => {
            //     el.classList.remove("color-icon");
            // })
            //
            // mapIcon3.classList.add("color-icon");
            // mapPhoto3_7.classList.add("border-map");
        } else if (target.classList.contains("map_photo_3_1")) {
            mapPhoto3_1.classList.add("border-map");
        } else if (target.classList.contains("map_photo_3_3")) {
            mapPhoto3_3.classList.add("border-map");
        } else if (target.classList.contains("map_photo_3_4")) {
            mapPhoto3_4.classList.add("border-map");
        } else if (target.classList.contains("map_photo_3_5")) {
            mapPhoto3_5.classList.add("border-map");
        } else if (target.classList.contains("map_photo_3_6")) {
            mapPhoto3_6.classList.add("border-map");
        }


    } else {
        removeTransparencyFromAll();
        //
        mapIcons.forEach(el => {
            el.classList.add("blink");
        })

        mapPhotos.forEach(el => {
            el.classList.remove("border-map");
        })

        // mapIcons.forEach(el => {
        //     el.classList.remove("color-icon-2");
        //     el.classList.add("color-icon-1");
        // })

    }

});



