function getIndexToIns(arr, num) {
    if (arr.length === 0) return 0;

    let arrTmp = arr.sort((a, b) => {
        return a - b;
    });
    // console.log(arrTmp)
    for (let i = 0; i < arrTmp.length - 1; i++) {

        if (arrTmp[i] === num)
            return i;

        if (arrTmp[i] < num && arrTmp[i + 1] > num) {
            return i + 1;
        }

    }

    return arrTmp.length
}

// console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
// console.log(getIndexToIns([2, 5, 10], 15))