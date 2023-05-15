function returnCoke(reqCoke, coke, resCoke){
    return coke * parseInt(resCoke / reqCoke);
}

function solution(a, b, n) {
    let answer = 0 ;
    
    while(n >= a){
        let returnBotle = returnCoke(a, b, n)
        
        answer += returnBotle;
        n = returnBotle + (n % a);
    }
    return answer;
}













// function solution(a, b, n) {
//     let answer = 0 ;
    
//     while(n >= a){
//         let bringBotle = parseInt(n / a);
//         let returnBotle = bringBotle * b;
        
//         answer += returnBotle;
//         n = returnBotle + (n % a);
//     }
//     return answer;
// }