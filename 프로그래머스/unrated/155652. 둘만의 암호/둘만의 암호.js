function solution(s, skip, index) {
    let answer = '';
    let skipArr = skip.split('');
    let filterArr = 'abcdefghijklmnopqrstuvwxyz'.split('').filter((str) => !skipArr.includes(str));

    for(let i=0; i<s.length; i++){
        let nextIndex = (filterArr.indexOf(s[i]) + index) % filterArr.length;
        answer += filterArr[nextIndex];
    }

    return answer;
}