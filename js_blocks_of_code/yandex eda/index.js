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

const identifyACharacter = (max, c1, c2, c3, c4, c5) => {
    if (max === c1) return "Ameli";
    if (max === c2) return "Fibi";
    if (max === c3) return "Sheldon";
    if (max === c4) return "Toni";
    return "Vincent";
}

// function checks which one didn't select
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

        return false;
    }
    return true;
}

// button if click
let btns = document.querySelectorAll(".done");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (event) => {
        let questions = document.querySelectorAll(".questions");
        let selected = document.querySelectorAll(".selected");

        let quantity = questions.length;

        if (checkIfQuestionSelected(selected, quantity)) {

            let character1 = "Ameli";
            let character2 = "Fibi";
            let character3 = "Sheldon";
            let character4 = "Toni";
            let character5 = "Vincent";

            let cntCharacter1 = 0;
            let cntCharacter2 = 0;
            let cntCharacter3 = 0;
            let cntCharacter4 = 0;
            let cntCharacter5 = 0;

            for (let i = 0; i < selected.length; i++) {
                console.log(selected[i]);

                if (selected[i].classList.contains("q-1")) {

                    if (selected[i].classList.contains("a-1")) {
                        cntCharacter1++;
                    } else if (selected[i].classList.contains("a-2")) {
                        cntCharacter2++;
                    } else if (selected[i].classList.contains("a-3")) {
                        cntCharacter3++;
                    } else if (selected[i].classList.contains("a-4")) {
                        cntCharacter4++;
                    } else {
                        cntCharacter5++;
                    }
                }

                if (selected[i].classList.contains("q-2")) {

                    if (selected[i].classList.contains("a-1")) {
                        cntCharacter1++;
                    } else if (selected[i].classList.contains("a-2")) {
                        cntCharacter2++;
                    } else if (selected[i].classList.contains("a-3")) {
                        cntCharacter4++;
                    } else if (selected[i].classList.contains("a-4")) {
                        cntCharacter3++;
                    } else {
                        cntCharacter5++;
                    }
                }

                if (selected[i].classList.contains("q-3")) {

                    if (selected[i].classList.contains("a-1")) {
                        cntCharacter3++;
                    } else if (selected[i].classList.contains("a-2")) {
                        cntCharacter4++;
                    } else if (selected[i].classList.contains("a-3")) {
                        cntCharacter1++;
                    } else if (selected[i].classList.contains("a-4")) {
                        cntCharacter2++;
                    } else {
                        cntCharacter5++;
                    }
                }

                if (selected[i].classList.contains("q-4")) {

                    if (selected[i].classList.contains("a-1")) {
                        cntCharacter4++;
                    } else if (selected[i].classList.contains("a-2")) {
                        cntCharacter3++;
                    } else if (selected[i].classList.contains("a-3")) {
                        cntCharacter2++;
                    } else if (selected[i].classList.contains("a-4")) {
                        cntCharacter1++;
                    } else {
                        cntCharacter5++;
                    }
                }

                if (selected[i].classList.contains("q-5")) {

                    if (selected[i].classList.contains("a-1")) {
                        cntCharacter3++;
                    } else if (selected[i].classList.contains("a-2")) {
                        cntCharacter4++;
                    } else if (selected[i].classList.contains("a-3")) {
                        cntCharacter1++;
                    } else if (selected[i].classList.contains("a-4")) {
                        cntCharacter2++;
                    } else {
                        cntCharacter5++;
                    }
                }

                if (selected[i].classList.contains("q-6")) {

                    if (selected[i].classList.contains("a-1")) {
                        cntCharacter1++;
                    } else if (selected[i].classList.contains("a-2")) {
                        cntCharacter3++;
                    } else if (selected[i].classList.contains("a-3")) {
                        cntCharacter2++;
                    } else if (selected[i].classList.contains("a-4")) {
                        cntCharacter4++;
                    } else {
                        cntCharacter5++;
                    }
                }

                if (selected[i].classList.contains("q-7")) {

                    if (selected[i].classList.contains("a-1")) {
                        cntCharacter1++;
                    } else if (selected[i].classList.contains("a-2")) {
                        cntCharacter3++;
                    } else if (selected[i].classList.contains("a-3")) {
                        cntCharacter4++;
                    } else if (selected[i].classList.contains("a-4")) {
                        cntCharacter2++;
                    } else {
                        cntCharacter5++;
                    }
                }

                if (selected[i].classList.contains("q-8")) {

                    if (selected[i].classList.contains("a-1")) {
                        cntCharacter1++;
                    } else if (selected[i].classList.contains("a-2")) {
                        cntCharacter4++;
                    } else if (selected[i].classList.contains("a-3")) {
                        cntCharacter3++;
                    } else if (selected[i].classList.contains("a-4")) {
                        cntCharacter2++;
                    } else {
                        cntCharacter5++;
                    }
                }

                if (selected[i].classList.contains("q-9")) {

                    if (selected[i].classList.contains("a-1")) {
                        cntCharacter1++;
                    } else if (selected[i].classList.contains("a-2")) {
                        cntCharacter2++;
                    } else if (selected[i].classList.contains("a-3")) {
                        cntCharacter4++;
                    } else if (selected[i].classList.contains("a-4")) {
                        cntCharacter3++;
                    } else {
                        cntCharacter5++;
                    }
                }

            }

            // console.log(`${character1} = ${cntCharacter1}`);
            // console.log(`${character2} = ${cntCharacter2}`);
            // console.log(`${character3} = ${cntCharacter3}`);
            // console.log(`${character4} = ${cntCharacter4}`);
            // console.log(`${character5} = ${cntCharacter5}`);

            let maxPoints = Math.max(cntCharacter1, cntCharacter2, cntCharacter3, cntCharacter4, cntCharacter5);

            let charToShow = identifyACharacter(maxPoints, cntCharacter1, cntCharacter2, cntCharacter3, cntCharacter4, cntCharacter5);

            showACharacterDiv(charToShow);
        }
    });
}

const showACharacterDiv = (char) => {
    let char1 = "Ameli";
    let char2 = "Fibi";
    let char3 = "Sheldon";
    let char4 = "Toni";
    let char5 = "Vincent";

    let allCharacters = document.querySelectorAll(".character");

    let charDiv = document.querySelector("#character-1");
    if (char2 === char) charDiv = document.querySelector("#character-2");
    if (char3 === char) charDiv = document.querySelector("#character-3");
    if (char4 === char) charDiv = document.querySelector("#character-4");
    if (char5 === char) charDiv = document.querySelector("#character-5");

    for (let i = 0; i < allCharacters.length; i++) {
        allCharacters[i].style.display = "none";
    }

    charDiv.style.display = "flex";
    charDiv.style.position = "fixed";
    charDiv.style.top = "0";

    let closeBtns = document.querySelectorAll(".close-div");
    for (let i = 0; i < closeBtns.length; i++) {
        let closeBtn = closeBtns[i];
        closeBtn.style.display = "initial";

        closeBtn.addEventListener("click", (event) => {
            let {target} = event;
            if (target.classList.contains("close-div")) {

                closeBtn.style.display = "none";

                charDiv.style.position = "relative";
                charDiv.style.top = "initial";

                clearSelectionsFromQuestions();
            }
        });

    }
}

const clearSelectionsFromQuestions = () => {
    let questions = document.querySelectorAll(".selected");
    questions.forEach(q => {
        q.classList.remove("selected");
    });
}
