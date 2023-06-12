function solution(arr, intervals) {
    let intervalA = arr.slice(intervals[0][0], intervals[0][1]+1);
    let intervalB = arr.slice(intervals[1][0], intervals[1][1]+1);
    return intervalA.concat(intervalB);
}