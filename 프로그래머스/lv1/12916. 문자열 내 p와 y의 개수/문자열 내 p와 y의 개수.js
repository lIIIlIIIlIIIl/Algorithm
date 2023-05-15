function solution(s){
    const problemStr = s.toLowerCase().split('');
    const countP = problemStr.filter((str) => str === 'p').length;
    const countY = problemStr.filter((str) => str === 'y').length;

    if(countP !== countY) return false
    return true;
}





































// function solution(s){    
//     let str = s.toLowerCase();
    
//     let countP = 0;
//     let countY = 0;
    
//     str.split("").map((alp) => {
//         if(alp === 'p'){
//             countP += 1;
//         }
//         if(alp === 'y'){
//             countY += 1;
//         }
//     })

//     return countP === countY ? true : false;
// }