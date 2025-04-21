// setTimeout() hands over the function f to the runtime (Node JS, browser)
// The runtime executes f anytime it is free after 3 seconds
// setTimeout is a non-blocking function
setTimeout(
    () => console.log(1), // f
    3000 // 3 seconds
);

setTimeout(
    () => console.log(2),
    2000
);

console.log('loop about to start');

// > 3 seconds to execute on my machine
// meanwhile, when 3 seconds pass, f waits in the event queue
// once this loop completes execution, f is picked up by the runtime from the event queue, and executed
for (let j = 0; j < 5; ++j) {
    for (let i = 0; i < 2e9; ++i) {
        ;
    }
}

console.log('loop executed');