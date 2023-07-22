function solution(arr, queries) {
    queries.forEach((query)=>{
        const [i, j] = query;
        const arrI = arr[i];
        const arrJ = arr[j];
        
        arr[i] = arrJ;
        arr[j] = arrI;
    })
    
    return arr;
}