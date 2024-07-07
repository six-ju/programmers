function solution(n) {
    let a = 0;
    for(let i = 0; i <= n; i++){
        if(n%i == 0){
            a += i
        }
    }
    return a
}
