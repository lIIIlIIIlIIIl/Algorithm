function calculation(num){
    let count = 0;

    while(num !== 1){
        if(num % 2 === 0){
            num = num / 2;
        } 
        else{
            num = (num-1) / 2;
        }
        count += 1;
    }
    return count;
}

function solution(num_list) {
    let answer = 0;
    
    for(let num of num_list){
        answer += calculation(num);
    }
    return answer;
}