function solution(people, limit) {
    people.sort((a,b) => b-a);

    let answer = 0;
    let high = 0;
    let low = people.length-1;

    while(high < low){
        if(people[high]+people[low] > limit){
            high++;
        }else{
            high++;
            low--;
        }
        answer++;
    }

    if(high === low) answer++;

    return answer;
}