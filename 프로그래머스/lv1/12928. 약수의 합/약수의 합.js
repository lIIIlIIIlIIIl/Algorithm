function solution(n) {
    var answer = 0;
    // 약수의 합을 구하시오
    for(let i=1; i<=n; i++){
        if(n%i === 0){
            answer+=i
        }
    }
    return answer;
}
