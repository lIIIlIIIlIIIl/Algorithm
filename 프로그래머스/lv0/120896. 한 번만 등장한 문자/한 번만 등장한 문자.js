function solution(s) {
    let countStr = {};
    [...s].map((str) => {
        if(countStr[str]){
            countStr[str] += 1;
        };
        if(!countStr[str]){
            countStr[str] = 1;
        }
    });
    return Object.keys(countStr).filter((str)=> countStr[str] === 1).sort((a,b)=>(a < b ? -1 : a > b ? 1 : 0) ).join('');
}