const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    let n = Number(input[0])
    if(Number(line) % 2 == 0){
        console.log(line + " is even")
    }else{
        console.log(line + " is odd")
    }
})