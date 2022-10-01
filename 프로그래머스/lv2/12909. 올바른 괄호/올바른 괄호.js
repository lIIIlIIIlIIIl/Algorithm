function solution(s){
    let count = 0;
    
    s.split("").map((el) => {
        if(count < 0) return false;
        
        count += el === "(" ? 1 : -1
    })
    
    return count === 0 ? true : false;
}