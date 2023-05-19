function solution(x, n) {
    let answer = []
    let sumNum = 0;

    for(let i=0; i<n; i++){
        sumNum += x;
        answer.push(sumNum);
    }
    return answer;
}



































// function solution(x, n) {
//     let answer = [];
//     let base = x;
    
//     for(let i=0; i<n; i++){
//         answer.push(base);
//         base += x;
//     }
//     return answer;
// }