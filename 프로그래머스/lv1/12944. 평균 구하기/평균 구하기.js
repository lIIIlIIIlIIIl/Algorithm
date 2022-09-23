function solution(arr) {
    var answer = 0;

    let sum = arr.reduce((pre, cur)=>
    (pre+cur));
    answer = sum/arr.length;
    return answer;
}