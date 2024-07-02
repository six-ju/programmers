function solution(num_str) {
    let a = 0
    for(let i = 0 ; i < num_str.length; i++){
        a += Number(num_str[i])
    }
    return a
}