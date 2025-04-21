class Person {
    country = 'Israel';

    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    celebrateBirthday() {
        ++this.age;
    }
}

const john = new Person('John', 32, 'India');
const jane = new Person('Jane', 28, 'Israel');

john.celebrateBirthday();
jane.celebrateBirthday();

console.log(john, jane);

// explore inheritance
class Employee extends Person {
    // explore super(), super.method() etc.
}