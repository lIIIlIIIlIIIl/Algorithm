// function solution(x) {
//     // 자릿수의 합 구하기
//     // 합으로 x를 나눴을 때 나눠 떨어지면 true 아니면 false
    
//     let answer = true;
    
//     let sum = 0
    
//     x.toString().split("").map((el)=>sum += parseInt(el));
    
//     x % sum === 0 ? answer = true : answer = false;
    
//     return answer;
// }

function solution(x) {
    let num = x;
    let sum = 0;
    
    do {
        sum += x % 10;
        x = Math.floor(x / 10);
    } 
    
    while (x>0);

    return !(num%sum);
}