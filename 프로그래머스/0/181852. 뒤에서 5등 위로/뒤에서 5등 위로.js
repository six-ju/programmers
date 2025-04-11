function solution(num_list) {
    const numList = num_list.sort((a, b) => a - b).slice(5)
    return numList;
}