// function solution(number, limit, power) {
//     let measureArr = [1];
//     for(let i=2; i<=number; i++){
//         let count = 0;
//         for(let j=1; j<=i/2; j++){
//             if(i%j === 0) count++;
//         }
//         measureArr.push(count+1);
//     }
//     return measureArr.map((el) => {
//         return el > limit ? power : el;
//     }).reduce((acc, cur) => acc + cur, 0);
// }

function solution(number, limit, power) {
    var answer = 0;
    for (let n = 1; n <= number; n++)
    {
        let count = 0;
        for (let j = 1; j * j <= n; j++)
        {
            if (j * j == n) count++;
            else if (n % j == 0) count += 2;
        }
        if (count > limit) count = power;
        answer += count;
    }
    return answer;
}

