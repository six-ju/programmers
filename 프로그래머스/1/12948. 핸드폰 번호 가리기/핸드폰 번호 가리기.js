function solution(phone_number) {
    const num1 = phone_number.split('');
    const numlength = num1.length - 4;
    return num1.reduce((acc, num, index) => {
        index >= numlength ? acc.push(num) : acc.push('*');
        return acc
    }, []).join('');
}