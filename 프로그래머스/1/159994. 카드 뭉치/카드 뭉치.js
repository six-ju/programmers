function solution(cards1, cards2, goal) {
    let answer = 'Yes'
    for(const q of goal){
        let card1 = cards1.shift()
        let card2 = cards2.shift()
        
        if(q != card1 && q != card2){
            answer = 'No'
            break;
        }
        card1 == q ? cards2.unshift(card2) : cards1.unshift(card1)
    }
    
    return answer ;
}