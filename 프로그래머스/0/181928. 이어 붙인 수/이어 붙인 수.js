function solution(num_list) {
    let b = ""
    let c = ""
    for(let i = 0; i < num_list.length; i++){
        let a = num_list[i]
        a % 2 == 0 ? b += a : c += a
    }
    return Number(b) + Number(c)
}