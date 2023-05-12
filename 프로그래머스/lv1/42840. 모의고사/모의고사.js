function solution(answers){
    let numberOne = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    let numberTwo = [2, 1, 2, 3, 2, 4, 2, 5]
    let numberThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    let countOne = 0;
    let countTwo = 0;
    let countThree = 0;

    for(let i=0; i<answers.length; i++){
        if(answers[i] === numberOne[i%numberOne.length]){
            countOne += 1;
        }
        if(answers[i] === numberTwo[i%numberTwo.length]){
            countTwo += 1;
        }
        if(answers[i] === numberThree[i%numberThree.length]){
            countThree += 1;
        }
    }

    const answer = [];
    let max = Math.max(countOne, countTwo, countThree)

    if(countOne === max) answer.push(1);
    if(countTwo === max) answer.push(2);
    if(countThree === max) answer.push(3);

    return answer;
}









































// function solution(answers) {
//     let answer = [];
//     let a1 = [1, 2, 3, 4, 5];
//     let a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     let a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     let a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
//     let a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
//     let a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
//     let max = Math.max(a1c,a2c,a3c);
    
//     if (a1c === max) {answer.push(1)};
//     if (a2c === max) {answer.push(2)};
//     if (a3c === max) {answer.push(3)};
//     return answer;
// }