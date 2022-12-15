let quizes = document.querySelectorAll(".quiz");

const selectAnAnswer = (target, questionClassName) => {
    if (target.classList.contains("a-1")) {
        let questions = document.querySelectorAll(`.${questionClassName}`);
        questions.forEach(q => {
            q.classList.remove("selected");
        });
        target.parentElement.classList.add("selected");
    } else if (target.classList.contains("a-2")) {
        let questions = document.querySelectorAll(`.${questionClassName}`);
        questions.forEach(q => {
            q.classList.remove("selected");
        });
        target.parentElement.classList.add("selected");
    } else if (target.classList.contains("a-3")) {
        let questions = document.querySelectorAll(`.${questionClassName}`);
        questions.forEach(q => {
            q.classList.remove("selected");
        });
        target.parentElement.classList.add("selected");
    } else if (target.classList.contains("a-4")) {
        let questions = document.querySelectorAll(`.${questionClassName}`);
        questions.forEach(q => {
            q.classList.remove("selected");
        });
        target.parentElement.classList.add("selected");
    } else if (target.classList.contains("a-5")) {
        let questions = document.querySelectorAll(`.${questionClassName}`);
        questions.forEach(q => {
            q.classList.remove("selected");
        });
        target.parentElement.classList.add("selected");
    }
}

for (let i = 0; i < quizes.length; i++) {
    quizes[i].addEventListener("click", (event) => {
        let {target} = event;

        if (target.parentElement.classList.contains("q-1")) {
            selectAnAnswer(target, "q-1")
        } else if (target.parentElement.classList.contains("q-2")) {
            selectAnAnswer(target, "q-2")
        } else if (target.parentElement.classList.contains("q-3")) {
            selectAnAnswer(target, "q-3")
        } else if (target.parentElement.classList.contains("q-4")) {
            selectAnAnswer(target, "q-4")
        } else if (target.parentElement.classList.contains("q-5")) {
            selectAnAnswer(target, "q-5")
        } else if (target.parentElement.classList.contains("q-6")) {
            selectAnAnswer(target, "q-6")
        } else if (target.parentElement.classList.contains("q-7")) {
            selectAnAnswer(target, "q-7")
        } else if (target.parentElement.classList.contains("q-8")) {
            selectAnAnswer(target, "q-8")
        } else if (target.parentElement.classList.contains("q-9")) {
            selectAnAnswer(target, "q-9")
        }

    });
}

// function checks which one didn't select
// TODO
const checkIfQuestionSelected = (selected, quantity) => {
    if (selected.length < quantity) {
        console.log("Выберите все вопросы");

        let anyBoxesChecked = new Array(quantity).fill(true);
        let anyBoxesList = [];
        for (let i = 0; i < quantity; i++) {
            anyBoxesList.push(`q-${i + 1}`);
        }

        for (let i = 0; i < selected.length; i++) {
            for (let j = 0; j < anyBoxesList.length; j++) {
                if (selected[i].classList.contains(anyBoxesList[j])) {
                    anyBoxesChecked[j] = false;
                }
            }
        }

        for (let i = 0; i < anyBoxesChecked.length; i++) {
            if (anyBoxesChecked[i]) {
                console.log(`Не выбран вопрос ${i + 1}`);
            }
        }
    }
}

// button if click
let btn = document.querySelector(".done");

btn.addEventListener("click", (event) => {
    let questions = document.querySelectorAll(".questions");
    let selected = document.querySelectorAll(".selected");

    let quantity = questions.length;

    checkIfQuestionSelected(selected, quantity);

    for (let i = 0; i < selected.length; i++) {
        console.log(selected[i]);
        let cntCharacter1 = 0;
        let cntCharacter2 = 0;
        let cntCharacter3 = 0;
        let cntCharacter4 = 0;
        let cntCharacter5 = 0;

        if (selected[i].classList.contains("q-1")) {
            if (selected[i].classList.contains("a-1")) {
                cntCharacter1++;
            }
        }
    }
});

