function solution(slice, n) {
    // 피자 2-10조각까지 원하는 조각 수로 잘라줌
    // 조각 수 = slice || 먹는 사람 수 = n
    // n 명의 사람이 최소 한조각 이상 먹으려면 최소 몇 판의 피자를 시켜야 하는지 반환
    // 10명 7조각 -> 최소 2판
    // 12명 4조각 -> 최소 3판
    
    return (n % slice === 0) ? (n / slice) : parseInt(n / slice) + 1; 
}