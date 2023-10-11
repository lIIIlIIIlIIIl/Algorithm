// function solution(s) {
//     let evenOrOdd = s.length % 2 === 0 ? 'even' : 'odd';

//     if(evenOrOdd === 'odd') return s[parseInt(s.length / 2)];
//     if(evenOrOdd === 'even') return s[parseInt(s.length / 2) - 1] + s[parseInt(s.length / 2)];
// }


// function solution(s) {
//     let strLength = s.length;
    
//     if(strLength % 2 === 0){
//         return s[(strLength/2)-1]+s[strLength/2];
//     }
//     return s[Math.floor(strLength/2)];
// }

function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}