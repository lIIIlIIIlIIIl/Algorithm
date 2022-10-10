function solution(x, n) {
    let answer = [];
    let base = x;
    
    for(let i=0; i<n; i++){
        answer.push(base);
        base += x;
    }
    return answer;
}