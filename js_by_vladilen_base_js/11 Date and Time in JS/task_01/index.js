const getDateFormat = (date, separator = ".") => {
    if (separator !== ".") separator = "-";

    return date.getFullYear().toString() + separator +
        (date.getMonth() + 1).toString() + separator +
        date.getDay().toString();
};

let d = new Date();

console.log(getDateFormat(d, ""));