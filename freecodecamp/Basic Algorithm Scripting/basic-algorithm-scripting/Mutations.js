function mutation(arr) {
    let set = new Set();
    let set2 = new Set();
    for (let i = 0; i < arr[0].length; i++) {
        set.add(arr[0][i].toLowerCase());
    }

    for (let i = 0; i < arr[1].length; i++) {
        set2.add(arr[1][i].toLowerCase());
    }

    let arr1 = Array.from(set).sort();
    let arr2 = Array.from(set2).sort();

    // console.log(arr1);
    // console.log(arr2);

    let cnt = 0;
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j])
                cnt++;
        }
    }

    // console.log(cnt)
    return cnt === arr2.length;
}

mutation(["hello", "hey"]);