function solution(array, n) {    
    let minNum = Math.min(...array.map((num)=> Math.abs(num-n)));
    return array.sort((a,b) => a-b).find((el)=>Math.abs(el-n) === minNum);
}

