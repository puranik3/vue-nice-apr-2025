function baz(callback) {
    callback();
}

function foo() {
    console.log('foo');
}

// callback = foo
baz(foo); // baz is called with foo as an argument