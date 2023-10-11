// function solution(a, b) {
//     let daysArr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
//     let monthsArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let days = b+4;
//     for(let i=0; i<a-1; i++){
//         days += monthsArr[i];
//     }
//     return daysArr[(days % 7)];
// }


function solution(a,b){
    let tempDate = new Date(2016, a-1, b);

    return tempDate.toString().slice(0,3).toUpperCase();
}