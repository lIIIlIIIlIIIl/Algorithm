function solution(angle) {
    // 0-89 예각 : 1
    // 90 직각 : 2
    // 91-179 둔각 : 3
    // 180 평각 : 4
    
    if(angle > 0 && angle < 90) return 1;
    if(angle === 90) return 2
    if(angle > 90 && angle < 180) return 3;
    if(angle === 180) return 4;
}