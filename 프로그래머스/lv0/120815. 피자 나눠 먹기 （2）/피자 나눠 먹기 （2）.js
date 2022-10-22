function solution(n) {
    // 피자는 6조각 || 피자를 나눠 먹는 사람의 수 = n
    // n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다
    // 최소 몇판을 시켜야 하는지 반환
    // 6명 - 6조각 - 1판
    // 10명 - 30조각 - 5판
    // 4명 - 12조각 - 6판
    // n명 - n과 6의 최소공배수 - 최소공배수 / 6
    
    const findLcm = (num1, num2) => {
        const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
        const lcm = (a, b) => a * b / gcd(a, b);
        gcd(num1, num2);
        return lcm(num1, num2);
    };
   return  findLcm(n, 6) / 6;   
}