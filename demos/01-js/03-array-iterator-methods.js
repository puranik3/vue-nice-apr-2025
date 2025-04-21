// array iterator methods
const numbers = [1, 2, 3, 4, 5];

// select items based on some criteria (filter) - filter()
// returns an array
const filteredNumbers = numbers.filter(
    (item) => item % 2 === 1
);

console.log(filteredNumbers);

// find()
const firstOddNumber = numbers.find(
    item => item % 2 === 1
);

console.log(firstOddNumber);

// map to generate [1, 4, 9, 16, 25];
const squaredNumbers = numbers.map(
    item => item * item
);

console.log(squaredNumbers);
