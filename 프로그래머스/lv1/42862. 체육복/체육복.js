// function solution(n, lost, reserve) {

//     let answer = 0;

//     let hasUniform = new Array(n).fill(1);

//     for (let i = 0; i < lost.length; i++) {
//         hasUniform[lost[i] - 1]--;
//     }

//     for (let i = 0; i < reserve.length; i++) {
//         hasUniform[reserve[i] - 1]++;
//     }

//     for (let i = 0; i < hasUniform.length; i++) {
//         if (hasUniform[i] === 0) {
//             if (hasUniform[i - 1] === 2) {
//                 hasUniform[i]++;
//                 hasUniform[i - 1]--;
//             } else if (hasUniform[i + 1] === 2) {
//                 hasUniform[i]++;
//                 hasUniform[i + 1]--;
//             }
//         }

//         if (hasUniform[i] >= 1) {
//             answer++;
//         }
//     }

//     return answer;
// }

function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for(let i = 1; i <= n; i++){
        if(students[i] === 2 && students[i-1] === 0){
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
                students[i+1]++;
                students[i]--;
        }
    }
    for(let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    return answer;
}