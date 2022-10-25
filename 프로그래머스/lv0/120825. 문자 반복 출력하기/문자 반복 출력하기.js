function solution(my_string, n) {
    let answer = '';
    my_string.split("").map((el) => {
        for(let i=0; i<n; i++){
            answer += el;
        }
    })
    return answer;
}