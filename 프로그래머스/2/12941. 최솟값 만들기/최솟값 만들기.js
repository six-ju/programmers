function solution(A,B){
    let answer = 0
    A.sort((a,b) => a-b)
    B.sort((a,b) => b-a)
    
    A.map((a,b)=>{
        answer += B[b]*a
    })

    return answer;
}