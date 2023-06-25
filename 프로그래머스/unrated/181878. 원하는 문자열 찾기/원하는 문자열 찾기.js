function solution(myString, pat) {
    const newMyString = myString.toUpperCase();
    const newPat = pat.toUpperCase();
    
    return newMyString.includes(newPat) ? 1 : 0;
}