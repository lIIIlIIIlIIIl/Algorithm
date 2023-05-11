function solution(A, B){

    
    /*
    배열 A,B에서 한개의 숫자를 뽑아서 두 수를 곱한다.
    위 과정을 배열의 길이만큼 반복한다.
    두 수를 곱한 값을 누적하여 더한다
    최종적으로 누적된 값이 최소가 되도록 만들어야 한다.
    
    가장 작은 수가 되기 위해서는 A에서 가장 작은수를 B에서 가장 큰 수를 골라서 곱한 후 더하기
    */
    
    let count = 0;
    
    const sortA = A.sort((a, b) => a - b);
    const sortB = B.sort((a, b) => b - a);
    
    for(let i=0; i<A.length; i++){
        count += sortA[i] * sortB[i];
    }
    
    return count;
}









































// function solution(A,B){
//     let answer = 0;
//     let sortA = A.sort((a,b) => a-b);
//     let sortB = B.sort((a,b) => b-a);
    
//     for(let i=0; i<sortA.length; i++){
//         answer += sortA[i] * sortB[i];
//     }
//     return answer;
// }