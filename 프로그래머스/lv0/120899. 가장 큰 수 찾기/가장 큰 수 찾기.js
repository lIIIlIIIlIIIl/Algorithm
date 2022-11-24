function solution(array) {
    let bigNum = [...array].sort((a,b) => b-a)[0];
    return [bigNum, array.indexOf(bigNum)]
}