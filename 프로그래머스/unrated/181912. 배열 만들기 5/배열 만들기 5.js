function solution(intStrs, k, s, l) {
    let answer = [];
    
    intStrs.forEach((str)=> {
        const transformStr = Number([...str].slice(s, s+l).join(''));
        if(transformStr > k){
            answer.push(transformStr)
        }
    })
    return answer;
}