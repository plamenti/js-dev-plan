iterations = 100;
for (let i = 1; i <= iterations; i++) {
    let result = '';

    if (i % 3 == 0 && i % 5 == 0) {
        result = 'FizzBuzz';
    } else if (i % 3 == 0) {
        result = 'Fizz';
    } else if (i % 5 == 0) {
        result = 'Buzz';
    } else {
        result = i;
    }

    console.log(result);
}