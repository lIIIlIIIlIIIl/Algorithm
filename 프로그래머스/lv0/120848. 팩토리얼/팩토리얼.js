function solution(n) {
    let answer = 1;
    
    while(n){
        n = n/answer;
        
        if(n===1){
            return answer;
        }
        if(n < 1){
            return answer-1;
        }
        answer++;
    }
}