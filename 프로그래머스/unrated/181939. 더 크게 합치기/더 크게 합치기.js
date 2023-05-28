function solution(a, b) {
    let aAndB = String(a) + String(b);
    let bAndA = String(b) + String(a);
    
    return Number(aAndB) > Number(bAndA) ? Number(aAndB) : Number(bAndA);
}