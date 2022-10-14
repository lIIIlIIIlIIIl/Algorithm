function solution(numbers) {
    let answer = 0;
    let numArr = [1,2,3,4,5,6,7,8,9,0];
    let result = [];
    
    numArr.map((num) => {
        if(numbers.indexOf(num) === -1){
            result.push(num)
        }
    })
    
    result.map((num) => {
        answer += num;
    })
    
    return answer;
}