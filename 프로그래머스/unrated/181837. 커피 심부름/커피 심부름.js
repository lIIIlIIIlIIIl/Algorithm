function solution(order) {
    let answer = 0;
    for(let coffee of order){
        if(coffee.includes('cafelatte')){
            answer += 5000;
        }else{
            answer += 4500;
        }
    }
    return answer;
}