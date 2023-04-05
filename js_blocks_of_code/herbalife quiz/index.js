let quizes = document.querySelectorAll(".q");

// for (let i = 0; i < quizes.length; i++) {
//     console.log(quizes[i]);
// }

for (let i = 0; i < quizes.length; i++) {
    quizes[i].addEventListener("click", (event) => {
        let {target} = event;
        console.log(target);


        // e-con-inner (near a circle)
        if (target.parentElement.classList.contains("a1")) {
            // console.log("a1");
            quizes[i].querySelectorAll(".circle").forEach(a => {
                a.classList.remove("answer-active");
            });
            target.querySelector(".circle").classList.add("answer-active");
        }
        if (target.parentElement.classList.contains("a2")) {
            quizes[i].querySelectorAll(".circle").forEach(a => {
                a.classList.remove("answer-active");
            });
            target.querySelector(".circle").classList.add("answer-active");
        }
        if (target.parentElement.classList.contains("a3")) {
            quizes[i].querySelectorAll(".circle").forEach(a => {
                a.classList.remove("answer-active");
            });
            target.querySelector(".circle").classList.add("answer-active");
        }


        // elementor-heading-title (an answer text)
        if (target.parentElement.parentElement.parentElement.parentElement.classList.contains("a1")) {
            // console.log("a1");
            quizes[i].querySelectorAll(".circle").forEach(a => {
                a.classList.remove("answer-active");
            });
            target.parentElement.parentElement.parentElement.querySelector(".circle").classList.add("answer-active");
        }
        if (target.parentElement.parentElement.parentElement.parentElement.classList.contains("a2")) {
            quizes[i].querySelectorAll(".circle").forEach(a => {
                a.classList.remove("answer-active");
            });
            target.parentElement.parentElement.parentElement.querySelector(".circle").classList.add("answer-active");
        }
        if (target.parentElement.parentElement.parentElement.parentElement.classList.contains("a3")) {
            quizes[i].querySelectorAll(".circle").forEach(a => {
                a.classList.remove("answer-active");
            });
            target.parentElement.parentElement.parentElement.querySelector(".circle").classList.add("answer-active");
        }


        // e-con-inner (in a circle)
        if (target.parentElement.parentElement.parentElement.classList.contains("a1")) {
            // console.log("a1");
            quizes[i].querySelectorAll(".circle").forEach(a => {
                a.classList.remove("answer-active");
            });
            target.parentElement.parentElement.querySelector(".circle").classList.add("answer-active");
        }
        if (target.parentElement.parentElement.parentElement.classList.contains("a2")) {
            // console.log("a1");
            quizes[i].querySelectorAll(".circle").forEach(a => {
                a.classList.remove("answer-active");
            });
            target.parentElement.parentElement.querySelector(".circle").classList.add("answer-active");
        }
        if (target.parentElement.parentElement.parentElement.classList.contains("a3")) {
            // console.log("a1");
            quizes[i].querySelectorAll(".circle").forEach(a => {
                a.classList.remove("answer-active");
            });
            target.parentElement.parentElement.querySelector(".circle").classList.add("answer-active");
        }

        // a circle border
        if (target.parentElement.parentElement.classList.contains("a1")) {
            // console.log("a1");
            quizes[i].querySelectorAll(".circle").forEach(a => {
                a.classList.remove("answer-active");
            });
            target.classList.add("answer-active");
        }
        if (target.parentElement.parentElement.classList.contains("a2")) {
            // console.log("a1");
            quizes[i].querySelectorAll(".circle").forEach(a => {
                a.classList.remove("answer-active");
            });
            target.classList.add("answer-active");
        }
        if (target.parentElement.parentElement.classList.contains("a3")) {
            // console.log("a1");
            quizes[i].querySelectorAll(".circle").forEach(a => {
                a.classList.remove("answer-active");
            });
            target.classList.add("answer-active");
        }


        // know result button text
        if (target.parentElement.parentElement.id === "to-know-result") {
            // console.log("button text clicked");
            countAnswers();
        }

        // know result button
        if (target.id === "to-know-result") {
            // console.log("button clicked");
            countAnswers();
        }
    });
}

const clearSelectionsFromQuestions = () => {
    for (let i = 0; i < quizes.length; i++) {
        quizes[i].querySelectorAll(".circle").forEach(a => {
            a.classList.remove("answer-active");
        });
    }
}

const countAnswers = () => {
    let answers = document.querySelectorAll(".answer-active");
    let fillAll = document.querySelector(".fill-all");

    if (answers.length < 10) {
        fillAll.classList.remove("display-none");
    } else {
        let page1 = 0;
        let page2 = 0;
        let page3 = 0;

        for (let i = 0; i < answers.length; i++) {
            if (answers[i].parentElement.parentElement.classList.contains("a1")) page1++;
            if (answers[i].parentElement.parentElement.classList.contains("a2")) page2++;
            if (answers[i].parentElement.parentElement.classList.contains("a3")) page3++;
        }

        console.log(page1);
        console.log(page2);
        console.log(page3);

        clearSelectionsFromQuestions();
        fillAll.classList.add("display-none");

        if (page1 >= page2 && page1 >= page3) {
            window.location.href = "https://elle.com.kz/herbalife-result1/ ";
        } else if (page2 >= page3 && page2 >= page1) {
            window.location.href = "https://elle.com.kz/herbalife-result2/ ";
        } else {
            window.location.href = "https://elle.com.kz/herbalife-result3/";
        }
    }
}