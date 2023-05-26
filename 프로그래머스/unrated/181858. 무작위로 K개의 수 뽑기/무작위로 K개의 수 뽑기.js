function solution(arr, k) {
    let answer = [];
    let map = {};
    let count = 0;

    for(let num of arr){
        if(!map[num] && count < k){
            answer.push(num);
            count += 1;
        }
        map[num] = num;
    }
    if(answer.length < k){
        let leg = answer.length;
        for(let i=0; i<k-leg; i++){
            answer.push(-1);
        }
    }
    return answer;
}