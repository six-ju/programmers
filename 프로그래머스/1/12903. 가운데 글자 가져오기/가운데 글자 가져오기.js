function solution(s) {
    const num = s.length
    const floor = Math.floor(num/2)
    return num % 2 !== 0 ? s[floor] : `${s[floor-1]}${s[floor]}`
}