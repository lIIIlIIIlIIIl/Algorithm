// 전화번호의 뒷 4자리를 제외한 나머지 숫자 전부를 *으로 가린 문자열 반환

function solution(phone_number) {
    let needNumber = phone_number.length-4;
    
    return phone_number.split('').map((num, idx) => {
        if(idx < needNumber){
            return '*'
        }
        return phone_number[idx];
    }).join('')
}

















































// function solution(phone_number) {
//     let answer = '';
//     let num = phone_number.split("");
//     let numberLength = num.length;
    
//     for(let i=0; i<numberLength; i++){
//         if(i<numberLength-4){
//             answer+='*';
//         } else{
//             answer+=num[i];
//         }   
//     }
    
//     return answer;
// }