function solution(s) {
    let numArr = s.split(' ');
    return numArr.sort((a,b) => a-b)
            .filter((el,idx) => (idx === 0 | idx === numArr.length-1))
            .join(' ');
}