function solution(n_str) {
    const n_str_Array = [...n_str];
    
    for(let i=0; i<n_str.length; i++){
        if(n_str_Array[i] !== '0'){
            if(i === 0){
                return n_str;
            }else{
                return n_str_Array.slice(i).join('');
            }
        }
    }
}