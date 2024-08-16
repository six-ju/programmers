using System;
using System.Collections.Generic;

public class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        List<int> list = new List<int>(numbers);
        
        for(var j = 0; j < 10; j++){
            if(!list.Contains(j))
            {
                answer += j;
            }
        }
        
        return answer;
    }
}