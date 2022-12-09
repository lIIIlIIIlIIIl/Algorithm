function solution(my_string) {
    let answer = 0;
    let thisNum = 0;
    
    my_string.split('').map((el) => {
        if(isNaN(el)){
            answer += Number(thisNum);
            thisNum = 0;
        }
        if(!isNaN(el)){
            thisNum += el;
        }
    })
    
    thisNum === 0 ? null : answer += Number(thisNum);
    
    return answer;
}