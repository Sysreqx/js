const getDaysBeforeBirthday = nextBirthdayDate => {
    let d = new Date();
    nextBirthdayDate -= d;
    return Math.floor(nextBirthdayDate / 86400000);
};

let bDay = new Date(2023, 5, 18);

console.log(getDaysBeforeBirthday(bDay));