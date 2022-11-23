// 2.5.8
function testDateTime(a, b) {
    let d1 = new Date(a);
    let d2 = new Date(b);

    let day = d1 >= d2 ? d1.getDay() : d2.getDay()

    switch (day) {
        case 0:
            return "Воскресенье";
        case 1:
            return "Понедельник";
        case 2:
            return "Вторник";
        case 3:
            return "Среда";
        case 4:
            return "Четверг";
        case 5:
            return "Пятница";
        case 6:
            return "Суббота";
    }
}

console.log(testDateTime("19 October 1909 10 Objects:27", "28 March 1909 00:59"));


