function solution(my_string) {
    let collection=['a', 'e', 'i', 'o', 'u'];
    let result = [];
    
    my_string.split('').map((el)=>{
        for(let i=0; i<collection.length; i++){
            if(el === collection[i]) return;
        }
        result.push(el);
    })
    return result.join('');
}