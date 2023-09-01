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

// function solution(s, skip, index) {
//     let answer = '';
//     const skipMap = new Map();
//     const filterMap = new Map();
//     [...skip].forEach((word, idx) => skipMap.set(word, idx+1));

//     const filterArr = [...'abcdefghijklmnopqrstuvwxyz'].filter((word) => !skipMap.get(word));
//     filterArr.forEach((word, idx) => filterMap.set(word, idx));

//     [...s].forEach((word) => {
//         const findIdx = filterMap.get(word) + index;
//         const nextIdx = findIdx % filterArr.length;
//         answer += filterArr[nextIdx];
//     })
//     return answer;
// }