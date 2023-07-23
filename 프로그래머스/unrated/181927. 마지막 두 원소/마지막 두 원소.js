function solution(num_list) {
    const listLength = num_list.length;
    const last = num_list[listLength-1];
    const lastLeft = num_list[listLength-2];
    
    if(last > lastLeft){
        num_list.push(last-lastLeft);
    }else{
        num_list.push(last*2);
    }
    return num_list;
}