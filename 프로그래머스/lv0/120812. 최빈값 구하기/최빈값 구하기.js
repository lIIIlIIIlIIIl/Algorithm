function solution(array) {
    // 배열을 순환하면서 각각의 개수가 몇개인지 확인
    // 정수 배열을 문자 배열로 변경

    const numbers = array.reduce((pv, cv) => {
        pv[cv] = (pv[cv] || 0) + 1;
        return pv;
    }, {});
    
    let bigCount = 0;
    
    for(let num in numbers){
        if(numbers[num] > bigCount){
            bigCount = numbers[num]
        }
    }
    let result = [];
    for(let num in numbers){
        if(numbers[num] === bigCount){
            result.push(num)
        }
    }
    
    return result.length === 1 ? Number(result[0]) : -1;
}
