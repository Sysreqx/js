// 3.1.6

// Объявление функции
function testFactorial(inputData) {

    if (inputData == 0) {
        return 1
    }
    if (inputData < 0)                           // Проверяем - положительное ли число
        throw "Число не должно быть меньше нуля";      // Если отрицательное - "бросаем" исключение
    return (inputData - 1) ? (inputData * testFactorial(inputData - 1)) : inputData;
}

// инициируем переменную для входного параметра, зададим ее вручную в этом примере
var myNumber = -5;

// начало конструкции обработки ошибок
try {
    console.log((testFactorial(myNumber)));    //  попытка вызова функции
} catch (ex) {
    console.log((ex)); // если в функции произойдет исключение, то будет выведен текст,
// который мы использовали в параметре оператора throw
}