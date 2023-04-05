function solution(array) {
    let a = array.sort(function x(a,b){
                      if(a > b) return 1
                      if(a < b) return -1
                        return 0
    })
    let b = Math.floor(array.length/2)
    return a[b]
    }