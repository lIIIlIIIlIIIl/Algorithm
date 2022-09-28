function solution(a, b) {
    let result = 0;
    
    // 둘이 같은 경우 둘 중 아무거나 반환
    if(a===b) return a;
    
    // a,b 크기를 비교
    let big;
    let small;
    
    if(a>b){
        big = a;
        small = b;
    }
    if(b>a){
        big = b;
        small = a;
    }
    
    // 반복문을 통해 작은 수가 하나씩 증가하면서 더하기
     
    while(small <= big){
        result += small;
        small++;
    }
    return result;
}