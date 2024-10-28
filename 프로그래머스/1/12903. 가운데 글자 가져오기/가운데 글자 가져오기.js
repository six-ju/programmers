function solution(s) {
    const floor = Math.floor(s.length/2)
    return s.length % 2 !== 0 ? s[floor] : `${s[floor-1]}${s[floor]}`
}

