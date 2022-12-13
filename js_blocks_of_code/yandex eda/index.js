let quizes = document.querySelectorAll(".quiz");

for (let i = 0; i < quizes.length; i++) {
    quizes[i].addEventListener("click", (event) => {
        let {target} = event;

        if (target.parentElement.classList.contains("q-1")) {
            if (target.classList.contains("a-1")) {
                let questions = document.querySelectorAll(".q-1");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-2")) {
                let questions = document.querySelectorAll(".q-1");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-3")) {
                let questions = document.querySelectorAll(".q-1");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-4")) {
                let questions = document.querySelectorAll(".q-1");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            }
        } else if (target.parentElement.classList.contains("q-2")) {

            if (target.classList.contains("a-1")) {
                let questions = document.querySelectorAll(".q-2");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-2")) {
                let questions = document.querySelectorAll(".q-2");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-3")) {
                let questions = document.querySelectorAll(".q-2");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-4")) {
                let questions = document.querySelectorAll(".q-2");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            }
        } else if (target.parentElement.classList.contains("q-3")) {

            if (target.classList.contains("a-1")) {
                let questions = document.querySelectorAll(".q-3");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-2")) {
                let questions = document.querySelectorAll(".q-3");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-3")) {
                let questions = document.querySelectorAll(".q-3");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-4")) {
                let questions = document.querySelectorAll(".q-3");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            }
        } else if (target.parentElement.classList.contains("q-4")) {

            if (target.classList.contains("a-1")) {
                let questions = document.querySelectorAll(".q-4");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-2")) {
                let questions = document.querySelectorAll(".q-4");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-3")) {
                let questions = document.querySelectorAll(".q-4");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-4")) {
                let questions = document.querySelectorAll(".q-4");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            }
        } else if (target.parentElement.classList.contains("q-5")) {

            if (target.classList.contains("a-1")) {
                let questions = document.querySelectorAll(".q-5");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-2")) {
                let questions = document.querySelectorAll(".q-5");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-3")) {
                let questions = document.querySelectorAll(".q-5");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-4")) {
                let questions = document.querySelectorAll(".q-5");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            }
        } else if (target.parentElement.classList.contains("q-6")) {

            if (target.classList.contains("a-1")) {
                let questions = document.querySelectorAll(".q-6");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-2")) {
                let questions = document.querySelectorAll(".q-6");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-3")) {
                let questions = document.querySelectorAll(".q-6");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-4")) {
                let questions = document.querySelectorAll(".q-6");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            }
        } else if (target.parentElement.classList.contains("q-7")) {

            if (target.classList.contains("a-1")) {
                let questions = document.querySelectorAll(".q-7");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-2")) {
                let questions = document.querySelectorAll(".q-7");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-3")) {
                let questions = document.querySelectorAll(".q-7");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-4")) {
                let questions = document.querySelectorAll(".q-7");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            }
        } else if (target.parentElement.classList.contains("q-8")) {

            if (target.classList.contains("a-1")) {
                let questions = document.querySelectorAll(".q-8");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-2")) {
                let questions = document.querySelectorAll(".q-8");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-3")) {
                let questions = document.querySelectorAll(".q-8");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-4")) {
                let questions = document.querySelectorAll(".q-8");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            }
        } else if (target.parentElement.classList.contains("q-9")) {

            if (target.classList.contains("a-1")) {
                let questions = document.querySelectorAll(".q-9");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-2")) {
                let questions = document.querySelectorAll(".q-9");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-3")) {
                let questions = document.querySelectorAll(".q-9");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            } else if (target.classList.contains("a-4")) {
                let questions = document.querySelectorAll(".q-9");
                questions.forEach(q => {
                    q.classList.remove("selected");
                });
                target.parentElement.classList.add("selected");
            }
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
    }
});

