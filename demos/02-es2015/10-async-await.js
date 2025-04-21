const fetchWorkshops = async () => {
    console.log('2 - async function execution starts');

    const response = await fetch(`https://workshops-server.onrender.com/workshops`);

    console.log(response.ok);

    if (!response.ok) {
        throw new Error(`${response.statusText} - ${response.status}`);
    }

    const data = await response.json();
    console.log(data);


    console.log('3 - async function execution end');

    return 'done';
}

console.log('1 - before call to fetchWorkshops');
fetchWorkshops()
    .then(
        (message) => console.log('fetchWorkshops completed execution with message - ', message)
    )
    .catch(
        error => console.log(error.message)
    );

console.log('4 - after call to fetchWorkshops');