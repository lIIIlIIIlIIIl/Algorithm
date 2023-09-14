// function solution(food) {
//     let answerArr = [];
//     let canUseFood = food.map((el) => {
//         return el % 2 === 1 ? el - 1 : el;
//     })
    
//     for(let i=1; i<canUseFood.length; i++){
//         if(canUseFood[i] !== 0){
//             for(let j=0; j<canUseFood[i]/2; j++){
//                 answerArr.push(i)
//             }
//         }
//     }
//     return answerArr.join('') + '0' + answerArr.slice(0).sort((a,b) => b-a).join('')
// }

function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}