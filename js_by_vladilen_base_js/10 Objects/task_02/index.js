const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];

const giveTalonsInOrder = (people, orders) => {
    return orders.map(o => people[o - 1]);
};

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);