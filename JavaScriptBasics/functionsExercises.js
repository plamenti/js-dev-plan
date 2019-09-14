// 1. Minimum
console.log('Task: Minimum');

const min = function (a, b) {
    return a < b ? a : b;
};

console.log(min(0, 10));
console.log(min(0, -10));

console.log('-'.repeat(10));

console.log('Task: Recursion');

const isEven = function (number) {
    absoluteValue = number < 0 ? number * -1 : number;

    if (absoluteValue == 0) {
        return true;
    }

    if (absoluteValue == 1) {
        return false;
    }

    return isEven(absoluteValue - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

console.log('-'.repeat(10));

console.log('Task: Bean counting');

// const countBs = function(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'B') {
//             count++;
//         }
//     }

//     return count;
// };

const countChar = function(str, symbol) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == symbol) {
            count++;
        }
    }

    return count;
}

const countBs = function(str) {
    return countChar (str, 'B');
};

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

console.log('-'.repeat(10));