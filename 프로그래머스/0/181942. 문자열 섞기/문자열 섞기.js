function solution(str1, str2) {
    let a = str1.length   
    let b = str2.length   
    let c = "";
    for(let i = 0; i < a; i++){
        c += str1[i] + str2[i]
    }
    return c
}