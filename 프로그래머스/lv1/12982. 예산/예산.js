function solution(d, budget) {
    let answer = 0;
    let sortD = d.sort((a,b) => a-b);
    let sumD = 0;

    sortD.forEach(element => {
        sumD += element;

        if(sumD <= budget){
            answer += 1;
        }
    });
    return answer;
}









































// function solution(d, budget) {
//     let totalPrice = d.reduce((acc,cur)=>acc+cur,0);
//     let sortD = d.sort((a,b) => b-a);
//     let answer = 0;
    
//     if(totalPrice <= budget){
//         return d.length;
//     };
    
    
//     for(let i=0; i<sortD.length; i++){
//         if(totalPrice > budget){
//             totalPrice-=sortD[i];
//         } else{
//             answer++;
//         }
//     }
//     return answer;
// }