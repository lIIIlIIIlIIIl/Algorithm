function solution(num, k) {
    let numArr = String(num).split('');
    let strK = String(k);
    return numArr.includes(strK) ? numArr.indexOf(strK)+1 : -1;
}