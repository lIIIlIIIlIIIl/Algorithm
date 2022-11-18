function solution(my_string) {
    let my_arr = my_string.split('');
    return my_arr.filter((el, index) => my_arr.indexOf(el) === index).join("");
}