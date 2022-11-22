let existedUserLogin = "a";
let existedUserPassword = "a";

let userLogin = prompt("Введите логин").trim();
let userPassword = prompt("Введите пароль");

if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
    alert(`Добро пожаловать, ${userLogin}`);
} else {
    alert("Логин и (или) Пароль введены неверно!");
}