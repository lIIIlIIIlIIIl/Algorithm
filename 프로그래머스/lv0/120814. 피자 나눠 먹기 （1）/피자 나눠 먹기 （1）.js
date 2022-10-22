function solution(n) {
    // 피자 = 7조각 || 먹는 사람의 수 = n
    // 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수 반환
    // n = 1-7명 return 1
    // n = 8-14명 retrun 2
    // n = 15-21명 return 3
    
    return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
}