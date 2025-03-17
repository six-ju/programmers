function solution(num_list) {
    let anum = 0;
    let bnum = 0;
    for(let a=0; a < num_list.length; a++){
        if(num_list[a] % 2 == 0){
             anum++
        }else{
            bnum++
        }
    }
    return [anum, bnum];
}