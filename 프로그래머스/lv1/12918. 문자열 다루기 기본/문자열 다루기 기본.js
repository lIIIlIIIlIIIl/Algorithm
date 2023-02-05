function solution(s) {
    let answer = true;
    
    if (s.length !== 4 && s.length !== 6) return false;

    
    s.split('').map((el) => {
        if(isNaN(el)){
            answer = false
        }
    })
    
    return answer;
}