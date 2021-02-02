let input = require('fs')
  .readFileSync('./input/day3.txt', { encoding: 'utf8' })
  .split('\n')
  .map((row) => row.split(''));

const part1 = (input) => {
    let curX = 0;
    let curY = 0;
    const widthWrap = input[0].length;
    const lengthWrap = input.length;
    let numTrees = 0;

    const moveAndMark = (direction, numSteps, mark) => {
        switch (direction) {
            case 'down':
                let hitTree = false;
                curX++;
                // Check if we are at the bottom
                if (curX >= lengthWrap) {
                    // Log out the number of trees we landed on
                    console.log(numTrees);
                    // End the while loop
                    return false;
                }
                if (!mark) return true;

                if (input[curX][curY] === '#') {
                    hitTree = true;
                    numTrees++;
                }

                if (hitTree) {
                    input[curX][curY] = 'X'
                } else {
                    input[curX][curY] = 'O'
                }
                return true;

            case 'right':
                curY = (curY + numSteps) % widthWrap;
                return true;
        }
    }

    let notAtTheBottom = true;
    while (notAtTheBottom) {
        notAtTheBottom = moveAndMark('right', 3, false);
        notAtTheBottom = moveAndMark('down', 1, true);
    }
}

part1(input);