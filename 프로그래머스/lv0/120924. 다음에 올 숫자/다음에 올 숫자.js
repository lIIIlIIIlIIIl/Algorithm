function solution(common) {
    if(common[2]-common[1] === common[1] - common[0]){
        let differNum = common[1] - common[0];
        return common[common.length-1]+differNum;
    }
    if(parseInt(common[2]/common[1]) === common[1] / common[0]){
        let differNum = parseInt(common[1]/common[0]);
        return common[common.length-1]*differNum;
    }
}