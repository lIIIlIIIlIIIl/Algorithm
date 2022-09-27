function solution(phone_number) {
    let answer = '';
    let num = phone_number.split("");
    let numberLength = num.length;
    
    for(let i=0; i<numberLength; i++){
        if(i<numberLength-4){
            answer+='*';
        } else{
            answer+=num[i];
        }   
    }
    
    return answer;
}