function solution(box, n) {
    let answer = 1;
    box.map((el) => {
        answer = answer * Math.floor(el/n);
    })
    return answer;
}