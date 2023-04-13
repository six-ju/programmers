function solution(my_string, n) {
    var answer = '';

    for(var i = 0; my_string.length > i; i++){
        for(var j = 0; n>j;j++){
            answer += my_string.charAt(i)
        }
    }
    return answer;
}