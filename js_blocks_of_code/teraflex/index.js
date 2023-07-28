let ladder = document.querySelector(".ladder");

// window.addEventListener("load", function() {
//     ladder.style.bottom = "0";
// });

let t_0_1 = document.querySelector(".t_0_1");
let s_0_1 = document.querySelector(".s_0_1");
let t_0_2 = document.querySelector(".t_0_2");
let s_0_2 = document.querySelector(".s_0_2");
let t_1_1 = document.querySelector(".t_1_1");
let o_1 = document.querySelector(".o_1");
let o_01 = document.querySelector(".o_01");
let o_02 = document.querySelector(".o_02");

let dots = document.querySelector(".dots");

let o_1_1 = document.querySelector(".o_1_1");
let o_1_2 = document.querySelector(".o_1_2");
let s_1_1 = document.querySelector(".s_1_1");
let s_1_2 = document.querySelector(".s_1_2");
let t_2_1 = document.querySelector(".t_2_1");
let t_2_2 = document.querySelector(".t_2_2");


let o_2 = document.querySelector(".o_2");
let o_2_ = document.querySelector(".o_2_");

let o_2_1 = document.querySelector(".o_2_1");
let o_2_2 = document.querySelector(".o_2_2");
let o_2_3 = document.querySelector(".o_2_3");
let o_2_4 = document.querySelector(".o_2_4");
let s_2_1 = document.querySelector(".s_2_1");
let s_2_2 = document.querySelector(".s_2_2");
let s_2_3 = document.querySelector(".s_2_3");
let s_2_4 = document.querySelector(".s_2_4");
let t_3_1 = document.querySelector(".t_3_1");
let t_3_3 = document.querySelector(".t_3_3");


let o_3 = document.querySelector(".o_3");
let o_3_ = document.querySelector(".o_3_");

let o_3_1 = document.querySelector(".o_3_1");
let o_3_2 = document.querySelector(".o_3_2");
let o_3_3 = document.querySelector(".o_3_3");
let s_3_1 = document.querySelector(".s_3_1");
let s_3_2 = document.querySelector(".s_3_2");
let s_3_3 = document.querySelector(".s_3_3");
let t_4_1 = document.querySelector(".t_4_1");
let t_4_2 = document.querySelector(".t_4_2");
let t_4_3 = document.querySelector(".t_4_3");

let t_4_1_dopel = document.querySelector(".t_4_1_dopel");
let t_4_2_dopel = document.querySelector(".t_4_2_dopel");

let o_4_1w = document.querySelector(".o_4_1w");
let o_4_2w = document.querySelector(".o_4_2w");
let o_4_ = document.querySelector(".o_4_");

let o_4_1 = document.querySelector(".o_4_1");
let o_4_2 = document.querySelector(".o_4_2");
let o_4_3 = document.querySelector(".o_4_3");
let o_4_4 = document.querySelector(".o_4_4");
let s_4_1 = document.querySelector(".s_4_1");
let s_4_2 = document.querySelector(".s_4_2");
let s_4_3 = document.querySelector(".s_4_3");
let s_4_4 = document.querySelector(".s_4_4");
let t_5_1 = document.querySelector(".t_5_1");
let t_5_3 = document.querySelector(".t_5_3");
let t_5_4 = document.querySelector(".t_5_4");

let t_5_3_dopel = document.querySelector(".t_5_3_dopel");
let t_5_4_dopel = document.querySelector(".t_5_4_dopel");

let o_5_3w = document.querySelector(".o_5_3w");
let o_5_4w = document.querySelector(".o_5_4w");

let o_5_3 = document.querySelector(".o_5_3");
let o_5_4 = document.querySelector(".o_5_4");
let s_5_3 = document.querySelector(".s_5_3");
let s_5_4 = document.querySelector(".s_5_4");
let t_6_3 = document.querySelector(".t_6_3");
let t_6_4 = document.querySelector(".t_6_4");

let t_7 = document.querySelector(".t_7");
let o_7 = document.querySelector(".o_7");

let chat = document.querySelector(".chat");

let ladderCounter1 = document.querySelector(".ladder_counter_1")
let ladderCounter2 = document.querySelector(".ladder_counter_2")
let ladderCounter3 = document.querySelector(".ladder_counter_3")
let ladderCounter4 = document.querySelector(".ladder_counter_4")
let ladderCounter5 = document.querySelector(".ladder_counter_5")
let ladderCounter6 = document.querySelector(".ladder_counter_6")


let phone = document.querySelector(".phone");
let first_screen = document.querySelector(".first_screen");
let show_test_btn = document.querySelector(".show_test_btn");

