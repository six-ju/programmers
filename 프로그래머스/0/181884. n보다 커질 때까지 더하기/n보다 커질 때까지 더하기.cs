using System;

public class Solution {
    public int solution(int[] numbers, int n) {
        int num = 0;
        for(var i = 0; i < numbers.Length; i++){
            if(num <= n)
            {
                num += numbers[i];
            };
        }
        return num;
    }
}