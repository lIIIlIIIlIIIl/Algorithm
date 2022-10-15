function solution(n) {
    if(n <= 1) return n;
    let arr = [0, 1];
    
    for(let i=2; i<=n; i++){
        let sum = arr[i-1] + arr[i-2];
        arr.push(sum % 1234567);
    }
    
    return arr[n];
}