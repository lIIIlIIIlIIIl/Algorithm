function solution(arr){
    if(arr.length < 2) return [-1];
    
    let min = Math.min(...arr);
    
    return arr.filter((num) => num !== min);
}








































// function solution(arr) {
//     const answer = Math.min(...arr)
    
//     if(arr.length < 2){
//         return [-1]
//     }
    
//     return arr.filter((num) => num !== answer)
// }

