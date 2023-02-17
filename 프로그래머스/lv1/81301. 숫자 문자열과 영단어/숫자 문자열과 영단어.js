function solution(s) {
    let answer = s;
    let numberStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    if(!isNaN(s)) return Number(s);
    
    numberStr.map((el,idx)=>{
        if(answer.includes(el)){
            let str = answer.split(el);
            answer = str.join(idx);
        }
    })
    
    return Number(answer);
}

