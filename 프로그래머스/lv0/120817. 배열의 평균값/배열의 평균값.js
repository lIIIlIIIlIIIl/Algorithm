function solution(numbers) {
    // numbers 원소의 평균 값 반환
    // (원소의 합) / 원소의 개수
    let answer = 0;
    numbers.map((el) => {
        answer += el;
    })
    return answer / numbers.length
}