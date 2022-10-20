function solution(denum1, num1, denum2, num2) {
    let topNum = num1*denum2 + num2*denum1
    let botNum = num1*num2
    let maximum = 1
    
    for(let i = 1 ; i <= topNum ; i ++) {
        if(topNum%i === 0 && botNum%i === 0) {
            maximum = i
        }
    }
    return [topNum/maximum, botNum/maximum]
}



// function solution(denum1, num1, denum2, num2) {   
//     // 분모 => 최소공배수
//     // 분자 => (denum1*num2 + denum2*num1)/최대공약수
//     let answer = [];
    
//     const find = (num1, num2) => {
//         const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
//         const lcm = (a, b) => a * b / gcd(a, b);
//         return [gcd(num1, num2), lcm(num1, num2)];
//     }
    
//     const [gcd, lcm] = find(num1, num2);
    
//     answer[0] = (denum1*num2 + denum2*num1) / gcd;
//     answer[1] = lcm;
    
//     return answer;
// }