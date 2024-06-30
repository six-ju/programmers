const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let str = ''
rl.on('line', function (line) {
    for(let i = 0; i < line.length; i++){
        let str = line[i]
        console.log(str)
    }
});