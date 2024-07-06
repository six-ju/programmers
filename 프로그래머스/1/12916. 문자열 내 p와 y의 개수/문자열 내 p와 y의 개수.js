function solution(s){
    s = s.toLowerCase()
    let a = 0;
    let b = 0;
    for(let i = 0; i < s.length; i++){
       if(s[i] == "p"){
           a++
       } else if(s[i] == "y"){
           b++
       }
    }
    return a == b ? true : false
}