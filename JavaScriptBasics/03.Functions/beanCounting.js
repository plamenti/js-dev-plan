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