function solution(arr)
{
    let answer = []
    for(const i of arr){
        let isCheck = (answer[answer.length - 1] == i)
        if(!isCheck){
            answer.push(i)
        }
    }
    
    return answer;
}