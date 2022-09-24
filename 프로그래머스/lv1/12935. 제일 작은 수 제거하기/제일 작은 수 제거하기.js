function solution(arr) {    
    if(arr.length === 1) return [-1];
    let min = Math.min(...arr);
    
    let answer = arr.filter((el)=> el!==min)
    
    return answer;
}