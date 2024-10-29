function solution(n) {
    let answer = "";
    for (let a = 1; a <= n; a++) {
        answer += a % 2 !== 0 ? '수' : '박';
    }
    return answer;
}