// function solution(n)
// {
//     let answer = 0;
//     let str = String(n);
//     let numArray = [...str];
    
//     for(let el of numArray){
//         answer += Number(el);
//     }
//     return answer;
// }

function solution(n){
    return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}