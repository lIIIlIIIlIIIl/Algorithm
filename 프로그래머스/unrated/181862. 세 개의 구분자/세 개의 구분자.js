function solution(myStr) {
    const result = myStr.split(/[a|b|c]/g).filter(str => str)
    return result.length ? result : ["EMPTY"]
}