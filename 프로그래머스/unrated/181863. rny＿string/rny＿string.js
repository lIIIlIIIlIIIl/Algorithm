function solution(rny_string) {
    return rny_string.split('').map((str) => {
        if(str === 'm') return 'rn'
        return str;
    }).join('');
}