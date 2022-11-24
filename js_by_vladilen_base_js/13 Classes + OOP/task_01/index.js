class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.technologies = [];
        this.status = "Junior";
    }

    setTechnologies = function (technologies) {
        this.technologies = [
            ...this.technologies,
            ...technologies,
        ];
    }

    setNewStatus = function (newStatus) {
        this.status = newStatus;
    }
}

const student =
    new Student('student #1', 20);
student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
student.setNewStatus('Middle');
console.log(student);
