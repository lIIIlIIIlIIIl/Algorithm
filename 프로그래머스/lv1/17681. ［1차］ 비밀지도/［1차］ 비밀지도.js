function solution(n, arr1, arr2) {
    let answer = [];
    
    let binArr1 = arr1.map((el)=>el.toString(2).padStart(n, '0')).map((el)=>el.split(''));
    let binArr2 = arr2.map((el)=>el.toString(2).padStart(n, '0')).map((el)=>el.split(''));
    
    
    binArr1.map((i, idxI)=>{
        let codeArr = [];
        i.map((j, idxJ)=>{
            if(j === '0' && binArr2[idxI][idxJ] === '0'){
                codeArr.push(' ');
            }else{
                codeArr.push('#');
            }
        })
        answer.push(codeArr.join(''));
    })
    return answer;
}