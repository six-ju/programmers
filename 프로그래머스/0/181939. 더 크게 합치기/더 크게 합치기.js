function solution(a, b) {
    let sum = a.toString() + b.toString()
    let other = b.toString() + a.toString()
    if(sum > other){
        return Number(sum)
    }else{
        return Number(other)
    }
}