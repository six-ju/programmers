function solution(arr, k) {
    return arr.reduce((acc, num) => {
        if (k % 2 != 0) {
            acc.push(num * k);
        } else {
            acc.push(num + k);
        }
        return acc;
    }, []);
}