let change_screen_1 = document
    .querySelector(".change_screen_1");

let last_screen = document.querySelector(".last_screen");

// show test
show_test_btn.addEventListener("click", (event) => handleBtnClick(event));

function handleBtnClick(event) {
    let {target} = event;

    // console.log(target);

    if (target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("show_test_btn") || target.parentElement.parentElement.parentElement.classList.contains("show_test_btn")) {
        first_screen.classList.add("dn");
        phone.classList.remove("dn");
    }
}


// show last screen
function changeLastScreenBG() {
    change_screen_1
        .querySelector(".elementor-motion-effects-container")
        .querySelector(".elementor-motion-effects-layer")
        .style.backgroundImage = "url('https://elle.com.kz/wp-content/uploads/2016/04/image-4-1.png')";

    ladder.style.backgroundImage = "url('https://elle.com.kz/wp-content/uploads/2016/04/medeu-1-3.svg')";

    phone.classList.add("dn");

    last_screen.classList.remove("dn");
}


// test
chat.addEventListener("click", (event) => handleClick(event));


async function handleClick(event) {
    let {target} = event;

    // console.log(target);

    // ladder scroll !! DOESNT WORK BECAUSE OF SCROLLINTOVIEW();
    // if (target.parentElement.classList.contains("ladder_scroll_1") || target.parentElement.parentElement.classList.contains("ladder_scroll_1")) {
    //     ladder.style.marginBottom  = "-30px";
    // }
    //
    // if (target.parentElement.classList.contains("ladder_scroll_2") || target.parentElement.parentElement.classList.contains("ladder_scroll_2")) {
    //     ladder.style.marginBottom  = "-60px";
    // }
    //
    // if (target.parentElement.classList.contains("ladder_scroll_3") || target.parentElement.parentElement.classList.contains("ladder_scroll_3")) {
    //     ladder.style.marginBottom  = "-90px";
    // }
    //
    // if (target.parentElement.classList.contains("ladder_scroll_4") || target.parentElement.parentElement.classList.contains("ladder_scroll_4")) {
    //     ladder.style.marginBottom  = "-120px";
    // }
    //
    // if (target.parentElement.classList.contains("ladder_scroll_5") || target.parentElement.parentElement.classList.contains("ladder_scroll_5")) {
    //     ladder.style.marginBottom  = "-150px";
    // }

    // preset

    // await new Promise(resolve => setTimeout(resolve, 1000));
    // t_0_1.classList.remove("dn");

    if (target.parentElement.classList.contains("o_01_inner") || target.parentElement.parentElement.classList.contains("o_01_inner")) {

        o_01.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 500));
        s_0_1.classList.remove("dn");
        s_0_1.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_0_2.classList.remove("dn");
        t_0_2.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_02.classList.remove("dn");
        o_02.scrollIntoView();

    }

    if (target.parentElement.classList.contains("o_02_inner") || target.parentElement.parentElement.classList.contains("o_02_inner")) {
        o_02.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 500));
        s_0_2.classList.remove("dn");
        s_0_2.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_1_1.classList.remove("dn");
        t_1_1.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_1.classList.remove("dn");
        o_1.scrollIntoView();
    }


    // 1 l
    if (target.parentElement.classList.contains("o_1_1") || target.parentElement.parentElement.classList.contains("o_1_1")) {
        // o_1.classList.add("dn");
        o_1_2.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 200));
        o_1.classList.add("dn");


        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.remove("dn");
        ladderCounter3.classList.add("dn");
        ladderCounter4.classList.add("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.add("dn");


        await new Promise(resolve => setTimeout(resolve, 1000));
        s_1_1.classList.remove("dn");
        s_1_1.scrollIntoView();


        // dots.classList.remove("dn");
        // dots.scrollIntoView();
        await new Promise(resolve => setTimeout(resolve, 1000));
        // dots.classList.add("dn");
        t_2_1.classList.remove("dn");
        t_2_1.scrollIntoView();


        // 2

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_2.classList.remove("dn");
        o_2.scrollIntoView();
    }

    // 2
    if (target.parentElement.classList.contains("o_2_1") || target.parentElement.parentElement.classList.contains("o_2_1")) {
        o_2_2.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 200));
        o_2.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.remove("dn");
        ladderCounter4.classList.add("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_2_1.classList.remove("dn");
        s_2_1.scrollIntoView();

        // dots.classList.remove("dn");
        // dots.scrollIntoView();
        await new Promise(resolve => setTimeout(resolve, 1000));
        // dots.classList.remove("dn");
        t_3_1.classList.remove("dn");
        t_3_1.scrollIntoView();

        // 3
        await new Promise(resolve => setTimeout(resolve, 1000));
        o_3.classList.remove("dn");
        o_3.scrollIntoView();
    }

    if (target.parentElement.classList.contains("o_2_2") || target.parentElement.parentElement.classList.contains("o_2_2")) {
        o_2_1.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 200));
        o_2.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.remove("dn");
        ladderCounter4.classList.add("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_2_2.classList.remove("dn");
        s_2_2.scrollIntoView();

        // dots.classList.remove("dn");
        // dots.scrollIntoView();
        await new Promise(resolve => setTimeout(resolve, 1000));
        // dots.classList.add("dn");
        t_3_1.classList.remove("dn");
        t_3_1.scrollIntoView();

        // 3
        await new Promise(resolve => setTimeout(resolve, 1000));
        o_3.classList.remove("dn");
        o_3.scrollIntoView();
    }


    // 3
    if (target.parentElement.classList.contains("o_3_1") || target.parentElement.parentElement.classList.contains("o_3_1")) {
        o_3_2.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 200));
        o_3.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.add("dn");
        ladderCounter4.classList.remove("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_3_1.classList.remove("dn");
        s_3_1.scrollIntoView();

        // dots.classList.remove("dn");
        // dots.scrollIntoView();
        await new Promise(resolve => setTimeout(resolve, 1000));
        // dots.classList.add("dn");
        t_4_1.classList.remove("dn");
        t_4_1.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        // dots.classList.add("dn");
        t_4_1_dopel.classList.remove("dn");
        t_4_1_dopel.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_4_1w.classList.remove("dn");
        o_4_1w.scrollIntoView();

    }

    if (target.parentElement.classList.contains("o_3_2") || target.parentElement.parentElement.classList.contains("o_3_2")) {
        o_3_1.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 200));
        o_3.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.add("dn");
        ladderCounter4.classList.remove("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_3_2.classList.remove("dn");
        s_3_2.scrollIntoView();

        // dots.classList.remove("dn");
        // dots.scrollIntoView();
        await new Promise(resolve => setTimeout(resolve, 1000));
        t_4_2.classList.remove("dn");
        t_4_2.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_4_2_dopel.classList.remove("dn");
        t_4_2_dopel.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_4_1w.classList.remove("dn");
        o_4_1w.scrollIntoView();
        // await new Promise(resolve => setTimeout(resolve, 1000));
        // o_4_2w.classList.remove("dn");
        // o_4_2w.scrollIntoView();
    }


    // 4

    if (target.parentElement.classList.contains("o_4_1") || target.parentElement.parentElement.classList.contains("o_4_1")) {
        o_4_2.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 200));
        o_4_1w.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.add("dn");
        ladderCounter4.classList.add("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.remove("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_4_1.classList.remove("dn");
        s_4_1.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_5_1.classList.remove("dn");
        t_5_1.scrollIntoView();


        await new Promise(resolve => setTimeout(resolve, 1000));
        t_7.classList.remove("dn");
        t_7.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_7.classList.remove("dn");
        o_7.scrollIntoView();
    }

    if (target.parentElement.classList.contains("o_4_2") || target.parentElement.parentElement.classList.contains("o_4_2")) {
        o_4_1.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 200));
        o_4_1w.classList.add("dn");
        // o_4_2w.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.add("dn");
        ladderCounter4.classList.add("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.remove("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_4_2.classList.remove("dn");
        s_4_2.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_5_1.classList.remove("dn");
        t_5_1.scrollIntoView();


        //
        await new Promise(resolve => setTimeout(resolve, 1000));
        t_7.classList.remove("dn");
        t_7.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_7.classList.remove("dn");
        o_7.scrollIntoView();
    }


    // // // //
    // 1 r
    if (target.parentElement.classList.contains("o_1_2") || target.parentElement.parentElement.classList.contains("o_1_2")) {
        o_1_1.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 200));
        o_1.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.remove("dn");
        ladderCounter3.classList.add("dn");
        ladderCounter4.classList.add("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_1_2.classList.remove("dn");
        s_1_2.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_2_2.classList.remove("dn");
        t_2_2.scrollIntoView();

        // 2
        await new Promise(resolve => setTimeout(resolve, 1000));
        o_2_.classList.remove("dn");
        o_2_.scrollIntoView();
    }


    if (target.parentElement.classList.contains("o_2_3") || target.parentElement.parentElement.classList.contains("o_2_3")) {
        o_2_4.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 200));
        o_2_.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.remove("dn");
        ladderCounter4.classList.add("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_2_3.classList.remove("dn");
        s_2_3.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_3_3.classList.remove("dn");
        t_3_3.scrollIntoView();

        // 3
        await new Promise(resolve => setTimeout(resolve, 1000));
        o_3_.classList.remove("dn");
        o_3_.scrollIntoView();
    }

    if (target.parentElement.classList.contains("o_2_4") || target.parentElement.parentElement.classList.contains("o_2_4")) {
        o_2_3.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 200));
        o_2_.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.remove("dn");
        ladderCounter4.classList.add("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_2_4.classList.remove("dn");
        s_2_4.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_3_3.classList.remove("dn");
        t_3_3.scrollIntoView();

        // 3
        await new Promise(resolve => setTimeout(resolve, 1000));
        o_3_.classList.remove("dn");
        o_3_.scrollIntoView();
    }


    if (target.parentElement.classList.contains("o_3_3") || target.parentElement.parentElement.classList.contains("o_3_3")) {

        await new Promise(resolve => setTimeout(resolve, 200));
        o_3_.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.add("dn");
        ladderCounter4.classList.remove("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.add("dn");


        await new Promise(resolve => setTimeout(resolve, 1000));
        s_3_3.classList.remove("dn");
        s_3_3.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_4_3.classList.remove("dn");
        t_4_3.scrollIntoView();


        // 4
        await new Promise(resolve => setTimeout(resolve, 1000));
        o_4_.classList.remove("dn");
        o_4_.scrollIntoView();
    }


    if (target.parentElement.classList.contains("o_4_3") || target.parentElement.parentElement.classList.contains("o_4_3")) {
        o_4_4.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 200));
        o_4_.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.add("dn");
        ladderCounter4.classList.add("dn");
        ladderCounter5.classList.remove("dn");
        ladderCounter6.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_4_3.classList.remove("dn");
        s_4_3.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_5_3.classList.remove("dn");
        t_5_3.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_5_3_dopel.classList.remove("dn");
        t_5_3_dopel.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_5_3w.classList.remove("dn");
        o_5_3w.scrollIntoView();
    }


    if (target.parentElement.classList.contains("o_4_4") || target.parentElement.parentElement.classList.contains("o_4_4")) {
        o_4_3.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 200));
        o_4_.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.add("dn");
        ladderCounter4.classList.add("dn");
        ladderCounter5.classList.remove("dn");
        ladderCounter6.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_4_4.classList.remove("dn");
        s_4_4.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_5_4.classList.remove("dn");
        t_5_4.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_5_4_dopel.classList.remove("dn");
        t_5_4_dopel.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_5_3w.classList.remove("dn");
        o_5_3w.scrollIntoView();
        // o_5_4w.classList.remove("dn");
        // o_5_4w.scrollIntoView();
    }


    // 5

    if (target.parentElement.classList.contains("o_5_3") || target.parentElement.parentElement.classList.contains("o_5_3")) {

        await new Promise(resolve => setTimeout(resolve, 200));
        o_5_3w.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.add("dn");
        ladderCounter4.classList.add("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.remove("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_5_3.classList.remove("dn");
        s_5_3.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_6_3.classList.remove("dn");
        t_6_3.scrollIntoView();


        await new Promise(resolve => setTimeout(resolve, 1000));
        t_7.classList.remove("dn");
        t_7.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_7.classList.remove("dn");
        o_7.scrollIntoView();
    }

    if (target.parentElement.classList.contains("o_5_4") || target.parentElement.parentElement.classList.contains("o_5_4")) {

        await new Promise(resolve => setTimeout(resolve, 200));
        o_5_3w.classList.add("dn");
        // o_5_4w.classList.add("dn");

        ladderCounter1.classList.add("dn");
        ladderCounter2.classList.add("dn");
        ladderCounter3.classList.add("dn");
        ladderCounter4.classList.add("dn");
        ladderCounter5.classList.add("dn");
        ladderCounter6.classList.remove("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_5_4.classList.remove("dn");
        s_5_4.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_6_4.classList.remove("dn");
        t_6_4.scrollIntoView();


        await new Promise(resolve => setTimeout(resolve, 1000));
        t_7.classList.remove("dn");
        t_7.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_7.classList.remove("dn");
        o_7.scrollIntoView();
    }

    // final button
    if (target.parentElement.classList.contains("o_7") || target.parentElement.parentElement.classList.contains("o_7")) {
        o_7.classList.add("dn");
        changeLastScreenBG();
    }
}