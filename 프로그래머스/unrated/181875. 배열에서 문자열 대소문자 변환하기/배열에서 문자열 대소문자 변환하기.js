function solution(strArr) {
    return strArr.map((str, idx) => {
        if(idx % 2 === 1) return str.toUpperCase();
        if(idx % 2 === 0) return str.toLowerCase();
    })
}