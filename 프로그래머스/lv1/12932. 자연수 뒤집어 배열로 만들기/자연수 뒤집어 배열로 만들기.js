function solution(n) {
    let answer = [];
    
    let newArray = n.toString().split("");
    let arrLength = newArray.length;
    
    for(let i=1; i<=newArray.length; i++){
        let newElement = Number(newArray[arrLength-i]);
        answer.push(newElement);
    }
    
    return answer;
}