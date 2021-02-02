let input = require('fs').readFileSync('./input/day2.txt', { encoding: 'utf8' }).split('\n');

const part1 = (input) => {
    let validCounter = 0;
    input.map((entry) => {
        const split = entry.split(' ');
        [min, max] = split[0].split('-');
        const char = split[1].slice(0,1);
        const password = entry.split(': ')[1];
        const reg = new RegExp(`[^${char}]`, 'g');
        const word = password.replace(reg, '');
        const len = word.length;
        if (len >= min && len <= max) {
            validCounter++;
        }
    })

    console.log(validCounter);
}

const part2 = (input) => {
    let validCounter = 0;
    input.map((entry) => {
        const split = entry.split(' ');
        [firstIdxOfChar, secondIdxOfChar] = split[0].split('-');
        const char = split[1].slice(0,1);
        const password = entry.split(': ')[1];
        let passwordCounter = 0;
        if (password[firstIdxOfChar - 1] === char) {
            passwordCounter++;
        }

        if (password[secondIdxOfChar - 1] === char) {
            passwordCounter++;
        }

        if (passwordCounter === 1) {
            validCounter++;
        }
    })

    console.log(validCounter);
}

part2(input);