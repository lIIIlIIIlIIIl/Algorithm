function solution(n,a,b)
{
    let answer = 0;

    while(n !== 1){
        let nextANum = Math.round(a/2);
        let nextBNum = Math.round(b/2);

        answer++;

        if(nextANum === nextBNum){
            break;
        } else{
            a = nextANum;
            b = nextBNum;
            n = n/2
        }
    }
    return answer;
}