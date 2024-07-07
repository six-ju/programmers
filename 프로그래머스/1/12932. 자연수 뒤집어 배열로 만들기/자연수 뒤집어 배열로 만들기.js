function solution(n) {
    n = (n + '').split('')
    let a = [];
    for(let i = n.length - 1; i >= 0 ; i--){
        a.push(Number(n[i]))
    }
    return a
}
