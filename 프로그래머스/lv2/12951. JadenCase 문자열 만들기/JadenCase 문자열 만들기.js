function solution(s) {
const arr = s.split(' ');

return arr.map((str) => {
    if(str === ''){
        return str
    }
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}).join(' ')
}














































// function solution(s) {
//   return s.split(' ').map(el => {
//     if (el === '') return el;
//     return el[0].toUpperCase() + el.slice(1).toLowerCase();
//   }).join(' ');
// }