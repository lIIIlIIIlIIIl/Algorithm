/*
    명함 지갑을 만들 예정 - 다양한 모양과 크기의 명함을 모두 수납할 수 있어야 하며, 최대한 작게 만들어야 한다.

*/

function solution(sizes){
    const maxArr = [];
    const minArr = [];

    sizes.map((sizes) => {
        let max, min;

        if(sizes[0] > sizes[1]){
            max = sizes[0];
            min = sizes[1];
        }else{
            max = sizes[1];
            min = sizes[0];
        }

        maxArr.push(max);
        minArr.push(min);
    })
    maxArr.sort((a,b) => b-a);
    minArr.sort((a,b) => b-a);

    return maxArr[0]*minArr[0];
}








































// function solution(sizes) {
//     let maxWidth = 0;
//     let maxLength = 0;
    
//     sizes.map((el) => el.sort((a,b)=>b-a)).map((el)=>{
//         if(el[0] > maxWidth){
//             maxWidth = el[0];
//         }
//         if(el[1] > maxLength){
//             maxLength = el[1];
//         }
//     });
    
//     return maxWidth * maxLength;
// }