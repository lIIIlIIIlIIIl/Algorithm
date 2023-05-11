function solution(n){
    /*
    자연수 n을 연속한 자연수들로 표현하는 방법
    자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 반환
    
    주어진 자연수를 연속되는 자연수들의 합으로 표현하는 방법의 수는 주어진 자연수의 약수 중에서 홀수인 수와 같다.
    */
    
    let count = 0;
    
    for(let i=1; i<=n; i++){
        if(n % i === 0 && i % 2 === 1){
            count += 1;
        }
    }
    
    return count;
}








































// function solution(n) {
//     let answer = 0;
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0 && i % 2 === 1) answer++;
//     }
//     return answer;
// }