function solution(q, r, code) {
        return code.split('').map((str, index) => {
            if(index % q === r){
               return str 
            }
        }).join('');
}