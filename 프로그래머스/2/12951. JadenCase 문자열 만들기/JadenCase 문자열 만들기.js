function solution(s) {
    const ss = s.toLowerCase().split(' ')
    const word = []
    ss.map((a)=>{
        let splitWord = a.split('')
        splitWord[0] = splitWord[0]?.toUpperCase()
        word.push(splitWord.join(''))
    })
    
    return word.join(' ')
}