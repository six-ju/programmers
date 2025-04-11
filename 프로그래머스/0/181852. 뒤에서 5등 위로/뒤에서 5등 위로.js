function solution(num_list) {
    const numList = num_list.sort(function(a, b)  {
                      return a - b;
                    }).slice(5)
    return numList;
}