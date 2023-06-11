function solution(my_string, s, e) {
    let answer = '';
    for(let i=0; i<my_string.length; i++){
        if(i >= s && i <= e){
            answer += my_string[e - (i - s)];
        }else{
            answer += my_string[i];
        }
    }
    return answer;
}