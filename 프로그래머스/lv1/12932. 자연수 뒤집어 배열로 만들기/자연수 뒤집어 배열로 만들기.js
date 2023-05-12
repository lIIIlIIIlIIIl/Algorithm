function solution(n){
    // 자연수를 뒤집어서 각 자리 숫자를 원소를 가지는 배열 반환
    let answer = String(n).split('').map((num) => Number(num))
    answer.reverse();
    
    return answer;
}









































// function solution(n) {
//     let answer = [];
    
//     let newArray = n.toString().split("");
//     let arrLength = newArray.length;
    
//     for(let i=1; i<=newArray.length; i++){
//         let newElement = Number(newArray[arrLength-i]);
//         answer.push(newElement);
//     }
    
//     return answer;
// }