function solution(a, b) {
    let daysArr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let monthsArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = b+4;
    for(let i=0; i<a-1; i++){
        days += monthsArr[i];
    }
    return daysArr[(days % 7)];
}