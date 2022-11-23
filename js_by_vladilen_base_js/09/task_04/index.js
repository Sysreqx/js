const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
let updated_prices = prices.map((price) => {
    return price *= 1.5;
});

coffees.forEach((c, index) => {
    console.log(`Кофе ${c} сейчас стоит ${updated_prices[index]} евро`);
})