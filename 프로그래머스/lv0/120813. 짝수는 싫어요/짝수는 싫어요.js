function solution(n) {
    // n 이하의 홀수를 오름차순으로 담긴 배열을 반환
    let result = [];
    
     for(let i=1; i <= n; i++){
        if(i%2 === 1){
            result.push(i);
        }     
     }
    return result;
}