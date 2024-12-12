function solution(price, money, count) {
    let p = 0
    for(let a = 1; a <= count; a++){
        p += price*a
    }
    const paid = p - money 
    return paid <= 0 ? 0 : paid
}