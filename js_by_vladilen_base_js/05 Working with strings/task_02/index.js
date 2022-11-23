const myName = "Kaisar";
const programmingLanguage = "JS";
const courseCreatorName = "Vladilen Minin";
const reasonText = "money";
const numberOfMonth = "a lot";

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования
${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а)
${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до
конца!`;

myInfoText = myInfoText.replaceAll("JS", "JAVASCRIPT");

console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText.at(0));
console.log(myInfoText.at(-1));
