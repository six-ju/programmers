function solution(n)
{
    n = n.toString()
    let a = 0;
    for(let i = 0; i < n.length; i++){
        a += Number(n[i])
    }
    return a
}

