function solution(n){
    let biNum = String(n.toString(2)).split('').filter((el) => el === '1').length;
    let answer = n+1;
    let isTry = true;

    while(isTry){
        let biBigNum = String(answer.toString(2)).split('').filter((el) => el === '1').length;

        if(biNum === biBigNum){
             isTry = false;
        }else{
             answer++;
        }
    }
    return answer
}