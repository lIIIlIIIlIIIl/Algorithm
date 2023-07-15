function solution(arr) {
    let power = 0;
    const arrLength = arr.length;
    
    while(arrLength > 2 ** power){
        power += 1;
    }
    
    const differ = 2 ** power - arrLength;
    
    for(let i=0; i<differ; i++){
        arr.push(0);
    }
    
    return arr;
}