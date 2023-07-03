function solution(arr1, arr2) {
    if(arr1.length !== arr2.length) return arr1.length > arr2.length ? 1 : -1;
    
    if(arr1.length === arr2.length){
        const sumArr1 = arr1.reduce((acc, cur) => acc += cur, 0);
        const sumArr2 = arr2.reduce((acc, cur) => acc += cur, 0);
        
        if(sumArr1 === sumArr2) return 0;
        if(sumArr1 > sumArr2) return 1;
        if(sumArr1 < sumArr2) return -1;
    }
}