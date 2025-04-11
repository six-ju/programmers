function solution(nums) {
    const selectNum = nums.length / 2
    const setNums = [...new Set(nums)].length
    console.log(setNums)
    return selectNum < setNums ? selectNum : setNums
}