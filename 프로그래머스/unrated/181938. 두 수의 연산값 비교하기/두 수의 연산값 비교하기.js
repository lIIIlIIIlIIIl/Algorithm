function solution(a, b) {
    let answer = 0;
    let numStr = Number(`${a}${b}`);
    let calculate = 2 * a * b;

    if(numStr >= calculate) answer = numStr;
    if(numStr < calculate) answer = calculate;

    return answer;
}