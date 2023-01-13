function solution(number, limit, power) {
    let measureArr = [1];
    for(let i=2; i<=number; i++){
        let count = 0;
        for(let j=1; j<=i/2; j++){
            if(i%j === 0) count++;
        }
        measureArr.push(count+1);
    }
    return measureArr.map((el) => {
        return el > limit ? power : el;
    }).reduce((acc, cur) => acc + cur, 0);
}

