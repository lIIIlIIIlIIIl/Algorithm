function solution(num_list) {
    let len = num_list.length;
    let answer = [];
    for(let i = 0; i<len; i++){
        answer[i] = num_list[len-(i+1)]
    }
    return answer;
}