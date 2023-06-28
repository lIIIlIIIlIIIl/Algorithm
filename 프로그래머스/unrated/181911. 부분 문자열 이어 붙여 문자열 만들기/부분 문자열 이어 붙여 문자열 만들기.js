function solution(my_strings, parts) {
    let answer = '';
    
    parts.forEach((part, index) => {
        const [s, e] = part;
        answer += my_strings[index].slice(s, e+1);
    })
    
    return answer;
}