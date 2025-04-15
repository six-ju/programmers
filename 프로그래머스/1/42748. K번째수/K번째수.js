function solution(array, commands) {
    var answer = [];
    for(let i = 0; i < commands.length; i++){
        const num2 = commands[i][2]-1
        const num = (array.slice(commands[i][0] - 1,commands[i][1]).sort((a,b) => a-b))[num2]
        answer.push(num)
    }
    return answer;
}