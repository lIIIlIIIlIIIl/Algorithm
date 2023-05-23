function solution(s, skip, index) {
    let answer = '';
    let strArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let skipArr = skip.split('');
    let filterArr = strArr.filter((str) => !skipArr.includes(str));

    for(let i=0; i<s.length; i++){
        let nextIndex = (filterArr.indexOf(s[i]) + index) % filterArr.length;
        answer += filterArr[nextIndex];
    }

    return answer;
}