function solution(n, k) {
    // 양꼬치 1인분 : 12000 - n
    // 음료수 1개 : 2000 - k
    // 10인분 먹으면 음료수 하나 서비스
    let service = Math.floor(n / 10);
    return (n*12000) + (k-service)*2000;
}