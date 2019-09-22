function getAverageNumber(arr) {
    const sum = arr.reduce((a, b) => a + b);

    return sum / arr.length;
}

module.exports = getAverageNumber;