function solution(my_string, target) {
    return my_string.split(target).join('').length === my_string.length ? 0 : 1;
}