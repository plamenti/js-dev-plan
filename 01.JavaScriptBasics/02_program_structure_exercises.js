// 1. Looping a triangle
console.log('Task: Looping a triangle');
const symbol = '#';
let iterations = 7;
for (let i = 1; i <= iterations; i++) {
    console.log(symbol.repeat(i));
}

console.log('-'.repeat(10));

// FizzBuzz
console.log('Task: FizzBuzz');
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

console.log('-'.repeat(10));

// Chessboard
console.log('Task: Chessboard');
iterations = 8;
let result = '';
for (let i = 0; i < iterations; i++) {
    for (let j = 0; j < iterations; j++) {
        result += (j + i) % 2 == 0 ? ' ' : symbol;
    }

    console.log(result);
    result = '';
}


