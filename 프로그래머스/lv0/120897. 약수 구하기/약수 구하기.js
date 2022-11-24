function solution(n) {
    let answer = [];
    let halfNum = parseInt(n/2);
    for(let i=1; i<=n/2; i++){
        n%i===0 ? answer.push(i) : null;
    }
    answer.push(n);
    return answer;
}