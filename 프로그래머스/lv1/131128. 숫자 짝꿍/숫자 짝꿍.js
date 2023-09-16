// function solution(X,Y){
//     let answer = [];
    
//     let countX = new Array(10).fill(0);
//     let countY = new Array(10).fill(0);
    
//     const xArr = X.split("");
//     const yArr = Y.split("");
    
//     xArr.forEach((item) => {
//         countX[item]++;
//     })
        
//     yArr.forEach((item) => {
//         countY[item]++;
//     })
    
    
//     countX.forEach((item, index) => {
//         if(item !== 0 && countY[index] !== 0){
//             const min = Math.min(item, countY[index]);
            
//             answer.push(String(index).repeat(min));
//         }
//     })
    
    
//     if(answer.length === 0){
//         return "-1";
//     }
    
//     if(Number(answer.join("")) === 0){
//         return "0";
//     }
    
//     return answer.reverse().join("");
// }

function solution(X, Y) {
    let result = '';
    const numObj = {};

    for (const char of X) {
        numObj[char] = (numObj[char] || 0) + 1;
    }

    for (const char of Y) {
        if (!numObj[char]) continue;
        result += char;
        numObj[char]--;
    }

    if (result === '') return '-1';
    if (+result === 0) return '0';
    return [...result]
        .map((num) => +num)
        .sort((a, b) => b - a)
        .join('');    
}
