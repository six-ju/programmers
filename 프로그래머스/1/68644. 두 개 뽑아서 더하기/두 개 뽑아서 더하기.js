function solution(numbers) {
    let answer = [];
    for (let index = 0; index < numbers.length; index++) {
        for (let index2 = 0; index2 < numbers.length; index2++) {
            if (index === index2) continue;
            answer.push(numbers[index] + numbers[index2]);
        }
    }
    answer = [...new Set(answer)];
    answer.sort((a, b) => a - b);
    return answer
}