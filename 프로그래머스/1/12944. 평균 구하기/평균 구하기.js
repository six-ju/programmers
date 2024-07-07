function solution(arr) {
    let a = 0;
    for(let i = 0; i < arr.length; i++){
        a += arr[i]
    }
    return a / arr.length
}
