function solution(a, b) {
    return a.reduce((acc, num, index) => {
        const num1 = b[index];

        acc += num * num1;
        return acc;
    }, 0);
}