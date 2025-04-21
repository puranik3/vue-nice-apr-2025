// fetch() returns a promise. promise is in one of 3 states - pending, resolved, rejected
// the promise 'resolves' once the data is obtained. when it resolves, the function passed to then(), i.e. f, is called
// the promise is 'rejected' when there is a network failure (no response from server), the function g is called
fetch(`https://workshops-server.onrender.com/workshops`, /*{ method: 'POST', body: ''}*/)
    .then(
        (response) => { // f - called when promise is resolved
            console.log(response.ok);

            if (!response.ok) {
                throw new Error(`${response.statusText} - ${response.status}`);
            }

            return response.json() // async operation - returns a promise
            // .then(
            //     (data) => {
            //         console.log(data);
            //     }
            // );
        }
    )
    .then(
        (data) => {
            console.log(data);

            // return doSomething(); // returns promise
        }
    )
    // .then(
    //     (newResult) => {

    //     }
    // )
    .catch(
        (error) => { // g - called when promise is rejected
            console.log(error.message);
        }
    )

// Explore: Promise.all(), Promise.race(), Promise.allSettled()