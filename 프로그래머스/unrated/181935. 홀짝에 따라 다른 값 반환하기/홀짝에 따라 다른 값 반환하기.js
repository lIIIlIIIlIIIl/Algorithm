function solution(n) {
    const isOdd = n % 2 === 1 ? true : false;
    
    let answer = 0;
    
    if(isOdd){
        for(let i=1; i<=n; i++){
            if(i % 2 === 1) answer += i;
        }
    }
    
    if(!isOdd){
        for(let i=1; i<=n; i++){
            if(i % 2 === 0) answer += i**2;
        }    
    }
    
    return answer;
}