// function solution(num_list, n) {
//     return num_list.filter((_, index) => index % n === 0);
// }


const solution = (num_list, n) => num_list.filter((_, i) => !(i % n))