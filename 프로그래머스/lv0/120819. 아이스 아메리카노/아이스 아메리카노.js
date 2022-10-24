function solution(money) {
    // 아아 = 5500
    // money = 머슥이가 가지고 있는 돈
    // 머슥이가 최대로 마실 수 있는 아메리카노의 잔 수와 남은 돈을 배열로 반환
    // 최대로 마실 수  있는 아메리카노의 잔 수 -> money / 5500
    // 남은 돈 -> money - (5500 * (money/5500))
    
    let answer = [];
    answer[0] = Math.floor(money / 5500);
    answer[1] = money % 5500;
    return answer;
}