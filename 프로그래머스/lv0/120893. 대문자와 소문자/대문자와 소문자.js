function solution(my_string) {
    let answer = [];
    my_string.split('').map((str)=>{
        str === str.toUpperCase() ? answer.push(str.toLowerCase()) : str === str.toLowerCase() ? answer.push(str.toUpperCase()) : null;
    })
    return answer.join('')
}