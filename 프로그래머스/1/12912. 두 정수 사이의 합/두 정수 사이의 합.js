function solution(a, b) {
    let  c = 0;
    let  d= 0;
    if(a > b){
        c = a;
        d = b;
        b = c;
        a = d;
        c = 0;
    }
    for(let i = a; i <= b; i++ ){
        c += i
    }
    return c
}