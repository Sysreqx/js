// 2.3.3
// function testStr(a, b) {
//     return a.toString().length + b.toString().length;
// }

// console.log(testStr(5794675, 181683))


// 2.3.5
// function testStr(str, n) {
//     return str.charAt(n - 1);
// }
//
// console.log(testStr("Ithardlycousinmealways", 19))


// 2.3.8
// function testStr(a, b) {
//     return a.toUpperCase().concat(b.toLowerCase());
// }
//
// console.log(testStr("heLLo", "WOrLD"))


// 2.3.12
function testStr(a, b) {
    return a.indexOf(b, 0);
}

console.log(testStr("This is a test string", "test"));