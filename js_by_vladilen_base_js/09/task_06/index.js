const numbers = [10, 4, 100, -5, 54, 2];

let sum = 0;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 3;
}

for (let n of numbers) {
    sum1 += n ** 3;
}

numbers.forEach(n => sum2 += n ** 3);


const initialValue = 0;
sum3 = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue ** 3,
    initialValue
);

console.log(sum);
console.log(sum1);
console.log(sum2);
console.log(sum3);