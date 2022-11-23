const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
let updatedPrices = prices.map((price) => {
    return price *= 1.5;
});

let clientEstimations = [];

const askClientToGiveEstimation = () => {
    let n = Number.parseInt(prompt("Как вы оцениваете нашу кофейню от 1 до 10 Objects"));

    if (n >= 1 && n <= 10) {
        clientEstimations.push(n);
    }
}

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

alert(`Всего положительных оценок: ${clientEstimations.filter(e => e <= 5).length};
Всего отрицательных оценок: ${clientEstimations.filter(e => e > 5).length}`);
