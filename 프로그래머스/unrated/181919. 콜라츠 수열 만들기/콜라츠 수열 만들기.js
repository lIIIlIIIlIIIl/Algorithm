function solution(n) {
    let answer = [n];
    let calculation = n;

    while(calculation !== 1){
        if(calculation % 2 === 0){
            calculation /= 2;
        }
        else if(calculation % 2 === 1){
            calculation = 3 * calculation + 1;
        }
        answer.push(calculation);
    }
    return answer;
}