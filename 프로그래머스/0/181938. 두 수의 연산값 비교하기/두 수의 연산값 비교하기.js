function solution(a, b) {
    let strNum = Number(a.toString() + b.toString())
    let intNum = (Number(a) * Number(b)) * 2
    if(strNum > intNum){
        return strNum
    }else{
        return intNum
    }
}