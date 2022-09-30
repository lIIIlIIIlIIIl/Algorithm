function solution(s){    
    let str = s.toLowerCase();
    
    let countP = 0;
    let countY = 0;
    
    str.split("").map((alp) => {
        if(alp === 'p'){
            countP += 1;
        }
        if(alp === 'y'){
            countY += 1;
        }
    })

    return countP === countY ? true : false;
}