function solution(t, p) {
    let answer = 0;
    for(let i=0; i<=(t.length-p.length); i++){
        let newNum =t.split('').slice(i,i+(p.length)).join('');
        if(Number(newNum) <= Number(p)){
            answer++;
        }
    }
    return answer;
}