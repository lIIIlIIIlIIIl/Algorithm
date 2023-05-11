function solution(people, limit){
    const sortPeople = people.sort((a, b) => b-a);
    let count = 0;
    let start = 0;
    let end = sortPeople.length - 1;

    while(start < end){
        if(sortPeople[start] + sortPeople[end] > limit){
            start += 1;
        }else{
            start += 1;
            end -= 1;
        }
        count += 1
    }

    if(start === end) count += 1;

    return count;
}









































// function solution(people, limit) {
//     people.sort((a,b) => b-a);

//     let answer = 0;
//     let high = 0;
//     let low = people.length-1;

//     while(high < low){
//         if(people[high]+people[low] > limit){
//             high++;
//         }else{
//             high++;
//             low--;
//         }
//         answer++;
//     }

//     if(high === low) answer++;

//     return answer;
// }