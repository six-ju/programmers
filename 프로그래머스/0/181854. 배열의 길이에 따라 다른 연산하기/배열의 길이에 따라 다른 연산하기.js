function solution(arr, n) {
    const isTrue = arr.length % 2 == 0 ? "even": "odd"
    
    for(let i = 0; i < arr.length;i++){
        if(isTrue == "even" && i%2 != 0){
            arr[i] = arr[i] + n 
        }else if(isTrue == "odd" && i%2 == 0){
            arr[i] = arr[i] + n 
        }
    }

    return arr;
}