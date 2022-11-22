const q1 = "Сколько будет 2 + 2?";
const q2 = "Сколько будет 2 * 2?";
const q3 = "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети\n" +
    "осталось?";
const q4 = "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще\n" +
    "5 конфет. Сколько в итоге конфет осталось у Маши?";
const q5 = "Сколько будет 2 + 2 * 2?";

const a1 = 4;
const a2 = 4;
const a3 = 1;
const a4 = 12;
const a5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

let user_answer1 = prompt(q1);
if (a1 === parseInt(user_answer1)) {
    alert("Ответ верный")
    correctAnswers += 1;
} else {
    alert("Ответ не верный")
    incorrectAnswers += 1;
}

let user_answer2 = prompt(q2);
if (a2 === parseInt(user_answer2)) {
    alert("Ответ верный")
    correctAnswers += 1;
} else {
    alert("Ответ не верный")
    incorrectAnswers += 1;
}

let user_answer3 = prompt(q3);
if (a3 === parseInt(user_answer3)) {
    alert("Ответ верный")
    correctAnswers += 1;
} else {
    alert("Ответ не верный")
    incorrectAnswers += 1;
}

let user_answer4 = prompt(q4);
if (a4 === parseInt(user_answer4)) {
    alert("Ответ верный")
    correctAnswers += 1;
} else {
    alert("Ответ не верный")
    incorrectAnswers += 1;
}

let user_answer5 = prompt(q5);
if (a5 === parseInt(user_answer5)) {
    alert("Ответ верный")
    correctAnswers += 1;
} else {
    alert("Ответ не верный")
    incorrectAnswers += 1;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);