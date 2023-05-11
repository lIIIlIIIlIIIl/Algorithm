function solution(n){
    /*
        소문자로 이루어진 문자열에서 같은 알파벳이 2개 붙어있는 짝을 찾는다.
        찾은 짝을 제거한 후, 앞뒤로 문자열을 이어 붙인다.
        위 과정을 반복한 후, 붙어있는 문자열 모두 제거

        짝지어 제거하기를 성공적으로 수행 ? 1 : 0;

        babab babab
    */

    const stackArr = [];

    n.split('').map((str) => {
        if(stackArr.length === 0 || stackArr[stackArr.length - 1] !== str){
            return stackArr.push(str);
        }
            return stackArr.pop();
    })

    return stackArr.length === 0 ? 1 : 0
}



































// function solution(s)
// {
//     const stack = [];

//     for(let i = 0; i < s.length; i++) {
//         if(!stack.length || stack[stack.length - 1] !== s[i]) {
//             stack.push(s[i]);
//         } else {
//             stack.pop();
//         }
//     }

//     return !stack.length ? 1 : 0;
// }