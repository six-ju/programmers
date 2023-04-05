function solution(numbers) {
    num = 0
    num2= 0
    for(let i= 0; i<numbers.length; i++){
        num += numbers[i]
        num2= num/numbers.length
    }
    return num2
}