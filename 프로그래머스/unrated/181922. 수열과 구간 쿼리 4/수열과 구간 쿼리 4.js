// function solution(arr, queries) {
//     return queries.reduce((acc, cur) => {
//         const copyArr = [...acc]
//         const [to, from, val] = cur
//         return copyArr.map((el, elIdx) => {
//             if(elIdx >= to && elIdx <= from) {
//                 if(elIdx%val === 0) return el+1
//             }
//             return el
//         })
//     }, arr)
// }

function solution(arr, queries) {
    for(let [s, e, k] of queries) {
        for(let i = s; i <= e; i++) {
            if(i % k === 0) arr[i]++;
        }
    }
    return arr;
}