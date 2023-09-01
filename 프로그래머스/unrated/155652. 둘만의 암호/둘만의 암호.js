function solution(s, skip, index) {
    let answer = '';
    const sArr = [...s]
    const skipArr = [...skip];
    const filterArr = 'abcdefghijklmnopqrstuvwxyz'.split('').filter((str) => !skipArr.includes(str));
    
    sArr.forEach((word, idx) => {
        const nextIdx = (filterArr.indexOf(word) + index) % filterArr.length;
        answer += filterArr[nextIdx];
    })
    return answer;
}