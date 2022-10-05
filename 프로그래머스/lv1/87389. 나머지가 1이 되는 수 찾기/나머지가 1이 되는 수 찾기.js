function solution(n) {    
    if(n%2 === 1) return 2;
    
    let numArr = [];
    
    for(let i=1; i<n; i+=2){
        if(n%i === 1){
            numArr.push(i);
        }
    }
    
    return numArr[0];
}