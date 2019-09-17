const range = function (start, end, step = 1) {
    let array = [];

    for (let i = start; step < 0 ? i >= end : i <= end; i += step) {
        array.push(i);
    }

    return array;
}

const sum = function (array) {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
};

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));