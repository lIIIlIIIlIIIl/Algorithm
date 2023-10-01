// function solution(participant, completion) {
//     let person = {};
//     let answer = "";
    
//     participant.forEach((p) => {
//         if(!person[p]){
//             person[p] = 1;
//             return;
//         }
//         if(person[p]){
//             person[p]++;
//             return;
//         }
//     })
    
//     completion.forEach((p) => {
//         if(person[p]){
//             person[p]--;
//             return;
//         }
//     })
    
//     for(let key in person){
//         if(person[key] === 1){
//             answer += key;
//         }
//     }
    
//     return answer;
// }

function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}