function solution(s) {
    const arr = s.split('');
    let answer = [];
    let index = 0;
    arr.forEach((text) => {
        if (text === ' ') {
            answer.push(' ');
            index = 0;
        } else {
            answer.push(index % 2 === 0 ? text.toUpperCase() : text.toLowerCase());
            index++;
        }
    });
    return answer.join('');
}