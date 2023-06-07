function solution(myString, pat) {
    let changeString = '';
    for(let i=0; i<myString.length; i++){
        myString[i] === 'A' ? changeString += 'B' : changeString += 'A';
    }
    return changeString.includes(pat) ? 1 : 0;
}