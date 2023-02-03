function solution(a, b) {
    let answer = 0;
    a.map((el, idx) => {
        answer += (a[idx]*b[idx]);
    })
    return answer;
}