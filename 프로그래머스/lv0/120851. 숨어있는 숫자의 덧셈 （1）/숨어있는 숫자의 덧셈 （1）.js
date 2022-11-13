function solution(my_string) {
    let answer = 0;
    my_string.split('').filter((el) => {
        return !isNaN(el)
    }).map((el)=>{
        answer+=Number(el);
    });
    return answer;
}