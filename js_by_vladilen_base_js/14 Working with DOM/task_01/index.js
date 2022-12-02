/////////////
document.body.innerHTML = `
    <form class="create-user-form">
        <label>
          Имя
          <input type="text" name="userName" placeholder="Введите ваше имя">
        </label>
        <label>
          Пароль
          <input type="password" name="password" placeholder="Придумайте пароль">
        </label>
        <button type="submit">
          Подтвердить
        </button>
    </form>`;

let createUserForm = document.createElement("form");
createUserForm.className = "create-user-form";

let label1 = document.createElement("label");
label1.innerText = "Имя ";
let input1 = document.createElement("input");
input1.type = "text";
input1.name = "userName";
input1.placeholder = "Введите Ваше имя";
label1.append(input1);

let label2 = document.createElement("label");
label2.innerText = " Пароль ";
let input2 = document.createElement("input");
input2.type = "password";
input2.name = "password";
input2.placeholder = "Придумайте пароль";
label2.append(input2);

let btn = document.createElement("button");
btn.innerText = "Подтвердить";

createUserForm.append(label1);
createUserForm.append(label2);
createUserForm.append(btn);
document.body.append(createUserForm);


