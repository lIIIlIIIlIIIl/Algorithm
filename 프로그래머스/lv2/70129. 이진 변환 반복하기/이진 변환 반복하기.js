function solution(s) {
    let zeroCount = 0;
    let roundCount = 0;
    
    while(s.length !== 1){
        roundCount++;
        zeroCount += s.split('').filter(el => el === '0').length;
        s = Number(s.split('').filter(el => el === '1').length).toString(2);

    }
    return [roundCount, zeroCount]
}