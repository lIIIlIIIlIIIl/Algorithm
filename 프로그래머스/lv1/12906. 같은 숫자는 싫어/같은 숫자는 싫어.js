function solution(arr){
    let answer = [];
    
    arr.map((el) => {
        if(answer[answer.length-1] !== el){
            answer.push(el);
        }
    })
    return answer;
}