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

// const name = john.name, age = john.age, officialEmail = john.emails[1], city = john.address.city, state = john.address.state;
const {
    emails: [
        ,
        officialEmail
    ],
    age: age_1,
    name,
    address: {
        city,
        state
    }
} = john;

console.log(name, age_1, officialEmail, city, state);