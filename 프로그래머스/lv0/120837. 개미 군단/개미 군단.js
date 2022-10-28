function solution(hp) {
    // 개미장군 공격력 - 5
    // 병정 개미 공격력 - 3
    // 일개미 공격력 - 1
    // 체력 23의 여치 사냥 - 일개미 23마리 / 장군개미 4 + 병정개미 1
    let answer = 0;
    
    if(hp>=5){
        answer += Math.floor(hp/5);
        hp = hp % 5;
    }
    if(hp>=3){
        answer += Math.floor(hp/3);
        hp = hp % 3;
    }
    if(hp>=1){
        answer += hp/1;
    }
    return answer;  
}