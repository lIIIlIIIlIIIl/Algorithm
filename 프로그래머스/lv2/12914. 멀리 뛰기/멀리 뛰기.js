function solution(n) {
    let stackArr = [0, 1, 2];
    
    for(let i=3; i<=n; i++){
        stackArr[i] = (stackArr[i-1] + stackArr[i-2]) % 1234567;
    }
    return stackArr[n];
}
