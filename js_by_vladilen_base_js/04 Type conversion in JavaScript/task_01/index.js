const obj = null;
const undef = undefined;
const bool = true;
const num = 25;
const bigInt = 25n;
const str = "String";
const symb = Symbol("symb");

console.log(Number(obj), Boolean(obj), String(obj));
console.log(Number(undef), Boolean(undef), String(undef));
console.log(Number(bool), Boolean(bool), String(bool));
console.log(Number(num), Boolean(num), String(num));
console.log(Number(bigInt), Boolean(bigInt), String(bigInt));
console.log(Number(str), Boolean(str), String(str));
console.log(Boolean(symb), String(symb));