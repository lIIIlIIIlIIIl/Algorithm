function solution(n, slicer, num_list) {
    let [a, b, c] = slicer;
    
    if(n === 1){
        return num_list.slice(0, b+1);
    }
    if(n === 2){
        return num_list.slice(a);
    }
    if(n === 3){
        return num_list.slice(a, b+1);
    }
    if(n === 4){
        let answer = [];
        let numList = num_list.slice(a, b+1);
        for(let i=0; i<numList.length; i+=c){
            answer.push(numList[i]);
        }
        return answer;
    }
    
}