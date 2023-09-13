// function solution(s) {
//     let answer = [];
//     let stackArr = [];
    
//     for(let i=0; i<s.length; i++){
//         if(!stackArr.includes(s[i])){
//             stackArr.push(s[i]);
//             answer.push(-1);
//             continue;
//         }
//         if(stackArr.includes(s[i])){
//             answer.push(stackArr.length - stackArr.lastIndexOf(s[i]));
//             stackArr.push(s[i]);
//             continue;
//         }
//     }
//     return answer;
// }


function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}