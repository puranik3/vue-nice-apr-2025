const sum = (x, y, callback) => {
    setTimeout(
        () => { // f
            const result = x + y;
            callback(result);

            // return result; // useless to return (Node JS calls f and gets the result - why does it care about result)
        },
        3000
    );

    // return undefined;
};

sum(12, 13, (result1) => {
    console.log('result1 = ', result1);

    sum(result1, 14, (result2) => {
        console.log('result2 = ', result2);

        sum(result2, 15, (result3) => {
            console.log('result3 = ', result3);
        });
    });
});