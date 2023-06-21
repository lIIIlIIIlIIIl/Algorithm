function solution(my_string, overwrite_string, s) {
    const my_string_arr = [...my_string]
    my_string_arr.splice(s, overwrite_string.length, overwrite_string)
    return my_string_arr.join("")
}