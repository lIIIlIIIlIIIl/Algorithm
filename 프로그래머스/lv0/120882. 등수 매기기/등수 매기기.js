function solution(score) {
    let answer = [];
    let average = score.map((el) => (el[0] + el[1]) / 2);
    let sortAverage = average.slice().sort((a,b) => b-a);
    
    
    for(let i=0; i<average.length; i++){
        answer.push(sortAverage.indexOf(average[i])+1);
    }
    return answer;
}