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