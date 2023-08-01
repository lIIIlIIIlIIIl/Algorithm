function solution(arr, idx) {
    const result = arr.slice(idx).indexOf(1);
    return result < 0 ? result : result+idx;
}