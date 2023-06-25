function solution(arr, n) {
    const arrLength = arr.length;
    
    if(arrLength % 2 === 0){
        return arr.map((num, index) => {
            if(index % 2 === 1) return num + n;
            if(index % 2 === 0) return num;
        })
    }
    
    if(arrLength % 2 === 1){
        return arr.map((num, index) => {
            if(index % 2 === 0) return num + n;
            if(index % 2 === 1) return num;
        })
    }
    
}