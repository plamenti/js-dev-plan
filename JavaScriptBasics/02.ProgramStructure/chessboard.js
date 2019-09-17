const symbol = '#';
const iterations = 8;
let result = '';
for (let i = 0; i < iterations; i++) {
    for (let j = 0; j < iterations; j++) {
        result += (j + i) % 2 == 0 ? ' ' : symbol;
    }

    console.log(result);
    result = '';
}