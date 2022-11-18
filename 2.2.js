function Person(name, age, year) {
    this.name = name;
    this.age = age;
    this.year = year;
}

var employee1 = new Person("person #1", "25", "2017");

var person = {
    name: "Ivan",
    age: 25,
    hiredYear: 2017
}

person.sayAll = function () {
    for (var i in this) {
        console.log(i + " is " + this[i]);
    }
}

person.sayAll();
