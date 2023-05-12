function solution(seoul){
    let placeNum;
    
    seoul.map((name, idx) => {
        if(name === 'Kim'){
            return placeNum = idx;
        }
    })
    
    return `김서방은 ${placeNum}에 있다`
}









































// function solution(seoul) {
    
//     let position = seoul.indexOf("Kim");
    
//     let answer = `김서방은 ${position}에 있다`
    
//     return answer;
// }