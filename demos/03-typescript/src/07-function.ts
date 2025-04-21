// data type for arguments
// data type for the returned value

function sum1(x: number | string, y?: number | string) /*: number */ {
    // type narrowing
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }

    if (typeof x === "string" && typeof y === "string") {
        return x.length + y.length;
    }
}

sum1("hello", "world"); // a
sum1(1, 2); // b
sum1(1, "world"); // c
sum1(1);

const sum2 = (x: number, y: number) /*: number */ => x + y;

type BinaryFunction = (x: number, y: number) => number;

// For function expressions
const sum3: BinaryFunction = (x, y) => x + y;

// void return type -> we don't care what value is returned
type CallbackFunction = () => void;

function baz(callback: CallbackFunction) {
    callback();
}

function foo() {
    console.log("foo");
    return 100;
}

// callback = foo
baz(foo);

// baz(100); // error -> we must pass a function as argument, not a number
