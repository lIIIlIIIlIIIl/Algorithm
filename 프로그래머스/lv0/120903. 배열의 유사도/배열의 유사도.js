function solution(s1, s2) {
    let answer = 0;
    s1.map((str)=> {
        if(s2.includes(str)){
            answer++;
        }
    })
    return answer;
}