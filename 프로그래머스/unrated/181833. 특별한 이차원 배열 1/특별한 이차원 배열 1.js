function solution(n) {
    let answer = [];

    for(let i=0; i<n; i++){
        let makeArr = [];
        for(let j=0; j<n; j++){
            if(i === j){
                makeArr.push(1);
            }else{
                makeArr.push(0)
            }
        }
        answer.push(makeArr);
    }
    return answer;
}