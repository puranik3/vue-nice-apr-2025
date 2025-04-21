require('dotenv').config();

const MODE = process.env.MODE;

console.log('MODE = ', MODE);

if (MODE === 'authenticated') {
    require('./server-authenticated')
} else {
    require('./server-not-authenticated');
}