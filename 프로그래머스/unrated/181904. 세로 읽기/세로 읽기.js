function solution(my_string, m, c) {
    let answer = '';
    
    if(m === 1) return my_string;
    
    for(let i=0; i<my_string.length; i+=m){
        answer += my_string.slice(i, i+m)[c-1];
    }
    return answer;
}