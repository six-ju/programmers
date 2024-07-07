function solution(n) {
    n = (n + '').split('')
    let a = [];
    let b = n.length - 1
    for(let i = 0; i < n.length; i++){
        a[i] = Number(n[b])
        b--
    }
    return a
}
