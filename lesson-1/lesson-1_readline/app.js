const readline = require('readline');
const process = require('process');

// I / O
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let query = "What's ur name?";

r1.setPrompt(query);

r1.prompt();

r1.on('line', function (data) {
    console.log('The result of operation is :', data);

    console.log('There is the end of the programm!');

    if (data === 'John') {
        r1.close();
    }
});

r1.on('close', () => {
    console.log('Here is the end of a process!');
    process.exit();
});

// Guess the number!
// if input number less than magicNumber => console.log(ur number less than mine)
// if input number bigger than magicNumber => console.log(ur number bigger than mine)
// Attempts counter 1, 2, 3, 4, 5
