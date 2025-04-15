function solution(s) {
    const ss = s.split(' ')
    ss.sort((a,b) => a-b)
    const max = ss.pop();
    const min = ss.shift();
    return `${min} ${max}`
}