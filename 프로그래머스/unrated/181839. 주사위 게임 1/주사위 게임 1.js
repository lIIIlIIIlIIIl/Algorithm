function solution(a, b) {
    const resultA = a % 2 === 1;
    const resultB = b % 2 === 1;
    
    if(resultA && resultB) return a**2 + b**2;
    if(resultA || resultB) return 2 * (a + b);
    if(!resultA && !resultB) return Math.abs(a - b);
}