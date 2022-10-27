function solution(emergency) {
    let emerArr = emergency.slice().sort((a,b) => b-a);
    let answer = [];
    
    emergency.map((el)=> {
        answer.push(emerArr.indexOf(el)+1)
    })
    
    return answer;
}