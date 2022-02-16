const inquirer = require('inquirer');
const availableGuesses = require('./acceptableWords');
const availableAnswers = require('./answerWords');

const ui = new inquirer.ui.BottomBar();

// Credit: https://github.com/yixizhang/seed-shuffle/blob/master/index.js
function shuffleArray(array: any[], seed: number = 1) {
    let currentIndex = array.length;

    function random() {
        const x = Math.sin(seed++) * 10000;

        return x - Math.floor(x);
    };

    // While there remain elements to shuffle...
    while (0 < currentIndex) {
        // Pick a remaining element...
        const randomIndex = Math.floor(random() * currentIndex);

        currentIndex--;

        // And swap it with the current element.
        const temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Credit: http://indiegamr.com/generate-repeatable-random-numbers-in-js/
function seededRandom(seed: number = 1, max: number = 1, min: number = 0) {
    const calcdSeed = (seed * 9301 + 49297) % 233280;
    const rnd = calcdSeed / 233280;

    return min + rnd * (max - min);
}

// Credit: https://gist.github.com/loilo/736d5beaef4a96d652f585b1b678a12c
function getLocalISOString(date: Date) {
    const offset = date.getTimezoneOffset();
    const offsetAbs = Math.abs(offset);
    const isoString = new Date(date.getTime() - offset * 60 * 1000).toISOString();

    return `${isoString.slice(0, -1)}${offset > 0 ? '-' : '+'}${String(Math.floor(offsetAbs / 60)).padStart(2, '0')}:${String(offsetAbs % 60).padStart(2, '0')}`;
}

function getDateNumber(date: Date = (new Date())) {
    return Number(getLocalISOString(date).split('T')[0].replaceAll('-', ''));
}

function getDateBasedItem(list: Array<any>, date?: Date) {
    const randomIndex = Math.floor(
        seededRandom(getDateNumber(date), list.length - 1, 0)
    );

    return list[randomIndex];
}

function generateHint(guess: string, answer: string) {
    return guess.split('').map((letter: string, index: number) => {
        if (letter === answer[index]) {
            return "🟩";
        } else if (answer.includes(letter)) {
            return "🟨";
        } else {
            return "⬛";
        }
    }).join('');
}

interface Answers {
    word: string;
}

function promptForWord(answer: string, count: number = 1) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'word',
            message: `Enter a 5 letter word to guess:`,
            validate: (input: string) => {
                return input.length === 5
                    && (availableAnswers.includes(input)
                    || availableGuesses.includes(input));
            }
        }
    ]).then((answers: Answers) => {
        const word = answers.word.toLowerCase();

        ui.log.write(generateHint(word, answer));

        if (word === answer) {
            return console.log('Congratulations! You guessed the word!');
        }

        if (count < 5) {
            promptForWord(answer, ++count);
        } else {
            return console.log(`Disappointing! The word was "${answer}"!`);
        }
    });
}

function game(dateOffset: number = 0) {
    const setDate = new Date();
    setDate.setDate(setDate.getDate() + dateOffset);

    const word = getDateBasedItem(
        availableAnswers,
        setDate
    );

    promptForWord(word);
}

game(Number(process.argv[2]) || 0);
