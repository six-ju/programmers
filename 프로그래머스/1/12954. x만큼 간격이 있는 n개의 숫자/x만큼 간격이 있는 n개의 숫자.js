function solution(x, n) {
    var answer = [];
    const y = x
    for (let a = 1; a <= n; a++) {
        answer.push(x);
        x = x + y;
    }
    return answer;
}