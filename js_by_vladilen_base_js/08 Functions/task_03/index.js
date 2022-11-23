const getDivisorsCount = (number = 1) => {
    if (number === 0) return 0;
    if (number === 1) return 1;

    let count = 2;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            count += 1;
        }
    }

    return count;
}

console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5));
console.log(getDivisorsCount(12));
console.log(getDivisorsCount(30));