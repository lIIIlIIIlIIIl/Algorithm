function solution(my_string, is_suffix) {
    const suffix = [];
    
    for(let i=0; i<my_string.length; i++){
        const str = my_string.slice(i);
        suffix.push(str)
    }
    
    return suffix.includes(is_suffix) ? 1 : 0
}