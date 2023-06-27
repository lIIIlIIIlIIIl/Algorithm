function solution(n) {
    const isOdd = n % 2 === 1 ? true : false;
    
    if(isOdd){
        let answer = 0;
        for(let i=1; i<=n; i++){
            if(i % 2 === 1) answer += i;
        }
        return answer;
    }
    
    if(!isOdd){
        let answer = 0;
        for(let i=1; i<=n; i++){
            if(i % 2 === 0) answer += i**2;
        }    
        return answer;
    }
}