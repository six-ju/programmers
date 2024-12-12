function solution(price, money, count) {
    let p = 0
    for(let a = 1; a <= count; a++){
        p += price*a
    }
    
    const paid = p - money 
    if(paid <= 0){
        return 0
    }else{
        return paid
    }
        
    

    return answer;
}