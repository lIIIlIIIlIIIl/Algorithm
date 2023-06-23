function solution(arr, query) {
    let answer = [...arr];
    
    query.forEach((q, idx) => {
        if(idx % 2 === 0){
            answer.splice(q+1);
        }
        if(idx % 2 === 1){
            answer.splice(0, q)
        }
    })
    return answer;
}