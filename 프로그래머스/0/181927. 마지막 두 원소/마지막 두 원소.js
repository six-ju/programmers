function solution(num_list) {
    var answer = [];
    let a = num_list.length - 1 
    let b = num_list[a] > num_list[a-1] ? num_list[a] - num_list[a-1] : num_list[a]*2
    num_list.push(b)
    return num_list
}