function solution(my_string) {
    return my_string.split('').filter((el)=>{
        return isNaN(el)===false;
    }).map((el)=>{
        return Number(el);
    }).sort((a,b)=>a-b);
}