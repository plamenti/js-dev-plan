const scripts = require('./scripts.js');

// 1. Flattening
console.log('Task: Flattening');

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((a, b) => a.concat(b)));

console.log('-'.repeat(10));

// 2. Your own loop
console.log('Task: Your own loop');

const loop = function (initialValue, test, update, action) {
    let value = initialValue;
    while (test(value)) {
        action(value);
        value = update(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

console.log('-'.repeat(10));

// 3. Everything
console.log('Task: Everything');

function every(array, test) {
    for (const element of array) {
        if (!test(element)) {
            return false;
        }
    }

    return true;

    // return !array.some(el => !test(el));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log('-'.repeat(10));

// 4. Dominant writing direction
console.log('Task: Dominant writing direction');

function characterScript(code) {
    for (let script of scripts) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }

    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let direction = groupName(item);
        let known = counts.findIndex(c => c.direction == direction);
        if (known == -1) {
            counts.push({ direction, count: 1 });
        } else {
            counts[known].count++;
        }
    }

    return counts;
}

function dominantDirection(text) {
    let foundScripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ direction }) => direction != "none");

    const directions = [];
    directions.push({ direction: 'ltr', count: foundScripts.filter(s => s.direction == 'ltr').length });
    directions.push({ direction: 'rtl', count: foundScripts.filter(s => s.direction == 'rtl').length });
    directions.push({ direction: 'ttb', count: foundScripts.filter(s => s.direction == 'ttb').length });

    let maxDirection = directions.reduce((max, scrDirection) => max.count > scrDirection.count ? max : scrDirection);

    return maxDirection.direction;
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));

console.log('-'.repeat(10));