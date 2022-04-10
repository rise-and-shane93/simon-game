const colors = ["red", "yellow", "blue", "green"];
let colorSequence = [];
let level = 4;

function getColorSequence(level) {
    
    let counter = 0;
    let randomInteger = Math.floor(Math.random() * (level - 1));
    let randomIntegerArr = [];
    // randomIntegerArr.push(randomInteger);

    // build initial array with null values
    for (let i = 0; i < level; i++) {
        randomIntegerArr.push(null);
    }

    // console.log(randomIntegerArr);

    let isNumUsed = false;
    while (counter < level) {
        if () {

        } else {
            randomInteger = Math.floor(Math.random() * (level - 1));
        }
    }

    // get a sequence of random numbers
    while (index < numsLength) {
        // number already used; run the function again
        if (theNums[random] != 100) {
            randomNums[index] = random;
            theNums[random] = 100; // means that the number has already been used in the random order sequence. Equivalent to null
            index++;
        } else {
            random = (int)(Math.random() * numsLength);
        }
    }

    // console.log(randomIntegerArr);

    // randomIntegerArr.forEach((el, i) => {
    //     colorSequence.push(colors[i]);
    // });
}

getColorSequence(level);
// console.log(colorSequence);

// function playGame(level, theColors) {
//     displayColors(level);
// }

// function displayColors(level) {

// }