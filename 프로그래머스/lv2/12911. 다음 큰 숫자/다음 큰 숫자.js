function solution(n){
    /*
        n의 다음 큰 숫자는 n보다 큰 자연수
        n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같다.
        n의 다음 큰 숫자는 조건 1,2를 만족하는 수 중에 가장 작은 수
    */
   let countOne = 0;
   let countBiN = 0;
   n.toString(2).split('').map((num) => {
    if(num === '1') countBiN += 1;
   });

   while(n){
    n += 1;
    n.toString(2).split('').map((num) => {
        if(num === '1') countOne += 1;
       });

    if(countOne === countBiN) return n;

    countOne = 0;
   }
}









































// function solution(n){
//     let biNum = String(n.toString(2)).split('').filter((el) => el === '1').length;
//     let answer = n+1;
//     let isTry = true;

//     while(isTry){
//         let biBigNum = String(answer.toString(2)).split('').filter((el) => el === '1').length;

//         if(biNum === biBigNum){
//              isTry = false;
//         }else{
//              answer++;
//         }
//     }
//     return answer
// }