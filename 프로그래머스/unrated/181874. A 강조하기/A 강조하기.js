function solution(myString) {
    return myString.toLowerCase().split('').map((str) => str === 'a' ? 'A' : str).join('');
}