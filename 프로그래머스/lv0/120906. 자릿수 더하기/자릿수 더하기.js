function solution(n) {
    return n.toString().split('').reduce((acc, cur) => {
        return acc+parseInt(cur)
    }, 0);
}