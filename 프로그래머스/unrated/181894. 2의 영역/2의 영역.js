function solution(arr) {
    let indexArr = [];
    arr.forEach((num, index) => {
        if(num === 2){
            indexArr.push(index);
        }
    })
    
    if(indexArr.length === 0){
        return [-1];
    }
    
    return arr.slice(indexArr[0], indexArr[indexArr.length-1]+1)
}