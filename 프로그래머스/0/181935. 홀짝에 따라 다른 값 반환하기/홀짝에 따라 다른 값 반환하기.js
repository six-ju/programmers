function solution(n) {
    let num = 0;
    if(n % 2 == 0){
        for(let i = 0; i <= n; i+=2 ){
            num += Math.pow(i, 2)
        }
    }else{
        for(let i = 1; i <= n; i++ ){
            num += i 
            i++
        }
    }
    return num
}