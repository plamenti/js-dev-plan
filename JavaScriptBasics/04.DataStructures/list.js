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