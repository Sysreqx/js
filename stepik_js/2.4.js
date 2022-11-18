// 2.4.5
// function testArray(a, b) {
//
//     let sum = 0;
//
//     const arr = a.concat(b);
//
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//
//     return sum;
// }
//
// console.log(testArray([0, 1, 5, 3], [3]));


// 2.4.10
function testArray(a, b) {
    return (a.concat(b)).split("").reverse().join("").concat("Иванов");
}

console.log(testArray("4326", "297515"));