function solution(arr) {
    let answer = [];
    let row = arr[0].length;
    let column = arr.length;
    
    if(row === column) return arr;
    
    if(row > column){
        answer = [...arr];
        
        for(let i=0; i<row-column; i++){
                const zeroArr = new Array(row).fill(0);
                answer.push(zeroArr);
        }
        return answer;
    }
    
    if(row < column){
        for(let i=0; i<column; i++){
            const fillZeroArr = [...arr[i]];
            
            for(let j=0; j<column-row; j++){
                fillZeroArr.push(0);
            }
            answer.push(fillZeroArr);
            
        }
        return answer;
    }
}