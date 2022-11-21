function solution(cipher, code) {
    let answer = [];
    let strLength = parseInt(cipher.length/code);
    let arr = cipher.split('');
    
    for(let i=1; i<=strLength; i++){
        answer.push(arr[code*i-1]);
    };
    return answer.join('');
}