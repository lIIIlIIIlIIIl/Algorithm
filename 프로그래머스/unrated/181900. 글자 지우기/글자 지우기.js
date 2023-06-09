function solution(my_string, indices) {
    let answer = [...my_string];
    indices.forEach((num) => {
        answer[num] = '';
    })
    
    return answer.join('');
}