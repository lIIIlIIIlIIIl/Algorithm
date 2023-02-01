function solution(left, right) {
    let answer = 0;
    
    for(let i = left ; i <= right ; i++){
        
    const getDivisors = (num) => {
        const divisors = [];
        for(let i = 1 ; i <= Math.sqrt(num) ; i++){
         if(num % i === 0) {
              divisors.push(i);
              if(num / i != i) divisors.push(num / i);
         }
     }
        return divisors.length;
     }
        getDivisors(i) % 2 === 0 ? answer+=i : answer-=i
    }
  return answer;
}