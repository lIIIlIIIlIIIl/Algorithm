function solution(a, d, included) {
    const arr = [];
    
    for(let i = 0 ; i < included.length; i ++) {
        if(i === 0) arr[i] = a;
        if(i > 0) arr[i] = arr[i-1] + d;
    }
    
    return arr.reduce((acc, cur, idx) => included[idx] ? acc + cur : acc , 0);
}