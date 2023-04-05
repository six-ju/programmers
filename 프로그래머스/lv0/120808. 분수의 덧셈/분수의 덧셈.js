function solution(numer1, denom1, numer2, denom2) {
    result1 = numer1*denom2 + numer2*denom1;
    result2 = denom1*denom2
    max = 1
    
    for (let i = 1; i <= result1; i++){
       if(result1%i === 0 && result2%i === 0)
           max =i
    }
    return [result1/max,result2/max]
}