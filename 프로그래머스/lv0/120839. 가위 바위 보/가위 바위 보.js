function solution(rsp) {
    // 가위 : 2
    // 바위 : 0
    // 보 : 5
    // 가위 바위 보를  모두 이기는 경우를 순서대로 나타낸 문자열을 반환
    
    return rsp.split('').map((el) => {
        if(el === "2") return "0";
        if(el === "0") return "5";
        if(el === "5") return "2";
    }).join('')
}