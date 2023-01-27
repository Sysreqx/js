function chunkArrayInGroups(arr, size) {
    let cnt = arr.length / size;
    let remainder = arr.length

    let arrReturn = [];

    let arrTmp = [];
    for (let i = 0; i < arr.length; i++) {
        arrTmp.push(arr[i]);
        if ((i + 1) % size === 0) {
            arrReturn.push(arrTmp);
            arrTmp = [];
        } else if (i === arr.length - 1) {
            arrReturn.push(arrTmp);
            break;
        }
    }

    // console.log(arrReturn);
    return arrReturn;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)