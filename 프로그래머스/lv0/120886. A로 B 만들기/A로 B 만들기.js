function solution(before, after) {
    let beforeArr = before.split('');
    let afterArr = after.split('');
    
    beforeArr.map((el) => {
        let elIndex =  afterArr.indexOf(el);        
        if(elIndex !== -1){
            afterArr.splice(elIndex, 1);
        }
    })
    
   return afterArr.length === 0 ? 1 : 0;
}