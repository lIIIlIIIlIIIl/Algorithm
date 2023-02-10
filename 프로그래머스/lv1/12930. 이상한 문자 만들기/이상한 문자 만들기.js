function solution(s) {
    return s.split(' ').map((el) => {
        return el.split('').map((e,idx)=>{
            if(idx % 2 === 1){
                return e.toLowerCase();
            }
            if(idx % 2 === 0){
                return e.toUpperCase();
            }
        }).join('')
    }).join(' ')
}