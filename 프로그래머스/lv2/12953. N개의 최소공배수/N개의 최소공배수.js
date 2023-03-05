function solution(arr) {
    let answer = arr[0];

    function getLCM(num1, num2){
        let lcm = 1;
       
        while(true){
          if((lcm % num1 == 0) && (lcm % num2 == 0)){
                break;
            }
            lcm++;
        }
          return lcm
    }
    

    for(let i=1; i<arr.length; i++){
        answer = getLCM(answer, arr[i]);
        console.log(answer);
    }
    return answer;
}