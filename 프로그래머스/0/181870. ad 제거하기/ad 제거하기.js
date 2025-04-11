function solution(strArr) {
    const answer = strArr.filter(str => !str.includes('ad'))
    return answer;
}