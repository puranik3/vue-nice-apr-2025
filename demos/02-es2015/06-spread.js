// ... ('spread') - there is another operator 'rest' which is overloaded - ...

// merging arrays
const arr1 = [1, 2, 3], arr2 = [4, 5, 6];
const arr3 = [...arr1, 3.5, 3.75, ...arr2];

console.log(arr3);

// merge 2 objects
const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@gmail.com',
        'john@nice.com'
    ],
    address: {
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India'
    }
};

const johnEmployment = {
    name: 'Jonathan',
    company: 'NICE',
    role: 'Accountant',
    dept: 'Finance'
};

const johnAllDetails = {
    ...john,
    ...johnEmployment,
    spouse: 'Jane',
    role: 'Senior Accountant'
};

john.address.city = 'Mysuru'; // since a shallow copy is made for non-primitives, this affects johnAllDetails

console.log(johnAllDetails);


