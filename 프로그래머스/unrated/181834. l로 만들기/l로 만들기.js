function solution(myString) {
    return myString.split('').map((str) => str < 'l' ? 'l' : str).join('');
}