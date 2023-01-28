function bouncer(arr) {
    let arrTmp = [];
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i]))
            arrTmp.push(arr[i]);
    }
    // console.log(arrTmp);
    return arrTmp;
}

bouncer([7, "ate", "", false, 9]);