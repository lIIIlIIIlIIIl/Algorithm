function solution(numbers, n) {
    let answer = 0;
    numbers.forEach((num) => {
        if(answer > n) return;
        answer += num;
    })
    return answer;
}