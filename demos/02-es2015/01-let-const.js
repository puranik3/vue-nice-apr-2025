if (true) {
    var x = 1; // not block scoped
    let y = 2; // block scoped - even 'const' variables are block-scope
    y = 3; // allowed - not allowed if this were const
}

console.log('x = ', x);
// console.log('y = ', y); // error due to block scoping

const z = 100; // must be initialized. cannot be reassigned.
// z = 200; // error

// non-primitive (object, array etc.)
const john = {
    name: 'John',
    age: 32
};

// error
// john = {
//     name: 'Jonathan',
//     age: 33
// };

john.age = 33;

john.spouse = 'Jane';

console.log(john);