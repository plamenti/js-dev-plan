const scripts = require('./scripts.js');

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