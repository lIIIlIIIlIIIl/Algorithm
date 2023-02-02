function solution(absolutes, signs) {
    let answer = 0;
    absolutes.map((el, idx) => {
        if(signs[idx]){
            return answer += absolutes[idx]
        }
        return answer -= absolutes[idx]
    })
    return answer;
}