function solution(progresses, speeds) {
    var answer = [];
    const date = [];
    for(const p of progresses){
        const ceilNum = Math.ceil((100 - p) / speeds.shift())
        const isCheck = date[0] || 0
        
        if(isCheck < ceilNum){
            date.pop()
            date.push(ceilNum)
            answer.push(1)
        }else{
            answer.push(answer.pop() + 1)
        }
    }
    return answer;
}