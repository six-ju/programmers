function solution(arr) {
  return arr.reduce((acc, a) => {
    return acc.concat(Array(a).fill(a));
  }, []);
}