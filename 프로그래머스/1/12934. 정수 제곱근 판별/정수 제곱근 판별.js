function solution(n) {
    const num = Math.sqrt(n);
    if(num % 1 === 0){
        console.log(num)
        return Math.pow(num + 1 , 2)
    }else{
        return -1
    }
}