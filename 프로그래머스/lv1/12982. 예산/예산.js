function solution(d, budget) {
    let totalPrice = d.reduce((acc,cur)=>acc+cur,0);
    let sortD = d.sort((a,b) => b-a);
    let priceArr = [];
    
    if(totalPrice <= budget){
        return d.length;
    };
    
    
    for(let i=0; i<sortD.length; i++){
        if(totalPrice > budget){
            totalPrice-=sortD[i];
            priceArr.push(sortD[i]);
        }
    }
    return d.length-priceArr.length;
}