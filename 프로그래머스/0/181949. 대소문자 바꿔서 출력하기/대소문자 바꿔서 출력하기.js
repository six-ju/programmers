const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
str = ''
rl.on('line', function (line) {
    for(let i = 0; i < line.length; i++){
        let n = line[i]
        if(n == n.toUpperCase()){
            str += n.toLowerCase()
        }else{
            str += n.toUpperCase()
        }
    }
    console.log(str)
    
});