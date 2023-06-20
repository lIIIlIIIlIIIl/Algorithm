function solution(myString, pat) {
    const answer = [];
    
    myString.split("").forEach((a, i) => {
        const curStr = myString.slice(0, i+1)
        if(curStr.endsWith(pat)) {
            answer.push(curStr)
        }
    })
    
    return answer.sort((a, b) => b.length - a.length)[0]
}