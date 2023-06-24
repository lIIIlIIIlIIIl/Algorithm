function solution(my_string, queries) {
    let answer = my_string;
    
    for(let i=0; i<queries.length; i++){
        const [s, e] = queries[i];
        const head = answer.slice(0, s);
        const tail = answer.slice(e+1);
        const body = [...answer.slice(s, e+1)].reverse().join('');
        
        answer = head + body + tail;
    }
    return answer;
}