function solution(n) {
    if(n === 1) return "수";

    let answer = "";
    let repeatCount = Math.floor(n / 2);
    
    for(let i=0; i<repeatCount; i++){
        answer += "수박";     
    }
    
    if(n%2 === 1){
        answer += "수"
    }
    return answer;
}