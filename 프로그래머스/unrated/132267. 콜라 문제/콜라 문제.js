function solution(a, b, n) {
    let answer = 0 ;
    
    while(n >= a){
        let bringBotle = parseInt(n / a);
        let returnBotle = bringBotle * b;
        
        answer += returnBotle;
        n = returnBotle + (n % a);
    }
    return answer;
}