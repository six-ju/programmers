function solution(arr) {
    if (arr.length == 1) {
        return [-1];
    }

    const low = arr.reduce((acc, num) => {
        return acc < num ? acc : num;
    }, arr[0]);

    const result = arr.filter((num) => num !== low);

    return result;
}