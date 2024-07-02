function solution(num_list) {
    let a = 1
    let b = 0
    for(let i = 0; i < num_list.length; i++){
        a = a * num_list[i]
        b += num_list[i]
    }
    return a < Math.pow(b,2) ? 1 : 0
}