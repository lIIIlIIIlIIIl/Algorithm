function solution(participant, completion) {
    let person = {};
    let answer = "";
    
    participant.forEach((p) => {
        if(!person[p]){
            person[p] = 1;
            return;
        }
        if(person[p]){
            person[p]++;
            return;
        }
    })
    
    completion.forEach((p) => {
        if(person[p]){
            person[p]--;
            return;
        }
    })
    
    for(let key in person){
        if(person[key] === 1){
            answer += key;
        }
    }
    
    return answer;
}