function solution(s) {
    let answer = '';
    let strLength = s.length;
    
    if(strLength % 2 === 0){
        return s[(strLength/2)-1]+s[strLength/2];
    }
    return s[Math.floor(strLength/2)];
}