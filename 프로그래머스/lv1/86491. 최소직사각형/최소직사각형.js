function solution(sizes) {
    let maxWidth = 0;
    let maxLength = 0;
    
    sizes.map((el) => el.sort((a,b)=>b-a)).map((el)=>{
        if(el[0] > maxWidth){
            maxWidth = el[0];
        }
        if(el[1] > maxLength){
            maxLength = el[1];
        }
    });
    
    return maxWidth * maxLength;
}