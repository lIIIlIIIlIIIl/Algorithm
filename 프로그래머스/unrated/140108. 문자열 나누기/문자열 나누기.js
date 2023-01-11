function solution(s) {
        let answer = 0;
        
        let xCount = 0;
        let yCount = 0;
        let x = "";
        
        for(let i=0; i<s.length; i++){
            if(!x) x=s[i];

            if(s[i] === x) xCount++;

            
            if(s[i] !== x){
                yCount++;
                
                if(xCount === yCount) {
                    answer++;
                    x = s[i+1];
                    xCount = 0;
                    yCount = 0;
                }
            }
        }
    if(x) answer ++;
    
    return answer;
}