const q1 = "JavaScript появился в 1995 году?";
const q2 = "Спецификация\n" +
    "JavaScript называется ECMAScript?"
const q3 = "JavaScript был создан за 1 месяц?";

const a1 = true;
const a2 = true;
const a3 = false;

const user_answer1 = confirm(q1);
user_answer1 === a1 ? alert("Верно") : alert("Неверно");

const user_answer2 = confirm(q2);
user_answer2 === a2 ? alert("Верно") : alert("Неверно");

const user_answer3 = confirm(q3);
user_answer3 === a3 ? alert("Верно") : alert("Неверно");
