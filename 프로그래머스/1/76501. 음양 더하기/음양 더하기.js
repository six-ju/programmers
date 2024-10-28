function solution(absolutes, signs) {
    return absolutes.reduce((acc, num, index) => {
        return signs[index] ? (acc += num) : (acc -= num);
    },0);
}