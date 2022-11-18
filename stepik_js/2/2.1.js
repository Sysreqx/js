// 2.1.10
function func(n) {
    if (n <= 1) return 1;
    return func(n - 1) + " " + n;
}

// console.log(func(11));