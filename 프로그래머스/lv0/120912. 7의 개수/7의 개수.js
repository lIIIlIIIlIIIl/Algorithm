function solution(array) {
    let answer = 0;
    array.join('').split('').map((el)=>{
        el === '7' ? answer++ : null;
    })
    return answer;
}