// 1. The sum of a range
console.log('Task: The sum of a range');

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

console.log('-'.repeat(10));

// 2. Reversing an array
console.log('Task: Reversing an array');

const reverseArray = function (array) {
    const reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray;
};

const reverseArrayInPlace = function (array) {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
};

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

console.log('-'.repeat(10));

// 3. A list
console.log('Task: A list');

const arrayToList = function (array) {
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }

    return list;
}

console.log(arrayToList([10, 20]));

const listToArray = function (list) {
    const array = [];
    while (list) {
        array.push(list.value);
        list = list.rest;
    }

    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));

const prepend = function (value, list) {
    return { value, rest: list };
}

console.log(prepend(10, prepend(20, null)));

const nth = function (list, indexOfElement) {
    let index = 0;
    while (index <= indexOfElement && list) {
        if (index == indexOfElement) {
            return list.value;
        }

        index++;
        list = list.rest;
    }

    return undefined;
}

console.log(nth(arrayToList([10, 20, 30]), 1));

const nthRecursive = function (list, indexOfElement) {
    if (list && indexOfElement == 0) {
        return list.value;
    }

    if (!list) {
        return undefined;
    }

    indexOfElement--;

    return nthRecursive(list.rest, indexOfElement);
}

console.log(nthRecursive(arrayToList([10, 20, 30]), 1));

console.log('-'.repeat(10));

// 4. Deep comparison
console.log('Task: Deep comparison');

const deepEqual = function (a, b) {
    if (a === b) {
        return true;
    }

    if (a == null || typeof a != "object" || b == null || typeof b != "object") {
        return false;
    }

    let keysA = Object.keys(a)
    let keysB = Object.keys(b);

    if (keysA.length != keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }

    return true;
}

const obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

const arrayA = [1, 2];
console.log(deepEqual(arrayA, [1, 2]));
console.log('-'.repeat(10));