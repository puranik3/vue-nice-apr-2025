// function foo() {
//     console.log('hello');
// }

// arrow function
const foo = (x, y) => console.log( 'hello' ); // arrow function differs in how the function context - "this", behaves

const bar = foo;

foo();
bar();