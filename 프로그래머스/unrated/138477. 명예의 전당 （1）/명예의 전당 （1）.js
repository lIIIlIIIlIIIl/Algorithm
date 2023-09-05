// function solution(k, score) {
//     let hallOfFame = [];
//     let lowerArr = [];
    
//     for(let i=0; i<score.length; i++){
//         if(i > k-1){
//             if(score[i] > hallOfFame[0]){
//                 hallOfFame.shift();
//                 hallOfFame.push(score[i]);
//             }
//         }
//         else{
//             hallOfFame.push(score[i]);
//         }
//         hallOfFame.sort((a,b) => a-b);
//         lowerArr.push(hallOfFame[0]);
//     }
    
//     return lowerArr;
// }

function solution(k, score) {
    const stack = []
    return score.reduce((a,c) => {
        if(stack.length < k) {
            stack.push(c)
            stack.sort((a,b) => a - b)
        }
        else {
            stack.push(c)
            stack.sort((a,b) => a - b)
            stack.shift()
        }
        a.push(stack[0])
        return a
    },[])
}