function solution(s){
    const b = s.split('')
    const arr = []
    let result = true
        
    for(let num = 0; num < b.length ; num++){
        if(b[num] === '('){
            arr.push('(')
        }else{
            if(arr.length > 0){
            arr.pop()
            }else{
                result = false
                break;
            }
        }
    }
    
    if(arr.length > 0){
        result = false
    }
    return result;
}