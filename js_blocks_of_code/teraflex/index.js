// let o_1 = document.querySelector(".o_1");

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


let o_5_3w = document.querySelector(".o_5_3w");
let o_5_4w = document.querySelector(".o_5_4w");

let o_5_3 = document.querySelector(".o_5_3");
let o_5_4 = document.querySelector(".o_5_4");
let s_5_3 = document.querySelector(".s_5_3");
let s_5_4 = document.querySelector(".s_5_4");
let t_6_3 = document.querySelector(".t_6_3");
let t_6_4 = document.querySelector(".t_6_4");

let chat = document.querySelector(".chat");

chat.addEventListener("click", (event) => handleClick(event));

async function handleClick(event) {
    let {target} = event;

    console.log(target);
    // 1 l
    if (target.parentElement.classList.contains("o_1_1") || target.parentElement.parentElement.classList.contains("o_1_1")) {
        // o_1.classList.add("dn");
        o_1_2.classList.add("dn");


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
        o_4_1w.classList.remove("dn");
        o_4_1w.scrollIntoView();

    }

    if (target.parentElement.classList.contains("o_3_2") || target.parentElement.parentElement.classList.contains("o_3_2")) {
        o_3_1.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_3_2.classList.remove("dn");
        s_3_2.scrollIntoView();

        // dots.classList.remove("dn");
        // dots.scrollIntoView();
        await new Promise(resolve => setTimeout(resolve, 1000));
        // dots.classList.add("dn");
        t_4_2.classList.remove("dn");
        t_4_2.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_4_2w.classList.remove("dn");
        o_4_2w.scrollIntoView();
    }


    // 4

    if (target.parentElement.classList.contains("o_4_1") || target.parentElement.parentElement.classList.contains("o_4_1")) {
        o_4_2.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_4_1.classList.remove("dn");
        s_4_1.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_5_1.classList.remove("dn");
        t_5_1.scrollIntoView();
    }

    if (target.parentElement.classList.contains("o_4_2") || target.parentElement.parentElement.classList.contains("o_4_2")) {
        o_4_1.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_4_2.classList.remove("dn");
        s_4_2.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_5_1.classList.remove("dn");
        t_5_1.scrollIntoView();
    }


    // // // //
    // 1 r
    if (target.parentElement.classList.contains("o_1_2") || target.parentElement.parentElement.classList.contains("o_1_2")) {
        o_1_1.classList.add("dn");

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

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_4_3.classList.remove("dn");
        s_4_3.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_5_3.classList.remove("dn");
        t_5_3.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_5_3w.classList.remove("dn");
        o_5_3w.scrollIntoView();
    }


    if (target.parentElement.classList.contains("o_4_4") || target.parentElement.parentElement.classList.contains("o_4_4")) {
        o_4_3.classList.add("dn");

        await new Promise(resolve => setTimeout(resolve, 1000));
        s_4_4.classList.remove("dn");
        s_4_4.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_5_4.classList.remove("dn");
        t_5_4.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        o_5_4w.classList.remove("dn");
        o_5_4w.scrollIntoView();
    }


    // 5

    if (target.parentElement.classList.contains("o_5_3") || target.parentElement.parentElement.classList.contains("o_5_3")) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        s_5_3.classList.remove("dn");
        s_5_3.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_6_3.classList.remove("dn");
        t_6_3.scrollIntoView();
    }

    if (target.parentElement.classList.contains("o_5_4") || target.parentElement.parentElement.classList.contains("o_5_4")) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        s_5_4.classList.remove("dn");
        s_5_4.scrollIntoView();

        await new Promise(resolve => setTimeout(resolve, 1000));
        t_6_4.classList.remove("dn");
        t_6_4.scrollIntoView();
    }
}
