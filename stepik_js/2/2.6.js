// 2.6.4
// function testMath(a) {
//     let rad = a * Math.PI / 180;
//     return Math.sin(rad);
// }
//
// console.log(testMath(348));


// 2.6.5
function testMath(a, b, c) {
    let rad = c * Math.PI / 180;
    return 1 / 2 * a * b * Math.sin(rad);
}

// console.log(testMath(2, 10, 16));


// 2.6.7
function testMath(a, b, c, d) {
    let min = Math.min(a, b, c, d);
    let max = Math.max(a, b, c, d);
    return Math.floor(max / min);
}

// console.log(testMath(1, 4, 8, 8));

// 2.6.9
function testMath(a, b) {
    return Math.pow(a, b);
}

// console.log(testMath(5, 1));