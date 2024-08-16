using System.Collections.Generic;
using System.Linq;
using System;

public class Solution {
    public List<int> solution(int[] arr, int divisor) {
        Array.Sort(arr);
        List<int> list = new List<int>();
        int count = 0;
        for(var i = 0; i < arr.Length; i++){
            if(arr[i]%divisor == 0)
            {
                list.Add(arr[i]);
                count++;
            }
        }
        if(count == 0 )
            {
                list.Add(-1);
            }
        return list;
    }
}