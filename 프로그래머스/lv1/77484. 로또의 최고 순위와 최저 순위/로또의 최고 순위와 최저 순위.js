function solution(lottos, win_nums) {
    let myNum = lottos.filter((el) => el !== 0 && win_nums.includes(el)).length;
    let zeroNum = lottos.filter((el) => el === 0).length;

    function rankingFuc(num){
        switch(num){
            case 6 : {
                return 1
            }
            case 5 : {
                return 2
            }
            case 4 : {
                return 3
            }
            case 3 : {
                return 4
            }
            case 2 : {
                return 5
            }
            default:{
                return 6
            }
        }
    }

    let maxLottoCount = rankingFuc(myNum + zeroNum);
    let minLottoCount = rankingFuc(myNum);
    
    return [maxLottoCount, minLottoCount]
}