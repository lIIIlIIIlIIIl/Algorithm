function solution(arr, delete_list) {
    return arr.filter((num) => delete_list.indexOf(num) === -1)
}