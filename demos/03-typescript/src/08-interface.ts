// to type object
// defines the public data members / methods
interface IPerson {
    name: string;
    age: number;
    country: string;
    celebrateBirthday: () => number;
}

let john: IPerson = {
    name: "John",
    age: 32,
    country: "Israel",
    celebrateBirthday() {
        ++this.age;
        return this.age;
    },
};

// to enforce a contract on class
class Person implements IPerson {
    public name: string;
    public age: number;
    public country: string = "Israel";

    constructor(name: string, age: number, country?: string) {
        this.name = name;
        this.age = age;

        if (country !== undefined) {
            this.country = country;
        }
    }

    public celebrateBirthday() {
        ++this.age;
        return this.age;
    }
}

export {};
