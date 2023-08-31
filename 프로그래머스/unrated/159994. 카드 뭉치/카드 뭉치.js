// function solution(cards1, cards2, goal) {
//     goal.forEach((card) => {
//         if(cards1[0] === card){
//             cards1.splice(0,1);
//         }
//         if(cards2[0] === card){
//             cards2.splice(0,1)
//         }
//         if(cards1[0] !== card && cards2[0] !== card){
//             console.log(123)
//             return 'No'
//         }
//     });

//     return 'Yes'
// }

function solution(cards1, cards2, goal) {
    let answer = 'Yes'
    goal.forEach((card) => {
        if(cards1[0] === card) cards1.shift();
        else if(cards2[0] === card) cards2.shift();
        else if(cards1[0] !== card && cards2[0] !== card){
            answer = 'No';
            return;
        }
    })
    return answer;
}