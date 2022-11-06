function solution(numbers, direction) {
    if(direction === 'right'){
        return (numbers.slice(-1)).concat(numbers.slice(0, -1));
    }
    if(direction === 'left'){
        return numbers.slice(1).concat(numbers.slice(0,1));
    }
}