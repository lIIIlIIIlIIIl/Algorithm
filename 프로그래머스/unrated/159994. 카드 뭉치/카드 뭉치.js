function solution(cards1, cards2, goal) {
    let answer = '';

    goal.forEach((card) => {
        if(cards1[0] !== card && cards2[0] !== card){
            answer = 'No'
            return;
        }
        if(cards1[0] === card){
            cards1.splice(0,1);
        }
        if(cards2[0] === card){
            cards2.splice(0,1)
        }
    });

    return answer === "" ? 'Yes' : answer;
}