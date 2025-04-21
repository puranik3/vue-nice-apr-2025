type Person = {
    name: string;
    readonly age: number; // readonly is like const for properties
    spouse?: string;
};

let john: Person = {
    name: "John",
    age: 32,
    // children: [ 'Jack', 'Jill' ] // error
};

let jane: Person = {
    name: "Jane",
    age: 28,
    spouse: "Jane",
};

john.spouse = "Jane";
// john.children = [ 'Jack', 'Jill' ]; // error

// john.age = 33; // error
