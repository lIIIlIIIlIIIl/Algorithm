function solution(price) {
    // 10만원 이상 -> 5%
    // 30만원 이상 -> 10%
    // 50만원 이상 -> 20%
    // 구매한 옷의 가격이 주어질 때, 지불해야 하는 금액 반환
    
    if(price < 100000) return price;
    if(price < 300000) return parseInt(price * 0.95);
    if(price < 500000) return parseInt(price * 0.9);
    if(price >= 500000) return parseInt(price * 0.8);
}