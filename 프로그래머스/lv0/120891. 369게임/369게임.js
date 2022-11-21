function solution(order) {
    let answer = 0;
    order.toString().split('').map((num) => {
        if(num === '3' || num === '6' || num === '9'){
            answer++;
        }
    })
    return answer;
}