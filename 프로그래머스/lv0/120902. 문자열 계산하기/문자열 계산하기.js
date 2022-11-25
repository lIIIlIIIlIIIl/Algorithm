function solution(my_string) {
    let my_stringArr = my_string.split(" ");
    let answer = parseInt(my_stringArr[0]);
    
    for(let i=1; i<=my_stringArr.length; i+=2){
        if(my_stringArr[i] === '+'){
            answer += parseInt(my_stringArr[i+1]);
        }
        if(my_stringArr[i] === '-'){
            answer -= parseInt(my_stringArr[i+1]);
        }
    }
    
    return answer;
}