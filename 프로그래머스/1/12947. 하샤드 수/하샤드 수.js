function solution(x) {
    const num = x.toString().split('').map(Number);
    return x % num.reduce((acc, n) => {
        return acc += n ;
    }) === 0
}