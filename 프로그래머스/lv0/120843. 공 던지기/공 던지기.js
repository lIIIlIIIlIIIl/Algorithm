function solution(numbers, k) {
    if(numbers.length % 2 === 0){
        let num = numbers.filter((el) => el % 2 === 1);
        if(k%num.length === 0) return num[num.length-1];
        return num[k%num.length-1];
    }
    if(numbers.length % 2 === 1){
        let odd = numbers.filter((el) => el % 2 === 1);
        let even = numbers.filter((el) => el % 2 === 0);
        let num = odd.concat(even);
        if(k%num.length === 0) return num[num.length-1];
        return num[k%num.length-1];
    }
}