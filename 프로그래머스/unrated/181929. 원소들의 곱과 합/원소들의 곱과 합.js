function solution(num_list) {
    let sum = num_list.reduce((acc, cur) => acc += cur, 0);
    let multi = num_list.reduce((acc, cur) => acc *= cur, 1);
    
    return multi < sum**2 ? 1 : 0;
}