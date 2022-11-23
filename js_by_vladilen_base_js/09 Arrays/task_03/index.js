const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffee = prompt("Введите название кофе").toLowerCase();
let coffee1 = coffee.charAt(0).toUpperCase() + coffee.slice(1);

let position = coffees.indexOf(coffee1);
console.log(position);

if (position !== -1) {
    alert(`Держите ваш любимый кофе ${coffee}. Он ${position + 1}-й по популярности в
нашей кофейне`);
} else {
    alert("К сожалению такого вида кофе нет в наличии");
}
