function solution(absolutes, signs) {
    let answer = 0;

    for(let i=0; i<absolutes.length; i++){
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i];
    }

    return answer;
}





































// function solution(absolutes, signs) {
//     let answer = 0;
//     absolutes.map((el, idx) => {
//         if(signs[idx]){
//             return answer += absolutes[idx]
//         }
//         return answer -= absolutes[idx]
//     })
//     return answer;
// }