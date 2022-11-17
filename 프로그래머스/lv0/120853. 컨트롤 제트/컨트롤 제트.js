function solution(s) {
    let arr = s.split(" ")
    while(arr.includes('Z')) {
        arr.splice(arr.indexOf('Z')-1,2)
    }
    return arr.reduce((a,b) => a+Number(b), 0)
}