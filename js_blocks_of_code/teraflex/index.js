let o_1 = document.querySelector(".o_1");

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



    chat.addEventListener("click", (event) => {
        let {target} = event;

        // console.log(target);
        // 1
        if (target.parentElement.classList.contains("o_1_1") || target.parentElement.parentElement.classList.contains("o_1_1")) {
            o_1.classList.add("dn");
            s_1_1.classList.remove("dn");
            t_2_1.classList.remove("dn");
        }

        if (target.parentElement.classList.contains("o_1_2") || target.parentElement.parentElement.classList.contains("o_1_2")) {
            o_1.classList.add("dn");
            s_1_2.classList.remove("dn");
            t_2_2.classList.remove("dn");
        }

        // 2
        if (target.parentElement.classList.contains("o_2_1") || target.parentElement.parentElement.classList.contains("o_2_1")) {
            console.log("o_2_1");
        }

        if (target.parentElement.classList.contains("o_2_2") || target.parentElement.parentElement.classList.contains("o_2_2")) {
            console.log("o_2_2");
        }

        if (target.parentElement.classList.contains("o_2_3") || target.parentElement.parentElement.classList.contains("o_2_3")) {
            console.log("o_2_3");
        }

        if (target.parentElement.classList.contains("o_2_4") || target.parentElement.parentElement.classList.contains("o_2_4")) {
            console.log("o_2_4");
        }

        // 3
        if (target.parentElement.classList.contains("o_3_1") || target.parentElement.parentElement.classList.contains("o_3_1")) {
            console.log("o_3_1");
        }

        if (target.parentElement.classList.contains("o_3_2") || target.parentElement.parentElement.classList.contains("o_3_2")) {
            console.log("o_3_2");
        }

        if (target.parentElement.classList.contains("o_3_3") || target.parentElement.parentElement.classList.contains("o_3_3")) {
            console.log("o_3_3");
        }

        // 4
        if (target.parentElement.classList.contains("o_4_1") || target.parentElement.parentElement.classList.contains("o_4_1")) {
            console.log("o_4_1");
        }

        if (target.parentElement.classList.contains("o_4_2") || target.parentElement.parentElement.classList.contains("o_4_2")) {
            console.log("o_4_2");
        }

        if (target.parentElement.classList.contains("o_4_3") || target.parentElement.parentElement.classList.contains("o_4_3")) {
            console.log("o_4_3");
        }

        if (target.parentElement.classList.contains("o_4_4") || target.parentElement.parentElement.classList.contains("o_4_4")) {
            console.log("o_4_4");
        }


        // 5
        if (target.parentElement.classList.contains("o_5_3") || target.parentElement.parentElement.classList.contains("o_5_3")) {
            console.log("o_5_3");
        }

        if (target.parentElement.classList.contains("o_5_4") || target.parentElement.parentElement.classList.contains("o_5_4")) {
            console.log("o_5_4");
        }


    });
