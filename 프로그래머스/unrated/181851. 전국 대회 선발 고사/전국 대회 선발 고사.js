function solution(rank, attendance) {
    const [a, b, c] = rank.filter((_, index) => attendance[index]).sort((a,b) => a-b).map((num) => rank.indexOf(num))
    return (10000 * a) + (100 * b) + (c)
}