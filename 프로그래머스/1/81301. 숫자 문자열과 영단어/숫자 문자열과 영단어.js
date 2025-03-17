function solution(s) {
    const number = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
    };
    let answer = 0;
    const keys = Object.keys(number);
    for (let a = 0; a < keys.length; a++) {
        s = s.replaceAll(keys[a], number[keys[a]]);
    }
    answer = s;
    return parseInt(answer);
}
