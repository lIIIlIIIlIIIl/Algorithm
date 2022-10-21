function solution(array) {
    // 배열을 오름차순으로 바꾸기
    let newArray = array.sort((a,b)=> a-b);
    // 배열의 중앙 값 반환하기
    return newArray[Math.floor(newArray.length/2)]
}